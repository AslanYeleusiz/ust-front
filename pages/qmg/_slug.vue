<template>
    <div>
        <olimpiadaPopup :active="active" @close="active=0" />
        <header_kroshki :header="header" />
        <div class="header">
            <div class="cst-ct">
                <div class="wrap">
                    <div class="left">
                        <div class="h3">
                            {{bolim.title}}
                        </div>
                        <div class="list">
                            <img src="~assets/images/tick-circle.png" alt="">
                            <div class="li">Қазақ тілінде оқытатын мектептерге арналған</div><img src="~assets/images/tick-circle.png" alt="">
                            <div class="li">ҚР Білім және Ғылым министірлігінің стандарты бойынша жасалған</div><img src="~assets/images/tick-circle.png" alt="">
                            <div class="li">{{bolim.date}} арналған</div>
                        </div>
                        <cstBtn text="Сыныпты таңдау" class="cstBtn" />
                    </div>
                    <div class="right">
                        <img src="~assets/images/qmg.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="oth_main">
            <div class="cst-ct">
                <div class="h2">Тоқсанды және сыныптарды таңдаңыз</div>
                <div class="toqsan">
                    <div class="wrap">
                        <button v-for="(n,index) in 4" class="btn tBtn" :class="{active:user.toqsan==index}" @click="user.toqsan=index">{{n}}-тоқсан</button>
                    </div>
                    <div class="block">
                        <div class="left">
                            <div class="h3">ҚМЖ таңдаңыз</div>
                            <div class="answers">
                                <template v-for="(qmg, index) in qmgs">
                                    <template v-if="hasDownload(qmg) & qmg.toksan == user.toqsan+1 & qmg.type==1">
                                        <button @click="downloadFile(index)" class="btn download"><documentText /><span class="old">{{qmg.synyp_text}}</span><span class="new">Жүктеп алу</span></button>
                                    </template>
                                    <template v-else>
                                        <label v-if="qmg.toksan == user.toqsan+1 & qmg.type==1" class="answer">
                                            <input type="checkbox" v-on:input="calculate(index)" :value="index" v-model="user.qmg"><span>{{qmg.synyp_text}}</span>
                                        </label>
                                    </template>
                                </template>
                            </div>
                        </div>
                        <div class="right">
                            <div class="h3">Презентациялар + дидактика жинағы</div>
                            <div class="answers">
                                <template v-for="(qmg,index) in qmgs">
                                    <template v-if="hasDownload(qmg) & qmg.toksan == user.toqsan+1 & qmg.type==2">
                                        <button @click="downloadFile(index)" class="btn download"><documentText /><span class="old">{{qmg.synyp_text}}</span><span class="new">Жүктеп алу</span></button>
                                    </template>
                                    <template v-else>
                                        <label v-if="qmg.toksan == user.toqsan+1 & qmg.type==2" class="answer">
                                            <input type="checkbox" v-on:input="calculate(index)" :value="index" v-model="user.qmg"><span>{{qmg.synyp_text}}</span>
                                        </label>
                                    </template>

                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sell">
                    <div class="wrap">
                        <div class="type_sell">Бағасы:</div>
                        <div class="type_sell old">{{firstPrice}} тг.</div>
                    </div>
                    <div class="wrap">
                        <div class="type_sell">Жеңілдік:
                            <warninger text="Жеңілдіктер: 5 қмж - 10% жеңілдік, 20 қмж - 20% жеңілдік, 40 қмж-дан жоғары алсаңыз 30% жеңілдік" />
                        </div>
                        <div class="red">{{skidka ? '-'+skidka : skidka}}%</div>
                    </div>
                    <div class="wrap">
                        <div class="type_sell">Барлығы::</div>
                        <div class="res">{{LastPrice}} тг.</div>
                    </div>
                    <cstBtn v-if="loading" class="zhykteu" loading=1 />
                    <cstBtn v-else @click.native="buyNow()" class="zhykteu" text="Жүктеу" />
                    <div v-if="error" class="red-error">{{error}}</div>
                </div>
            </div>
        </div>
        <qmg :youtube="bolim.video" />
    </div>
</template>


<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import warninger from '@/components/forms/warninger.vue'
    import qmg from '@/components/landing/qmg.vue'
    import olimpiadaPopup from '@/components/popups/olimpiadaPopup.vue'
    import documentText from '@/components/svg/documentText.vue'

    export default {
        components: {
            header_kroshki,
            cstBtn,
            warninger,
            qmg,
            olimpiadaPopup,
            documentText
        },
        data() {
            return {
                header: [{
                        name: 'Дайын ҚМЖ',
                        link: '/material',
                    },
                    {
                        name: ''
                    },
                ],
                user: {
                    toqsan: 0,
                    qmg: [],
                },
                bolim: {
                    date: "",
                    doc: null,
                    enable: null,
                    id: null,
                    lang: null,
                    path: "",
                    skidka: null,
                    sub_id: null,
                    synyp_text: "",
                    title: "",
                    video: "",
                },
                qmgs: [],
                qmgOrders: [],
                firstPrice: 0,
                skidka: 0,
                LastPrice: 0,
                link: '',
                active: 0,
                loading: 0,
                error: '',
            }
        },
        mounted() {
            if (!this.$route.params.bolim) {
                this.getData();
            } else {
                this.bolim = this.$route.params.bolim
                this.header[1].name = this.$route.params.bolim.title
                this.qmgs = this.$route.params.qmg
                this.qmgOrders = this.$route.params.qmgOrders
            }
        },
        methods: {
            getData() {
                var slug = this.$route.params.slug
                this.$axios.$get('/word/qmg/' + slug).then((res) => {
                    console.log(res.data)
                    this.bolim = res.data.bolim
                    this.header[1].name = res.data.bolim.title
                    this.qmgs = res.data.qmg
                    this.qmgOrders = res.data.qmgOrder
                })
            },
            hasDownload(qmg) {
                let chec = false
                this.qmgOrders.forEach((e) => {
                    if (e.synyp != qmg.synyp) return
                    if (e.toqsan != qmg.toksan) return
                    if (e.type != qmg.type) return
                    chec = true
                })
                return chec
            },
            calculate(id) {
                var chec = false
                this.user.qmg.forEach((val, index) => {
                    if (val == id) {
                        chec = true
                        this.user.qmg.splice(index, 1)
                    }
                })
                if (!chec) this.user.qmg.push(id)

                let sum = 0
                this.user.qmg.forEach((val, index) => {
                    sum += this.qmgs[val].price
                })
                this.firstPrice = sum

                if (this.user.qmg.length >= 5) {
                    this.skidka = 10
                    if (this.user.qmg.length > 20) {
                        this.skidka = 20
                        if (this.user.qmg.length > 40) {
                            this.skidka = 30
                        }
                    }
                } else {
                    this.skidka = 0
                }

                this.LastPrice = this.firstPrice - this.firstPrice * this.skidka / 100
            },
            updateBalance(val) {
                const userToUpdate = {
                    ...this.$auth.user
                }
                userToUpdate.balance = val
                this.$auth.setUser(userToUpdate)
            },
            buyNow() {
                var arr = []
                this.user.qmg.forEach((e) => {
                    arr.push(this.qmgs[e].id)
                })
                console.log(arr)
                if (arr.length > 0) {
                    this.loading = 1
                    this.$api.$post('/word/qmg/buy', {
                        qmgs: arr,
                        price: this.LastPrice,
                        bolim_id: this.bolim.id,
                        bolimname: this.bolim.title
                    }).then((res) => {
                        console.log(res);
                        if (res.status == false) {
                            this.active = 5
                        } else {
                            this.active = 4
                            this.updateBalance(res.balance)
                            this.user.qmg.forEach((e) => {
                                var ob = {
                                    synyp: this.qmgs[e].synyp,
                                    toqsan: this.qmgs[e].toksan,
                                    type: this.qmgs[e].type,
                                }
                                this.qmgOrders.push(ob)
                            })
                            this.clearFeedBack()
                        }

                        this.loading = 0
                    }).catch((err) => {
                        console.log(err)
                        this.loading = 0
                    })
                } else this.error = 'ҚМЖ таңдаңыз.'



            },
            downloadFile(index){
                console.log(index);
            },
            clearFeedBack() {
                this.user.qmg = []
                this.firstPrice = 0
                this.skidka = 0
                this.LastPrice = 0
            }
        }

    }

</script>


<style scoped lang="scss">
    .header {
        padding-top: 40px;
        padding-bottom: 50px;

        /*        border-bottom: 1px solid #D6D6D6;*/
        .h3 {
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
        }

        .wrap {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 30px;

            .list {
                margin-top: 20px;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 0 8px;

                .li {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    color: #363636;
                }
            }

            .cstBtn {
                width: 225px;
                height: 50px;
                margin-top: 30px;
            }
        }
    }

    .oth_main {
        padding: 70px 0;
        border-top: 1px solid #D6D6D6;
        border-bottom: 1px solid #D6D6D6;
        background: #F9F9F9;

        .h2 {
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            text-align: center;
        }

        .toqsan {
            margin-top: 30px;

            .wrap {
                position: relative;
                display: flex;
                gap: 10px;
                z-index: 3;
                justify-content: center;
                overflow-x: scroll;

                &::-webkit-scrollbar {
                    display: none;
                }

                .tBtn {
                    width: 140px;
                    height: 57px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    background: #F4F4F4;
                    border-radius: 6px 6px 0px 0px;
                    border-top: 1px solid #CBCBCB;
                    border-right: 1px solid #CBCBCB;
                    border-left: 1px solid #CBCBCB;
                    border-bottom: 1px solid #CBCBCB;

                    &.active {
                        background: #ffffff;
                        border-bottom: 1px solid #ffffff;
                    }
                }
            }

            .block {
                position: relative;
                z-index: 2;
                transform: translateY(-1px);
                background: #ffffff;
                border: 1px solid #CBCBCB;
                padding: 30px 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;

                .h3 {
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 21px;
                    text-align: left;
                    color: #000000;

                }

            }

            .answers {
                margin-top: 20px;
                display: flex;
                gap: 10px 15px;
                flex-wrap: wrap;
            }

            .download {
                svg {
                    width: 22px;
                    height: 22px;
                    stroke: #1E63E9;
                    transition: 0.2s linear;
                }
                position: relative;

                width: 135px;
                padding: 10px;
                display: flex;
                background: #F8F8F8;
                gap: 8px;
                color: #000000;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                text-align: left;
                transition: 0.2s linear;
                .old{
                    position: absolute;
                    padding-left: 30px;
                }
                .new{
                    opacity: 0;
                }
                .old, .new {
                    transition: opacity 0.2s linear;
                }

                &:hover {
                    cursor: pointer;
                    background: #1E63E9;
                    color: #ffffff;
                    .old{opacity: 0;}
                    .new{opacity: 1;}
                    svg {
                        stroke: #ffffff;
                    }
                }
            }

            .answer {
                width: 135px;
                padding: 10px;
                background: #F8F8F8;
                border-radius: 4px;
                display: flex;
                align-items: center;

                &:hover {
                    cursor: pointer;
                    background: #EFF3FF;
                }

                input {
                    position: absolute;
                    opacity: 0;
                    z-index: -1;
                }

                span {
                    display: inline-flex;
                    align-items: center;
                    user-select: none;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 19px;
                }

                span::before {
                    content: '';
                    display: inline-block;
                    position: relative;
                    flex-shrink: 0;
                    flex-grow: 0;
                    margin-right: 10px;
                    background-position: 55% 50%;
                    background-size: 55%;
                    background-repeat: no-repeat;
                    background-color: #ffffff;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #1E63E9;
                    border-radius: 6px;
                }

                input:checked+span::before {
                    background-image: url(~/assets/images/nike.svg);
                    background-color: #1E63E9;
                }
            }
        }

        .sell {
            width: 300px;
            margin: 20px 0 0 auto;

            .wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 18px;
                font-weight: 400;
                line-height: 18px;

                &:not(:first-child) {
                    margin-top: 10px;
                }

                .type_sell {
                    padding: 0;
                    color: #888888;
                }

                .old {
                    text-decoration-line: line-through;
                }

                .red {
                    color: #FF0000;
                    font-weight: 600;
                }

                .res {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 24px;
                    color: #000000;

                }
            }

            .red-error {
                position: absolute;
                color: #ff0000;
                transform: translateY(5px);
                font-size: 16px;
                line-height: 18px;
            }

            .zhykteu {
                margin-top: 20px;
                height: 40px;
            }
        }
    }

    @media all and (max-width: 991px) {
        .header .h3 {
            font-size: 22px;
            line-height: 26px;
        }

        .header .wrap .list .li {
            font-size: 15px;
        }

        .oth_main .h2 {
            font-size: 22px;
            font-weight: 700;
            line-height: 26px;
            text-align: center;
        }


    }

    @media all and (max-width: 767px) {
        .header .wrap {
            grid-template-columns: 1fr;
        }

        .left {
            grid-row: 2;
        }

        .right {
            text-align: center;
        }

        .oth_main .sell .zhykteu {
            height: 50px;
        }

        .oth_main .toqsan .block {
            grid-template-columns: 1fr;
            grid-gap: 40px;
        }

        .oth_main .sell {
            width: 100%;
            max-width: 375px;
            margin: 40px auto 0;
        }

    }

    @media all and (max-width: 500px) {
        .oth_main .toqsan .wrap .tBtn {
            min-width: 140px;
        }

        .oth_main .toqsan .wrap {
            justify-content: flex-start;
        }

    }

</style>
