<template>
    <div>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex">
                        <NuxtLink to="/turnirler" class="NuxtLink-item active">
                            Турнирлер
                        </NuxtLink>
                        <NuxtLink to="/menin-turnirlerim" class="NuxtLink-item">
                            Менің турнирлерім
                        </NuxtLink>
                    </div>
                    <div class="d-flex a-c free-cert">
                        <div class="free-cert-button">Тегін сертификат алу</div>
                        <img class="notification" src="~assets/images/notification.svg">
                    </div>
                </div>
            </div>
        </header>
        <div class="main">
            <div class="head">
                <div class="cst-ct">
                    <h2>Сәуір айының<br>блиц-турнирі</h2>
                    <div class="timer">
                        <div class="time">
                            <div class="value">01</div>
                            <div class="types">Күн</div>
                        </div>
                        <div class="time">
                            <div class="value">01</div>
                            <div class="types">Күн</div>
                        </div>
                        <div class="time">
                            <div class="value">01</div>
                            <div class="types">Күн</div>
                        </div>
                        <div class="time">
                            <div class="value">01</div>
                            <div class="types">Күн</div>
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
                        <div class="turnir">
                            Қазақ тілі мен әдебиеті
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </div>
                        <div class="turnir">
                            Математика
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </div>
                        <div class="turnir">
                            Философия негіздері
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </div>
                        <div class="turnir">
                            Бастауышта оқыту педагогикасы мен әдістемесі
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </div>
                        <div class="turnir">
                            Қазақ тілі мен әдебиеті
                            <img src="~assets/images/arrow-right.svg" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import arrowLeft from '@/components/svg/arrow-left.vue'

    export default {
        components: {
            arrowLeft
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
            background: #FFEAD8;

            h2 {
                font-family: Playfair Display;
                font-size: 48px;
                font-weight: 900;
                line-height: 51px;
                text-align: center;
                text-transform: uppercase;
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
            .vkladki {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                z-index: 3;
                transform: translateY(1px);
                .vkladka {
                    width: 100%;
                    padding: 20px 0 30px;
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                    color: #1E63E9;
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
