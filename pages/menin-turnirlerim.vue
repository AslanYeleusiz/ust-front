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
                    <button @click="active=1" class="btn vkladka" :class="{active:active}">Белсенді турнирлерім ({{turnirs.length}})</button>
                    <button @click="active=0" class="btn vkladka" :class="{active:!active}">Мұрағат ({{muragat_count}})</button>
                </div>
            </div>
        </div>
        <belsendi_turnirler v-if="active" :loading="loading" :turnirs="turnirs" />
        <muragat v-else :thisYear="thisYear" />
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "@/assets/lottie_files/info/animation_kpny1i8h.json"
    import headerLink from '@/components/header.vue'
    import belsendi_turnirler from '@/components/materials/my_turnirs/belsendi_turnirler.vue'
    import muragat from '@/components/materials/my_turnirs/muragat.vue'

    export default {
        components: {
            headerLink,
            Lottie,
            belsendi_turnirler,
            muragat
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
                active: 1,
                animationSpeed: 1,
                loading: 1,
                turnirs: [],
                muragat_count: null,
                thisYear: 2022,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            getData() {
                this.loading = 1
                this.$api.$get('/turnirs/my_turnirs/active').then((res) => {
                    console.log(res)
                    this.muragat_count = res.muragat_count
                    this.thisYear = res.thisYear
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
            this.getData();
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
