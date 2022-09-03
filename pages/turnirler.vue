<template>
    <div>
        <headerLink :head='head' active=0 />
        <div class="main">
            <div class="head">
                <div class="cst-ct">
                    <h2>Сәуір айының<br>блиц-турнирі</h2>
                    <div class="timer">
                        <div class="time">
                            <div class="value">{{cT.days}}</div>
                            <div class="types">Күн</div>
                        </div>
                        <div class="time">
                            <div class="value">{{cT.hours}}</div>
                            <div class="types">Сағат</div>
                        </div>
                        <div class="time">
                            <div class="value">{{cT.minuts}}</div>
                            <div class="types">Минут</div>
                        </div>
                        <div class="time">
                            <div class="value">{{cT.seconds}}</div>
                            <div class="types">Секунд</div>
                        </div>
                    </div>
                    <div class="pref">Турнирдің бітуіне қалды</div>
                </div>
            </div>
            <div class="body">
                <div class="cst-ct">
                    <div class="vkladki">
                        <button @click="setCategory(2)" class="btn vkladka" :class="{active:category==2}">Ұстаздар</button>
                        <button @click="setCategory(1)" class="btn vkladka" :class="{active:category==1}">Тәрбиешілер</button>
                        <button @click="setCategory(3)" class="btn vkladka" :class="{active:category==3}">Оқушылар</button>
                        <button @click="setCategory(4)" class="btn vkladka" :class="{active:category==4}">Студенттер</button>
                    </div>
                    <div class="block">
                        <div v-if="loading==1" class="d-flex mt-4 pb-4 justify-content-center">
                            <div class="spinner-border" role="status"></div>
                        </div>
                        <div v-else>
                            <template v-for="(turnir, index) in turnirs">
                                <a @click.prevent="startTurnir(index)" class="turnir">
                                    {{turnir.name}}
                                    <img src="~assets/images/arrow-right.svg" alt="">
                                </a>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import arrowLeft from '@/components/svg/arrow-left.vue'
    import headerLink from '@/components/header.vue'

    export default {
        head() {
            return {
                title: 'Блиц-турнир ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, дипломдар',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, олимпиадалар. Турнирге қатысу арқылы I, II, III дәрежелі дипломдар және сертификаттар мен марапаттаулар беріледі. Мұғалімдер біліктілігін арттырып онлайн тесттерді тапсыра алады.'
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'дипломдар, олимпиадалар, турнир, жарыстар,мұғалімдерге сертификаттар, ұстаздарға дипломдар, оқушыларға жарыстар, тәрбиешілерге жарыстар, блиц турнир, олимпиада сұрақтары, онлайн тест, мұғалімдерге жарыстар, олимпиадаға дайындық, I II III дәрежелі дипломдар, ұстаздарға марапаттаулар'
                }, ],
            }
        },
        components: {
            arrowLeft,
            headerLink
        },
        data() {
            return {
                cT: {
                    currentTime: 164795,
                    days: 0,
                    hours: 0,
                    minuts: 0,
                    seconds: 0,
                },
                head: [{
                    link: '/turnirler',
                    name: 'Турнирлер',
                }, {
                    link: '/menin-turnirlerim',
                    name: 'Менің турнирлерім',
                }],
                category: 2,
                turnirs: [],
                loading: 1,
            }
        },
        mounted() {
            this.startTimer()
            this.getData()

        },
        destroyed() {
            this.stopTimer()
        },
        methods: {
            getData() {
                this.loading = 1
                this.$api.get('/turnirs', {
                    params: {
                        category: this.category
                    }
                }).then((res) => {
                    this.turnirs = res.data.turnirs
                    this.loading = 0
                }).catch((err) => {
                    console.log(err);
                })
            },
            startTurnir(id) {
                let slug = this.turnirs[id].lat_name + '-' + this.turnirs[id].id
                this.$api.$get('/turnirs/' + slug).then((res) => {
                    this.$router.push({
                        name: 'turnir-slug',
                        params: {
                            slug: slug,
                            turnir: res.turnir,
                            turnir_users: res.turnir_users,
                            zhetekshi: res.zhetekshi,
                        }
                    });
                });
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.cT.currentTime--;
                    let s = this.cT.currentTime;
                    this.cT.days = Math.floor(s / 86400);
                    this.cT.hours = Math.floor((s % 86400) / 3600);
                    this.cT.minuts = Math.floor((s % 3600) / 60);
                    this.cT.seconds = Math.floor(s % 60);
                    if (s < 1) clearTimeout(this.timer);
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
            setCategory(e) {
                this.category = e
                this.getData()
            }
        }

    }

</script>

<style scoped lang="scss">
    .otstup {
        padding-bottom: 66px;

        @media all and (max-width: 767px) {
            padding-bottom: 132px;
        }
    }

    .main_header {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        background: #ffffff;

        .cst-ct {
            height: 100%;

            .d-flex {
                height: 100%;
            }
        }

        .free-cert {
            position: absolute;
            right: 66px;

            .free-cert-button {
                @media all and (max-width: 883px) {
                    display: none;
                }

            }
        }

        .NuxtLink-item {
            display: flex;
            align-items: center;
            color: #363636;
            height: 100%;
            margin-right: 40px;
            padding: 0;

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

    .main {
        .head {
            padding: 40px 0 30px;

            @media all and (max-width: 767px) {
                padding: 40px 0 45px;
            }

            background: #FFEAD8;

            h2 {
                font-family: Playfair Display;
                font-size: 48px;
                font-weight: 900;
                line-height: 51px;
                text-align: center;
                text-transform: uppercase;

                @media all and (max-width: 991px) {
                    font-size: 46px;
                    line-height: 50px;
                }

                @media all and (max-width: 883px) {
                    font-size: 44px;
                    line-height: 48px;
                }

                @media all and (max-width: 767px) {
                    font-size: 42px;
                    line-height: 46px;
                }

                @media all and (max-width: 767px) {
                    font-size: 42px;
                    line-height: 46px;
                }

                @media all and (max-width: 575px) {
                    font-size: 38px;
                    line-height: 45px;
                }

                @media all and (max-width: 472px) {
                    font-size: 34px;
                    line-height: 43px;
                }

                @media all and (max-width: 417px) {
                    font-size: 32px;
                    line-height: 42px;
                }




            }

            .timer {
                display: flex;
                justify-content: center;
                flex-direction: row;
                margin-top: 20px;

                .time {
                    position: relative;
                    width: 70px;
                    height: 70px;
                    background: #363636;
                    border-radius: 10px;
                    margin-right: 10px;

                    &:last-child {
                        margin: 0;
                    }

                    color: #FFFFFF;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: Raleway;
                    z-index: 3;

                    &::after {
                        content: '';
                        position: absolute;
                        display: block;
                        width: 60px;
                        height: 60px;
                        background: rgba(54, 54, 54, .5);
                        z-index: 2;
                        border-radius: 10px;
                        transform: translateY(10px);
                    }

                    .value {
                        font-size: 26px;
                        font-weight: 700;
                        line-height: 31px;
                        z-index: 4;
                    }

                    .types {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19px;
                        z-index: 4;
                    }
                }
            }

            .pref {
                font-size: 20px;
                font-weight: 500;
                line-height: 23px;
                color: #363636;
                margin-top: 20px;
                text-align: center;
            }

        }

        .body {
            padding: 50px 0 150px;
            overflow: hidden;

            .vkladki {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                z-index: 3;
                transform: translateY(1px);
                max-width: 100%;
                width: 100%;
                overflow-x: scroll;

                &::-webkit-scrollbar {
                    height: 0;
                }

                .vkladka {
                    width: 100%;
                    padding: 20px 20px 30px;
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                    color: #1E63E9;

                    @media all and (max-width: 1099px) {
                        font-size: 22px;
                        line-height: 26px;
                    }

                    @media all and (max-width: 991px) {
                        font-size: 20px;
                        line-height: 24px;
                    }

                    @media all and (max-width: 883px) {
                        font-size: 18px;
                        line-height: 22px;
                    }

                    &.active {
                        color: #363636;
                        background: #F8F8F8;
                        border: 1px solid #D6D6D6;
                        border-bottom: 1px solid #F8F8F8;
                    }
                }
            }

            .block {
                padding: 10px 30px;
                background: #F8F8F8;
                border: 1px solid #D6D6D6;
                z-index: 2;

                .turnir {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #D6D6D6;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 21px;
                    color: #363636;
                    cursor: pointer;

                    &:last-child {
                        border: none;
                    }

                    img {
                        margin-left: 15px;
                    }

                    &:hover {
                        color: #0045CB;
                    }
                }
            }
        }
    }

</style>
