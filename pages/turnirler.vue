<template>
    <div>
        <headerLink
            firstLink="/turnirler"
            firstLinkName="Турнирлер"
            secondLink="/menin-turnirlerim"
            secondLinkName="Менің турнирлерім"
        />
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
                        <button class="btn vkladka active">Ұстаздар</button>
                        <button class="btn vkladka">Тәрбиешілер</button>
                        <button class="btn vkladka">Оқушылар</button>
                        <button class="btn vkladka">Студенттер</button>
                    </div>
                    <div class="block">
                        <NuxtLink to="turnir/qazaq_tili_men_adebieti.html" class="turnir">
                            Қазақ тілі мен әдебиеті
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </NuxtLink>
                        <NuxtLink to="turnir/matematika.html" class="turnir">
                            Математика
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </NuxtLink>
                        <NuxtLink to="turnir/filosofia_negizderi.html" class="turnir">
                            Философия негіздері
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </NuxtLink>
                        <NuxtLink to="turnir/bastauyshta_oqytu_pedagogikasy_men_adisteri.html" class="turnir">
                            Бастауышта оқыту педагогикасы мен әдістемесі
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </NuxtLink>
                        <NuxtLink to="turnir/qazaq_tili_men_adebieti.html" class="turnir">
                            Қазақ тілі мен әдебиеті
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </NuxtLink>

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
        head(){
            return {
                title: 'Блиц-турнир ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, дипломдар',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Ұстаздарға, оқушыларға, тәрбиешілерге, студенттерге арналған турнирлер, жарыстар, олимпиадалар. Турнирге қатысу арқылы I, II, III дәрежелі дипломдар және сертификаттар мен марапаттаулар беріледі. Мұғалімдер біліктілігін арттырып онлайн тесттерді тапсыра алады.'
                },{
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'дипломдар, олимпиадалар, турнир, жарыстар,мұғалімдерге сертификаттар, ұстаздарға дипломдар, оқушыларға жарыстар, тәрбиешілерге жарыстар, блиц турнир, олимпиада сұрақтары, онлайн тест, мұғалімдерге жарыстар, олимпиадаға дайындық, I II III дәрежелі дипломдар, ұстаздарға марапаттаулар'
                },],
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
            }
        },
        mounted() {
            this.startTimer()
        },
        destroyed() {
            this.stopTimer()
        },
        methods: {
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
            @media all and (max-width: 767px){
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
                @media all and (max-width: 991px){
                    font-size: 46px;
                    line-height: 50px;
                }
                @media all and (max-width: 883px){
                    font-size: 44px;
                    line-height: 48px;
                }
                @media all and (max-width: 767px){
                    font-size: 42px;
                    line-height: 46px;
                }
                @media all and (max-width: 767px){
                    font-size: 42px;
                    line-height: 46px;
                }
                @media all and (max-width: 575px){
                    font-size: 38px;
                    line-height: 45px;
                }
                @media all and (max-width: 472px){
                    font-size: 34px;
                    line-height: 43px;
                }
                @media all and (max-width: 417px){
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
                &::-webkit-scrollbar{
                    height: 0;
                }
                .vkladka {
                    width: 100%;
                    padding: 20px 20px 30px;
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                    color: #1E63E9;
                    @media all and (max-width: 1099px){
                        font-size: 22px;
                        line-height: 26px;
                    }
                    @media all and (max-width: 991px){
                        font-size: 20px;
                        line-height: 24px;
                    }
                    @media all and (max-width: 883px){
                        font-size: 18px;
                        line-height: 22px;
                    }
                    &.active{
                        color: #363636;
                        background: #F8F8F8;
                        border: 1px solid #D6D6D6;
                        border-bottom: none;
                    }
                }
            }
            .block{
                padding: 10px 30px;
                background: #F8F8F8;
                border: 1px solid #D6D6D6;
                z-index: 2;
                .turnir{
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
                    &:last-child{
                        border: none;
                    }
                    img{
                        margin-left: 15px;
                    }
                    &:hover{
                        color: #0045CB;
                    }
                }
            }
        }
    }

</style>
