<template>
    <div>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex">
                        <NuxtLink to="/olimpiada" class="NuxtLink-item active">
                            Олимпиада
                        </NuxtLink>
                        <NuxtLink to="/menin-olimpiadalarym" class="NuxtLink-item">
                            Менің олимпиадаларым
                        </NuxtLink>
                    </div>
                    <div class="d-flex a-c free-cert">
                        <div class="free-cert-button">Тегін сертификат алу</div>
                        <img class="notification" src="~assets/images/notification.svg">
                    </div>
                </div>
            </div>
        </header>

        <section class="main">
            <div class="cst-ct">
                <div class="head">
                    <span class="orange">Мамыр</span> айының зияткерлік олимпиадасы
                </div>
                <div class="olimpiada">
                    <div class="olivers">
                        <div class="d-flex a-c">
                            <img src="~assets/images/diploma.svg" alt="">
                            <div class="span">
                                Портфолиоңызды толтыруға арналған <b>дипломдар мен сертификаттар</b> алып, санатыңызды көтеріңіз!
                            </div>
                        </div>
                        <div class="d-flex a-c">
                            <img src="~assets/images/watch.svg" alt="">
                            <div class="span">
                                Уақыты: <span>1-31 қыркүйек аралығында</span>
                            </div>
                        </div>
                        <div class="d-flex a-c">
                            <img src="~assets/images/portmane.svg" alt="">
                            <div class="span">
                                Оқушыңызды қатыстырып жетекші ретінде тегін <span>алғыс хат</span> алыңыз. Оқушы Ата-анасына да алғыс хат беріледі
                            </div>
                        </div>
                    </div>
                    <div class="diploms">
                        <img src="~assets/images/diploms.jpg" alt="">
                    </div>
                    <div class="chetchik">
                        <span>Мамыр айының олимпиадасының</span>
                        <div class="red">Бітуіне қалды</div>
                        <div class="timer">
                            <div class="timeBlock">
                                <div class="block d-flex aj-c"> {{cT.days}} </div>
                                <div class="time">күн</div>
                            </div>
                            <div class="timeBlock">
                                <div class="block d-flex aj-c"> {{cT.hours}} </div>
                                <div class="time">Сағат</div>
                            </div>
                            <div class="timeBlock">
                                <div class="block d-flex aj-c"> {{cT.minuts}} </div>
                                <div class="time">Минут</div>
                            </div>
                            <div class="timeBlock">
                                <div class="block d-flex aj-c"> {{cT.seconds}} </div>
                                <div class="time">Секунд</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex j-c">
                    <NuxtLink to="/respublikalyq">
                        <button class="btn btn-primary enter">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5984 7.45837L11.1651 12.8917C10.5234 13.5334 9.47344 13.5334 8.83177 12.8917L3.39844 7.45837" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="span">Олимпиадаға қатысу</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5984 7.45837L11.1651 12.8917C10.5234 13.5334 9.47344 13.5334 8.83177 12.8917L3.39844 7.45837" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="olimp_list">
           <div class="category-overflow">
               <div class="cst-ct">
                <div class="categories">
                    <button class="btn category-item" :class="{active: category==0}" @click="category=0">
                        Облыстық
                    </button>
                    <button class="btn category-item" :class="{active: category==1}" @click="category=1">
                        Республикалық
                    </button>
                    <button class="btn category-item" :class="{active: category==2}" @click="category=2">
                        Халықаралық
                    </button>
                </div>
            </div>
           </div>

            <div class="body">
                <div class="cat-overflow">
                    <div class="cst-ct">
                        <div class="cat-category">
                            <button class="btn cat-item" :class="{active: cat_category==0}" @click="cat_category=0">
                                Ұстаздарға
                            </button>
                            <button class="btn cat-item" :class="{active: cat_category==1}" @click="cat_category=1">
                                Тәрбиешілерге
                            </button>
                            <button class="btn cat-item" :class="{active: cat_category==2}" @click="cat_category=2">
                                Оқушыларға
                            </button>
                            <button class="btn cat-item" :class="{active: cat_category==3}" @click="cat_category=3">
                                Студенттерге
                            </button>
                        </div>
                    </div>
                </div>
                <div class="cst-ct">
                    <div class="list">
                        <button v-for="n in 10" class="btn block_btn">
                            <daryn color="#1E63E9" />
                            Жас дарын
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import daryn from '../components/svg/daryn.vue'

    export default {
        layout: 'default',
        components: {
            daryn
        },
        data() {
            return {
                category: 0,
                cat_category: 0,
                cT: {
                    currentTime: 164795,
                    days: 0,
                    hours: 0,
                    minuts: 0,
                    seconds: 0,
                },
                timer: null,
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
        },
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
            .free-cert-button{
                @media all and (max-width: 883px){
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

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

    .main {
        padding-bottom: 100px;
        a:hover{
            text-decoration: none;
        }
        .head {
            font-family: Raleway;
            font-size: 48px;
            font-style: italic;
            font-weight: 800;
            line-height: 58px;
            letter-spacing: 0em;
            text-align: center;
            margin: 40px 0 20px;

            @media all and (max-width: 1099px) {
                font-size: 42px;
                line-height: 52px;
                margin: 30px 0 20px;
            }

            @media all and (max-width: 991px) {
                margin-bottom: 33px;
                font-size: 38px;
                line-height: 44px;
            }
            @media all and (max-width: 883px){
                font-size: 34px;
                line-height: 40px;
            }
            @media all and (max-width: 767px){
                font-size: 30px;
                line-height: 36px;
            }

            @media all and (max-width: 575px){
                font-size: 26px;
                line-height: 32px;
            }
            @media all and (max-width: 460px){
                font-size: 22px;
                line-height: 28px;
            }
            @media all and (max-width: 424px){
                font-size: 20px;
                line-height: 26px;
            }

        }

        .orange {
            color: #FF8B0D;
        }

        .olivers {
            max-width: 280px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 30px;

            @media all and (max-width: 1099px) {}

            .span {
                margin-left: 15px;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                @media all and (max-width: 417px){
                    font-size: 12px;
                }

                b {
                    font-weight: 700;
                    text-transform: uppercase;
                }

                span {
                    font-weight: 700;
                }
            }
        }

        .diploms {
            position: relative;

            img {
                width: 324px;
                transform: translateX(-15px);

                @media all and (max-width: 1099px) {
                    width: 205px;
                }

                @media all and (max-width: 991px) {
                    transform: none;
                    margin: 40px 0;
                    width: 100%;
                }
            }
        }

        .olimpiada {
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media all and (max-width: 991px) {
                flex-direction: column;
            }

        }

        .chetchik {
            display: flex;
            flex-direction: column;
            font-size: 20px;
            line-height: 23px;
            color: #363636;
            text-align: center;
            min-width: 230px;

            .red {
                font-weight: 700;
                color: #F0551C;
                margin-top: 5px;
            }

            .timer {
                display: grid;
                margin-top: 20px;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 10px;

                .timeBlock {
                    font-family: Gilroy;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 14px;
                    text-transform: uppercase;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .block {
                        height: 40px;
                        background: #404040;
                        border-radius: 6px;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 25px;
                        color: #ffffff;

                        @media all and (max-width: 991px) {
                            height: 50px;
                        }
                    }

                    .time {
                        margin-top: 5px;
                        text-transform: uppercase;
                    }
                }
            }

        }

        .enter {
            margin-top: 40px;
            width: 380px;
            height: 70px;
            font-size: 20px;
            font-weight: 800;
            line-height: 23px;
            text-transform: uppercase;
            background: linear-gradient(95.59deg, #1C77FD 75.72%, #BDD8FF 83.81%, #1C77FD 91.57%);
            border-radius: 46px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media all and (max-width: 767px){
                width: 100%;
                height: 60px;
                font-size: 18px;
            }
            .span {
                margin: 0 10px;
            }
        }
    }

    .olimp_list {
        .category-overflow{
            @media all and (max-width: 767px){
                overflow-x: scroll;
                &::-webkit-scrollbar{
                    display: none;
                }
            }

        }
        .categories {
            display: flex;
            justify-content: center;
            @media all and (max-width: 767px){
                justify-content: flex-start;
            }

            .category-item {
                padding: 20px 35px 30px;
                font-size: 24px;
                font-weight: 600;
                color: #888888;
                border-radius: 6px 6px 0px 0px;
                @media all and (max-width: 767px){
                    padding: 15px 25px 30px;
                    font-size: 20px;
                }
                @media all and (max-width: 575px){
                    padding: 15px 20px 16px;
                    font-size: 17px;
                }

            }

            .category-item.active {
                background: #F8F8F8;
                border-left: 1px solid #D6D6D6;
                border-top: 1px solid #D6D6D6;
                border-right: 1px solid #D6D6D6;
                color: #363636;
            }
        }

        .body {
            background: #F8F8F8;
            padding-top: 30px;
            padding-bottom: 90px;
            .cat-overflow{
                @media all and (max-width: 767px){
                    overflow: scroll;
                    &::-webkit-scrollbar{
                        display: none;
                    }
                }

            }
            .cat-category {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 1px;
                background-color: #D6D6D6;
                background-image: linear-gradient(0deg, #D6D6D6 60%, #F9F9F9 40%);
                background-size: 40px 45px;
                border-bottom: 1px solid #D6D6D6;

                @media all and (max-width: 767px) {

                }

                .cat-item {
                    font-size: 18px;
                    font-weight: 600;
                    height: 60px;
                    color: #363636;
                    background: #F8F8F8;
                    @media all and (max-width: 767px){
                        font-size: 16px;
                    }
                    @media all and (max-width: 575px){
                        font-size: 14px;
                    }

                }

                .cat-item.active {
                    border-bottom: 3px solid #1E63E9;
                }
            }

            .list {
                margin-top: 50px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px 40px;

                @media all and (max-width: 767px) {
                    grid-template-columns: 1fr;
                }

                .block_btn {
                    background: #ffffff;
                    height: 56px;
                    width: 100%;
                    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                    padding-left: 20px;
                    transition: 0.1s;

                    &:hover {
                        background: #1E63E9;
                        color: #ffffff;

                        svg {
                            stroke: #ffffff;
                        }
                    }

                    svg {
                        margin-right: 10px;
                    }
                }
            }

        }
    }

</style>
