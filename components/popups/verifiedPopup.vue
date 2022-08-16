<template>
    <transition name="fadePopup">
        <div v-if='popupIsActive > 0' @mousedown.self="$emit('closePopup')" class="popup">
            <div class="block" :class="{mini:popupIsActive>=10}" >
                <button @click="$emit('closePopup')" class="btn d-flex aj-c exit">
                    <img src="~assets/images/ex.svg" alt="">
                </button>
                <div v-if="popupIsActive==1" class="body">
                    <div v-if='$auth.user.phone_activated' class="rastalgan_nomer">
                        <div class="num">{{$auth.user.tel_num}}</div>
                        Сіздің қазіргі расталған телефон нөміріңіз
                        <hr>
                    </div>
                    <cstInput v-model="tel_num" type-name="text" name-wrap="tel_num" string-name="Телефон нөмірді енгізу" string-placeholder="+7 (7__) ___-__-__" :danger="hasError" :danger-text="hasError" />
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" square=1 loading=1 />
                        <cstBtn v-if="!loading" @click.native="changePhone" text='Сақтау' square=1 />
                    </div>
                </div>
                <div v-if="popupIsActive==2" class="body center">
                    <div class="h">SMS кодты енгізіңіз:</div>
                    <div class="input-wrapper">
                        <PincodeInput v-model="code" placeholder="0" />
                    </div>
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" square=1 loading=1 />
                        <cstBtn v-if="!loading" @click.native="sendPincodeEnter" text='Енгізу' square=1 />
                    </div>
                    <div class="info">
                        {{tel_num}} нөміріне SMS код жіберілді. Кодты қайта жіберу 0:{{currentTime}}
                    </div>
                    <a v-if="!retrySend" class="retry">Қайта жіберу</a>
                    <a v-else href="#" class="retry" @click.prevent="retrySendPincode" :class="{active:retrySend}">Қайта жіберу</a>
                </div>
                <div v-if="popupIsActive==3" class="body center">
                    <div class="green">Телефоныңыз сәтті өзгертілді!</div>
                    <div class="cst_size_btn">
                        <cstBtn @click.native="$emit('closePopup')" text="Жабу" square=1 />
                    </div>
                </div>
                <div v-if="popupIsActive==4" class="body center">
                    <div v-if='spinerLoading' class="spinner-border" role="status"></div>
                    <template v-else>
                        <div class="h">SMS кодты енгізіңіз:</div>
                        <div class="input-wrapper">
                            <PincodeInput v-model="code" placeholder="0" />
                        </div>
                        <div class="cst_size_btn">
                            <cstBtn v-if="loading" square=1 loading=1 />
                            <cstBtn v-if="!loading" @click.native="verifyPincodeEnter" text='Енгізу' square=1 />
                        </div>
                        <div class="info">
                            {{$auth.user.tel_num}} нөміріне SMS код жіберілді. Кодты қайта жіберу 0:{{currentTime}}
                        </div>
                        <a v-if="!retrySend" class="retry">Қайта жіберу</a>
                        <a v-else href="#" class="retry" @click.prevent="retrySendPincodeVerify" :class="{active:retrySend}">Қайта жіберу</a>
                    </template>
                </div>
                <div v-if="popupIsActive==5" class="body center">
                    <div class="green">Телефоныңыз сәтті расталды!</div>
                </div>
                <div v-if="popupIsActive==6" class="body">
                    <div v-if='$auth.user.email_rastalgan' class="rastalgan_nomer">
                        <div class="num">{{$auth.user.email}}</div>
                        Сіздің қазіргі расталған электронды поштаңыз
                        <hr>
                    </div>
                    <cstInput v-model="email" type-name="text" name-wrap="email" string-name="Электронды поштаны өзгерту" string-placeholder="Жаңа email енгізіңіз" :danger="hasError" :danger-text="hasError" />
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" square=1 loading=1 />
                        <cstBtn v-if="!loading" @click.native="changeEmail" text='Сақтау' square=1 />
                    </div>
                </div>
                <div v-if="popupIsActive==7" class="body center verifyEmail">
                    <div class="emailHead">
                        {{email}} поштасына жіберілген кодты енгізіңіз:
                    </div>
                    <div class="cst_size_btn">
                        <cstInput v-model="emailCodeVerify" type-name="text" name-wrap="emailCodeVerify" string-placeholder="EXO27HTY8" :danger="hasError" :danger-text="hasError" />
                    </div>
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" square=1 loading=1 />
                        <cstBtn v-else @click.native="sendEmailCode" square=1 text="Енгізу" />
                    </div>
                    <a v-if="loading" class="retry">Қайта жіберу</a>
                    <a v-else href="#" class="retry active" @click.prevent="retrySendEmailCode">Қайта жіберу</a>

                </div>
                <div v-if="popupIsActive==8" class="body center mini">
                    <div class="green">Электронды поштаңыз сәтті өзгертілді!</div>
                    <div class="cst_size_btn">
                        <cstBtn @click.native="$emit('closePopup')" text="Жабу" square=1 />
                    </div>
                </div>
                <div v-if="popupIsActive==9" class="body center">
                    <div v-if="spinerLoading" class="spinner-border" role="status"></div>
                    <div v-else class="green">Поштаңызға растау сілтемесі қайта жіберілді</div>
                </div>
                <div v-if="popupIsActive==10" class="body password">
                    <div class="cst_size_btn">
                        <cstPasswordInput v-model="oldPassword" stringName="Қазіргі құпия сөз" stringPlaceholder="********" nameWrap="oldPassword" />
                    </div>
                    <div class="cst_size_btn">
                        <cstPasswordInput v-model="password" stringName="Жаңа құпия сөз" stringPlaceholder="********" nameWrap="newPassword" />
                    </div>
                    <div class="cst_size_btn">
                        <cstPasswordInput v-model="passwordConfirm" stringName="Жаңа құпия сөзді қайталаңыз" stringPlaceholder="********" nameWrap="newPasswordConfirm" />
                    </div>
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" :loading="loading" square=1 />
                        <cstBtn v-else @click.native="sendNewPassword" text="Сақтау" square=1 />
                    </div>
                </div>
                <div v-if="popupIsActive==11" class="body center">
                    <div class="info">SMS арқылы алынған кодты енгізіңіз:</div>
                    <div class="h">{{$auth.user.tel_num}}</div>
                    <div class="input-wrapper">
                        <PincodeInput v-model="code" placeholder="0" />
                    </div>
                    <div class="cst_size_btn">
                        <cstBtn v-if="loading" square=1 loading=1 />
                        <cstBtn v-if="!loading" @click.native="sendPincodePassword" text='Енгізу' square=1 />
                    </div>
                    <div class="info">
                        Кодты қайта жіберу 0:{{currentTime}}
                    </div>
                    <a v-if="!retrySend" class="retry">Қайта жіберу</a>
                    <a v-else href="#" class="retry" @click.prevent="retrySendPincodePassword" :class="{active:retrySend}">Қайта жіберу</a>
                </div>
                <div v-if="popupIsActive==12" class="body center">
                    <div class="green">
                        Құпия сөзіңіз сәтті өзгертілді!
                    </div>
                    <div class="cst_size_btn">
                        <cstBtn @click.native="$emit('closePopup')" text='Жабу' square=1 />
                    </div>
                </div>


            </div>
        </div>
    </transition>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'
    import PincodeInput from '@/node_modules/vue-pincode-input'

    export default {
        components: {
            cstBtn,
            cstInput,
            PincodeInput,
            cstPasswordInput
        },
        props: ['popupIsActive'],
        data() {
            return {
                loading: 0,
                spinerLoading: 0,
                code: '',
                tel_num: '',
                hasError: '',
                email: '',
                currentTime: 15,
                timer: null,
                retrySend: 0,
                emailCodeVerify: '',
                oldPassword: '',
                password: '',
                passwordConfirm: ''
            }
        },
        methods: {
            changePhone() {
                this.loading = 1;
                setTimeout(() => {
                    //
                    this.popupIsActive = 2;
                    this.loading = 0;
                    this.stopTimer();
                    this.startTimer();
                }, 1500);
            },
            sendPincodeEnter() {
                this.loading = 1;
                setTimeout(() => {
                    //
                    this.popupIsActive = 3;
                    this.loading = 0;
                    this.stopTimer();
                    this.startTimer();
                }, 1500);
            },
            startTimer() {
                this.retrySend = 0;
                this.currentTime = 15;
                this.timer = setInterval(() => {
                    this.currentTime--
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
            verifyPincodeEnter() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                    this.popupIsActive = 5
                }, 1500)
            },
            telRastauOpen() {
                this.spinerLoading = 1
                setTimeout(() => {
                    this.spinerLoading = 0
                    this.stopTimer()
                    this.startTimer()
                }, 1500)
            },
            retrySendPincode() {
                this.loading = 1
                this.retrySend = 0
                setTimeout(() => {
                    //
                    this.loading = 0
                    this.stopTimer()
                    this.startTimer()
                }, 1500)
            },
            retrySendPincodeVerify() {
                this.loading = 1
                this.retrySend = 0
                setTimeout(() => {
                    //
                    this.loading = 0
                    this.stopTimer()
                    this.startTimer()
                }, 1500)
            },
            changeEmail() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                    this.popupIsActive = 7
                }, 1500)
            },
            sendEmailCode() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                    this.popupIsActive = 8
                }, 1500)
            },
            retrySendEmailCode() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                }, 1500)
            },
            emailRastauOpen() {
                this.spinerLoading = 1
                setTimeout(() => {
                    this.spinerLoading = 0
                }, 1500)
            },
            sendNewPassword() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                    this.popupIsActive = 11
                    this.stopTimer()
                    this.startTimer()
                }, 1500)
            },
            sendPincodePassword() {
                this.loading = 1
                setTimeout(() => {
                    this.loading = 0
                    this.popupIsActive = 12
                }, 1500)
            },
            retrySendPincodePassword() {
                this.loading = 1
                this.retrySend = 0
                setTimeout(() => {
                    this.loading = 0
                    this.stopTimer()
                    this.startTimer()
                }, 1500)
            }

        },
        mounted() {
            this.$bus.$on('tel_rastau', this.telRastauOpen)
            this.$bus.$on('email_rastau', this.emailRastauOpen)
        },
        destroyed() {
            this.stopTimer()
        },
        watch: {
            currentTime(time) {
                if (time < 1) {
                    this.stopTimer()
                    this.retrySend = 1
                }
            }
        },
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

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        transition: all 0.3s;
        z-index: 21;

        .block {
            position: relative;
            padding: 50px 30px;
            background: #FFFFFF;
            border-radius: 6px;
            width: 100%;
            max-width: 600px;
            &.mini{max-width: 440px;}
            .exit {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #C4C4C4;
                padding: 0;
                position: absolute;
                right: 0;
                top: 0;
                transform: translate(-10px, 10px);

                &:hover {
                    background: #0045CB;
                }
            }

            .body {
                .h3 {
                    font-family: 'Gilroy-Bold';
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 22px;
                }

                .cst_size_btn {
                    width: 224px;
                    height: 40px;
                    margin-top: 20px;
                }

                .rastalgan_nomer {
                    color: #808080;

                    .num {
                        font-weight: 600;
                        color: #808080;
                        margin-bottom: 5px;
                    }

                    hr {
                        position: absolute;
                        left: 0;
                        width: 100%;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }

                    margin-bottom: 40px;
                }

                &.center {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;

                    .cst_size_btn {
                        margin-top: 15px;
                    }

                    .info {
                        margin-top: 30px;
                        width: 280px;
                        font-family: 'Gilroy-Regular';
                        font-size: 16px;
                        line-height: 19px;
                        color: #808080;
                    }

                    .retry {
                        margin-top: 10px;
                        color: #808080;
                        text-decoration: none;

                        &.active {
                            color: #1C77FD;
                            text-decoration: underline;
                        }
                    }

                }

                &.verifyEmail {
                    .cst_size_btn {
                        width: 100%;
                        max-width: 382px;
                    }

                    .retry {
                        margin-top: 30px;
                    }
                }

                &.password {
                    .cst_size_btn {
                        width: 280px;
                        height: auto;
                        margin: 0 auto 20px;
                        &:last-child{
                            height: 40px;
                        }
                    }
                }

                .emailHead {
                    font-family: 'Gilroy-Bold';
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    width: 100%;
                    max-width: 450px;

                }

                .h {
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 29px;
                }


            }
        }
    }

</style>

<style lang="scss">
    .vue-pincode-input-wrapper {
        margin-top: 20px;
        grid-gap: 6px;

        .vue-pincode-input {
            width: 40px;
            height: 40px;
            background: #F8F8F8;
            border: 1px solid #909090;
            border-radius: 2px;
            box-shadow: none;

            &:focus {
                border: 1px solid #909090;
            }

            &:active {
                border: 1px solid #909090;
            }

        }
    }

    .cst_size_btn {
        input {
            height: 40px;
        }
    }

    .body.center.password {
        label {
            text-align: start;
            font-family: 'Gilroy-Regular';
            font-size: 16px;
            line-height: 19px;

        }

        input {
            width: 280px;
            height: 40px;

            &::placeholder {}
        }
    }

</style>
