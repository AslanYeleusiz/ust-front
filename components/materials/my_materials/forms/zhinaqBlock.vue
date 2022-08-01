<template>
   <div class="block">
       <div class="top">
           <a target="_blank" :href="'word/'+material.lat_title+'-'+material.id+'.html'">
        <div class="h2">
            <div class="title">
               <div v-if='material.deleteorder || material.chec' class="d-flex aj-c">
                   <Lottie :width="34" :height="34" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                   <span v-if='material.chec' class="light-green">Тексерілуде...</span>
                   <span v-else-if='material.deleteorder' class="light-green">Өтініш қаралуда. Сізге менеджер хабарласады......</span>
               </div>
                <span v-if='material.zhinak==1' class="title">{{material.title}}</span>
            </div>
            <div></div>
        </div>
        </a>
        <div class="info">
            <div class="name">
                <img src="~assets/images/user_material.svg" alt="">
                <span>{{material.author}}</span>
            </div>
            <div class="d-flex">
                <div class="date">
                <img src="~assets/images/note-text.svg" alt="">
                <span>{{material.date}}</span>
            </div>
            <div class="views">
                <img src="~assets/images/call8.svg" alt="">
                <span> {{material.num}} </span>
            </div>
            </div>
        </div>
        <div v-if="material.description != null" class="body">
            {{material.description}}
        </div>
        <div class="certBtns">
            <button class="btn certBtn">
                <download color="#ffffff"/>
                Сертификатты жүктеу
            </button>
            <span>«Ustaz tilegi» Республикалық ғылыми – әдістемелік орталығының педагогикалық жинағына материалыңызды жариялағаныңыз үшін беріледі</span>
        </div>
       </div>
       <div class="bottom">
            <button class="btn myBtn">
               <img src="~assets/images/Edit.svg" alt="">
                Өзгерту
            </button>
            <button class="btn myBtn">
               <img src="~assets/images/Delete.svg" alt="">
                Жою
            </button>
       </div>
   </div>

</template>


<script>
    import download from '@/components/svg/download.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "@/assets/lottie_files/upload_materials/96551-hourglass.json";

    export default {
        components: {
            download,
            Lottie
        },
        data() {
            return {
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            }
        },
        props: ['material'],
    }

</script>


<style scoped lang="scss">
    .block {
        display: block;
        width: 100%;
        border-bottom: 1px solid #F0F0F0;

        &:first-child {
            border-top: 1px solid #F0F0F0;
        }
        font-family: Raleway;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: #888888;
        transition: 0.15s;
        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
        .top{
            padding: 15px 20px 20px;
            a{
                &:hover{
                    text-decoration: none;
                    span.title{
                        text-decoration: underline;
                    }
                }
            }
        }
        .bottom{
            padding: 20px;
            background: #F9F9F9;
            display: flex;
            .myBtn{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #1E63E9;
                border-radius: 26px;
                width: 135px;
                height: 40px;
                margin-right: 10px;
                &:last-child{
                    margin-right: 0;
                }
                color: #ffffff;
                font-size: 12px;
                font-weight: 600;
                img{
                    margin-right: 10px;
                }
            }
        }
        .h2 {
            font-size: 20px;
            font-weight: 600;
            line-height: 23px;
            color: #1E63E9;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            @media all and (max-width: 883px){
                font-size: 18px;
            }
            @media all and (max-width: 575px){
                font-size: 16px;
            }
            .title {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                div{
                    margin: 0 !important;
                }
                @media all and (max-width: 883px) {

                }

                @media all and (max-width: 767px) {
                    flex-direction: column;
                    align-items: flex-start;

                    img {
                        margin-bottom: 5px;
                    }
                }

            }

            .money {
                color: #03B113;
                min-width: 58px;
            }

            img {
                margin-right: 5px;
                width: 24px;
                height: 24px;
            }
        }

        .info {
            display: flex;

            @media all and (max-width: 883px) {
                flex-wrap: wrap;

                .name {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }

            .name {
                max-width: 250px;
                display: flex;

                span {
                    display: block;
                    margin-left: 5px;
                }
            }

            img {
                width: 16px;
                height: 16px;
            }

            .name,
            .date,
            .views {
                margin-right: 20px;
            }

        }
        .body{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-top: 10px;
        }
        .certBtns{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 10px;
            margin-top: 30px;
            @media all and (max-width: 767px){
                    grid-template-columns: auto;
                    grid-gap: 15px;
                }
            .certBtn{
                color: #ffffff;
                height: 40px;
                width: 250px;
                @media all and (max-width: 883px){
                    width: 170px;
                    line-height: 14px;
                }
                @media all and (max-width: 767px){
                    width: 250px;
                }
                background: #FF8B0D;
                border-radius: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 600;
                svg{
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }
        }
    }

    .green {
        background: #EDFFED;
        margin-top: 10px;
    }
    .light-green{
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #03B113;
        padding-right: 20px;
    }

</style>
