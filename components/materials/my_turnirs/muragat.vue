<template>
    <div class="muragat">
        <div class="header">
            <div class="cst-ct">
                <div class="info">
                    Турнирге қатысқан жылды таңдаңыз
                </div>
                <div class="btnGroup">
                    <btnGroup @entered-category="enterYear" :category="filter" :placeholder='filter[0].name' type='2' />
                </div>
            </div>
        </div>
        <div class="list">
            <div class="cst-ct">
                <div v-if="loading==1" class="d-flex justify-content-center loader">
                    <div class="spinner-border" role="status"></div>
                </div>
                <div v-else>
                    <div v-show="tusers.length>0" v-for="month in activeMonth">
                        <div class="list_block">
                            <div class="h">{{months[month-1]}} айының қатысушылары</div>
                            <div class="info">Қатысушылар</div>
                            <div class="tuser_list">
                                <div v-for="(tuser, index) in sortedTuser(month)">
                                    <div class="tuser_block">
                                        <div class="numeric">{{index+1}}</div>
                                        <div class="body">
                                            <div class="name">{{tuser.fio_user}}</div>
                                            <div class="btn_list">
                                                <div class="cst_size_btn v1">
                                                    <editBtn text="Сертификатты жүктеу" img='3' />
                                                </div>
                                                <div class="cst_size_btn v2">
                                                    <editBtn text="Ата-анаға алғыс хатты жүктеу" img='3' />
                                                </div>
                                                <div class="cst_size_btn v3">
                                                    <editBtn text="Толығырақ" img='4' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="info zhetekshi">Жетекшілер</div>
                            <div class="tuser_list">
                                <div v-for="(tuser, index) in sortedZhetekshi(month)">
                                    <div class="tuser_block">
                                        <div class="numeric">{{index+1}}</div>
                                        <div class="body">
                                            <div class="name">{{tuser.zhetekshi_name}}</div>
                                            <div class="btn_list">
                                                <div class="cst_size_btn v1">
                                                    <editBtn text="Алғыс хатты жүктеу" img='3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="tusers.length==0" v-for="month in months">
                        <div class="list_block">
                            <div class="h">{{month}} айының қатысушылары</div>
                            <div class="note">
                                <img src="~assets/images/note-remove.png" alt="">
                                <div class="lite">Қатысушылар жоқ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import btnGroup from '@/components/forms/btnGroup.vue'
    import editBtn from '@/components/forms/editBtn.vue'

    export default {
        components: {
            btnGroup,
            editBtn
        },
        props: ['thisYear'],
        data() {
            return {
                filter: [{
                    name: ''
                }],
                years: [],
                year: 2022,
                loading: 1,
                months: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
                tusers: [],
                activeMonth: [],
                zhetekshiler: [],
            }
        },
        methods: {
            enterYear(res) {
                this.loading = 1
                this.activeMonth = []
                this.year = this.years[res]
                this.getData()
            },
            getData() {
                this.$api.$get('/turnirs/my_turnirs/muragat', {
                    params: {
                        year: this.year
                    }
                }).then((res) => {
                    console.log(res)
                    this.loading = 0
                    this.tusers = res.tuser
                    this.zhetekshiler = res.zhetekshi
                    this.validate()
                })
            },
            validate() {
                this.tusers.forEach((tuser) => {
                    if (this.activeMonth.indexOf(tuser.month) == -1) this.activeMonth.push(tuser.month)
                })
            },
            addYear(year) {
                this.filter[0].name = year + ' ЖЫЛ'
                this.years[0] = year
                this.year = year
                for (let n = year - 1; n >= 2014; n--) {
                    let fill = {
                        name: n + ' ЖЫЛ'
                    }
                    this.filter.push(fill)
                    this.years.push(n)
                }
            },
            sortedTuser(month) {
                let tusers = []
                this.tusers.forEach((tuser) => {
                    if (tuser.month == month) tusers.push(tuser)
                })
                return tusers
            },
            sortedZhetekshi(month) {
                let zhetekshi = []
                this.zhetekshiler.forEach((tuser) => {
                    if (tuser.month == month) zhetekshi.push(tuser)
                })
                return zhetekshi
            }

        },
        mounted() {
            this.addYear(this.thisYear)
            this.getData()
        }


    }

</script>


<style scoped lang="scss">
    .muragat {
        background: #F8F8F8;
        padding-bottom: 200px;
    }

    .header {
        padding-top: 20px;

        .info {
            color: #888888;
        }

        .btnGroup {
            margin-top: 10px;
        }
    }

    .list {
        margin-top: 30px;

        .loader {
            padding-top: 30px;
            padding-bottom: 380px;

            .spinner-border {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        .list_block {
            background: #FFFFFF;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 30px;

            .h {
                font-size: 24px;
                font-weight: 700;
                line-height: 30px;
                color: #000000;
            }

            .info {
                margin-top: 30px;
                font-size: 18px;
                font-weight: 400;
                line-height: 22px;
                color: #363636;
                &.zhetekshi{
                    margin-top: 50px;
                }
            }

            .tuser_list {
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                .tuser_block {
                    display: grid;
                    grid-template-columns: 70px 1fr;
                    border-radius: 10px;
                    overflow: hidden;

                    .numeric {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #363636;
                        color: #FF8B0D;
                        font-size: 24px;
                        font-weight: 800;
                    }

                    .body {
                        padding: 25px 15px;
                        background: #FFF1E4;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 20px;
                        align-items: center;


                        .name {
                            font-size: 18px;
                            font-weight: 600;
                            line-height: 21px;
                        }

                        .btn_list {
                            display: grid;
                            grid-template-columns: auto auto auto;
                            gap: 10px;
                            @media all and (max-width: 991px){
                                grid-template-columns: auto;
                            }

                        }

                    }
                }
            }
        }
    }

    .cst_size_btn {
        height: 40px;
        width: 100%;

        &.v1 {
            max-width: 200px;
        }

        &.v2 {
            max-width: 236px;
        }

        &.v3 {
            max-width: 160px;
        }

    }

    .note {
        padding: 50px 0 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .lite {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #363636;

    }

    @media all and (max-width: 883px) {
        .list .list_block .h {
            font-size: 22px;
            line-height: 28px;
        }

        .list .list_block .info {
            margin-top: 20px;
        }
        .list .list_block .tuser_list .tuser_block .body .name{
            width: 100%;
        }
    }

    @media all and (max-width: 767px) {
        .list .list_block .h {
            font-size: 20px;
            line-height: 25px;
        }

        .list .list_block .info {
            margin-top: 15px;
            font-size: 16px;
            line-height: 19px;
        }

        .list .list_block {
            padding: 30px 25px;
        }

        .header {
            padding-top: 30px;
        }

        .list .list_block .tuser_list .tuser_block .body .name {
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
        }
    }

    @media all and (max-width: 575px) {
        .list .list_block .h {
            font-size: 18px;
            line-height: 22px;
        }

        .list .list_block .info {
            margin-top: 10px;
        }

        .list .list_block .tuser_list .tuser_block .body .name {
            font-size: 15px;
            line-height: 18px;
        }

        .list .list_block .tuser_list .tuser_block {
            grid-template-columns: 60px 1fr;
        }
    }

    @media all and (max-width: 500px) {
        .list .list_block {
            padding: 25px 20px;
        }
    }

    @media all and (max-width: 448px) {
        .list .list_block {
            padding: 20px 15px;
        }
    }

    @media all and (max-width: 400px) {
        .list .list_block .tuser_list .tuser_block {
            grid-template-columns: 50px 1fr;
        }

        .list .list_block .tuser_list .tuser_block .body {
            padding: 15px 25px;
        }

        .list .list_block .tuser_list .tuser_block .body .name {
            font-size: 14px;
            line-height: 17px;
        }

        .list .list_block .h {
            font-size: 17px;
            line-height: 19px;
        }

        .list .list_block {
            padding: 20px 10px;
        }


    }

    @media all and (max-width: 380px) {
        .list .list_block .tuser_list .tuser_block {
            grid-template-columns: 40px 1fr;
        }

        .list .list_block .h {
            font-size: 16px;
            line-height: 18px;
        }

    }

</style>
