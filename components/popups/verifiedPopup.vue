<template>
    <transition name="fadePopup">
        <div v-if='popupIsActive > 0' @mousedown.self="$emit('closePopup')" class="popup">
            <div class="block">
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
                        <cstBtn @click.native="changePhone" text='Сақтау' square=1 :loading='loading' />
                    </div>
                </div>
                <div v-if="popupIsActive==2" class="body center">
                    <div class="h">SMS кодты енгізіңіз:</div>
                    <PincodeInput v-model="code" placeholder="0" />
                    <div class="cst_size_btn">
                        <cstBtn text='Сақтау' square=1 :loading='loading' />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import PincodeInput from 'vue-pincode-input';
    export default {
        components: {
            cstBtn,
            cstInput,
            PincodeInput
        },
        props: ['popupIsActive'],
        data() {
            return {
                loading: 0,
                code: '',
                tel_num: '',
                hasError: '',
            }
        },
        methods: {
            changePhone() {
                this.loading = 1;
                setTimeout(() => {
                    //
                    this.popupIsActive = 2;
                    this.loading = 0;
                }, 1500);
            },

        }

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
        .vue-pincode-input{
            width: 40px;
            height: 40px;
            background: #F8F8F8;
            border: 1px solid #909090;
            border-radius: 2px;
            box-shadow: none;
            &:focus{border: 1px solid #909090;}
            &:active{border: 1px solid #909090;}

        }
    }
</style>
