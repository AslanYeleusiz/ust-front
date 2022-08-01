<template>
    <div>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex">
                        <NuxtLink to="/profile" class="NuxtLink-item active">
                            Материалдар
                        </NuxtLink>
                        <NuxtLink to="/profile/balance" class="NuxtLink-item">
                            Баланс
                        </NuxtLink>
                        <NuxtLink to="/profile/bonus" class="NuxtLink-item">
                            Бонус
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
                <div class="main_wrap">
                    <div class="left_bar">
                        <img src="~assets/images/Avatar_profile.png" alt="" class="avatar">
                        <div class="name">Сейдахметжанов Бақберген Тұрарқожаұлы</div>
                        <div class="id">ID номер: 123456</div>
                        <div class="info">Телефон: <b>+7(702)-468-45-05</b> <br>
                            Email: <b>sembiev_n@mail.ru</b> <br>
                            Құпия сөз: <b>***</b></div>
                        <NuxtLink to="choise" class="btn myBtn">Өзгерту</NuxtLink>
                        <button class="btn exitBtn">
                            <img src="~assets/images/logout.svg" alt=""><span>Сайттан шығу</span>
                        </button>
                    </div>
                    <div class="right_bar">
                        <div class="head">Менің соңғы жетістіктерім</div>
                        <div class="zhetistikter">
                            <div class="block">
                                <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                                <NuxtLink to="asd" class="next">Толығырақ
                                    <img src="~assets/images/arrow-left-blue.svg" alt="">
                                </NuxtLink>
                            </div>
                            <div class="block">
                                <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                                <NuxtLink to="asd" class="next">Толығырақ
                                    <img src="~assets/images/arrow-left-blue.svg" alt="">
                                </NuxtLink>
                            </div>
                            <div class="block">
                                <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                                <NuxtLink to="asd" class="next">Толығырақ
                                    <img src="~assets/images/arrow-left-blue.svg" alt="">
                                </NuxtLink>
                            </div>
                            <div class="block">
                                <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                                <NuxtLink to="asd" class="next">Толығырақ
                                    <img src="~assets/images/arrow-left-blue.svg" alt="">
                                </NuxtLink>
                            </div>
                            <div class="block">
                                <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                                <NuxtLink to="asd" class="next">Толығырақ
                                    <img src="~assets/images/arrow-left-blue.svg" alt="">
                                </NuxtLink>
                            </div>
                            <NuxtLink to="choise" class="btn myBtn">Барлығын көру</NuxtLink>
                        </div>
                        <div class="head">Менің бөлімдерім</div>
                        <div class="bolimeder">
                           <template v-for="bolim in bolimder">
                               <NuxtLink to="asdasd">
                                <div class="block">
                                    <img :src="getImgUrl(bolim.img)" alt="">
                                    <div class="body">{{bolim.text}}</div>
                                </div>
                            </NuxtLink>
                           </template>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                bolimder: [
                    {
                        img: 'bitirushi.svg',
                        text: 'Менің курстарым',
                        link: '/kurse'
                    },
                    {
                        img: 'bmedal.svg',
                        text: 'Менің курстарым',
                        link: '/olimpiada'
                    },
                    {
                        img: 'bkubok.svg',
                        text: 'Менің турнирлерім',
                        link: '/tournir'
                    },
                    {
                        img: 'bnout.svg',
                        text: 'Менің конференцияларым',
                        link: '/conference'
                    },
                    {
                        img: 'bnaushniki.svg',
                        text: 'Менің вебинарларым',
                        link: '/vebinarlar'
                    },
                    {
                        img: 'bfile.svg',
                        text: 'Менің материалдарым',
                        link: '/material'
                    },
                    {
                        img: 'bcalc.svg',
                        text: 'Калькулятор',
                        link: '/calculator'
                    },
                    {
                        img: 'bbonus.svg',
                        text: 'Менің бонустарым',
                        link: '/bonus'
                    },
                    {
                        img: 'bzhinak.svg',
                        text: 'Менің жинақтарым',
                        link: '/zhinak'
                    },
                    {
                        img: 'bbaiqau.svg',
                        text: 'Менің байқауларым',
                        link: '/baiqau'
                    },
                    {
                        img: 'bqmj.svg',
                        text: 'Менің ҚМЖ-ларым',
                        link: '/qmj'
                    },
                    {
                        img: 'bquest.svg',
                        text: 'Сұрақ-жауап',
                        link: '/questions'
                    },
                ]
            }
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('../assets/images/', false)
                return images('./' + pet)
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

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

    .main {
        .main_wrap {

            display: grid;
            grid-template-columns: 267px auto;
            grid-gap: 20px;
            padding-top: 40px;
            padding-bottom: 100px;
            .myBtn {
                display: block;
                width: 100%;
                height: 40px;
                background: #EFF3FF;
                border-radius: 6px;
                color: #1C77FD;
            }

            .left_bar {
                border: 1px solid #EAEAEA;
                box-shadow: 7px 0px 20px rgba(0, 0, 0, 0.05);
                border-radius: 20px;
                padding: 40px 30px;
                text-align: center;
                font-size: 15.5px;
                color: #888888;
                height: 565px;
                position: sticky;
                top: 106px;
                bottom: 0;

                .name {
                    margin-top: 20px;
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 21px;
                    color: #363636;
                }

                .id {
                    margin-top: 10px;
                    font-weight: 300;
                    line-height: 19px;
                }

                .info {
                    margin-top: 30px;
                    font-weight: 400;
                    line-height: 26px;

                    b {
                        font-weight: 600;
                        line-height: 26px;
                        color: #363636;
                    }
                }

                .myBtn {
                    margin-top: 20px;
                }

                .exitBtn {
                    margin-top: 30px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 22px;
                    padding: 0;

                    img {
                        margin-right: 15px;
                    }
                }
            }

            .right_bar {

                .head {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                }

                .zhetistikter {
                    margin-top: 20px;
                    padding-bottom: 70px;

                    .block {
                        border-radius: 6px;
                        background: #F9F9F9;
                        padding: 20px;
                        margin-bottom: 10px;

                        .next {
                            color: #1E63E9;
                            margin-top: 5px;

                            img {
                                transform: rotate(180deg);
                            }
                        }

                        .body {
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 19px;

                            b {
                                font-weight: 600;
                            }
                        }
                    }
                }

                .bolimeder {
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 20px;
                    a{
                        color: #000000;
                        &:hover{
                            color: #254EE2;
                            text-decoration: none;
                            .block{
                                outline: 1px solid #254EE2;
                            }
                        }
                    }
                    .block {
                        background: #FFF7F1;
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 30px 30px;
                        height: 100%;
                        .body {
                            font-family: Gilroy;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 19px;
                            text-align: center;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }

</style>
