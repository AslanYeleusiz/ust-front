<template>
    <div>
        <div class="d-flex j-b a-c">
            <div class="batlygy">
                Барлығы: {{materials_count}}
            </div>
            <btnGroup :category='filter' placeholder='Барлығы' type='2' />
        </div>
        <hr>
        <div class="loading" v-show="loading">
            <div class="spinner-border" role="status"></div>
        </div>
        <template v-for="material in materials">
            <div v-if="material.purchased">
                <block :material="material" />
            </div>
            <div v-else>
                <myBlock :material="material" @certificate="getCertificate(material.id)"/>
            </div>
        </template>
        <div class="paginate">
            <pagination :currentPage="currentPage" :lastPage="lastPage" @set-page="Pageload" />
        </div>
    </div>
</template>


<script>
    import btnGroup from '@/components/forms/btnGroup.vue'
    import myBlock from '@/components/materials/forms/myBlock.vue'
    import block from '@/components/materials/forms/block.vue'
    import pagination from '@/components/pagination.vue'

    export default {
        components: {
            myBlock,
            block,
            btnGroup
        },
        data() {
            return {
                filter: [{
                    name: 'Барлығы'
                }, {
                    name: 'Менің материалдарым'
                }, {
                    name: 'Ақылы материалдарым'
                }],
                loading: false,
                materials: [],
                materials_count: 0,
                COUNT: 0,
                currentPage: 1,
                lastPage: 1,
            }
        },
        methods: {
            async getData() {
                this.loading = true;
                await this.$api.$get('/menin-materialdarym',{
                    params: {
                        page: this.currentPage
                    }
                }).then(res => {
                    console.log('then: '+res);
                    let posts = res.data;
                    this.materials_count = posts.count_materials;
                    this.COUNT = posts.COUNT;
                    this.currentPage = posts.materials.current_page;
                    this.lastPage = posts.materials.last_page;
                    this.materials = posts.materials.data;
                }).catch(error => {
                    console.log('error: '+error);
                });
                this.loading = false;
            },
            getCertificate(id) {
                this.$axios.$get('/menin-materialdarym/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((response) => {
                    const blob = new Blob([response]);
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'certificate.jpg';
                    link.click();
                })
            },
            Pageload(e){
                this.currentPage = e;
                this.getData();
            }
        },
        mounted() {
            this.getData();
            this.$bus.$on('refreshMyMaterials', ()=>{
                this.getData()
            });
        }
    }

</script>


<style scoped lang="scss">
    .loading {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        padding-bottom: 70vh;
    }
    .paginate {
        margin-top: 50px;
    }
</style>
