<template>
   <div class="block">
       <div class="top">
           <a target="_blank" :href="'word/'+material.lat_title+'-'+material.id+'.html'">
        <div class="h2">
            <div class="title">
               <div v-if="material.deleteorder == 1" class="d-flex aj-c">
                   <Lottie :width="34" :height="34" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                   <span class="light-green">Тексерілуде...</span>
               </div>
                <span class="title">{{material.title}}</span>
            </div>
            <div v-if='material.sell>0' class="money">{{material.sell}} тг</div>
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
                <img src="~assets/images/eye_materials.svg" alt="">
                <span> {{material.view}} </span>
            </div>
            <div class="downloads">
                <img src="~assets/images/import.svg" alt="">
                <span> {{material.download}} </span>
            </div>
            </div>
        </div>
        <div v-if="material.description != null" class="body">
            {{material.description}}
        </div>
        <div class="certBtns">
            <button class="btn certBtn" @click.prevent="$emit('certificate')">
                <download color="#ffffff"/>
                Сертификатты жүктеу / тегін
            </button>
            <button @click.prevent="$emit('getAlgys')" class="btn certBtn">
                <download color="#ffffff"/>
                Алғыс хатты жүктеу {{material.algys ? '' : '/ 1500 тг'}}
            </button>
            <button class="btn certBtn" @click="$emit('thankLetter')">
                <download color="#ffffff"/>
                Құрмет грамотасын жүктеу {{material.kurmet ? '' : '/ 2000 тг'}}
            </button>
            <button class="btn certBtn">
                Жинаққа жариялау
            </button>
            <button class="btn certBtn">
                Рецензия жаздыру / 4000 тг
            </button>
        </div>
       </div>
       <div class="bottom">
            <NuxtLink :to="'ozgertu/'+material.lat_title+'-'+material.id+'.html'" class="btn myBtn">
               <img src="~assets/images/Edit.svg" alt="">
                Өзгерту
            </NuxtLink>
            <button v-if="!material.deleteorder" class="btn myBtn" @click="$bus.$emit('deleteMaterial', material.id)">
               <img src="~assets/images/Delete.svg" alt="">
                Жою
            </button>
       </div>
   </div>

</template>


<script>
    import download from '@/components/svg/download.vue'
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "~/assets/lottie_files/upload_materials/96551-hourglass.json";

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
            padding: 30px 20px;
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
            grid-template-columns: auto auto auto;
            grid-gap: 10px;
            margin-top: 30px;
            @media all and (max-width: 1099px){
                display: flex;
                flex-wrap: wrap;
            }

            .certBtn{
                color: #ffffff;
                height: 40px;
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
                &:hover{
                    background: #8E5618;
                }
                &:active{
                    background: #CD6B00;
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
