<template>
    <div>
        <div class="block">
            <div class="h2">
                Турнирге қатысу үшін:
            </div>
            <div class="wrap">
                <ul>
                    <li>Аты-жөніңізді жазыңыз</li>
                    <li>Турнирді бастаңыз</li>
                    <li>Жарнасын төлем, марапатты жүктеңіз</li>
                </ul>
                <div @mousedown="$emit('openPopup', 3)" class="video">
                    <img src="~assets/images/play.png" alt="">
                    <div class="title">Қатысу нұсқаулығы</div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="h2">
                Турнир марапаттары
            </div>
            <div class="wrap">
                <div class="wrap_col">
                    <img class="cert" src="~assets/images/diploms.png" alt="">
                    <div class="wraper">
                        <div class="list_block">
                            <img src="~assets/images/TickSquare.svg" alt="">
                            <div class="list_body">
                                <div class="head">I Дәрежелі диплом</div>
                                <div class="desc">9-10 дұрыс жауап</div>
                            </div>
                        </div>
                        <div class="list_block">
                            <img src="~assets/images/TickSquare.svg" alt="">
                            <div class="list_body">
                                <div class="head">II Дәрежелі диплом</div>
                                <div class="desc">7-8 дұрыс жауап</div>
                            </div>
                        </div>
                        <div class="list_block">
                            <img src="~assets/images/TickSquare.svg" alt="">
                            <div class="list_body">
                                <div class="head">III Дәрежелі диплом</div>
                                <div class="desc">5-6 дұрыс жауап</div>
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
                                <div class="head">Сертификат</div>
                                <div class="desc">Барлық қатысушыларға - сертификат</div>
                            </div>
                        </div>
                        <div class="list_block">
                            <img src="~assets/images/TickSquare.svg" alt="">
                            <div class="list_body">
                                <div class="head">Алғыс хат</div>
                                <div class="desc">Әр 5 оқушы үшін жетекшіге - алғыс хат</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
        <div class="block">
            <div class="h2">
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
</template>

<script>
    export default {
        data() {
            return {
                faqsIsOpen: null,
            }
        },
        methods: {
            openFAQ(index) {
                this.faqsIsOpen = this.faqsIsOpen == index ? -1 : index;
            }
        }

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

    .block {
        margin-top: 130px;
    }

    .h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 47px;
        text-align: center;
    }

    .wrap_col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrap {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        align-items: center;

        .video {
            width: 100%;
            height: 182px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #EFF3FF;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
                outline: 1px solid #1E63E9;
            }

            .title {
                font-size: 18px;
                font-weight: 700;
                line-height: 22px;
                margin-top: 20px;
                color: #1E63E9;
            }
        }

        .list_block {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 20px;
            align-items: center;

            .head {
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

    ul {
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        color: #888888;

        li:not(:last-child) {
            margin-bottom: 15px;
        }

        li::marker {
            color: #03B113;
        }
    }

    .questions {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
        .question{
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

    .cert {
        width: 100%;
    }

    @media all and (max-width: 1099px) {
        .h2 {
            font-size: 36px;
            line-height: 43px;
        }

        ul {
            font-size: 22px;
            line-height: 26px;
        }
    }

    @media all and (max-width: 991px) {
        .h2 {
            font-size: 33px;
            line-height: 39px;
        }

        ul {
            font-size: 20px;
            line-height: 24px;
        }

        .questions .q_block {
            font-size: 17px;
            line-height: 21px;
        }
    }

    @media all and (max-width: 883px) {
        .h2 {
            font-size: 30px;
            line-height: 36px;
        }

        ul {
            font-size: 18px;
            line-height: 22px;
        }

        .wrap {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            align-items: center;
        }
    }

    @media all and (max-width: 767px) {
        .h2 {
            font-size: 27px;
            line-height: 33px;
        }

        .wrap {
            margin-top: 40px;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
            grid-template-areas: 'a' 'b';
        }

        .wrap .video {
            height: 242px;
            grid-area: a;
        }

        .block {
            margin-top: 100px;
        }
        .wrap_col:first-child {
            margin-top: 50px;
        }
        ul{
            grid-area: b;
        }
        .wrap_col{
            &:first-child{grid-area: b;}
            &:last-child{grid-area: a;}
        }

    }
    @media all and (max-width: 500px){
        .h2[data-v-3ed23f4e] {
            font-size: 24px;
            line-height: 29px;
        }
    }

</style>
