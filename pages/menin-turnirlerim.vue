<template>
    <div>
        <headerLink :head='head' active=1 />
        <div class="main">
            <div class="cst-ct">
                <div class="informer">
                    <Lottie :width="54" :height="54" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                    <div><b>{{$auth.user.username}}</b>, Назар аударыңыз: Бұл бетте қазан айында қатысқан барлық турнирлер тізімі жиналған. Өткен айдағы турнирлерді көру үшін мұрағат бөліміне өтіңіз</div>
                </div>
                <div class="h">Менің турнирлерім</div>
                <div class="vkladki">
                    <button class="btn vkladka active">Белсенді турнирлерім (12)</button>
                    <button class="btn vkladka">Мұрағат (8)</button>
                </div>
            </div>
        </div>
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
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "@/assets/lottie_files/info/animation_kpny1i8h.json";
    import * as notFoundData from "@/assets/lottie_files/not_found/82408-search.json";
    import headerLink from '@/components/header.vue'
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            headerLink,
            Lottie,
            cstBtn
        },
        data() {
            return {
                head: [{
                    link: '/turnirler',
                    name: 'Турнирлер',
                }, {
                    link: '/menin-turnirlerim',
                    name: 'Менің турнирлерім',
                }],
                defaultOptions: {
                    animationData: animationData
                },
                notFoundOption: {
                    animationData: notFoundData
                },
                animationSpeed: 1,
                loading: 1,
                turnirs: [],
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
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
            getData() {
                this.$api.$get('/turnirs/my_turnirs/active').then((res) => {
                    console.log(res)
                    if (res.tuser.length == 0) this.loading = 2;
                    else {
                        var mySet = new Array();
                        res.tuser.forEach((tuser) => {
                            tuser.turnir.user_count = 0
                        })
                        res.tuser.forEach((tuser) => {
                            if (!mySet.includes(tuser.turnir.id)) {
                                this.turnirs.push(tuser.turnir)
                                mySet.push(tuser.turnir.id)
                            }
                            this.turnirs[mySet.indexOf(tuser.turnir.id)].user_count++;
                        })
                        this.loading = 0
                    }
                })
            }
        },
        mounted() {
            this.getData()
        }
    }

</script>


<style scoped lang="scss">
    .main {
        .informer {
            margin-top: 20px;
            padding: 20px;
            display: grid;
            grid-template-columns: 54px auto;
            align-items: center;
            gap: 10px;
            background: #E6F7E8;
            border-radius: 6px;
            color: #03B113;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
        }

        .h {
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
            margin-top: 50px;
        }

        .vkladki {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 270px 270px;
            gap: 10px;
            max-width: 100%;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

            .vkladka {
                width: auto;
                height: 50px;
                font-size: 14px;
                font-weight: 600;
                line-height: 16px;
                border-radius: 6px 6px 0px 0px;

                &.active {
                    background: #F8F8F8;
                }
            }
        }
    }

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
                    display: flex;
                    align-items: center;
                    gap: 10px 30px;
                    flex-wrap: wrap;
                    font-family: Gilroy;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 17px;

                    .clock {
                        color: #03B113;
                    }

                    .clock,
                    .tusers {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }

                    .tusers {
                        color: #888888;
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

    @media all and (max-width: 883px) {
        .main .informer {
            grid-template-columns: 54px auto;
            font-size: 17px;
            line-height: 20px;
        }

        .list .block_list .block .head {
            font-size: 22px;
            line-height: 26px;
        }

        .list .block_list .block .body {
            margin-top: 20px;
        }

        .main .vkladki {
            grid-template-columns: 270px 210px;
        }
    }

    @media all and (max-width: 767px) {
        .main .informer {
            font-size: 16px;
            line-height: 19px;
        }

        .list .block_list .block .head {
            font-size: 20px;
            line-height: 24px;
        }

        .list .block_list .block .body {
            font-size: 13px;
            line-height: 16px;
        }

        .list .block_list {
            padding-top: 40px;
        }
    }

    @media all and (max-width: 575px) {
        .main .informer {
            font-size: 15px;
            line-height: 18px;
        }

        .list .block_list .block .head {
            font-size: 18px;
            line-height: 23px;
        }
    }

    @media all and (max-width: 474px) {
        .list .block_list .block .head {
            font-size: 17px;
            line-height: 22px;
        }

        .main .informer {
            font-size: 14px;
            line-height: 18px;
        }

        .list .block_list .block .body {
            font-size: 12px;
            line-height: 15px;
        }
    }

    @media all and (max-width: 410px) {
        .main .vkladki {
            grid-template-columns: 270px 165px;
        }
    }

    @media all and (max-width: 385px) {
        .list .block_list .block .head {
            font-size: 16px;
            line-height: 21px;
        }
    }

</style>
