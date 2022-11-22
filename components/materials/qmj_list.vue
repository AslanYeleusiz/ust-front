<template>
    <div>
        <div v-show="loading" class="text-center mt-3">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <div class="list">
            <template v-if="!loading" v-for="(material, index) in materials">
                <qmjBlock @click.native="gotoQmg(index)" :material="material" />
            </template>
        </div>
    </div>
</template>


<script>
    import qmjBlock from '@/components/materials/forms/qmjBlock.vue'

    export default {
        components: {
            qmjBlock
        },
        props: ['loading', 'materials'],
        methods: {
            gotoQmg(e) {
                if(this.$loginOrRoute()){
                    var slug = this.materials[e].lat_title + '-' + this.materials[e].id + '.html'
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
                }
            }
        }
    }

</script>


<style scoped lang="scss">
    .list {
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    @media all and (max-width: 1099px) {
        .list {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media all and (max-width: 500px) {
        .list {
            grid-template-columns: 1fr;
        }
    }

</style>
