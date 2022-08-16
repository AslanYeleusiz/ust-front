<template>
    <transition name="fadePopup">
        <div v-if='perevodOpen>0' class="perevopPopup d-flex aj-c" @mousedown.self="$emit('closePopup')">
            <transition name="fade">
                <div v-if='perevodOpen>0&&perevodOpen<3' class="block">
                    <div class="exit">
                        <button class="btn exitBtn" @click="$emit('closePopup')">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body head">
                        <div class="h">Бонусты балансқа аудару</div>
                        <div v-if="perevodOpen==1">
                            <div class="translate">
                                <div class="bonus">
                                    <img src="~assets/images/ustbonus.png" alt="">
                                    <div class="val">
                                        Бонус: <span class="green">{{$auth.user.bonus}} B</span>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="val">
                                        <span>1 бонус = 1 теңге</span>
                                    </div>
                                </div>
                            </div>
                            <div class="btn_size">
                                <cstBtn v-show="loading" square=1 loading=1 />
                                <cstBtn v-show="!loading" @click.native="translate" square=1 text='Растау' />
                            </div>

                            <div class="desc foot">Барлық бонустарыңыз бірден балансқа аударылады. Аударылған ақшаға сайттағы кез-келген қызметке төлем жасай аласыз. Ешқандай коммисия және пайыз ұсталынбайды</div>
                        </div>
                        <div v-if="perevodOpen==2">
                            <div class="green_success">Барлық бонустарыңыз балансқа сәтті аударылды.</div>
                            <div class="desc_success foot">
                                Аударылған ақшаға сайттағы кез-келген қызметке төлем жасай аласыз. Ешқандай коммисия және пайыз ұсталынбайды
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-if='perevodOpen>=3' class="block">
                    <div class="exit">
                        <button class="btn exitBtn" @click="$emit('closePopup')">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body head">
                        <div class="h">Бонусты картаға аудару</div>
                        <div v-if="perevodOpen==3">
                            <div class="translate">
                                <div class="bonus">
                                    <img src="~assets/images/ustbonus.png" alt="">
                                    <div class="val">
                                        Бонус: <span class="green">{{$auth.user.bonus}} B</span>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="val">
                                        <span>1 бонус = 1 теңге</span>
                                    </div>
                                </div>
                            </div>
                            <template v-if='$auth.user.bonus>=500'>
                                <div class="btn_size">
                                    <cstBtn v-show="loading" square=1 loading=1 />
                                    <cstBtn v-show="!loading" @click.native="translateToCard" square=1 text='Растау' />
                                </div>
                            </template>
                            <template v-else>
                                <div class="warning">Картаға шығару үшін кемінде 500 В болу керек</div>
                                <div class="btn_size">
                                    <cstBtn square=1 text='Растау' disabled=1 />
                                </div>
                            </template>
                            <div class="desc foot">Растау батырмасын басқан соң барлық бонустарыңыз сіздің картаңызға (Kaspi.kz, Halyk bank т.б.) 3 күнде аударылады. Егер демалыс күндері сұраныс жасалса аударылу уақыты ұзарылуы мүмкін.</div>
                        </div>
                    </div>

                    <div v-if="perevodOpen==4">
                        <div class="glav">
                            <div class="body">
                                <div class="green_success mini">Сіздің сұранысыңыз сәтті қабылданды. Сізге жақын арада жеке кеңесшіңіз хабарласып төлем жасау реквизиттерін сұрайды.</div>
                            </div>

                        </div>
                        <hr>
                        <div class="foot">
                            <div class="body">
                                <div class="p">Редакциямен байланыс</div>
                                <div class="phone">+7 (771) 234-55-99</div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>

</template>


<script>
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstBtn
        },
        props: ['perevodOpen'],
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            translate() {
                this.loading = true;
                setTimeout(() => {
                    this.perevodOpen = 2;
                    this.loading = false;
                }, 1500);
            },
            translateToCard() {
                this.loading = true;
                setTimeout(() => {
                    this.perevodOpen = 4;
                    this.loading = false;
                }, 1500);
            }
        }

    }

</script>


<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-15%);
        transition: 0.5s;
    }

    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .5s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.3s;
    }

    .perevopPopup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 20;

        .block {
            width: 100%;
            max-width: 600px;
            background: #ffffff;
            border-radius: 6px;

            .exit {
                display: flex;
                justify-content: flex-end;

                .exitBtn {
                    padding: 0;
                    transform: translate(-10px, 8px);
                }
            }

            .foot {
                padding-bottom: 40px;
            }

            .head {
                padding-top: 10px;
            }

            .body {
                padding: 0 30px;
                color: #000000;

                .warning {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    color: #FF0000;
                    margin-top: 10px;
                }

                .p {
                    font-size: 20px;
                    line-height: 24px;
                }

                .phone {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 25px;
                }

                .h {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 25px;
                }

                .translate {
                    display: inline-flex;
                    border: 1px solid #FF8B0D;
                    align-items: center;
                    margin-top: 20px;

                    .bonus {
                        display: flex;
                        align-items: center;
                        padding: 10px 30px 10px 15px;

                        img {
                            margin-right: 10px;
                        }
                    }

                    .val {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 22px;

                        .green {
                            font-weight: 600;
                            color: #20A017;
                        }
                    }

                    .info {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        background: #FFF7E7;
                        padding: 13px 15px 13px 15px;
                    }
                }

                .btn_size {
                    margin-top: 20px;
                    width: 224px;
                    height: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .desc {
                    margin-top: 15px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    color: #808080;
                }

                .green_success {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 25px;
                    color: #03B113;
                    margin-top: 20px;

                    &.mini {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 22px;
                    }
                }

                .desc_success {
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 22px;
                    color: #808080;
                    margin-top: 10px;
                }
            }
        }
    }

</style>
