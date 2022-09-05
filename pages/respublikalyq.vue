<template>
    <div>
        <headerLink :head='head' active=0 />
        <section class="main">
            <div class="cst-ct">
                <h1>
                    <span class="orange">Тамыз айының Республикалық</span><br>
                    Дүниетану пәні бойынша<br>
                    мұғалімдер олимпиадасы
                </h1>
                <div class="olivers">
                    <div class="d-flex a-c">
                        <img src="~assets/images/diploma.svg" alt="">
                        <div class="span">
                            Марапаттаулар: <b>Диплом, Сертификат, Мадақтама алғыс хаттары бірден беріледі</b>
                        </div>
                    </div>
                    <div class="d-flex a-c">
                        <img src="~assets/images/watch.svg" alt="">
                        <div class="span">
                            Уақыты: <b>1-31 қыркүйек аралығында</b>
                        </div>
                    </div>
                    <div class="d-flex a-c">
                        <img src="~assets/images/portmane.svg" alt="">
                        <div class="span">
                            Жарнасы бар болғаны <b>700тг</b>
                        </div>
                    </div>
                </div>
                <div class="marapat">
                    <img src="~assets/images/sert.jpg" alt="">
                    <div class="body">
                        <div class="h2">Республика бойынша 10 000 астам</div>
                        <div class="desc">оқушылар мен ұстаздар қатысып, марапаттарын алып үлгерді</div>
                    </div>
                </div>
                <div class="zayavka">
                    <div class="olimpBtn">
                        <bigBtn text='Олимпиадаға қатысу' />
                    </div>
                    <div class="info">Диплом және сертификат олимпиадаға қатысқан соң бірден беріледі</div>
                </div>
                <div class="kartina">
                    <img src="~assets/images/lending_main.png" alt="">
                </div>
            </div>
        </section>
        <section class="intro">
            <div class="cst-ct">
                <div class="info_block">
                    <h3>Тамыз айының Республикалық Дүниетану пәні бойынша зияткерлік мұғалімдер олимпиадасына қош келдіңіз!</h3>
                    <div class="desc">
                        Олимпиада Дүниетану пәні бойынша 25 сұрақтан тұрады. Өзіңізді дамытып, жаңа білімді игеруге бағытталған. Қатысу барынша оңай, жарнасы өте аз және қызықты сұрақтардан құралған. <br><br>

                        Қатысу үшін "олимпиадаға қатысу" батырмасын басып, қатысушы аты-жөнін жазып, жарнасын төлеп, "олимпиаданы бастау" батырмасын басу керек.</div>
                    <div class="guide">
                        <div class="guide_block">
                            <img src="~assets/images/pointer.svg" alt="">
                            <div class="h4">Қатысу өте оңай</div>
                            <div class="desc">Олимпиадаға қатысу батырмасын бассаңыз барлық нұсқаулықтар жазылған</div>
                        </div>
                        <div class="guide_block">
                            <img src="~assets/images/diplom_icon.svg" alt="">
                            <div class="h4">Ресми дипломдар мен сертификаттар</div>
                            <div class="desc">Барлық марапаттарға код беріліп, QR-кодпен тіркеледі</div>
                        </div>
                        <div class="guide_block">
                            <img src="~assets/images/ques_icon.svg" alt="">
                            <div class="h4">Сұрақтары стандартқа сай</div>
                            <div class="desc">Сұрақтарды арнайы оқудан өткен тренерлер жасайды</div>
                        </div>
                        <div class="guide_block">
                            <img src="~assets/images/zhetekshi_icon.svg" alt="">
                            <div class="h4">Жетекшілерге алғыс хат беріледі</div>
                            <div class="desc">5 қатысушы қосып, алғыс хат аласыз</div>
                        </div>
                        <div class="guide_block">
                            <img src="~assets/images/all_icon.svg" alt="">
                            <div class="h4">Барлық қатысушылар марапат алады</div>
                            <div class="desc">Барлық қатысушылар сертификат және диплом алуына болады</div>
                        </div>
                        <div class="guide_block">
                            <img src="~assets/images/protfolio_icon.svg" alt="">
                            <div class="h4">Портфолиоңызды марапаттарға толтыра аласыз</div>
                            <div class="desc">Алған марапаттарды жетістік ретінде портфолиоға салуға болады</div>
                        </div>
                    </div>
                </div>
                <div class="olimp_block">
                    <img src="~assets/images/kubok.png" alt="">
                    <div class="body">
                        <div class="h3">Олимпиада тестілеу форматында өтеді. <br>Тест 20 сұрақтан тұрады.</div>
                        <div class="desc">Сұрақтардың дұрыс немесе қате екендігін, яғни олимпиада нәтижесін тестті аяқтағаннан кейін қарап тексеруге болады.
                            <div class="warning">
                                <Lottie :width="70" :height="70" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                                <div class="inBody">
                                    <div class="orange">Назар аударыңыз</div>
                                    Тесттен өтуге <span class="green">60 минут</span> беріледі
                                </div>
                            </div>
                            Барлық тест сұрақтары оқу бағдарламасына сай жасалынған. Тест сұрағын зейінмен оқып, дұрыс жауапты таңдаңыз!
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="diploms">
            <div class="cst-ct">
                <div class="h2">Жеңімпаздарға диплом, сертификат және грамоталар берілетін болады</div>
                <div class="diplom_list">
                    <div v-for="dip in dipType" class="diplom_block">
                        <img src="~assets/images/sertificate.jpg" alt="">
                        <div class="desc">{{dip}} дәрежелі диплом</div>
                    </div>
                    <div v-for="dip in dipType" class="diplom_block">
                        <img src="~assets/images/sertificate.jpg" alt="">
                        <div class="desc">{{dip}} дәрежелі диплом</div>
                    </div>
                </div>
                <div class="d-flex j-c">
                    <div class="olimpBtn">
                        <bigBtn text='Олимпиадаға қатысу' />
                    </div>
                </div>
            </div>
        </section>
        <section class="questions">
            <div class="cst-ct">
                <div class="h2">
                    Жиі қойылатын сұрақтар
                </div>
                <div class="question_list">
                    <button v-for="n in 5" @click="openAnswer(n)" class="btn question_block" :class="{active: questionItem==n}">
                        <div class="d-flex j-b">
                            <div class="title">Сертификатты қалай жүктеп аламын?</div>
                            <img src="~assets/images/arrow-down.svg" alt="">
                        </div>
                        <transition name="fade">
                            <div v-show="questionItem==n" class="desc">Қатысушы аты-жөнін қате жазсаңыз, бізге ватсап номерге толық ақпарат жазып жіберіңіз. Байланыс нөмірі: +77712345599 </div>
                        </transition>
                    </button>
                </div>
                <div class="ender">
                    <div class="olimpBtn">
                        <bigBtn text='Олимпиадаға қатысу' />
                    </div>
                    <div class="olimpBtn download">
                        <glassBtn img='Download.svg' radian='1' text='Қатысу нұсқаулығын жүктеу'/>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "~/assets/lottie_files/info_2/animation_kqc42oh6.json"
    import headerLink from '@/components/header.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'

    export default {
        components: {
            Lottie,
            headerLink,
            bigBtn,
            glassBtn
        },
        data() {
            return {
                head: [{
                    link: '/olimpiada',
                    name: 'Олимпиадалар',
                }, {
                    link: '/menin-olimpiadalarym',
                    name: 'Менің олимпиадаларым',
                }],
                questionItem: 0,
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
                dipType: ['I', 'II', 'III'],
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            openAnswer(item) {
                this.questionItem == item ? this.questionItem = 0 : this.questionItem = item;
            }
        },

    }

</script>
<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.2s;
    }

    .olimpBtn {
        max-width: 320px;
        width: 100%;
        height: 70px;
        border-radius: 46px;
        color: #ffffff;

        button {
            font-size: 20px;
            font-weight: 600;
        }

        @media all and (max-width: 883px) {
            min-width: 260px;
            height: 60px;
        }

    }

    .ender {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-top: 100px;

        @media all and (max-width: 991px) {
            grid-template-columns: 1fr;
        }
        .olimpBtn{
            max-width: 100%;
        }

        .download {
            @media all and (max-width: 991px) {
                margin: 30px 0 0 0;
            }

        }
    }

    .main {
        background: #FFEAD8;
        padding-top: 60px;
        padding-bottom: 200px;

        @media all and (max-width: 991px) {
            padding-bottom: 150px;
        }

        @media all and (max-width: 767px) {
            padding-bottom: 120px;
            padding-top: 50px;
        }

        h1 {
            font-family: 'Playfair Display';
            margin: 0;
            font-size: 40px;
            font-weight: 700;
            line-height: 48px;

            @media all and (max-width: 1099px) {
                font-size: 36px;
                line-height: 44px;
            }

            @media all and (max-width: 991px) {
                font-size: 32px;
                line-height: 38px;
            }

            @media all and (max-width: 883px) {
                font-size: 28px;
                line-height: 34px;
            }

            @media all and (max-width: 767px) {
                font-size: 26px;
                line-height: 32px;
            }

            @media all and (max-width: 575px) {
                font-size: 25px;
                line-height: 28px;
            }

            @media all and (max-width: 447px) {
                font-size: 22px;
                line-height: 26px;
            }

            .orange {
                color: #F0551C;
            }
        }

        .olivers {
            margin-top: 30px;
            max-width: 715px;
            display: flex;
            flex-wrap: nowrap;

            @media all and (max-width: 1099px) {
                max-width: 580px;
            }

            @media all and (max-width: 991px) {
                flex-direction: column;

                .d-flex.a-c {
                    margin-bottom: 20px;
                }
            }

            @media all and (max-width: 883px) {
                margin-top: 20px;

                .d-flex.a-c {
                    &:nth-child(1) {
                        max-width: 80%;
                    }

                    &:nth-child(2) {
                        max-width: 60%;
                    }

                    &:nth-child(3) {
                        max-width: 40%;
                    }

                    @media all and (max-width: 767px) {
                        &:nth-child(1) {
                            max-width: 70%;
                        }
                    }

                    @media all and (max-width: 575px) {
                        &:nth-child(1) {
                            max-width: 90%;
                        }
                    }
                }
            }


            b {
                font-weight: 700;
            }

            img {
                margin-right: 15px;
            }

            .span {
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                max-width: 320px;

                @media all and (max-width: 447px) {
                    font-size: 12px;
                    line-height: 14px;
                }

            }

        }

        .marapat {
            margin-top: 50px;
            background: #FEDCD0;
            border: 1px solid #FF8B0D;
            padding: 20px 20px 20px 30px;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
            max-width: 506px;
            display: flex;
            align-items: flex-end;

            @media all and (max-width: 1099px) {
                max-width: 400px;
            }

            @media all and (max-width: 991px) {
                max-width: 486px;
                z-index: 3;
                position: relative;
            }

            @media all and (max-width: 883px) {
                width: 100%;
                margin-top: 85px;
            }

            @media all and (max-width: 575px) {
                align-items: center;
                padding: 6px 20px 6px 10px;
                margin-top: 155px;
            }

            @media all and (max-width: 447px) {
                margin-top: 150px;
            }

            .body {
                padding-left: 114px;

                @media all and (max-width: 575px) {
                    padding-left: 10px;
                }

                .h2 {
                    margin: 0 0 10px;
                    padding: 0;
                    font-weight: 700;
                    line-height: 19px;
                    font-size: 16px;
                    color: #F0551C;
                }

                .desc {
                    font-weight: 400;
                }
            }

            img {
                position: absolute;
                transform: translateY(21px);

                @media all and (max-width: 575px) {
                    position: relative;
                    transform: none;
                    width: 105px;
                }

                @media all and (max-width: 447px) {
                    width: 70px;
                }

            }
        }

        .zayavka {
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: 580px;
            margin-top: 50px;

            @media all and (max-width: 767px) {
                flex-direction: column;
            }

            .olimpBtn {
                margin-right: 30px;

                @media all and (max-width: 1099px) {
                    margin-right: 20px;
                }

                @media all and (max-width: 767px) {
                    margin: 0;
                }

            }

            .info {
                color: #888888;
                font-size: 16px;
                line-height: 19px;
                z-index: 2;

                @media all and (max-width: 767px) {
                    margin-top: 20px;
                    text-align: center;
                }

            }
        }

        .kartina {
            display: flex;
            justify-content: flex-end;

            img {
                position: absolute;
                transform: translate(141px, -406px);

                @media all and (max-width: 1099px) {
                    transform: translate(141px, -462px);
                }

                @media all and (max-width: 991px) {
                    transform: translate(141px, -553px);
                }

                @media all and (max-width: 883px) {
                    width: 326px;
                    transform: translate(89px, -568px);
                }

                @media all and (max-width: 767px) {
                    transform: translate(47px, -632px);
                }

                @media all and (max-width: 575px) {
                    width: 299px;
                    right: 0;
                    transform: translate(-22px, -604px);
                }

                @media all and (max-width: 447px) {
                    transform: none;
                    top: 313px;
                }

            }
        }

    }

    .intro {
        transform: translateY(-130px);

        @media all and (max-width: 991px) {
            transform: translateY(-80px);
        }

        .info_block {
            padding: 30px 40px 40px;
            background: #ffffff;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.1);
            border-radius: 6px;

            h3 {
                font-size: 24px;
                font-weight: 700;
                line-height: 28px;
                margin-bottom: 20px;

                @media all and (max-width: 447px) {
                    font-size: 20px;
                    line-height: 23px;
                }
            }

            .desc {
                color: #303030;

                @media all and (max-width: 447px) {
                    font-size: 12px;
                    line-height: 14px;
                }

            }

            .guide {
                margin-top: 40px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 45px 50px;

                @media all and (max-width: 991px) {
                    grid-gap: 30px 10px;

                    @media all and (max-width: 883px) {
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 30px 20px;
                    }

                }

                img {
                    margin-bottom: 20px;
                }

                .h4 {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 10px;

                    @media all and (max-width: 447px) {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }

                .desc {
                    font-size: 12px;
                    font-weight: 300;
                    line-height: 14px;
                }
            }
        }

        .olimp_block {
            margin-top: 100px;
            background: #FFF7E7;
            border: 1px solid #FF8B0D;
            border-radius: 6px;
            display: flex;
            padding: 40px 30px 40px 50px;

            @media all and (max-width: 883px) {
                flex-direction: column;
                align-items: center;
                padding: 40px 30px;
            }

            @media all and (max-width: 575px) {
                margin-top: 50px;
            }

            img {
                width: 161px;
                height: 233px;
            }

            .body {
                margin-left: 40px;

                @media all and (max-width: 883px) {
                    margin: 0;
                }

                .h3 {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 23px;
                    color: #000000;
                    margin-bottom: 10px;

                    @media all and (max-width: 447px) {
                        font-size: 18px;
                        line-height: 21px;
                    }
                }

                .desc {
                    font-size: 18px;
                    line-height: 21px;
                    color: #000000;

                    @media all and (max-width: 447px) {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }

                .warning {
                    margin: 20px 0;
                    background: #FFFFFF;
                    border: 1px solid #FF8B0D;
                    border-radius: 6px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    div {
                        margin: 0 20px 0 0 !important;

                        @media all and (max-width: 991px) {
                            margin: 0 10px 0 0 !important;
                        }

                    }

                    .orange {
                        color: #FF8B0D;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 23px;

                        @media all and (max-width: 447px) {
                            font-size: 14px;
                            line-height: 16px;
                            margin-bottom: 5px;
                        }
                    }

                    .inBody {
                        .green {
                            @media all and (max-width: 447px) {
                                font-size: 16px;
                                line-height: 16px;
                            }
                        }

                        @media all and (max-width: 447px) {
                            font-size: 16px;
                            line-height: 16px;
                        }
                    }
                }
            }
        }
    }

    .diploms {
        .h2 {
            font-size: 36px;
            font-weight: 700;
            line-height: 42px;
            text-align: center;

            @media all and (max-width: 991px) {
                font-size: 30px;
                line-height: 36px;

                @media all and (max-width: 883px) {
                    font-size: 26px;
                    line-height: 32px;
                }

            }

        }

        .diplom_list {
            margin-top: 55px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 40px 20px;

            @media all and (max-width: 575px) {
                grid-template-columns: 1fr 1fr;
            }

            .diplom_block {
                img {
                    margin-bottom: 20px;

                    @media all and (max-width: 1099px) {
                        width: 218px;
                    }

                    @media all and (max-width: 991px) {
                        width: 178px;
                    }

                    @media all and (max-width: 883px) {
                        width: 146px;
                    }

                    @media all and (max-width: 575px) {
                        width: 100%;
                    }
                }

                .desc {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 21px;
                    text-align: center;

                    @media all and (max-width: 991px) {
                        font-size: 16px;
                        line-height: 18px;
                    }

                    @media all and (max-width: 883px) {
                        font-size: 14px;
                        line-height: 16px;
                    }
                }
            }
        }

        .olimpBtn {
            margin-top: 50px;
        }
    }

    .questions {
        margin-top: 100px;
        padding-bottom: 100px;

        .h2 {
            font-size: 40px;
            font-weight: 800;
            line-height: 47px;
            text-align: center;

            @media all and (max-width: 991px) {
                font-size: 36px;
                line-height: 42px;
            }

            @media all and (max-width: 883px) {
                font-size: 32px;
                line-height: 38px;
            }

            @media all and (max-width: 575px) {
                font-size: 28px;
                line-height: 34px;
            }

        }

        .question_list {
            margin-top: 50px;

            button {
                text-align: left;
            }

            .question_block {
                width: 100%;
                font-family: 'Gilroy-Regular';
                font-size: 18px;
                line-height: 22px;
                padding: 12px 15px 12px 25px;
                max-width: 790px;
                margin: 0 auto;

                &.active {
                    background: #F8F8F8;

                    img {
                        transform: scale(1, -1);
                    }
                }

                .desc {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    padding: 14px 150px 8px 0;
                    color: #505050;
                }

                img {
                    transition: all 0.2s;
                    width: 20px;
                    height: 20px;
                }

                &:hover {
                    background: #F8F8F8;
                    cursor: pointer;
                }
            }
        }

    }

</style>
