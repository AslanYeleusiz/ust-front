<template>
    <transition name="fadePopup">
        <div v-if='oplataOpen>0' class="oplataPopup d-flex aj-c" @mousedown.self="$emit('closePopup')">
            <transition name="fade">
                <div v-show="oplataOpen==1" class="block">
                    <div class="header d-flex a-c j-b">
                        <div></div>
                        <button class="btn exitBtn" @click="$emit('closePopup')">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body pd_bottom">
                        <div class="h">Төлем сомасын енгізіңіз:</div>
                        <cstInput typeName='number' stringPlaceholder='Мысалы: 5000' nameWrap='sum' />
                        <cstBtn @click.native="oplataOpen=2" square=1 text='Жалғастыру' />
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="oplataOpen==2" class="block">
                    <div class="header d-flex a-c j-b active">
                        <button @click="oplataOpen=1" class="btn back">
                            <img src="~assets/images/arrow-left-blue.svg" alt="">
                            Артқа
                        </button>
                        <button @click="$emit('closePopup')" class="btn exitBtn">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body mt-20">
                        <div class="h">Өзіңізге ыңғайлы төлем жасау түрін таңдаңыз!</div>
                    </div>
                    <div class="variable">
                        <button @click="oplataOpen=3" class="btn variants">
                            <img src="~assets/images/kaspi.png" alt="">
                            <span>Kaspi.kz арқылы</span>
                        </button>
                        <button class="btn variants">
                            <img src="~assets/images/card.png" alt="">
                            <span>Банк картасы арқылы</span>
                        </button>
                        <button @click="oplataOpen=4" class="btn variants">
                            <img src="~assets/images/terminal.png" alt="">
                            <span>Терминалмен төлеу</span>
                        </button>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="oplataOpen==3" class="block">
                    <div class="header d-flex a-c j-b active">
                        <button @click="oplataOpen=2" class="btn back">
                            <img src="~assets/images/arrow-left-blue.svg" alt="">
                            Артқа
                        </button>
                        <button @click="$emit('closePopup')" class="btn exitBtn">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body mt-20">
                        <div class="h">Kaspi.kz арқылы төлем жасау нұсқаулығы</div>
                        <div class="id_block">
                            <div class="wrap">
                                <div class="id">
                                    <div class="span">ID номеріңіз:</div>
                                    <div class="value">{{$auth.user.id}}</div>
                                </div>
                                <div class="jarna">
                                    <div class="span">Жарнасы</div>
                                    <div class="value">600 тг</div>
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            Kaspi қосымшасына кіріп <b>"Платежи"</b> бөлімінен <b>Ustaz Tilegi</b> деп іздеп, сайттағы <b>ID нөміріңізді: {{$auth.user.id}}</b> - жазыңыз. Керекті сумманы жазып төлемді аударыңыз. Ақша сайттағы балансыңызға бірден түседі
                        </div>
                    </div>
                    <div class="or">
                        <div class="or_block">
                            немесе
                        </div>
                    </div>
                    <div class="qr pd_bottom">
                        <div class="body">
                            <div class="h">Kaspi QR арқылы төлеу</div>
                            <cstBtn square=1 text='Kaspi QR көрсету' />
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="oplataOpen==4" class="block">
                    <div class="header d-flex a-c j-b active">
                        <button @click="oplataOpen=2" class="btn back">
                            <img src="~assets/images/arrow-left-blue.svg" alt="">
                            Артқа
                        </button>
                        <button @click="$emit('closePopup')" class="btn exitBtn">
                            <img src="~assets/images/exitBtn.svg" alt="">
                        </button>
                    </div>
                    <div class="body mt-20">
                        <div class="h">Терминалдар арқылы төлем жасау нұсқаулығы</div>
                        <div class="id_block">
                            <div class="wrap">
                                <div class="id">
                                    <div class="span">ID номеріңіз:</div>
                                    <div class="value">{{$auth.user.id}}</div>
                                </div>
                                <div class="jarna">
                                    <div class="span">Жарнасы</div>
                                    <div class="value">600 тг</div>
                                </div>
                            </div>
                        </div>
                        <div class="desc pd_bottom">
                            <b>QIWI</b> және <b>Kassa 24</b> терминалдарына барып іздеу бетінен <b>Ustaz Tilegi</b> деп іздеп, сайттағы <b>ID нөміріңізді: {{$auth.user.id}}</b> - жазыңыз. Керекті сумманы жазып төлемді аударыңыз. Ақша сайттағы балансыңызға бірден түседі
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>

</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstInput,
            cstBtn
        },
        props: ['oplataOpen']
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

    .mt-20 {
        margin-top: 20px;
    }

    .mt-30 {
        margin-top: 30px;
    }

    .oplataPopup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 20;

        .block {
            position: absolute;
            width: 100%;
            max-width: 360px;
            background: #ffffff;
            border-radius: 6px;

            .header {
                padding: 20px;

                .back {
                    font-weight: 600;
                    line-height: 16px;
                    color: #1E63E9;
                    padding: 0px;
                }

                &.active {
                    border-bottom: 1px solid #D6D6D6;
                    background: #F5F5F5;

                    .exitBtn {
                        transform: translate(15px, -15px);
                    }
                }
            }

            .exitBtn {
                padding: 0px;
            }

            .body {
                padding: 0 30px;

                .h {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 21px;
                    text-align: center;
                }
            }

            .variable {
                margin-top: 20px;

                .variants {
                    width: 100%;
                    padding: 15px 30px;
                    text-align: left;
                    border-top: 1px solid #D6D6D6;

                    img {
                        margin-right: 20px;
                    }

                    span {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 19px;
                        color: #1E63E9;
                    }
                }
            }

            .pd_bottom {
                padding-bottom: 40px;
            }

            .id_block {
                background: #F8F8F8;
                border-radius: 10px;
                padding: 10px;
                margin-top: 20px;

                .wrap {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1px;
                    background: #CBCBCB;
                    text-align: center;

                    .jarna,
                    .id {
                        background: #F8F8F8;

                        .value {
                            font-size: 18px;
                            font-weight: 600;
                            line-height: 21px;
                        }
                    }

                    .jarna .value {
                        color: #03B113;
                    }
                }
            }

            .desc {
                margin-top: 20px;
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;

                b {
                    font-weight: 600;
                }
            }

            .or {
                border-bottom: 1px solid #CBCBCB;
                display: flex;
                justify-content: center;
                margin-top: 30px;
                .or_block{
                    background: #ffffff;
                    width: 120px;
                    font-size: 16px;
                    line-height: 19px;
                    color: #888888;
                    text-align: center;
                    transform: translateY(50%);
                }
            }
            .qr{
                margin-top: 50px;
            }
        }
    }

</style>

<style lang="scss">
    .oplataPopup .block input {
        margin-top: 30px;
    }

    .oplataPopup .block .cst_btn {
        margin-top: 20px;
    }

</style>
