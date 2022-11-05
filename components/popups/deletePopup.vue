<template>
    <transition name="fadePopup">
        <div v-show='isOpen' class="popupBg" @click="$emit('closePopup')">
            <transition name="fade">
                <div v-show='isOpen&&category==1' class="popupBlock" @click.stop>
                    <div class="exitBtn">
                        <button @click="$emit('closePopup')" class="btn exit"><img src="~assets/images/exitBtn.svg" alt=""></button>
                    </div>
                    <div class="cst-pd">
                        <div class="h2">Материалды жоюға сенімдісіз бе?</div>
                        <div class="desc">Материалмен қоса, материал статисткасы жойылады және материал үшін берілген марапаттарды жүктеу мүмкіндігі де қол жетімсіз болады.</div>
                        <label for="delete">Материалды жоюға өтініш жазыңыз</label>
                        <textarea v-model="message" name="delete" id="delete" cols="30" rows="6" class="form-control" placeholder="Материалды жоямын деп шешкен себебім..."></textarea>
                        <button @click="sendToDeleteMaterial" class="btn myBtn">
                            <img src="~assets/images/trash.svg" alt="">
                            Материалды жою
                        </button>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show='isOpen&&category==2' class="popupBlock cat2" @click.stop>
                    <div class="exitBtn">
                        <button @click="$emit('closePopup')" class="btn exit"><img src="~assets/images/exitBtn.svg" alt=""></button>
                    </div>
                    <div class="cst-pd">
                        <div class="green">Сіздің сұранысыңыз сәтті қабылданды. Сайттың әкімшілігі тексерген соң өзгертеді.</div>
                    </div>
                </div>
            </transition>

        </div>
    </transition>
</template>


<script>
    export default {
        props: ['isOpen', 'material_id'],
        data() {
            return {
                category: 1,
                message: null,
            }
        },
        methods: {
            sendToDeleteMaterial(){
                const token = this.$auth.strategy.token.get();
                this.$api.$post('/menin-materialdarym/'+this.material_id+'/delete', {
                    params: { deleteordertext: this.message }
                },{}).then((res)=>{
                    this.category = 2;
                    this.$bus.$emit('refreshMyMaterials');
                })
            }
        }
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

    .myBtn {
        background: #FF0000;
        border-radius: 26px;
        width: 100%;
        max-width: 250px;
        height: 50px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 500;
        margin-top: 20px;
    }

    .popupBg {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .popupBlock {
            position: absolute;
            width: 100%;
            max-width: 700px;
            background: #ffffff;
            max-height: 100vh;
            border-radius: 6px;
            &.cat2{
                width: 100%;
                max-width: 470px;
                .cst-pd{
                    padding: 0 50px 40px;
                }
            }
            .green{
                text-align: center;
            }
            .exitBtn {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 10px 10px 0 0;

                .exit {
                    padding: 0;
                }
            }

            .h2 {
                font-size: 24px;
                font-weight: 800;
            }

            .desc {
                font-size: 16px;
                font-weight: 400;
                margin-top: 10px;
                color: #888888;
            }

            label {
                font-size: 16px;
                font-weight: 400;
                line-height: 23px;
                margin-top: 20px;

            }

            .cst-pd {
                padding: 0 50px 50px;
            }

            ol {
                padding-left: 15px;
            }
        }
    }

</style>
