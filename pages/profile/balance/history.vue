<template>
    <div>
        <kroshki :header='kroshki' />
        <div class="cst-ct">
            <div class="history">
                <h3>Баланс тарихы</h3>
                <div class="overflow">
                    <div class="cst_table">
                        <div class="head">Уақыты</div>
                        <div class="head">Сипаттама</div>
                        <div class="head">Сумма</div>
                        <template v-if="!loading" v-for="balance in balances.data">
                            <div class="time">{{balance.date}}</div>
                            <div class="description">{{balance.perevod_text}}</div>
                            <div class="sum" :class="{green:balance.plusOrMinus}">{{balance.plusOrMinus ? '+' : '-'}} {{balance.value}} тг</div>
                        </template>
                    </div>
                </div>
                <div v-if="loading" class="text-center mt-3">
                    <b-spinner variant="primary" label="Text Centered"></b-spinner>
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
                    name: 'Баланс',
                    link: '/profile/balance'
                }, {
                    name: 'Баланс тарихы'
                }],
                balances: [],
                currentPage: 1,
                loading: 1,
            }
        },
        methods: {
            getData() {
                this.$api.$get('/profile/perevod/history', {
                    params: {
                        perevod_type: 'balance',
                        get: 20,
                        page: this.currentPage
                    }
                }).then((res) => {
                    this.balances = res.history
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
            if (!this.$route.params.balances) {
                this.getData()
            } else {
                this.balances = this.$route.params.balances
                this.loading = 0
            }
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
