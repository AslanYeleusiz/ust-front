<template>
    <transition name="fadePopup">
        <div v-if="loginOpen > 0" class="loginPopup" @mousedown.self="$emit('closePopup')">
            <transition name="fade">
                <div v-show="loginOpen == 1" class="loginBlock loginWidth" >
                    <div class="cst_pd_popup">
                        <div class="closeBtnBar">
                            <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
                        </div>
                        <div class="header">Кабинетке кіру</div>
                    </div>
                    <login @closePopup="$emit('closePopup')"/>
                    <button @click="$emit('resetPassword')" class="btn reset-password">Құпия сөзді ұмыттыңыз ба?</button>
                    <div class="cst_pd_popup">
                        <button @click="$emit('openRegister')" class="btn register w-100">
                            Тіркелу
                        </button>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="loginOpen == 2" class="loginBlock registerWidth" @click.stop>
                    <div class="cst_pd_popup">
                        <div class="closeBtnBar">
                            <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
                        </div>
                        <div class="header">Тіркелу</div>
                    </div>
                    <div class="cst_pd_popup">
                        <register @closePopup="$emit('closePopup')"/>
                        <div class="footer">
                            «Тіркелу» батырмасын басу арқылы сіз пайдаланушы келісімінде көрсетілген шарттармен келісесіз
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="loginOpen == 3" class="loginBlock emailConfirmWidth" @click.stop>
                    <div class="closeBtnBar">
                        <button @click="$emit('openLogin')" class="btn left">
                            <img src="~assets/images/arrow-left-blue.svg" alt="">
                            Артқа
                        </button>
                        <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
                    </div>
                    <div class="cst_pd_popup">
                        <div class="header">Құпия сөзді жаңарту</div>
                        <form action="" class="loginForm">
                            <div class="registerForm">
                                <cstInput type-name="Email" name-wrap="Email" string-name="Email Почтаңыз" string-placeholder="E-mail " />
                            </div>
                            <button class="btn btn-primary enter w-100">Жалғастыру</button>
                        </form>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div v-show="loginOpen == 4" class="loginBlock emailConfirmWidth successWidth" @click.stop>
                    <div class="closeBtnBar">
                        <exitDefaultBtn @click.native="$emit('closePopup')" class="closeBtn" />
                    </div>
                    <div class="cst_pd_popup">
                        Sembiev_n@mail.ru почтасына құпия сөз және сайтқа кіру нұсқаулығы жіберілді. Входящие немесе спам деген папкаларды көріңіз.
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'
    import login from '@/components/auth/login.vue'
    import register from '@/components/auth/register.vue'
    import exitDefaultBtn from '@/components/forms/exitDefaultBtn.vue'

    export default {
        components: {
            cstInput,
            cstPasswordInput,
            login,
            register,
            exitDefaultBtn
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
        border-bottom: 1px solid #C7C7C7;

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
            .cst_pd_popup {padding: 0 50px;}
            .reset-password {
                position: absolute;
                left: 50%;
                height: 40px;
                transform: translate(-50%, -20px);
                background: #ffffff;
                color: #1E63E9;
                &::after {
                    content: '';
                    width: 0;
                    height: 1px;
                    display: block;
                    background: #1C4CCF;
                    transition: 0.3s;
                }
                &:hover::after {width: 100%;}
            }
            .register {
                border: 1px solid #1E63E9;
                border-radius: 10px;
                margin-top: 40px;
                height: 50px;
                color: #1E63E9;
                &:hover {
                    background: #1E63E9;
                    color: #ffffff;
                }
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
        .loginWidth {max-width: 470px;}
        .registerWidth {
            max-width: 830px;
            padding-bottom: 40px;
            hr {
                border-top: 1px solid #C7C7C7;
                margin: 25px 0 40px;
            }
            .loginForm {
                border-bottom: none;
                padding-bottom: 20px;
                .registerForm {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 50px;
                    @media all and (max-width: 767px){
                        grid-template-columns: 1fr;
                        grid-gap: 15px;
                    }

                }
                .radio {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    padding-right: 138px;
                    @media all and (max-width: 767px){
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 20px 0;
                    }
                    @media all and (max-width: 643px){
                        padding-right: 30px;
                    }
                    @media all and (max-width: 537px){
                        padding-right: 0;
                    }

                    .radio-item {
                        flex-direction: row;
                        display: flex;
                        align-items: center;
                        input[type='radio'] {
                            position: relative;
                            width: 20px;
                            height: 20px;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            outline: none;
                            cursor: pointer;
                        }
                        input[type='radio']::before {
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 20px;
                            height: 20px;
                            transform: translate(-50%, -50%);
                            border: 2px solid #1E63E9;
                            border-radius: 6px;
                        }
                        input[type='radio']:checked::after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 20px;
                            height: 20px;
                            border-radius: 6px;
                            background: 50% 40% / 50% 50% url(assets/images/liked.svg) no-repeat;
                            background-color: #1E63E9;
                            transform: translate(-50%, -50%);
                            visibility: visible;
                        }
                        label {
                            margin: 0;
                            font-size: 18px;
                            line-height: 22px;
                            cursor: pointer;
                            color: #363636;
                            padding-left: 15px;
                        }
                    }
                }
                .enter {margin-top: 40px;}
            }
            .footer {
                line-height: 20px;
                text-align: center;
                color: #8B8B8B;
            }

        }
        .emailConfirmWidth {
            max-width: 470px;
            padding: 20px 20px 60px;
            .cst_pd_popup {padding: 30px 30px 0;}
            .closeBtnBar {
                justify-content: space-between;
                align-items: center;
                .left {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 0;
                    color: #3E6CED;
                    img {margin-right: 4px;}
                }
                .closeBtn {
                    position: relative;
                    transform: none;
                }
            }
            .loginForm {
                padding: 0;
                border-bottom: none;
            }
        }
        .successWidth {
            font-family: Raleway;
            font-size: 20px;
            font-weight: 600;
            line-height: 23px;
            color: #03B113;
            text-align: center;
            .closeBtnBar {
                justify-content: flex-end;
                .closeBtn {
                    position: absolute;
                    transform: translate(0px, 10px);
                }
            }
        }
        .header {
            font-family: Raleway;
            font-size: 24px;
            font-weight: 800;
            line-height: 28px;
        }
        .loginForm {
            margin-top: 30px;
            padding-bottom: 40px;
            font-size: 16px;
            font-weight: 400;
            line-height: 23px;
            color: #888888;
            border-bottom: 1px solid #C7C7C7;
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
