<template>
    <transition name="fadePopup">
        <div v-if="active>0" class="modal d-flex aj-c" @mousedown.self="$emit('close')">
            <div class="modal_block">
                <div class="header d-flex j-b">
                    <div></div>
                    <exitBtn @click.native="$emit('close')" />
                </div>
                <div v-if="active==1" class="body">
                    <div class="green">Олимпиада нәтижесіне сай, Сіз <span class="uppercase">{{marapat(tuser.o_tizim.result)}}</span> жеңіп алдыңыз</div>

                    <div class="list">
                        <div class="list_item">
                            <img src="~assets/images/turnir_Profile.svg" alt="">
                            <span class="light">Қатысушы: </span><span>{{tuser.o_katysushy_fio}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Bookmark.svg" alt="">
                            <span class="light">Олимпиада атауы: </span><span>{{tuser.o_tury.o_tury}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_flag.svg" alt="">
                            <span class="light">Деңгейі: </span><span>{{oblys(tuser.o_bagyt.type)}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_user-octagon.svg" alt="">
                            <span class="light">Қатысушы: </span><span>{{katysushy(tuser.o_katysushy_idd)}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Star.svg" alt="">
                            <span class="light">Жинаған балыңыз: </span><span>20/{{tuser.o_tizim.result}} балл</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_diploma.svg" alt="">
                            <span class="light">Марапатыңыз: </span><span>{{marapat(tuser.o_tizim.result)}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Calendar.svg" alt="">
                            <span class="light">Уақыты: </span><span>{{tuser.o_tizim.date}}</span>
                        </div>
                    </div>
                    <div class="btn_group">
                        <div class="cst_size_btn">
                            <cstBtn :text="marapat(tuser.o_tizim.result) + ' жүктеу'" />
                        </div>
                        <div class="cst_size_btn">
                            <glassBtn text="Қатемен жұмыс" svg=1 radian=1 />
                        </div>
                    </div>
                </div>
                <div v-if="active==2" class="body mini">
                    <div class="try">
                        Жетекшіні қосу мүмкін емес!.
                    </div>
                    <div class="try_desc">
                        5 қатысушының жарнасы төленгеннен кейін жетекшіні қоса аласыз
                    </div>
                </div>
                <div v-if="active==3" class="body mini">
                    <!--                <video src="~assets/videos/video.mp4" controls></video>-->
                    <!--                    <video-player src="http://127.0.0.1:8000/storage/videos/video.mp4"/>-->
                </div>
                <div v-if="active==4" class="body mini">
                    <div class="success wrap">
                        <img src="~assets/images/TickSquare.svg" alt="">
                        <div class="green">
                            <div class="head">Төлем сәтті қабылданды!</div>
                            <div class="foot">Енді тест тапсырсаңыз болады!</div>
                        </div>
                    </div>
                </div>
                <div v-if="active==5" class="body mini">
                    <div class="try">
                        Баланста қаражат жеткіліксіз.
                    </div>
                    <div class="try_desc">
                        Балансты толықтыру үшін жеке кабинеттегі баланс толтыру батырмасын басыңыз!
                    </div>
                    <div class="btn_group">
                        <div class="cst_size_btn">
                            <cstBtn @click.native="$router.push('/profile/balance')" text="Балансты толтыру" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
    import exitBtn from '@/components/forms/exitBtn.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    //    import VideoPlayer from 'nuxt-video-player'

    //    require('nuxt-video-player/src/assets/css/main.css')

    export default {
        components: {
            exitBtn,
            cstBtn,
            glassBtn,
            //            VideoPlayer
        },
        props: ['active', 'tuser'],
        methods: {
            oblys(id) {
                switch(id){
                    case 1: {return 'Облыстық'}
                    case 2: {return 'Республикалық'}
                    case 3: {return 'Халықаралық'}
                }
            },
            katysushy(id) {
                switch(id){
                    case 1: {return 'Ұстаз'}
                    case 2: {return 'Студент'}
                    case 3: {return 'Оқушы'}
                    case 4: {return 'Тәрбиеші'}
                }
            },
            marapat(value) {
                if(value >= 19) return '1 дәрежелі диплом'
                else if(value >= 16) return '2 дәрежелі диплом'
                else if(value >= 13) return '3 дәрежелі диплом'
                else  return 'Сертификат'
            },

            marapatOrph(value) {
                if(value >= 19) return '1 дәрежелі дипломды'
                else if(value >= 16) return '2 дәрежелі дипломды'
                else if(value >= 13) return '3 дәрежелі дипломды'
                else  return 'Сертификатты'
            },

        }
    }

</script>


<style scoped lang="scss">
    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .5s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.3s;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        z-index: 20;

        .modal_block {
            width: 100%;
            max-width: 800px;
            background: #ffffff;
            max-height: 100vh;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

            .header {
                padding: 10px;
            }

            .body {
                padding: 10px 40px 50px;

                .uppercase{
                    text-transform: uppercase;
                }

                .green {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 28px;
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    text-align: center;
                    color: #03B113;
                }

                .info {
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 32px;
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    text-align: center;
                }

                .list {
                    margin-top: 30px;

                    .list_item {
                        &:not(:first-child) {
                            margin-top: 10px;
                        }

                        display: flex;
                        align-items: center;
                        gap: 5px;

                        span {
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 21px;
                            color: #363636;

                            &.light {
                                color: #888888;
                            }
                        }
                    }
                }

                .btn_group {
                    margin-top: 30px;
                    display: flex;
                    gap: 20px;

                    .cst_size_btn {
                        width: 100%;
                        max-width: 290px;
                        min-height: 50px;
                    }

                    @media all and (max-width: 500px) {
                        flex-direction: column;

                        .cst_size_btn {
                            max-width: 100%;
                            height: 40px;
                        }
                    }

                }

                .hr {
                    margin: 40px 0;
                }

                .try {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                    color: #363636;
                }

                .try_desc {
                    margin-top: 8px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 21px;
                    color: #363636;
                }

                video {
                    width: 100%;
                }

                &.mini {
                    .success {
                        display: grid;
                        grid-template-columns: auto 1fr;
                        grid-gap: 20px;
                        align-items: center;

                        .green {
                            text-align: left;
                            margin: 0;
                        }

                        img {
                            width: 44px;
                            height: 44px;
                        }

                        .foot {
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 21px;
                        }
                    }

                    @media all and (max-width: 767px) {
                        padding: 10px 30px 50px;
                    }

                    @media all and (max-width: 500px) {
                        padding: 10px 20px 40px;
                    }
                }
            }
        }
    }

</style>
<style lang="scss">
    .modal .modal_block .body .btn_group .cst_size_btn button {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
    }

</style>
