<template>
    <div class="list">
        <div class="cst-ct">
            <div v-if="loading==1" class="d-flex justify-content-center loader">
                <div class="spinner-border" role="status"></div>
            </div>
            <div v-show="loading==2" class="not_found">
                <Lottie :width="150" :height="150" :options="notFoundOption" v-on:animCreated="handleAnimation" />
                <div class="head">Cіз ешқандай турнирге қатыспағансыз.</div>
                <div class="body">Қатысу үшін турнирді таңдаңыз</div>
                <NuxtLink to="/turnirler" class="cst_size_btn">
                    <cstBtn text="Таңдау" square=1 />
                </NuxtLink>
            </div>
            <div v-if="loading==0" class="block_list">
                <div v-for="(turnir, index) in turnirs" @click="startTurnir(index)" class="block">
                    <div class="head">{{turnir.month_name}} айының Республикалық {{turnir.name}} {{turnir.cat_name}} турнирі</div>
                    <div class="body">
                        <div class="clock">
                            <img src="~assets/images/clock2.svg" alt="">
                            <div class="date">{{'01.'+turnir.month+'.'+turnir.year+'-'+turnir.month_end+'.'+turnir.month+'.'+turnir.year}}</div>
                            <div class="day">{{turnir.day_is_left}} күн қалды</div>
                        </div>
                        <div class="tusers">
                            <img src="~assets/images/humans.svg" alt="">
                            <div class="tuser_count">Менің қатысушыларым: {{turnir.user_count}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as notFoundData from "@/assets/lottie_files/not_found/82408-search.json"
    import cstBtn from '@/components/forms/btn.vue'
    export default {
        components: {
            Lottie,
            cstBtn
        },
        props: ['loading', 'turnirs'],
        data() {
            return {
                notFoundOption: {
                    animationData: notFoundData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            startTurnir(id) {
                let slug = this.turnirs[id].lat_name + '-' + this.turnirs[id].id
                this.$api.$get('/turnirs/' + slug).then((res) => {
                    this.$router.push({
                        name: 'turnir-slug',
                        params: {
                            slug: slug,
                            turnir: res.turnir,
                            turnir_users: res.turnir_users,
                            zhetekshi: res.zhetekshi,
                        }
                    });
                });
            },
            handleAnimation: function(anim) {
                this.anim = anim;
            },
        },
    }

</script>


<style scoped lang="scss">
    .list {
        background: #F8F8F8;
        padding-bottom: 200px;

        .loader {
            padding-top: 30px;
            padding-bottom: 380px;

            .spinner-border {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        .block_list {
            padding-top: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .block {
                background: #FFFFFF;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
                border-radius: 10px;
                padding: 30px;

                &:hover {
                    outline: 1px solid #0045CB;
                    cursor: pointer;

                    .head {
                        color: #0045CB;
                        text-decoration: underline;
                    }
                }

                .head {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                    color: #1E63E9;
                }

                .body {
                    margin-top: 15px;
                    display: grid;
                    grid-template-columns: auto 1fr;
                    align-items: center;
                    grid-gap: 10px 30px;
                    flex-wrap: wrap;
                    font-family: Gilroy;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 17px;
                    @media all and (max-width: 883px){
                        grid-template-columns: 1fr;
                    }

                    .clock {
                        color: #03B113;
                    }

                    .clock,
                    .tusers {
                        display: grid;
                        align-items: center;
                        grid-template-columns: auto auto 1fr;
                        grid-gap: 10px;
                    }

                    .tusers {
                        color: #888888;
                        grid-template-columns: auto 1fr;
                    }
                }
            }
        }

        .not_found {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 115px;

            .head {
                font-size: 36px;
                font-weight: 600;
                line-height: 42px;
                color: #002A4D;
                margin-top: 20px;
            }

            .body {
                font-size: 24px;
                font-weight: 400;
                line-height: 28px;
                margin-top: 12px;
            }

            .cst_size_btn {
                width: 230px;
                height: 50px;
                margin-top: 40px;
            }
        }
    }

</style>
