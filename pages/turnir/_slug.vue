<template>
    <div>
        <turnirPopup :active="active" @close="active=0" :tuser="tuser" @testTapsyru="testTapsyru" />
        <confirmedPopup />
        <header_kroshki :header="header" />
        <div class="main">
            <div class="cst-ct">
                <div class="head">
                    <h3><span v-if="turnir.name">{{turnir.month}} айының Республикалық {{turnir.name}} {{turnir.cat_name}} турнирі</span></h3>
                    <div class="qatysushy">
                        <div class="pre">Қатысушылар</div>
                        <template v-for="(form, index) in forms">
                            <div v-if="form.editUser" class="block">
                                <div class="body">
                                    <cstInput v-model="form.fio_ozgertu" @keyup.enter.native="fio_update(form.id, index)" stringPlaceholder="Қатысушының толық аты-жөні" />
                                    <div class="wrap">
                                        <saveBtn v-if="form.loading" loading=1 />
                                        <saveBtn v-else @click.native="fio_update(form.id, index)" text="Сақтау" />
                                        <saveBtn @click.native="fio_update_cencel(index)" text="Болдырмау" red=1 />
                                    </div>
                                </div>
                                <div class="numeric">
                                    <div class="num">{{index+1}}</div>
                                </div>
                            </div>
                            <div v-else class="block">
                                <div class="body">
                                    <div class="name_wrap">
                                        <div class="name">{{form.fio_user}}</div>
                                        <div v-if="form.go" class="score">Балл: {{form.durys+form.kate}}/{{form.durys}}</div>
                                    </div>
                                    <div v-if="form.go" class="wrap grid">
                                        <editBtn :text="form.diplom+' дәрежелі дипломды жүктеу'+(form.success ? '' : ' - '+form.price+' тг')" img='3' />
                                        <editBtn @click.native="details(index)" text="Толығырақ" img='4' />
                                    </div>
                                    <div v-if="!form.success" class="wrap">
                                        <editBtn v-if="form.update_count>0" @click.native="form.editUser=1" text="Өзгерту" img='1' />
                                        <editBtn @click.native="deleteUser(form.id,index)" text="Жою" img='2' />
                                        <div v-if="form.chance>0" class="cst_size_btn">
                                            <cstBtn v-if="form.loading" loading=1 radian=1 />
                                            <cstBtn v-else @click.native="testTapsyru(form.id, index)" :text="form.go ? 'Қайта тапсыру' : 'Тест тапсыру'" radian=1 />
                                        </div>
                                    </div>
                                </div>
                                <div class="numeric">
                                    <div class="num">{{index+1}}</div>
                                </div>
                            </div>
                        </template>
                        <div v-if="addUser" class="block">
                            <div class="body add">
                                <cstInput v-model="newName" stringPlaceholder="Қатысушының толық аты-жөні" @keyup.enter.native="addNewuser()" />
                                <div class="wrap">
                                    <saveBtn v-if="loading" loading=1 />
                                    <saveBtn v-else @click.native="addNewuser()" text="Сақтау" />

                                    <saveBtn @click.native="cencelNewAddUser()" text="Болдырмау" red=1 />
                                </div>
                            </div>
                            <div class="numeric">
                                <div class="num">{{forms.length+1}}</div>
                            </div>
                        </div>
                        <div v-else class="addNewUser">
                            <div class="cst_size_btn">
                                <cstBtn @click.native="addUser=1" text="Қосу" radian=1 img="add.svg" />
                            </div>
                            <div class="info">
                                Бірнеше қатысушыны қосуға болады
                            </div>
                        </div>
                    </div>
                    <div class="qatysushy">
                        <div class="pre">Жетекшілер</div>
                        <template v-for="(form, index) in zhetekshi">
                            <div v-if="form.editUser" class="block">
                                <div class="body">
                                    <cstInput v-model="form.fio_ozgertu" @keyup.enter.native="zh_fio_update(form.id, index)" stringPlaceholder="Жетекшінің толық аты-жөні" />
                                    <div class="wrap">
                                        <saveBtn v-if="form.loading" loading=1 />
                                        <saveBtn v-else @click.native="zh_fio_update(form.id, index)" text="Сақтау" />
                                        <saveBtn @click.native="zh_fio_update_cencel(index)" text="Болдырмау" red=1 />
                                    </div>
                                </div>
                                <div class="numeric">
                                    <div class="num">{{index+1}}</div>
                                </div>
                            </div>
                            <div v-else class="block">
                                <div class="body">
                                    <div class="name_wrap">
                                        <div class="name">{{form.zhetekshi_name}}</div>
                                        <div class="score"></div>
                                    </div>
                                    <div v-if="!form.success" class="wrap zhetekshi">
                                        <editBtn v-if="form.update_count>0" @click.native="form.editUser=1" text="Өзгерту" img='1' />
                                        <editBtn text="Алғыс хатты жүктеу" img='3' />
                                    </div>
                                </div>
                                <div class="numeric">
                                    <div class="num">{{index+1}}</div>
                                </div>
                            </div>
                        </template>
                        <div v-if="zh_addUser" class="block">
                            <div class="body add">
                                <cstInput v-model="zh_newName" stringPlaceholder="Жетекшінің толық аты-жөні" @keyup.enter.native="zh_addNewuser()" />
                                <div class="wrap">
                                    <saveBtn v-if="loading" loading=1 />
                                    <saveBtn v-else @click.native="zh_addNewuser()" text="Сақтау" />

                                    <saveBtn @click.native="cencelNewAddUser()" text="Болдырмау" red=1 />
                                </div>
                            </div>
                            <div class="numeric">
                                <div class="num">{{forms.length+1}}</div>
                            </div>
                        </div>
                        <div v-else class="addNewUser">
                            <div class="cst_size_btn">
                                <cstBtn @click.native="zh_addUser=1" text="Қосу" radian=1 img="add.svg" />
                            </div>
                            <div class="info">
                                Бірнеше жетекші қосуға болады
                            </div>
                        </div>
                    </div>
                </div>
                <turnirLanding @openPopup="openPopup" />
            </div>
        </div>
    </div>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import saveBtn from '@/components/forms/saveBtn.vue'
    import editBtn from '@/components/forms/editBtn.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'
    import turnirLanding from '@/components/landing/turnir.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import turnirPopup from '@/components/popups/turnirPopup.vue'

    export default {
        components: {
            cstInput,
            saveBtn,
            editBtn,
            cstBtn,
            confirmedPopup,
            turnirLanding,
            header_kroshki,
            turnirPopup
        },
        data() {
            return {
                header: [{
                    name: 'Турнир',
                    link: '/turnirler'
                }, {
                    name: '',
                }],
                forms: [],
                zhetekshi: [],
                active: 0,
                newName: '',
                addUser: 0,
                loading: 0,
                zh_newName: '',
                zh_addUser: 0,
                turnir: {
                    id: null,
                    month: '',
                    name: '',
                },
                tuser: {
                    fio_user: "",
                    turnir_name: "",
                    dengei: 'Республикалық',
                    cat_name: '',
                    durys: null,
                    chance: null,
                    date: "",
                    date_end: "",
                    kate: null,
                    success: null,
                }
            }
        },
        methods: {
            fio_update(id, index) {
                this.forms[index].loading = 1
                const form = {
                    fio_user: this.forms[index].fio_ozgertu
                }
                this.$api.$post('/turnirs/user/' + id + '/update', form).then((res) => {
                    this.forms[index].fio_user = res.turnir_user.fio_user
                    this.forms[index].update_count = res.turnir_user.update_count
                    this.forms[index].editUser = 0
                    this.forms[index].loading = 0
                }).catch((err) => {
                    this.forms[index].loading = 0
                })
            },
            fio_update_cencel(id) {
                this.forms[id].fio_ozgertu = this.forms[id].fio_user
                this.forms[id].editUser = 0
            },
            zh_fio_update(id, index) {
                this.zhetekshi[index].loading = 1
                const form = {
                    zhetekshi_name: this.zhetekshi[index].fio_ozgertu
                }
                this.$api.$post('/turnirs/zhetekshi/' + id + '/update', form).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.warn(err);
                })
            },
            zh_fio_update_cencel(id) {
                this.zhetekshi[id].fio_ozgertu = this.zhetekshi[id].fio_user
                this.zhetekshi[id].editUser = 0
            },
            openPopup(id) {
                this.active = id
            },
            cencelNewAddUser() {
                this.newName = ''
                this.zh_newName = ''
                this.addUser = 0
                this.zh_addUser = 0
            },
            testTapsyru(id, index) {
                this.forms[index].loading = 1
                this.$api.$get('/turnirs/' + this.$route.params.slug + '/test').then((res) => {
                    this.$router.push({
                        name: 'turnir-test',
                        params: {
                            questions: res.questions,
                            question_count: res.questions.length,
                            turnir: this.turnir,
                            fio_user: this.forms[index].fio_user,
                            id_user: id,
                        }
                    });
                    setTimeout(() => {
                        this.forms[index].loading = 0
                    }, 500)
                    console.log(res.questions.length);
                })
                //
            },
            addNewuser() {
                this.loading = 1
                const form = {
                    fio_user: this.newName,
                    turnir_id: this.turnir.id,
                    turnir_name: this.turnir.name
                }
                this.$api.$post('/turnirs/user/store', form).then((res) => {
                    console.log(res);
                    const user = res.turnir_user
                    user['editUser'] = 0
                    user['fio_ozgertu'] = res.turnir_user.fio_user
                    user['loading'] = 0
                    this.loading = 0
                    this.forms.push(user)
                    //                    this.$bus.$emit('successPopup')  соңында косамын
                    this.cencelNewAddUser()
                }).catch((err) => {
                    this.loading = 0
                })
            },
            zh_addNewuser() {
                this.loading = 1
                if (this.forms.length / 4 <= this.zhetekshi.length) {
                    // ӘР КАТЫСУШЫНЫН success ТЕКСЕРЫП ОШИБКА ШЫГАРУ КК
                    this.active = 2
                } else {
                    const form = {
                        zhetekshi_name: this.zh_newName,
                        turnir_id: this.turnir.id
                    }
                    this.$api.$post('/turnirs/zhetekshi/store', form).then((res) => {
                        const zhetekshi = res.zhetekshi
                        zhetekshi['fio_ozgertu'] = zhetekshi['zhetekshi_name']
                        zhetekshi['loading'] = 0
                        zhetekshi['editUser'] = 0
                        this.zhetekshi.push(zhetekshi);
                        console.log(res)
                    })

                }
                this.cencelNewAddUser();
                this.loading = 0
            },
            deleteUser(id, index) {
                this.$dialog.open({
                    message: 'Әрекетіңізді растайсыз ба?',
                    resolver: (async (result) => {
                        try {
                            const res = await result;
                            this.$api.$get('/turnirs/user/' + id + '/delete').then((res) => {
                                this.forms.splice(index, 1);
                                this.$bus.$emit('successPopup')
                            })
                        } catch (error) {
                            console.warn(error);
                        }
                    }),
                });
            },
            details(index) {
                this.tuser = this.forms[index];
                this.tuser.dengei = "Республикалық"
                this.tuser.turnir = this.turnir
                this.tuser.index = index
                switch(this.turnir.category){
                    case 1: {this.tuser.turnir.cat_name = "Тәрбиеші"; break;}
                    case 2: {this.tuser.turnir.cat_name = "Ұстаз"; break;}
                    case 3: {this.tuser.turnir.cat_name = "Оқушы"; break;}
                    case 4: {this.tuser.turnir.cat_name = "Студент"; break;}
                }
                this.active = 1;
            },
            getData() {
                this.$api.$get('/turnirs/' + this.$route.params.slug).then((res) => {
                    this.turnir = res.turnir;
                    this.forms = res.turnir_users;
                    this.header[1].name = res.turnir.month + ' айының Республикалық ' + res.turnir.name + ' ' + res.turnir.cat_name + ' турнирі'
                    this.zhetekshi = res.zhetekshi;
                    console.log(res)
                });
            }
        },
        mounted() {
            if (this.$route.params.turnir == undefined)
                this.getData()
            else {
                this.turnir = this.$route.params.turnir
                this.forms = this.$route.params.turnir_users
                this.header[1].name = this.$route.params.turnir.month + ' айының Республикалық ' + this.$route.params.turnir.name + ' ' + this.$route.params.turnir.cat_name + ' турнирі'
                this.zhetekshi = this.$route.params.zhetekshi
            }
        }
    }

</script>


<style scoped lang="scss">
    .main {
        padding-bottom: 100px;

        .head {
            margin-top: 60px;

            @media all and (max-width: 767px) {
                margin-top: 50px;
            }

            h3 {
                font-size: 24px;
                font-weight: 700;
                line-height: 30px;

                @media all and (max-width: 767px) {
                    font-size: 22px;
                    line-height: 25px;
                    margin: 0;
                }

                @media all and (max-width: 452px) {
                    font-size: 20px;
                    line-height: 23px;
                }


            }

            .qatysushy {
                background: #F8F8F8;
                border-radius: 10px;
                padding: 30px;
                margin-top: 30px;


                .pre {
                    font-size: 18px;
                    padding-bottom: 20px;

                    @media all and (max-width: 767px) {
                        font-size: 16px;
                        padding-bottom: 18px;
                    }

                }

                .block {
                    background: #FFFFFF;
                    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
                    border-radius: 6px;
                    position: relative;
                    margin-top: 10px;

                    .numeric {
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: #9F9F9F;
                        border-radius: 4px;
                        width: 45px;
                        height: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 65px;
                            height: 65px;
                            background: #ffffff;
                            transform: rotate(45deg) translate(36px, 1px);
                            z-index: 3;
                        }

                        .num {
                            transform: translate(-8px, -8px);
                            font-size: 16px;
                            font-weight: 800;
                            line-height: 19px;
                            color: #FFFFFF;
                        }
                    }

                    .body {
                        position: relative;
                        padding: 15px 20px 15px 60px;
                        z-index: 5;

                        @media all and (max-width: 767px) {
                            padding: 20px 40px 30px 40px;
                        }

                        @media all and (max-width: 452px) {
                            padding: 20px 20px 30px;
                        }

                        &.add {
                            @media all and (max-width: 452px) {
                                padding-top: 40px;
                            }

                        }

                        .wrap {
                            display: grid;
                            margin-top: 10px;
                            grid-gap: 10px;
                            grid-template-columns: 135px 135px auto;
                            grid-template-rows: 40px;

                            @media all and (max-width: 883px) {
                                grid-template-columns: 1fr 1fr;
                                grid-template-areas: 'a b''c c';
                            }

                            .cst_size_btn {
                                width: 100%;
                                max-width: 280px;
                                height: 40px;

                                @media all and (max-width: 883px) {
                                    max-width: 100%;
                                    grid-area: c;
                                }


                            }

                            .cst_edit_btn {
                                width: 100%;
                                max-width: 135px;
                                height: 40px;
                            }

                            &.grid {
                                display: grid;
                                grid-gap: 10px;
                                grid-template-columns: 280px 190px;
                                grid-template-rows: 40px;

                                @media all and (max-width: 991px) {
                                    grid-template-columns: 1fr;
                                    grid-template-rows: 40px 40px;
                                }

                                @media all and (max-width: 883px) {
                                    grid-template-columns: 1fr;
                                    grid-template-areas: none;
                                }

                            }

                            &.zhetekshi {
                                grid-template-columns: 240px 240px;

                                @media all and (max-width: 883px) {
                                    grid-template-columns: 1fr;
                                    grid-template-areas: none;
                                    grid-template-rows: 40px 40px;
                                }

                            }

                        }

                        .name {
                            font-size: 16px;
                            font-weight: 600;
                            line-height: 19px;
                            padding-bottom: 5px;

                            @media all and (max-width: 767px) {
                                text-align: center;
                            }

                        }

                        .name_wrap {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            grid-gap: 20px;

                            @media all and (max-width: 767px) {
                                display: grid;
                                grid-template-columns: 1fr;
                                grid-template-areas: 'b''a';
                                grid-gap: 30px;
                            }

                            .score {
                                font-size: 16px;
                                font-weight: 600;
                                line-height: 19px;
                                color: #888888;
                                text-align: right;

                                @media all and (max-width: 767px) {
                                    grid-area: b;
                                }

                            }
                        }
                    }
                }

                .addNewUser {
                    margin-top: 40px;
                    display: grid;
                    align-items: center;
                    grid-gap: 20px;

                    @media all and (max-width: 767px) {
                        flex-direction: column-reverse;
                    }

                    .cst_size_btn {
                        width: 220px;
                        height: 40px;

                        @media all and (max-width: 767px) {
                            width: 100%;
                            max-width: 280px;
                        }

                    }

                    .info {
                        font-size: 16px;
                        line-height: 16px;
                        color: #888888;
                        text-align: center;
                    }
                }

            }
        }
    }

</style>
<style lang="scss">
    .main {
        .qatysushy {
            input {
                height: 40px;
            }
        }
    }

    .addNewUser {
        button {
            font-size: 12px;
            font-weight: 600;
            line-height: 15px;

            img {
                width: 20px;
                height: 20px;
            }
        }
    }

    .main .head .qatysushy .block .body .wrap .cst_btn {
        @media all and (max-width: 883px) {
            width: 100%;
        }

    }

</style>
