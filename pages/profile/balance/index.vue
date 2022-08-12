<template>
    <div>
       <oplataPopup :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" />
        <headLink :head='head' active=1 />
        <section class="main">
            <div class="cst-ct">
                <div class="balance_block">
                    <div class="b_grid">
                        <div class="ac balance">
                            <div class="head">Сіздің балансыңызда:</div>
                            <div class="val">{{$auth.user.balance}} ₸</div>
                        </div>
                        <div class="ac b_id">
                            <div class="b_ender">
                                <div class="head">ID номеріңіз:</div>
                                <div class="val">{{$auth.user.id}}</div>
                            </div>
                        </div>
                    </div>
                    <img class="coin" src="~assets/images/coin.png" alt="">
                </div>
                <div class="h2">
                    Балансты толтыру
                </div>
                <div class="cst_btn_size">
                    <cstBtn @click.native="oplataPopup=1" text='Балансты толтыру' square=1 />
                </div>
                <div class="history">
                    <h3>Баланс тарихы</h3>
                    <div class="overflow">
                        <div class="cst_table">
                            <div class="head">Уақыты</div>
                            <div class="head">Сипаттама</div>
                            <div class="head">Сумма</div>
                            <div class="time">25.11.2020 / 13:18</div>
                            <div class="description">Банк картасы арқылы шығарылды</div>
                            <div class="sum default">- 25 000 тг</div>
                            <div class="time">25.11.2020 / 13:06</div>
                            <div class="description">Банк картасы арқылы толтырылды</div>
                            <div class="sum green">+ 25 000 тг</div>
                        </div>
                    </div>
                    <NuxtLink to='/profile/balance/history' class="more">
                        <glassBtn text='Толық ашу' />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>

</template>
<script>
    import headLink from '@/components/header.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'

    export default {
        components: {
            headLink,
            cstBtn,
            glassBtn,
            oplataPopup
        },
        data() {
            return {
                head: [{
                    link: '/profile',
                    name: 'Жеке кабинет',
                }, {
                    link: '/profile/balance',
                    name: 'Баланс',
                }, {
                    link: '/profile/bonus',
                    name: 'Бонус',
                }],
                oplataPopup: 0,
            }
        },

    }

</script>
<style scoped lang="scss">
    .main {
        padding-bottom: 150px;
    }

    .balance_block {
        position: relative;
        margin-top: 50px;
        padding: 20px 30px;
        background: #FFF7E7;
        border-radius: 10px;

        .b_grid {
            display: inline-grid;
            grid-template-columns: auto auto;
            grid-gap: 1px;
            background: #D6D6D6;

            @media all and (max-width: 767px) {
                grid-template-columns: 1fr;
                display: grid;
            }

            .ac {
                background: #FFF7E7;

                &:first-child {
                    padding-right: 50px;
                }

                &:last-child {
                    padding-left: 50px;
                }

                @media all and (max-width: 991px) {
                    &:first-child {
                        padding-right: 30px;
                    }

                    &:last-child {
                        padding-left: 30px;
                    }
                }

                @media all and (max-width: 883px) {
                    &:first-child {
                        padding-right: 15px;
                    }

                    &:last-child {
                        padding-left: 15px;
                    }
                }

                @media all and (max-width: 767px) {
                    &:first-child {
                        padding: 0 0 15px;

                    }

                    &:last-child {
                        padding: 15px 0 0;
                    }
                }


            }
        }

        .coin {
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(-40px, -15px);

            @media all and (max-width: 883px) {
                transform: translate(-10px, -15px);
            }

            @media all and (max-width: 767px) {
                transform: translate(-40px, -24px);
            }
            @media all and (max-width: 438px){
                transform: translate(-19px, -24px);
            }

            @media all and (max-width: 372px){
                transform: translate(-12px, -24px);
            }

        }

        .head {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: #888888;

            @media all and (max-width: 767px) {
                font-size: 14px;
                line-height: 17px;
            }

        }

        .val {
            font-size: 24px;
            font-weight: 600;
            line-height: 28px;

            @media all and (max-width: 767px) {
                font-size: 22px;
                line-height: 26px;
            }

        }

        .balance {
            .val {
                color: #20A017;
            }
        }

        .b_id {
            .val {
                color: #363636;
            }
        }
    }

    .h2 {
        font-size: 36px;
        font-weight: 600;
        line-height: 42px;
        margin: 50px 0 0;
        padding: 0;

        @media all and (max-width: 1099px) {
            font-size: 32px;
            line-height: 39px;
        }

        @media all and (max-width: 991px) {
            font-size: 28px;
            line-height: 37px;
        }

        @media all and (max-width: 767px) {
            font-size: 24px;
            line-height: 34px;
        }
        @media all and (max-width: 500px){
            font-size: 20px;
            line-height: 31px;
        }

    }

    .cst_btn_size {
        max-width: 320px;
        width: 100%;
        height: 50px;
        margin-top: 30px;
        @media all and (max-width: 767px){
            margin-top: 20px;
        }

        @media all and (max-width: 500px) {
            max-width: 100%;
        }

        button {
            font-size: 14px;
            font-weight: 600;
        }
    }


    .history {
        margin-top: 90px;
        h3 {
            font-size: 20px;
            font-weight: 700;
            line-height: 23px;
        }
        .overflow{
            max-width: 100%;
            overflow: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
        }
        .cst_table {
            width: 100%;
            display: grid;
            grid-template-columns: auto 1fr auto;
            border: 1px solid #EFEFEF;
            @media all and (max-width: 500px){
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
    }

</style>
