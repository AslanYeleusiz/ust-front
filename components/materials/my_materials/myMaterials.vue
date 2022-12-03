<template>
    <div>
        <div class="d-flex j-b a-c">
            <div class="batlygy">
                Барлығы: {{materials_count}}
            </div>
            <btnGroup :category='filter' placeholder='Барлығы' type='2' />
        </div>
        <hr>
        <not_found v-if="loading == 2" text="Материалдар тізімі бос." desc="Материал жариялау үшін 'Метериалды жариялау' бастырмасын басыныз" btnText="Метериалды жариялау" link="/zharialau" />
        <div v-show="loading == 1" class="text-center mt-3">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <template v-for="(material, index) in materials">
            <div v-if="!material.purchase">
                <myBlock :material="material"
                    @certificate="getCertificate(material.id)"
                    @getAlgys="getAlgys(index)"
                    @thankLetter="getKurmet(index)"
                     />
            </div>
            <div v-else>
                <block :material="material" />
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
    import not_found from '@/components/landing/not_found.vue'

    export default {
        components: {
            myBlock,
            block,
            btnGroup,
            not_found
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
                oplataSell: 400,
                COUNT: 0,
                currentPage: 1,
                lastPage: 1,
            }
        },
        methods: {
            async getData() {
                this.loading = true;
                await this.$api.$get('/menin-materialdarym', {
                    params: {
                        page: this.currentPage
                    }
                }).then(res => {
                    console.log(res);
                    let posts = res.data;
                    this.materials_count = posts.count_materials;
                    this.COUNT = posts.COUNT;
                    this.currentPage = posts.materials.current_page;
                    this.lastPage = posts.materials.last_page;
                    this.materials = posts.materials.data;
                    if (posts.materials.data.length == 0) this.loading = 2;
                    else this.loading = false;
                }).catch(error => {
                    console.log('error: ' + error);
                });

            },
            getCertificate(id) {
                this.$axios.get('/word/' + id + '/certificate', {
                    responseType: 'blob'
                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.jpeg');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            getAlgys(index) {
                if(this.materials[index].algys){
                    this.$api.get('/word/' + this.materials[index].id + '/getAlgys', {
                        responseType: 'blob'
                    }).then((response) => {
                        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                        var fileLink = document.createElement('a');
                        fileLink.href = fileURL;
                        var d = new Date();
                        fileLink.setAttribute('download', d.toLocaleString() + '.jpeg');
                        document.body.appendChild(fileLink);
                        fileLink.click();
                    })
                }else this.buyForAlgys(index)
            },
            buyForAlgys(index){
                this.$emit('setOplataPopup', 6);
                this.$api.get('/word/' + this.materials[index].id + '/buyAlgys').then((res) => {
                    this.materials[index].algys = res.data.ser_id
                    this.$emit('setOplataPopup', 7);
                    const userToUpdate = {
                        ...this.$auth.user
                    }
                    userToUpdate.balance = res.data.balance
                    this.$auth.setUser(userToUpdate)
                }).catch((err) =>{
                    if(err.response.data.errors.balance) this.$emit('setOplataPopup', 5);
                })
            },
            getKurmet(index) {
                if(this.materials[index].kurmet){
                    this.$api.get('/word/' + this.materials[index].id + '/getKurmet', {
                        responseType: 'blob'
                    }).then((response) => {
                        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                        var fileLink = document.createElement('a');
                        fileLink.href = fileURL;
                        var d = new Date();
                        fileLink.setAttribute('download', d.toLocaleString() + '.jpeg');
                        document.body.appendChild(fileLink);
                        fileLink.click();
                    })
                }else this.buyForKurmet(index)
            },
            buyForKurmet(index){
                this.$emit('setOplataPopup', 6);
                this.$api.get('/word/' + this.materials[index].id + '/buyKurmet').then((res) => {
                    this.materials[index].kurmet = res.data.ser_id
                    this.$emit('setOplataPopup', 7);
                    const userToUpdate = {
                        ...this.$auth.user
                    }
                    userToUpdate.balance = res.data.balance
                    this.$auth.setUser(userToUpdate)
                }).catch((err) =>{
                    if(err.response.data.errors.balance) this.$emit('setOplataPopup', 5);
                })
            },


            Pageload(e) {
                this.currentPage = e;
                this.getData();
            },
        },
        mounted() {
            this.getData();
            this.$bus.$on('refreshMyMaterials', () => {
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
