<template>
    <div>
        <header_kroshki :header="header" pd=1 />
        <div class="main">
            <div class="cst-ct">
                <div class="welcome_block">
                    <div class="pre-head">{{title}}</div>
                    <div class="head">{{katysushy_fio}}, олимпиадаға қош келдіңіз!</div>
                    <div class="cst-size-btn">
                        <bigBtn v-if="loading" loading=1 />
                        <bigBtn v-else @click.native="testStart" :text="status == true ? 'Тестті бастау' : 'Тестті жалғастыру'" />
                    </div>
                    <div class="informer">
                        <img src="~assets/images/kubok2.png" alt="">
                        <div>
                            <div class="h">Олимпиада тестілеу форматында өтеді. Тест 20 сұрақтан тұрады.</div>
                            <div class="desc">Сұрақтардың дұрыс немесе қате екендігін, яғни олимпиада нәтижесін тестті аяқтағаннан кейін қарап тексеруге болады.</div>
                            <div class="warning">
                                <Lottie class="warn" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                                <div class="inBody">
                                    <div class="orange">Назар аударыңыз</div>
                                    Тесттен өтуге <span class="greentt">60 минут</span> беріледі
                                </div>
                            </div>
                            <div class="desc">Барлық тест сұрақтары оқу бағдарламасына сай жасалынған. Тест сұрағын зейінмен оқып, дұрыс жауапты таңдаңыз!</div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="h2">
                            Олимпиада марапаттары
                        </div>
                        <div class="wrap">
                            <div class="wrap_col">
                                <img class="cert" src="~assets/images/diploms.png" alt="">
                                <div class="wraper">
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">I Дәрежелі диплом</div>
                                            <div class="desc">20-19 дұрыс жауап</div>
                                        </div>
                                    </div>
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">II Дәрежелі диплом</div>
                                            <div class="desc">18-16 дұрыс жауап</div>
                                        </div>
                                    </div>
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">III Дәрежелі диплом</div>
                                            <div class="desc">15-13 дұрыс жауап</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wrap_col">
                                <img class="cert" src="~assets/images/algys.png" alt="">
                                <div class="wraper">
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">Сертификат</div>
                                            <div class="desc">Барлық қатысушыларға - сертификат</div>
                                        </div>
                                    </div>
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">Алғыс хат</div>
                                            <div class="desc">Әр 5 оқушы үшін жетекшіге - алғыс хат</div>
                                        </div>
                                    </div>
                                    <div class="list_block">
                                        <img src="~assets/images/TickSquare.svg" alt="">
                                        <div class="list_body">
                                            <div class="headt">Ата-анаға алғыс хат</div>
                                            <div class="desc">Оқушылардың ата-анасына алғыс хат</div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import * as animationData from "~/assets/lottie_files/info_2/animation_kqc42oh6.json"

    export default {
        components: {
            header_kroshki,
            bigBtn,
            Lottie
        },
        layout: 'second',
        data() {
            return {
                header: [
                    {
                        name: 'Олимпиадалар',
                        link: '/olimpiada'
                    },
                    {
                        name: 'Республикалық дүниетану пәнінен ұстаздар арасындағы олимпиада'
                    }
                ],
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
                title: '',
                katysushy_fio: '',
                loading: 0,
                status: true,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            testStart() {
                this.loading = 1
                if(this.status == true){
                    this.$api.$post('olimpiada/test/start', {
                        o_order_id: this.$route.params.katysushy.o_order_id,
                        suraktar: this.$route.params.suraktar,
                    }).then((res)=>{
                        this.loading = 0
                        console.log(res)
                        this.$router.push({
                            name: 'olimpiada-test',
                            params: {
                                suraktar: this.$route.params.suraktar,
                                katysushy: this.$route.params.katysushy,
                                timer: this.$route.params.timer
                            }
                        });
                    }).catch((err)=>{
                        this.loading = 0
                    })
                }else if(this.status == 'continue'){
                    this.loading = 0
                    this.$router.push({
                        name: 'olimpiada-test',
                        params: {
                            suraktar: this.$route.params.suraktar,
                            katysushy: this.$route.params.katysushy,
                            timer: this.$route.params.timer
                        }
                    });
                }


            }
        },
        mounted() {
            if (this.$route.params.katysushy == undefined)
                this.$router.push({
                    name: 'olimpiada-test-enter-code'
                })
            else {
                let katysushy = this.$route.params.katysushy
                console.log(this.$route.params.suraktar)
                this.title = katysushy.o_tury.o_tury
                this.katysushy_fio = katysushy.o_katysushy_fio
                this.header[1].name = katysushy.o_tury.o_tury
                this.status = this.$route.params.status
            }
        }

    }

</script>
<style scoped lang="scss">
    .main {
        background: #F9F9F9;
        padding: 40px 0 65px;

        .welcome_block {
            background: #FFFFFF;
            box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.05);
            border-radius: 30px;
            padding: 50px 50px 70px;

            .pre-head {
                font-size: 20px;
                font-weight: 400;
                line-height: 30px;
                text-align: center;
            }

            .head {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                text-align: center;
                margin-top: 10px;
            }

            .cst-size-btn {
                width: 280px;
                height: 50px;
                margin: 40px auto 0;
            }

            .informer {
                padding: 40px;
                background: #FFF7E7;
                border: 1px solid #FF8B0D;
                border-radius: 6px;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 40px;
                margin-top: 50px;

                .h {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 23px;
                    padding-bottom: 10px;
                }

                .desc {
                    color: #363636;
                    font-family: Raleway;
                    font-size: 16px;
                    line-height: 19px;
                }

                .warning {
                    background: #FFFFFF;
                    border: 1px solid #FF8B0D;
                    border-radius: 6px;
                    display: grid;
                    grid-template-columns: 70px 1fr;
                    align-items: center;
                    grid-gap: 20px;
                    margin: 20px 0;
                    padding: 20px 30px 20px 20px;

                    .greentt {
                        color: #03B113;
                        font-weight: 600;
                    }

                    .inBody {
                        font-size: 16px;
                        line-height: 19px;

                        .orange {
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 23px;
                            color: #FF8B0D;
                            margin-bottom: 5px;
                        }
                    }
                }
            }

            .block {
                margin-top: 130px;
            }

            .h2 {
                font-size: 40px;
                font-weight: 800;
                line-height: 47px;
                text-align: center;
                padding-top: 0;
            }

            .wrap_col {
                display: flex;
                flex-direction: column;
                align-items: center;

                img.cert {
                    width: 318px;
                }
            }

            .wrap {
                margin-top: 50px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 40px;

                .list_block {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 20px;
                    align-items: center;

                    .headt {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 25px;
                        color: #363636;
                    }

                    .desc {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19px;
                        color: #363636;
                        margin-top: 5px;
                    }
                }

                .wraper {
                    display: grid;
                    grid-template-columns: 1fr;
                    justify-content: center;
                    flex-direction: column;
                    grid-gap: 30px;
                    margin-top: 35px;
                }
            }
        }
    }

    @media all and (max-width: 1099px) {

        .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        .main .welcome_block .head {
            font-size: 30px;
            line-height: 37px;
        }

        .main .welcome_block .pre-head {
            font-size: 17px;
            line-height: 26px;
        }

        .main .welcome_block .informer {
            grid-gap: 30px;
        }

        .informer img {
            width: 166px;
        }

        .main .welcome_block .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        .main .welcome_block .wrap_col img.cert {
            width: 273px;
        }
    }

    @media all and (max-width: 991px) {
        .main .welcome_block .h2 {
            font-size: 32px;
            line-height: 39px;
        }

        .informer img {
            width: 116px;
        }

        .main .welcome_block .informer .h {
            font-size: 19px;
            line-height: 22px;
        }

        .main .welcome_block .informer .desc {
            font-size: 15px;
            line-height: 18px;
        }

        .main .welcome_block .informer .warning .inBody .orange {
            font-size: 18px;
            line-height: 21px;
        }

        .main .welcome_block .informer .warning .inBody {
            font-size: 15px;
            line-height: 18px;
        }

        .main .welcome_block .informer .warning {
            grid-template-columns: 50px 1fr;
        }

        .main .welcome_block .wrap_col img.cert {
            width: 216px;
        }



    }

    @media all and (max-width: 883px) {
        .main .welcome_block .h2 {
            font-size: 28px;
            line-height: 35px;
            margin: 0;
        }


        .main .welcome_block .informer {
            grid-template-columns: 1fr;
            justify-items: center;
            grid-gap: 20px;
        }

        .wrap {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            align-items: center;
        }

        .main .welcome_block {
            padding: 40px 35px 50px;
        }

        .main .welcome_block .wrap[data-v-279a75d1] {
            margin-top: 40px;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
            grid-template-areas: 'a''b';
        }


        .main .welcome_block .block {
            margin-top: 100px;
        }

        .wrap_col:first-child {
            margin-top: 50px;
        }

        .wrap_col {
            &:first-child {
                grid-area: b;
            }

            &:last-child {
                grid-area: a;
            }
        }

        .main .welcome_block .wrap_col img.cert {
            width: 80%;
        }

        .main .welcome_block .pre-head {
            font-size: 15px;
            line-height: 21px;
        }

        .main .welcome_block .head {
            font-size: 27px;
            line-height: 29px;
        }
    }

    @media all and (max-width: 767px) {
        .h2 {
            font-size: 27px;
            line-height: 33px;
        }



    }

    @media all and (max-width: 500px) {
        .main .welcome_block .head {
            font-size: 24px;
            line-height: 29px;
        }

        .main .welcome_block .pre-head {
            font-size: 14px;
            line-height: 20px;
        }

        .main .welcome_block .informer .h {
            font-size: 18px;
            line-height: 21px;
        }

        .main .welcome_block .informer .desc {
            font-size: 14px;
            line-height: 17px;
        }

        .main .welcome_block .informer .warning .inBody .orange {
            font-size: 16px;
            line-height: 19px;
        }

        .main .welcome_block .informer .warning .inBody {
            font-size: 14px;
            line-height: 17px;
        }

        .main .welcome_block .h2 {
            font-size: 24px;
            line-height: 31px;
            margin: 0;
        }

        .main .welcome_block .block {
            margin-top: 80px;
        }

        .main .welcome_block {
            padding: 40px 20px 50px;
        }
    }

    @media all and (max-width: 460px) {
        .main .welcome_block .informer {
            padding: 40px 20px;
        }
    }

</style>
