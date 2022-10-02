<template>
    <div>
        <div class="d-flex j-b a-c">
            <div class="batlygy">
                Барлығы: {{count}}
            </div>
            <div></div>
        </div>
        <hr>
        <not_found v-if="loading == 2" text="ҚМЖ тізімі бос." desc="Басқа ҚМЖ-ларды көру үшін 'Материалдар' бөліміне өтіңіз" btnText="Материалдарға өту" link="/material" />
        <div v-show="loading == 1">
            <div v-show="loading" class="text-center mt-3 pb-5">
                <b-spinner variant="primary" label="Text Centered"></b-spinner>
            </div>
        </div>
        <div v-show="loading == 0" class="zhinaktar">
            <template v-for="(material,index) in materials">
                <qmjBlock @click.native="gotoQmg(index)" :material="material.bolim" />
            </template>
        </div>
    </div>
</template>


<script>
    import not_found from '@/components/landing/not_found.vue'
    import zhinakBlock from '@/components/materials/forms/zhinakBlock.vue'
    import qmjBlock from '@/components/materials/forms/qmjBlock.vue'

    export default {
        components: {
            zhinakBlock,
            qmjBlock,
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
                materials: [],
                loading: 1,
                count: 0,
            }
        },
        mounted() {
            this.$api.$get('/word/qmg/my_qmg').then((res) => {
                console.log(res)
                this.materials = res.data.qmgs.data
                if (res.data.qmgs.total == 0) this.loading = 2
                else this.loading = 0
            })
        },
        methods: {
            gotoQmg(e) {
                var slug = this.materials[e].bolim.lat_title + '-' + this.materials[e].bolim.id + '.html'
                this.$axios.$get('/word/qmg/' + slug).then((res) => {
                    console.log(res.data)
                    this.$router.push({
                        name: 'qmg-slug',
                        params: {
                            slug: slug,
                            bolim: res.data.bolim,
                            qmg: res.data.qmg,
                            qmgOrders: res.data.qmgOrder
                        }
                    })
                })
            },
        }
    }

</script>


<style scoped lang="scss">
    .zhinaktar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        @media all and (max-width: 883px) {
            grid-template-columns: 1fr 1fr;
        }

        @media all and (max-width: 500px) {
            grid-template-columns: 1fr;
        }

    }

</style>
