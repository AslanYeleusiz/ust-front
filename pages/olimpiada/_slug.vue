<template>
    <div>
        <olimpiadaPopup :active="active" @close="active=0" :tuser="o_user" />
        <confirmedPopup />
        <header_kroshki :header="header" />
        <div class="main">
            <div class="cst-ct">
                <div v-if="!bagyt.o_bagyty" class="header">
                    <b-skeleton width="75%" height="25px"></b-skeleton>
                </div>
                <div v-else class="header">
                    {{bagyt.o_bagyty}}
                </div>
                <div class="userBlock">
                    <div class="prev">Қатысушылар</div>
                    <div class="users">
                        <template v-if="preload">
                            <div class="text-center">
                                <b-spinner variant="primary" label="Text Centered"></b-spinner>
                            </div>
                        </template>
                        <template v-else v-for="(o_user, index) in o_users">
                            <div v-if="o_user.edit" class="block edit">
                                <div class="body">
                                    <div class="input-wrap">
                                        <cstInput class="cst_input_40 cst_fix_span_input" stringPlaceholder="Қатыsсушының толық аты-жөні" @keyup.enter.native="editUser(index)" v-model="o_user.o_katysushy_fio"
                                        @click.native="o_user.error=''" :danger="o_user.error" :dangerText="o_user.error" />
                                        <div v-if="bagyt.o_katysushy_idd == 3" class="cst-size-btn">
                                            <btnGroup :category='classes' :placeholder="o_user.o_tury.synyp+' сынып'" @entered-category="(e)=>{enteredEditClass(index, e)}" />
                                        </div>
                                    </div>
                                    <div class="wrap">
                                        <saveBtn v-if="o_user.loading" loading=1 />
                                        <saveBtn v-else @click.native="editUser(index)" text="Сақтау" />
                                        <saveBtn @click.native="o_user.edit=0" text="Болдырмау" red=1 />
                                    </div>
                                    <div class="numeric">
                                        <div class="num">{{index+1}}</div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="block">
                                <div class="body">
                                    <div class="name-wrap">
                                        <div class="name">{{o_user.o_katysushy_fio}}</div>
                                        <div v-if="o_user.tizim" class="ball">Балл: 20/{{o_user.tizim.result}}</div>
                                    </div>
                                    <div v-if="o_user.bari_tapsirdy" class="wrap-go">
                                        <editBtn text="3 дәрежелі дипломды жүктеу" img='3' />
                                        <editBtn @click.native="moreResults(index)" text="Толығырақ" img='4' />
                                    </div>
                                    <div v-else class="wrap-edit">
                                        <div class="grid">
                                            <editBtn v-if="o_user.update_count>0" @click.native="o_user.edit=1" text="Өзгерту" img='1' />
                                            <editBtn v-if="!o_user.success" @click.native="confirmDeleteUser(index)" text="Жою" img='2' />
                                        </div>
                                        <div class="code">
                                            Қатысу коды:<br><b>{{o_user.obwcode}}</b>
                                        </div>
                                        <div class="cst_size_btn">
                                            <cstBtn v-if="o_user.loading" loading=1 radian=1 />
                                            <cstBtn v-else-if="o_user.success" @click.native="startTest" text="Тест тапсыру" radian=1 />
                                            <cstBtn v-else @click.native="olimpTolem(index)" :text="'Тест тапсыру - '+o_user.price+' тг'" radian=1 />
                                        </div>
                                    </div>
                                    <div class="numeric">
                                        <div class="num">{{index+1}}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div v-if="addNewUser" class="block edit">
                            <div class="body">
                                <div class="input-wrap">
                                    <cstInput class="cst_input_40 cst_fix_span_input" stringPlaceholder="Қатысушының толық аты-жөні" @keyup.enter.native="saveNewUser" v-model="newUserName" :danger="errorNewUserName" :dangerText="errorNewUserName" />
                                    <div v-if="bagyt.o_katysushy_idd == 3" class="cst-size-btn">
                                        <btnGroup :category='classes' placeholder='Сыныбы' @entered-category="enteredClass" />
                                    </div>
                                </div>
                                <div class="wrap">
                                    <saveBtn v-if="loading" loading=1 />
                                    <saveBtn v-else @click.native="saveNewUser" text="Сақтау" />
                                    <saveBtn @click.native="addNewUser=0" text="Болдырмау" red=1 />
                                </div>
                                <div class="numeric">
                                    <div class="num">{{newUserNomer}}</div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="addNewUser">
                            <div class="cst_size_btn">
                                <cstBtn @click.native="addNewUser=1" text="Қосу" radian=1 img="add.svg" />
                            </div>
                            <div class="info">
                                Бірнеше қатысушыны қосуға болады
                            </div>
                        </div>

                    </div>
                </div>
                <div class="userBlock zhetekshi">
                    <div class="prev">Жетекшілер</div>
                    <div class="users">
                        <template v-for="(zhetekshi, index) in zhetekshiler">
                            <div v-if="zhetekshi.edit" class="block edit">
                                <div class="body">
                                    <div class="solo-wrap">
                                        <cstInput class="cst_input_40" stringPlaceholder="Қатысушының толық аты-жөні" />
                                    </div>
                                    <div class="wrap">
                                        <saveBtn v-if="zhetekshi.loading" loading=1 />
                                        <saveBtn v-else text="Сақтау" />
                                        <saveBtn @click.native="zhetekshi.edit=0" text="Болдырмау" red=1 />
                                    </div>
                                    <div class="numeric">
                                        <div class="num">{{index+1}}</div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="block">
                                <div class="body">
                                    <div class="name">{{zhetekshi.name}}</div>
                                    <div class="wrap-zhetekshi">
                                        <editBtn @click.native="zhetekshi.edit=1" text="Өзгерту" img='1' />
                                        <editBtn text="Алғыс хатты жүктеу" img='3' />
                                    </div>
                                    <div class="numeric">
                                        <div class="num">{{index+1}}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div v-if="addNewZhetekshi" class="block edit">
                            <div class="body">
                                <div class="solo-wrap cst_fix_span_input">
                                    <cstInput
                                        @keyup.enter.native="setNewZhetekshi"
                                        v-model="newZhetekshiName"
                                        @click.native="errorNewZhetekshiName=''"
                                        class="cst_input_40"
                                        stringPlaceholder="Қатысушының толық аты-жөні" :danger="errorNewZhetekshiName" :dangerText="errorNewZhetekshiName" />
                                </div>
                                <div class="wrap">
                                    <saveBtn v-if="loading" loading=1 />
                                    <saveBtn v-else @click.native="setNewZhetekshi" text="Сақтау" />
                                    <saveBtn @click.native="addNewZhetekshi=0" text="Болдырмау" red=1 />
                                </div>
                                <div class="numeric">
                                    <div class="num">{{zhetekshiler.length + 1}}</div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="addNewUser">
                            <div class="cst_size_btn">
                                <cstBtn @click.native="addNewZhetekshi=1" text="Қосу" radian=1 img="add.svg" />
                            </div>
                            <div class="info">
                                Бірнеше қатысушыны қосуға болады
                            </div>
                        </div>
                    </div>
                </div>
                <olimpLanding @openPopup="openPopup" />
            </div>
        </div>
    </div>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import saveBtn from '@/components/forms/saveBtn.vue'
    import editBtn from '@/components/forms/editBtn.vue'
    import olimpiadaPopup from '@/components/popups/olimpiadaPopup.vue'
    import olimpLanding from '@/components/landing/olimp.vue'

    export default {
        components: {
            confirmedPopup,
            header_kroshki,
            cstInput,
            btnGroup,
            saveBtn,
            editBtn,
            cstBtn,
            olimpiadaPopup,
            olimpLanding
        },
        data() {
            return {
                header: [{
                    name: 'Олимпиадалар',
                    link: '/onlineolimpiada'
                }, {
                    name: 'Жүктелуде...',
                }],
                classes: [],
                loading: 0,
                preload: 1,
                go: 0,
                addNewUser: 0,
                newUserName: '',
                newUserNomer: 1,
                errorNewUserName: '',
                newClassSet: null,
                addNewZhetekshi: 0,
                newZhetekshiName: '',
                errorNewZhetekshiName: '',
                active: 0,
                o_user: {

                },


                bagyt: {},
                katysushy_type: null,
                form: {
                    edit: 0
                },
                zhetekshiler: [],
                o_users: [],
            }
        },
        methods: {
            confirmDeleteUser(index) {
                let o_user = this.o_users[index]
                this.$dialog.open({
                    message: 'Әрекетіңізді растайсыз ба?',
                    resolver: (async (result) => {
                        try {
                            const res = await result;
                            this.deleteUser(index);

                        } catch (error) {
                            console.warn(error);
                        }
                    }),
                });
            },
            editUser(index) {
                this.$api.post('/olimpiada/user/update', {
                    id: this.o_users[index].idd,
                    name: this.o_users[index].o_katysushy_fio,
                    synyp: this.o_users[index].o_tury.synyp
                }).then((res) => {
                    this.o_users[index].loading = 0;
                    if (res.data.success == true) {
                        this.o_users[index].edit = 0;
                        this.o_users[index].update_count--;
                    }

                }).catch((err) => {

                })
                // АПИ ИЗМЕНЕНИЕ ИМЕНИ ДОДЕЛАТЬ
            },
            deleteUser(index) {
                let user = this.o_users[index]
                this.$api.get('/olimpiada/user/' + user.idd + '/destroy').then((res) => {
                    console.log(res.data);
                    if (res.data.success == true) {
                        this.o_users.splice(index, 1);
                    }
                })
            },
            startTest() {
                this.$router.push('/olimpiada/test/enter-code')
            },
            olimpTolem(index) {
                this.o_users[index].loading = 1
                this.$api.post('/olimpiada/test/tolem-zhasau', {
                    id: this.o_users[index].idd,
                    nomer: index + 1,
                }).then((res) => {
                    this.o_users[index].loading = 0
                    if (res.data.success == true) {
                        this.o_users[index].success = 1
                        this.o_users[index].o_tizim = res.data.o_tizim
                        this.active = 4
                        const userToUpdate = {
                            ...this.$auth.user
                        }
                        userToUpdate.balance = res.data.balance
                        this.$auth.setUser(userToUpdate)
                    } else if (res.data.success == false) {
                        this.active = 5
                    }
                    console.log(this.o_users)
                }).catch((err) => {
                    this.o_users[index].loading = 0
                    console.log(err);
                })
            },
            getData() {
                let slug = this.$route.params.slug
                this.$api.$get('olimpiada/' + slug).then((res) => {
                    console.log(res)
                    this.o_users = res.o_users
                    this.newUserNomer = this.o_users.length + 1
                    this.bagyt = res.bagyt
                    this.header[1].name = this.bagyt.o_bagyty
                    this.katysushy_type = res.bagyt
                    this.zhetekshiler = res.zhetekshiler
                    this.preload = 0
                    res.classes.forEach((e) => {
                        let synyp = {
                            name: e + ' сынып',
                            value: e
                        }
                        this.classes.push(synyp)
                    })

                }).catch((err) => {
                    console.log(err);
                })
            },
            enteredClass(e) {
                this.newClassSet = e + 1
            },
            enteredEditClass(index, e) {
                this.o_users[index].o_tury.synyp = this.classes[e].value
            },
            saveNewUser() {
                this.loading = 1
                this.$api.post('/olimpiada/user/create', {
                    bagyt_id: this.bagyt.idd,
                    type_id: this.bagyt.type,
                    name: this.newUserName,
                    katysushy_id: this.bagyt.o_katysushy_idd,
                    class: this.newClassSet,
                    nomer: this.newUserNomer
                }).then((res) => {
                    this.clearFeedBack()
                    this.newUserNomer++
                    this.o_users.push(res.data.katysushy)
                }).catch((error) => {
                    this.loading = 0
                    const data = error.response.data.errors;
                    this.errorNewUserName = data.name !== undefined ? data.name.join() : null;
                })
            },
            clearFeedBack() {
                this.loading = 0
                this.addNewUser = 0
                this.newUserName = ''
                this.errorNewUserName = ''
                this.addNewZhetekshi = 0
                this.newZhetekshiName = ''
                this.errorNewZhetekshiName = ''
            },
            openPopup(id) {
                this.active = id
            },
            moreResults(index) {
                this.o_user = this.o_users[index];
                this.active = 1;
            },
            setNewZhetekshi() {
                if(this.oplataValidate()){
                    this.loading = 1
                    if(this.newZhetekshiName == ''){
                        this.errorNewZhetekshiName = 'Аты жөні толық жазылуы керек'
                    }else{
                        this.$api.$post('/olimpiada/zhetekshi/create', {
                            name: this.newZhetekshiName,
                            bagyt_id: this.bagyt.idd
                        }).then((res)=>{
                            this.loading = 0
                            var zhetekshi = res.data.zhetekshi
                            zhetekshi.edit = 0
                            zhetekshi.loading = 0
                            this.zhetekshiler.push(zhetekshi)
                            this.updateToAddZhetekshi(zhetekshi.id)
                            this.clearFeedBack()
                        }).catch((err)=>{
                            this.loading = 0
                            console.log(err)
                        })
                    }
                }else{
                    this.active = 2
                }

            },
            oplataValidate() {
                let val = 0
                this.o_users.forEach((e)=>{
                    if(e.success && e.o_zhetekshi_id == null) val++
                })
                return val >= 5 ? true : false
            },
            updateToAddZhetekshi(id) {
                this.o_users.forEach((e)=>{
                    if(e.success && e.o_zhetekshi_id == null) e.o_zhetekshi_id = id
                })
            },



        },
        mounted() {
            if (this.$route.params.bagyt == undefined)
                this.getData()
            else {
                this.o_users = this.$route.params.o_users
                this.newUserNomer = this.o_users.length + 1
                this.bagyt = this.$route.params.bagyt
                this.zhetekshiler = this.$route.params.zhetekshiler
                this.header[1].name = this.bagyt.o_bagyty
                this.preload = 0
                this.$route.params.classes.forEach((e) => {
                    let synyp = {
                        name: e + ' сынып',
                        value: e
                    }
                    this.classes.push(synyp)
                })
            }
        }

    }

</script>


<style scoped lang="scss">
    .main {
        padding-bottom: 100px;
    }

    .header {
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        margin-top: 50px;
    }

    .userBlock {
        background: #F8F8F8;
        border-radius: 10px;
        padding: 30px 30px 50px;
        margin-top: 30px;

        .prev {
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            color: #000000;

        }

        .users {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 10px;

            .block {
                position: relative;
                background: #FFFFFF;
                box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
                border-radius: 6px;

                .body {
                    padding: 15px 20px 15px 60px;

                    .wrap-go {
                        position: relative;
                        z-index: 3;
                        margin-top: 15px;
                        display: grid;
                        grid-template-columns: 280px 180px;
                        grid-template-rows: 40px;
                        grid-gap: 10px;

                    }

                    .input-wrap {
                        display: grid;
                        grid-template-columns: 1fr auto;
                        grid-gap: 10px;
                        position: relative;
                        z-index: 4;


                        .cst-size-btn {
                            width: 200px;
                            display: grid;
                        }
                    }

                    .wrap {
                        margin-top: 10px;
                        display: grid;
                        grid-template-columns: auto 1fr;
                        grid-gap: 10px;
                        position: relative;
                        height: 40px;
                        z-index: 3;
                    }

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
                        z-index: 1;

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

                    .name {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 19px;
                        color: #000000;
                        position: relative;
                        z-index: 3;
                    }

                    .wrap-edit {
                        display: flex;
                        gap: 20px;
                        flex-wrap: wrap;
                        margin-top: 15px;
                        position: relative;
                        z-index: 3;
                        align-items: center;

                        .grid {
                            display: inline-grid;
                            grid-template-columns: auto auto;
                            grid-gap: 10px;

                            button {
                                width: 135px;
                                height: 40px;
                            }
                        }

                        .cst_size_btn {
                            width: 100%;
                            max-width: 220px;
                            min-width: 180px;
                            height: 40px;
                            font-size: 12px;
                        }


                        .code {
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 16px;

                            b {
                                font-weight: 600;
                            }
                        }
                    }

                    .name-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .ball {
                            font-size: 16px;
                            font-weight: 600;
                            line-height: 19px;
                            color: #888888;
                            text-align: right;

                        }
                    }

                    .wrap-zhetekshi {
                        margin-top: 15px;
                        display: grid;
                        grid-template-columns: 180px 240px;
                        grid-template-rows: 40px;
                        grid-gap: 10px;
                        position: relative;
                        z-index: 3;
                    }
                }
            }
        }

        .addNewUser {
            margin-top: 30px;
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            grid-template-areas: 'a b';
            grid-gap: 20px;

            @media all and (max-width: 767px) {
                grid-template-columns: 1fr;
                grid-template-areas: 'b''a';
                justify-items: center;
                padding: 0 20px;

            }

            .cst_size_btn {
                width: 220px;
                height: 40px;
                grid-area: a;

                @media all and (max-width: 767px) {
                    width: 100%;
                    max-width: 280px;

                }

            }

            .info {
                font-size: 16px;
                line-height: 16px;
                color: #888888;
                grid-area: b;

                @media all and (max-width: 767px) {
                    text-align: center;
                }

            }
        }

        &.zhetekshi {
            .user .block .body .wrap-go {}

            .solo-wrap {
                grid-template-columns: 1fr;
                grid-template-rows: 40px;
                position: relative;
                z-index: 3;
            }
        }

    }

    @media all and (max-width: 1099px) {
        .userBlock .users .block .body {
            padding: 15px 20px 20px 60px;
        }
    }

    @media all and (max-width: 991px) {
        .userBlock .users .block .body .wrap-go {
            grid-template-columns: 235px 150px;
        }

        .userBlock .users .block .body .input-wrap .cst-size-btn {
            width: 180px;
            display: grid;
        }

        .header {
            font-size: 22px;
            line-height: 26px;
        }

    }

    @media all and (max-width: 883px) {
        .userBlock .users .block .body .wrap-go {
            grid-template-columns: 1fr;
            grid-template-rows: 40px 40px;
        }

        .userBlock .users .block .body .input-wrap .cst-size-btn {
            width: 120px;
            display: grid;
        }

        .userBlock .users .block .body .name {
            text-align: center;
        }

        .userBlock .users .block .body .wrap-zhetekshi {
            grid-template-columns: 140px 191px;
        }

        .userBlock .users .block .body {
            padding: 15px 20px 25px 60px;
        }

    }

    @media all and (max-width: 767px) {
        .userBlock .users .block .body .input-wrap {
            grid-template-columns: 1fr;
        }

        .userBlock .users .block .body .input-wrap .cst-size-btn {
            width: 100%;
            height: 40px;
        }

        .userBlock .users .block .body .wrap {
            margin-top: 20px;
        }

        .header {
            font-size: 21px;
            line-height: 24px;
        }

        .userBlock .users .block .body .wrap-edit {
            display: grid;
            grid-template-columns: 1fr;
        }

        .userBlock .users .block .body .wrap-edit .code br {
            display: none;
        }

        .userBlock .users .block .body .wrap-zhetekshi {
            grid-template-columns: 1fr;

            button {
                height: 40px;
            }
        }

        .userBlock .users .block .body {
            padding: 15px 20px 30px 60px;
        }

        .userBlock .users .block .body .wrap-edit {
            justify-items: center;
        }

        .userBlock .users .block .body .name-wrap {
            flex-direction: column-reverse;
        }

        .userBlock .users .block .body .name-wrap .ball {
            width: 100%;
        }

        .userBlock .users .block .body {
            padding: 15px 30px 30px 30px;
        }
    }

    @media all and (max-width: 575px) {
        .header {
            font-size: 20px;
            line-height: 24px;
        }

    }

    @media all and (max-width: 500px) {
        .userBlock {
            padding: 30px 20px 50px;
        }

        .userBlock .users .block .body .name {
            margin-top: 30px;
        }

        .userBlock .users .block.edit .body {
            padding: 60px 30px 15px 30px;
        }

        .userBlock .users .block .body .wrap {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        }

    }

    @media all and (max-width: 420px) {
        .userBlock .users .block.edit .body {
            padding: 60px 20px 15px 20px;
        }

        .userBlock {
            padding: 30px 10px 50px;
        }

        .userBlock .users .block .body {
            padding: 15px 20px 30px 20px;
        }

    }

</style>
<style lang="scss">
    .cst_input_40 input {
        height: 40px;
    }

    .cst_fix_span_input {
        .danger_message {
            position: relative;
        }
    }

</style>
