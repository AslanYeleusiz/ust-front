<template>
    <div>
        <kroshki :header='kroshki' />
        <div class="cst-ct">
            <div class="history">
                <h3>Бонус тарихы</h3>
                <div class="overflow">
                    <div class="cst_table">
                        <div class="head">Уақыты</div>
                        <div class="head">Сипаттама</div>
                        <div class="head">Сумма</div>

                        <template v-for="n in 10">
                            <div class="time">25.11.2020 / 13:18</div>
                            <div class="description">Банк картасы арқылы шығарылды</div>
                            <div class="sum default">- 25 000 тг</div>
                            <div class="time">25.11.2020 / 13:06</div>
                            <div class="description">Банк картасы арқылы толтырылды</div>
                            <div class="sum green">+ 25 000 тг</div>
                        </template>


<!--
                        <template v-if="loading==0" v-for="bonus in bonuses.data">
                            <div class="time">{{bonus.date}}</div>
                            <div class="description">{{bonus.perevod_text}}</div>
                            <div class="sum" :class="{green:bonus.plusOrMinus}">{{bonus.plusOrMinus ? '+' : '-'}} {{bonus.value}} B</div>
                        </template>
-->
                    </div>
<!--
                    <template v-if="loading==1">
                        <div class="d-flex justify-content-center my-3">
                            <div class="spinner-border" role="status"></div>
                        </div>
                    </template>
-->
                </div>
                <div class="paginator">
                    <pagination :currentPage="bonuses.current_page" :lastPage="bonuses.last_page" @set-page="setPage" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import kroshki from '@/components/header_kroshki.vue'
    import pagination from '@/components/pagination.vue'

    export default {
        components: {
            kroshki,
            pagination
        },
        data() {
            return {
                kroshki: [{
                    name: 'Бонус',
                    link: '/profile/bonus'
                }, {
                    name: 'Бонус тарихы'
                }],
                bonuses: [],
                loading: 1,
                page: 1,
            }
        },
        methods: {
            getData() {
                this.$api.$get('/profile/bonus', {
                    params: {
                        perevod_type: 2,
                        get: 20,
                        page: this.page
                    }
                }).then((res) => {
                    this.bonuses = res.bonuses
                    this.loading = 0
                    console.log(res.bonuses)
                }).catch((err) => {
                    console.log(err);
                    this.loading = 0
                })
            },
            setPage(page) {
                this.page = page
                this.loading = 1
                this.getData()
            }
        },
        mounted() {
            if (this.$route.params.bonuses != null) {
                this.loading = 0
                this.bonuses = this.$route.params.bonuses
            } else this.getData();
        }
    }

</script>


<style scoped lang="scss">
    .history {
        margin-top: 30px;

        @media all and (max-width: 767px) {
            margin-top: 50px;
        }

        h3 {
            font-size: 20px;
            font-weight: 700;
            line-height: 23px;
        }

        .overflow {
            max-width: 100%;
            overflow: scroll;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .cst_table {
            width: 100%;
            display: grid;
            grid-template-columns: auto 1fr auto;
            border: 1px solid #EFEFEF;

            @media all and (max-width: 500px) {
                width: 680px;
            }

            div {
                padding: 10px 20px;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                color: #808080;
                border-bottom: 1px solid #EFEFEF;
            }

            .head {
                font-size: 16px;
                font-weight: 600;
                line-height: 19px;
                color: #000000;
                background: #EFEFEF;
            }

            .sum {
                font-size: 14px;
                font-weight: 600;
                line-height: 16px;
                color: #000000;
            }

            .green {
                color: #03B113;
            }
        }

        .more {
            width: 100%;
            height: 50px;
            margin-top: 20px;

            button {
                font-size: 14px;
                font-weight: 600;
            }
        }

        .paginator {
            margin-top: 20px;
            padding-bottom: 100px;
        }
    }

</style>
