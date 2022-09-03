<template>
    <transition name="fadePopup">
        <div v-if="active>0" class="modal d-flex aj-c" @mousedown.self="$emit('close')">
            <div class="modal_block">
                <div class="header d-flex j-b">
                    <div></div>
                    <exitBtn @click.native="$emit('close')" />
                </div>
                <div v-if="active==1" class="body">
                    <div v-if="tuser.diplom" class="green">Турнир нәтижесіне сай, Сіз {{tuser.diplom}} ДӘРЕЖЕЛІ ДИПЛОМ жеңіп алдыңыз</div>
                    <div v-else class="info">Турнир нәтижесі</div>

                    <div class="list">
                        <div class="list_item">
                            <img src="~assets/images/turnir_Profile.svg" alt="">
                            <span class="light">Қатысушы: </span><span>{{tuser.fio_user}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Bookmark.svg" alt="">
                            <span class="light">Турнир атауы: </span><span>"{{tuser.turnir.name}}"</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_flag.svg" alt="">
                            <span class="light">Деңгейі: </span><span>{{tuser.dengei}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_user-octagon.svg" alt="">
                            <span class="light">Қатысушы санаты: </span><span>{{tuser.turnir.cat_name}}</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Star.svg" alt="">
                            <span class="light">Жинаған балыңыз: </span><span>{{tuser.kate+tuser.durys}}/{{tuser.durys}} балл</span>
                        </div>
                        <div v-if="tuser.diplom" class="list_item">
                            <img src="~assets/images/turnir_diploma.svg" alt="">
                            <span class="light">Марапатыңыз: </span><span>{{tuser.diplom}} дәрежелі диплом</span>
                        </div>
                        <div class="list_item">
                            <img src="~assets/images/turnir_Calendar.svg" alt="">
                            <span class="light">Уақыты: </span><span>{{tuser.test_complete_date}}</span>
                        </div>
                    </div>
                    <div class="btn_group">
                        <div class="cst_size_btn">
                            <cstBtn
                                :text="tuser.diplom+' дәрежелі дипломды жүктеу '+tuser.price+'тг'"
                                square=1 />
                        </div>
                        <div class="cst_size_btn">
                            <glassBtn
                                v-if="tuser.chance>0"
                                @click.native="$emit('testTapsyru',tuser.id, tuser.index)"
                                text="Қайта тапсыру"
                                svg=1 />
                            <glassBtn
                                v-else
                                @click.native="$emit('close')"
                                text="Артқа қайту" />
                        </div>
                    </div>
                    <hr class="hr">
                    <div v-if="tuser.chance" class="try">
                        Сіз бұл турнирге {{tuser.chance}} рет қайта қатыса аласыз.
                    </div>
                    <div class="try_desc">
                        Қатысу барысында ең жоғары жинаған балыңызға сай марапат беріледі
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
                <video src="~assets/videos/video.mp4" controls></video>
<!--                    <video-player src="http://127.0.0.1:8000/storage/videos/video.mp4"/>-->
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
        props: ['active', 'tuser']
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
            &::-webkit-scrollbar{
                display: none;
            }

            .header {
                padding: 10px;
            }

            .body {
                padding: 10px 40px 50px;

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
                .info{
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
                        min-height: 40px;
                    }
                    @media all and (max-width: 500px){
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

                video{
                    width: 100%;
                }
                &.mini{
                    @media all and (max-width: 767px){
                        padding: 10px 30px 50px;
                    }
                    @media all and (max-width: 500px){
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
