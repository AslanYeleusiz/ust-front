<template>
    <div>
    <deletePopup :isOpen="deletePopupOpen" :material_id="deleteMaterialId" @closePopup="deletePopupOpen=false"/>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex">
                        <NuxtLink to="/material" class="NuxtLink-item">
                            Материалдар
                        </NuxtLink>
                        <NuxtLink to="/menin-materialdarym" class="NuxtLink-item active">
                            Менің материалдарым
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
            <div class="cst-ct">
                <div class="header">
                    <div class="h3">Менің материалдарым</div>
                    <div class="desc">Бұл бетте сіз жариялаған барлық материалдар сайттан өшпей сақталып қалады. Өзіңіздің барлық материалдарыңызды осында тегін жариялап архив ретінде сақтауға болады</div>
                    <NuxtLink to='/zharialau' class="myBtn"><img src="~assets/images/add.svg" alt="">Материал жариялау</NuxtLink>
                </div>
            </div>
            <div class="advice">
                <div class="cst-ct">
                    <div class="categories">
                        <button v-for='(category, index) in categories' type="button" class="btn categories-item" :class='{active: categoryIsActive==index}' @click="categoryIsActive = index">
                            {{category}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="materials-list">
            <div class="cst-ct">
                <template v-if="categoryIsActive==0">
                    <myMaterials/>
                </template>
                <template v-else-if="categoryIsActive==1">
                    <zhinak />
                </template>
                <template v-else-if="categoryIsActive==2">
                    <qmg />
                </template>
            </div>
        </div>

    </div>
</template>


<script>
    import myMaterials from '@/components/materials/my_materials/myMaterials.vue'
    import zhinak from '@/components/materials/my_materials/zhinak.vue'
    import qmg from '@/components/materials/my_materials/qmg.vue'
    import deletePopup from '@/components/popups/deletePopup.vue'

    export default {
        head(){
            return {
                title: 'Менің материалдарым | Ustaz tilegi - Ұстаз тілегі Республикалық ұстаздар сайты',
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Ұстаз тілегі Республикалық ұстаздар сайты. Ұстаздарға видео сабақтар, онлайн олимпиадалар, сертификаттар, алғыс хаттар, грамоталар, дипломдар, сабақ жоспарлары'
                },{
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'онлайн олимпиада, ұстаз тілегі, уст кз, ustaz tilegi, ust kz, ұстаздар сайты, ашық сабақтар, сабақ жоспарлары, видео сабақтар, вебинарлар'
                },],

            }
        },

        components: {
            myMaterials,
            zhinak,
            qmg,
            deletePopup
        },
        data() {
            return {
                categories: ['Материалдарым', 'Жинақтарым', 'Дайын ҚМЖ-ларым'],
                categoryIsActive: 0,
                deletePopupOpen: false,
                deleteMaterialId: null,
            }
        },
        mounted() {
            this.$bus.$on('deleteMaterial', (e)=>{
                this.deletePopupOpen = true;
                this.deleteMaterialId = e;
            })
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
        background: #F8F8F8;

        .header {
            padding-top: 40px;

            .h3 {
                font-size: 24px;
                font-weight: 600;
                line-height: 30px;
                color: #000000;

                @media all and (max-width: 883px) {
                    font-size: 22px;
                    align-items: 27px;
                }

            }

            .desc {
                font-size: 16px;
                font-weight: 400;
                line-height: 23px;
                color: #888888;
                margin-top: 10px;

                @media all and (max-width: 883px) {
                    font-size: 14px;
                    line-height: 22px;
                }

            }

            .myBtn {
                background: #1E63E9;
                border-radius: 30px;
                font-size: 16px;
                font-weight: 500;
                padding: 13px 27px;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                margin-top: 20px;
                display: inline-block;
                &:hover{
                    text-decoration: none;
                }
                img {
                    margin-right: 5px;
                }
            }
        }

        .advice {
            margin-top: 40px;
            overflow-x: scroll;
            position: relative;
            transform: translateY(1px);
            z-index: 3;

            &::-webkit-scrollbar {
                display: none;
            }

            @media all and (max-width: 767px) {}

        }

        .categories {

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1px;
            background-color: #D6D6D6;
            background-image: linear-gradient(0deg, #D6D6D6 60%, #F9F9F9 40%);
            background-size: 40px 45px;

            @media all and (max-width: 767px) {}

            .categories-item {
                padding: 25px 0;
                background: #F9F9F9;
                border: 1px solid #F9F9F9;
                border-bottom: 1px solid #D6D6D6;
                font-size: 18px;
                font-weight: 600;
                line-height: 21px;
                color: #363636;

                @media all and (max-width: 1099px) {
                    padding: 20px 0;
                }

                @media all and (max-width: 883px) {
                    padding: 15px 5px;
                    font-size: 16px;
                    line-height: 19px;
                }

                @media all and (max-width: 767px) {
                    font-size: 14px;
                    width: 170px;
                }

            }

            .categories-item.active {
                background: #FFFFFF;
                border-radius: 6px 6px 0px 0px;
                border: 1px solid #D6D6D6;
                border-bottom: 1px solid #ffffff;
                margin: 0 -1px;
                position: relative;
                z-index: 3;
            }
        }
    }

    .materials-list {
        position: relative;
        background: #ffffff;
        border-top: 1px solid #D6D6D6;
        z-index: 2;
        padding-top: 30px;
        padding-bottom: 100px;

        hr {
            margin: 30px 0 0;
            padding-bottom: 10px;
        }


    }

    .block {
        margin: 10px 0 0 0;
    }

</style>
