<template>
    <div>
        <perevodPopup :perevodOpen='perevodOpen' @closePopup="perevodOpen=0" />
        <headLink :head='head' active=2 />
        <section class="main">
            <div class="cst-ct">
                <div class="balance_block">
                    <div class="b_grid">
                        <div class="ac balance">
                            <div class="head">Сіздің бонусыңызда:</div>
                            <div class="val">{{$auth.user.bonus}} B</div>
                        </div>
                        <div class="ac b_id">
                            <div class="b_ender">
                                <div class="head">ID номеріңіз:</div>
                                <div class="val">{{$auth.user.id}}</div>
                            </div>
                        </div>
                    </div>
                    <img class="coin" src="~assets/images/bonus_coin.png" alt="">
                </div>
                <div class="h2">
                    Бонусты қолдану түрі
                </div>
                <div class="wrap">
                    <div class="cst_btn_size">
                        <cstBtn @click.native="perevodOpen=1" imgToRight='refresh.svg' text='Балансқа аудару' square=1 />
                    </div>
                    <div class="cst_btn_size">
                        <cstBtn @click.native="perevodOpen=3" imgToRight='card.svg' text='Картаға шығару' square=1 />
                    </div>
                </div>

                <div class="consultant">
                    <div class="men">
                        <div class="avatar"></div>
                        <div class="body">
                            Сіздің жеке кеңесшіңіз:<br>
                            <b>Медет Анарбайұлы</b>
                        </div>
                    </div>
                    <div class="whatsap">
                        <p>Ватсапқа жазу: <b>8(771)-234-5599</b></p>
                        <div class="btn_size">
                            <greenBtn text='Ватсапқа жазу' img='whatsappWhite.svg' />
                        </div>
                    </div>
                </div>

                <div class="warning">
                    <div class="h">
                        Назар аударыңыз!
                    </div>
                    <p>
                        Сайт қызметтерін қолданғаныңыз үшін барлық қызметтерден 10% бонус беріледі. 1В=1тг
                    </p>
                    <ul class="body">
                        <li>
                            <b>
                                Бонусты қалай алуға болады?
                            </b>
                            <p>Сайттағы кез-келген қызметке төлем жасаған соң автоматты түрде сізге бонус беріледі.</p>
                        </li>
                        <li>
                            <b>Бонусты қалай қолдануға болады?</b>
                            <p>Бонусты қолданудың екі түрі бар.</p>
                            <ol>
                                <li>
                                    Бонусты балансқа айналдыру арқылы сайттағы қызметтерге қолдана аласыз. Бонус автоматты түрде балансыңызға бірден аударылады.
                                </li>
                                <li>
                                    Бонусты банк картасына шығару. Сіз өтініш қалдырған күннен бастан 1-3 күн аралығында сіздің картаңызға аударылады. (ескерту: демалыс күндері аударылмайды)
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div class="history">
                    <h3>Бонус тарихы</h3>
                    <div class="overflow">
                        <div class="cst_table">
                            <div class="head">Уақыты</div>
                            <div class="head">Сипаттама</div>
                            <div class="head">Сумма</div>

                            <template v-if="!loading" v-for="bonus in bonuses">
                                <div class="time">{{bonus.date}}</div>
                                <div class="description">{{bonus.type}}</div>
                                <div class="sum" :class="{green: !bonus.minus}">{{bonus.minus ? '-' : '+'}} {{bonus.sum}} B</div>
                            </template>

                        </div>
                        <div v-if="loading" class="text-center mt-3">
                            <b-spinner variant="primary" label="Text Centered"></b-spinner>
                        </div>
                    </div>
                    <div v-if="bonuses.length" class="more">
                        <glassBtn @click.native="showAll" text='Толық ашу' />
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script>
    import headLink from '@/components/header.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import greenBtn from '@/components/forms/greenBtn.vue'
    import perevodPopup from '@/components/popups/perevodPopup.vue'

    export default {
        components: {
            headLink,
            cstBtn,
            glassBtn,
            greenBtn,
            perevodPopup
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
                perevodOpen: 0,
                bonuses: [],
                loading: 1,
            }
        },
        methods: {
            getData() {
                this.loading = 1;
                this.$api.$get('/profile/perevod/history', {
                    params: {
                        perevod_type: 'bonus'
                    }
                }, {}).then((res) => {
                    this.bonuses = res.history;
                    this.loading = 0;
                })
            },
            showAll() {
                this.$api.$get('/profile/perevod/history', {
                    params: {
                        perevod_type: 'bonus',
                        get: 20,
                    }
                }, {}).then((res) => {
                    console.log(res)
                    this.$router.push({
                        name: "profile-bonus-history",
                        params: {
                            bonuses: res.history
                        }
                    });
                })
            }
        },
        mounted() {
            this.getData();
        }

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

            @media all and (max-width: 438px) {
                transform: translate(-19px, -24px);
            }

            @media all and (max-width: 372px) {
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

        @media all and (max-width: 500px) {
            font-size: 20px;
            line-height: 31px;
        }

    }

    .cst_btn_size {
        max-width: 320px;
        width: 100%;
        height: 50px;
        margin-top: 30px;

        @media all and (max-width: 767px) {
            margin-top: 20px;
            max-width: 100%;
        }

        @media all and (max-width: 500px) {
            max-width: 100%;
        }

        button {
            font-size: 14px;
            font-weight: 600;
        }
    }

    .wrap {
        display: flex;
        grid-gap: 20px;

        @media all and (max-width: 767px) {
            display: block;
        }

    }

    .history {
        margin-top: 90px;

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
    }

    .consultant {
        margin-top: 80px;
        padding: 30px 80px;
        background: 50% 50% / 100% 100% url('@/assets/images/bg_bonus.jpg');
        display: flex;
        justify-content: space-between;
        color: #ffffff;

        @media all and (max-width: 991px) {
            padding: 30px 48px;
        }

        @media all and (max-width: 883px) {
            flex-direction: column;
        }

        @media all and (max-width: 767px) {
            margin-top: 40px;
        }

        @media all and (max-width: 429px) {
            padding: 30px 30px;
        }


        .men {
            display: flex;
            align-items: center;
            grid-gap: 18px;

            .avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: 50% 50% /100% no-repeat url('@/assets/images/dake.png');
            }

            .body {
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;

                b {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 30px;
                    text-transform: uppercase;

                    @media all and (max-width: 1099px) {
                        font-size: 22px;
                        line-height: 26px;
                    }

                    @media all and (max-width: 452px) {
                        font-size: 20px;
                        line-height: 24px;
                    }

                    @media all and (max-width: 394px) {
                        font-size: 18px;
                        line-height: 22px;
                    }
                }
            }
        }

        .whatsap {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Gilroy;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;

            @media all and (max-width: 1099px) {
                font-size: 20px;
                line-height: 23px;
            }

            @media all and (max-width: 883px) {
                margin-top: 20px;
            }

            @media all and (max-width: 438px) {
                font-size: 18px;
                line-height: 19px;
            }

            b {
                font-weight: 700;
            }

            .btn_size {
                width: 100%;
                max-width: 225px;

            }
        }
    }

    .warning {
        margin-top: 40px;
        color: #808080;
        font-size: 18px;
        line-height: 21px;

        @media all and (max-width: 767px) {
            font-size: 16px;
            line-height: 20px;
        }

        @media all and (max-width: 500px) {
            font-size: 14px;
            line-height: 19px;
        }

        .h {
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            color: #000000;

            @media all and (max-width: 767px) {
                font-size: 22px;
                line-height: 26px;
            }

            @media all and (max-width: 500px) {
                font-size: 20px;
                line-height: 23px;
            }

        }

        p {
            margin-top: 20px;
        }

        .body {
            margin-top: 30px;

            p {
                margin-top: 10px;
            }
        }
    }

</style>
