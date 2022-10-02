<template>
    <div class="mein">
        <div class="cst-ct">
            <div class="h2">ҚМЖ-ның үлгісі</div>
            <div class="video">
                <template v-if="youtube">
                    <vue-plyr>
                        <div class="plyr__video-embed">
                            <iframe :src="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </vue-plyr>
                </template>
            </div>
            <div class="ylgi">
                <div class="h3">Дайын ҚМЖ-ны алып қағазбастылықтан құтылыңыз!</div>
                <div class="desc">
                    <p>Біздің мақсатымыз әр ұстаз өз уақытын үнемдеп барлық күшін оқушыларға сабақ беруге жұмсауына мүмкіндік жасау. Біз жүргізген опрос бойынша 80% мұғалім ҚМЖ жасауға 2 сағатын жұмсайды екен. Бұл жылыны 800 сағат немесе 3 ай. Ойлаңызшы осы уақытыңызды қосымша білім алып шығармашылық ізденіске жұмсап 100 білімді шәкірт тәрбиелеуге болады. Сол арқылы еліміздің дамуына өз үлесіңізді қосасыз.</p>
                    <p>Біз ұстаздардың барлық қосымша қағазбастылық жұмыстарын алып оларға жазудан бөлек білім алуына үлес қосқымыз келеді.</p>
                </div>
            </div>
            <div class="ylgi v2">
                <div class="h3">Дайын үлгі ретінде қолданып ҚМЖ жасаудағы шеберлігіңізді арттырыңыз</div>
                <div class="desc">
                    <p>Бізден алған материалдарды еліміздің үздік ұстаздары, ҚМЖ жасау тренерлері жазған. Әр қмж ашып ішіндегі әдіс тәсілдер, блум таксономисы бойынша идея құрылымдарын көріп өзіңіз ары қарай дамытып сабақты қолданыңыз</p>
                    <p>Іздену арқылы сіздің әр сабағыңыз қызықты, әрі әр оқушыға пайдалы болады.</p>
                    <p>Ал біз сапалы материалдар жинап сіздерге тұрақты түрде ұсынып отырамыз</p>
                </div>
            </div>
            <cstBtn text="Сыныпты таңдау" class="cstBtnSize" />
            <div class="ylgi v3">
                <div class="h3">Жүктеп алған соң қалай қолдану керек?</div>
                <div class="desc">
                    <p>1) Архивті ашып компьютеріңізге көшіріңіз</p>
                    <p>2) ҚМЖ деген папканы ашып тексеріңіз</p>
                    <p>3) Барлығы дұрыс болса сабағыңызға қолдана бастаңыз</p>
                </div>
            </div>
            <div class="comments">
                <div class="head">Пкірлер</div>
                <!--                <div class="leftIcon">
                    <img src="~assets/images/arrowLeftMini.svg" alt="">
                </div>-->
                <carousel v-bind="options" class="sliderShadow">
                    <template v-for="n in 4">
                        <slide>
                            <div class="block">
                                <div class="header">
                                    <div class="avatar"></div>
                                    <div>
                                        <div class="name">Пәленше Түгенше</div>
                                        <div class="work">№12 орта-мектебінің Қазақ тілім пәнінің мұғалімі</div>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="title">Бізден алған материалдарды еліміздің үздік ұстаздары, </div>
                                    <div class="desc">ҚМЖ жасау тренерлері жазған. Әр қмж ашып ішіндегі әдіс тәсілдер, блум таксономисы бойынша идея құрылымдарын көріп өзіңіз ары қарай дамытып сабақты қолданыңыз Ал біз сапалы материалдар жинап сіздерге тұрақты түрде ұсынып отырамыз</div>
                                </div>
                            </div>
                        </slide>
                    </template>
                </carousel>

            </div>
            <div class="faqs">
                <div class="h2 s2">
                    Жиі қойылатын сұрақтар
                </div>
                <div class="questions">
                    <button v-for="(n,index) in 5" @click.prevent="openFAQ(index)" class="btn q_block" :class="{active:index==faqsIsOpen}">
                        <div class="d-flex a-c j-b">
                            <div class="question">Сертификатты қалай жүктеп аламын?</div>
                            <img src="~assets/images/arrow-down.svg" alt="">
                        </div>
                        <transition name="fade">
                            <div v-show="index==faqsIsOpen" class="p">
                                Қатысушы аты-жөнін қате жазсаңыз, бізге ватсап номерге толық ақпарат жазып жіберіңіз. Байланыс нөмірі: +77712345599
                            </div>
                        </transition>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstBtn
        },
        props: ['youtube'],
        data() {
            return {
                options: {
                    perPage: 1,
                    perPageCustom: [
                        [884, 2]
                    ],
                    paginationSize: 15,
                    paginationPadding: 0,
                    paginationColor: '#ffffff',
                    paginationActiveColor: '#1E63E9',
                    paginationPosition: 'bottom-overlay',
                },
                faqsIsOpen: null
            }
        },
        methods: {
            openFAQ(index) {
                this.faqsIsOpen = this.faqsIsOpen == index ? null : index
            },
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

    .mein {
        padding: 90px 0 150px;

        .cstBtnSize {
            margin-top: 20px;
            width: 225px;
            height: 50px;
        }

        .h2 {
            font-size: 40px;
            font-weight: 800;
            line-height: 47px;
            text-align: center;

        }

        .video {
            margin-top: 45px;
            padding: 0 70px;

            iframe {
                width: 100%;
            }
        }

        .ylgi {
            margin-top: 100px;

            .h3 {
                font-size: 24px;
                font-weight: 700;
                line-height: 28px;
            }

            .desc {
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;

            }

            &.v2,
            &.v3 {
                margin-top: 60px;
            }

            &.v2 {
                .h3 {
                    font-weight: 600;
                }
            }
        }

        .comments {
            margin-top: 110px;

            .head {
                font-size: 40px;
                font-weight: 800;
                line-height: 47px;
                text-align: center;

            }

            .sliderShadow {
                box-shadow: 0px 4px 37px rgb(0 0 0 / 7%);
                margin-top: 50px;
            }

            .block {
                background: #F8F8F8;
                /* Shadow объемный */
                box-shadow: 0px 4px 20px rgb(0 0 0 / 13%);


                border-radius: 6px;
                margin: 0 10px;

                .header {
                    background: #ffffff;
                    padding: 20px;
                    display: flex;
                    gap: 10px;

                    .avatar {
                        width: 40px;
                        height: 40px;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-image: url(/_nuxt/assets/images/miniavatar.png);
                    }

                    .name {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 21px;

                    }

                    .work {
                        font-size: 12px;
                        font-weight: 400;
                        line-height: 14px;
                        color: #888888;
                        margin-top: 6px;

                    }
                }

                .body {
                    padding: 20px;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;

                    .title {
                        font-weight: 600;
                    }

                    .desc {
                        margin-top: 18px;
                    }
                }
            }

            .leftIcon,
            .rightIcon {
                background: #1E63E9;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 3px 19px rgba(30, 99, 233, 0.5);
            }
        }

        .faqs {
            margin-top: 150px;
        }

        .questions {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;

            .question {
                text-align: left;
            }

            .q_block {
                padding: 12px 15px 12px 25px;
                background: #FFFFFF;
                color: #363636;
                font-size: 18px;
                font-weight: 400;
                line-height: 22px;

                &:hover {
                    background: #F8F8F8;
                }

                &.active {
                    background: #F8F8F8;
                }

                .p {
                    margin-top: 14px;
                    color: #505050;
                    text-align: left;
                    font-size: 14px;
                    line-height: 17px;

                }
            }
        }
    }

    @media all and (max-width: 1099px) {
        .mein .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        .mein .video {
            padding: 0 60px;
        }
    }

    @media all and (max-width: 991px) {
        .mein .video {
            padding: 0 40px;
        }

        .mein .ylgi .h3 {
            font-size: 22px;
            font-weight: 700;
            line-height: 26px;
        }

        .mein .ylgi .desc {
            font-size: 17px;
            font-weight: 400;
            line-height: 20px;
        }

    }

    @media all and (max-width: 883px) {
        .mein .video {
            padding: 0;
        }

        .mein .h2.s2 {
            font-size: 32px;
            line-height: 40px;
        }


    }

    @media all and (max-width: 767px) {
        .mein .h2.s2 {
            font-size: 28px;
            line-height: 36px;
        }
    }

    @media all and (max-width: 500px) {
        .mein .h2.s2 {
            font-size: 26px;
            line-height: 34px;
        }
    }

</style>
<style>
    .VueCarousel-dot {
        outline: 1px solid #1E63E9 !important;
        margin: 0 7.5px !important;
    }

    .VueCarousel-dot-container {
        transform: translateY(50px);
    }

</style>
