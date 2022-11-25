<template>
    <transition name="fadePopup">
        <div v-if="loginOpen > 0" class="loginPopup" @mousedown.self="$emit('closePopup')">
            <div class="loginBlock loginWidth">
                <div class="cst_pd_popup">
                    <div class="closeBtnBar">
                        <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
                    </div>
                    <div class="header">Кабинетке кіру</div>
                    <template v-if="loginOpen == 1">
                        <cstInput v-model="form.phone" type-name="text" name-wrap="tel_num" string-name="Телефон номер:" string-placeholder="+7 (7__) - ___ - __ - __" class="mt-15" :danger="errors.phone" :dangerText="errors.phone" @click.native="errors.phone = null" v-on:keyup.enter.native="checkPhone" />
                        <div class="cst-btn-size">
                            <cstBtn :loading="loading" @click.native="checkPhone" text="Жалғастыру" square=1 />
                        </div>
                        <div class="danger text-center mt-3">{{errors.sendSms}}</div>
                    </template>
                    <template v-if="loginOpen > 1">
                        <cstInputDisabled @openLogin="$emit('openLogin')" class="mt-15" :text="form.phone" string-name="Телефон номер:" />
                        <cstPasswordInput v-model="form.password" type-name="password" name-wrap="password" string-name="Құпиясөз:" string-placeholder="•••••••••••••••••" :danger="errors.password" :dangerText="errors.password" @click.native="errors.password = null" class="mt-15" v-on:keyup.enter.native="login" />
                        <div class="cst-btn-size mt-15">
                            <cstBtn :loading="loading" @click.native="login" text="Кіру" square=1 />
                        </div>
                        <div class="mt-30 text-center">
                            <div class="danger">{{errors.sendSms}}</div>
                            <template v-if="loginOpen == 2">
                                <button @click="sendSms" class="btn cst_btn_sms">{{errors.sendSms ? 'Қайтадан көру' : 'Смс арқылы құпия сөзді еске салу'}}</button>
                            </template>
                            <template v-if="loginOpen == 3">
                                <span class="timer_span">Сіздің номеріңізге құпия сөз жіберілді</span>
                                <div class="timer">SMS-ті 00:59 секундттан кейін қайта жібере аласыз</div>
                            </template>
                        </div>

                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstInputDisabled from '@/components/forms/cstInputDisabled.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'
    import exitDefaultBtn from '@/components/forms/exitDefaultBtn.vue'
    import cstBtn from '@/components/forms/btn.vue'
    export default {
        components: {
            cstInput,
            cstPasswordInput,
            exitDefaultBtn,
            cstInputDisabled,
            cstBtn,
        },
        data() {
            return {
                form: {
                    phone: null,
                    password: null,
                },
                errors: {
                    phone: null,
                    password: null,
                    sendSms: null,
                },
                loading: 0,
            }
        },
        methods: {
            checkPhone(){
                this.loading = 1
                this.$axios.post('/auth/login/check-phone', this.form).then((res)=>{
                    this.loading = 0
                    if(res.data.loginOpen == 2) this.$emit('nextLogin')
                    else this.$emit('smsLogin')
                    this.errors.sendSms = null
                }).catch((error)=>{
                    this.loading = 0
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                         this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                })
            },
            login(){
                this.loading = 1
                this.$auth.options.redirect = false
                this.$auth.loginWith('laravelJWT', { data: {
                    phone: this.form.phone,
                    password: this.form.password
                } }).then((res) => {
                    this.errors.sendSms = null
                    localStorage.setItem('access_token', res.data.access_token);
                    window.location.reload();
                    this.loading = 0

                }).catch((error) => {
                    this.loading = 0
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                         this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                });
            },
            sendSms(){
                this.loading = 1
                this.$api.post('/auth/reset-password/send-sms', this.form).then((res)=>{
                    this.loading = 0
                    console.log(res)
                    this.errors.sendSms = null
                }).catch((error)=>{
                    this.loading = 0
                    this.errors.sendSms = error.response.data.errors.sendSms[0]
                    console.log(error)
                })
            }
        },

        props: ['loginOpen'],
    }

</script>
<style lang="scss">
    .loginForm {
        margin-top: 30px;
        padding-bottom: 40px;
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        color: #888888;

        .cst_pd_popup {
            padding: 0 50px;
        }

        .enter {
            height: 50px;
            background: rgba(#1E63E9, 0.9);
            border-radius: 10px;
            margin-top: 20px;

            &:hover {
                background: #1E63E9;
            }
        }
    }

    .loginPopup {
        font-family: Gilroy;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);

        .loginBlock {
            position: absolute;
            width: 100%;
            max-height: 100vh;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

            padding: 40px 0 60px;
            background: #ffffff;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            z-index: 21;
            font-size: 16px;
            font-weight: 500;
            line-height: 23px;

            .cst_pd_popup {
                padding: 0 50px;
            }

            .mt-15 {
                margin-top: 15px;
            }

            .mt-30 {
                margin-top: 30px;
            }

            .danger{
                color: #dc3545;
            }

            .timer_span {
                color: #363636;
                font-weight: 600;
            }

            .timer {
                margin-top: 10px;
                font-family: Raleway;
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                text-align: center;
                color: #363636;
            }

            .cst_btn_sms {
                padding: 0;
                font-family: Raleway;
                font-size: 16px;
                font-weight: 600;
                line-height: 23px;
                color: #1E63E9;

                &:hover {
                    text-decoration: underline;
                }

            }

            .cst-btn-size {
                padding-top: 10px;

                height: 60px;
            }

            .closeBtnBar {
                display: flex;
                justify-content: flex-end;
            }

            .closeBtn {
                padding: 0;
                position: absolute;
                transform: translate(30px, -20px);
            }
        }

        .loginWidth {
            max-width: 470px;
        }


        .header {
            font-family: Raleway;
            font-size: 24px;
            font-weight: 800;
            line-height: 28px;
            padding-bottom: 15px;
        }

        .loginForm {
            margin-top: 30px;
            padding-bottom: 40px;
            font-size: 16px;
            font-weight: 400;
            line-height: 23px;
            color: #888888;

            .enter {
                height: 50px;
                background: rgba(#1E63E9, 0.9);
                border-radius: 10px;
                margin-top: 20px;

                &:hover {
                    background: #1E63E9;
                }
            }
        }
    }

</style>
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

</style>
