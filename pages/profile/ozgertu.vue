<template>
    <div>
        <verifiedPopup :popupIsActive="popupIsActive" @closePopup="popupIsActive=0" />
        <header_kroshki :header='header_kroshki' />
        <section class="main">
            <div class="cst-ct">
                <div class="profile_block">
                    <h3>Профиль ақпараттарын өзгерту</h3>
                    <div class="wrap">
                        <div class="left">
                            <label for="image" class="photo">
                                <div class="sam_photo"></div>
                                <img src="~assets/images/camera.svg" alt="">
                            </label>
                            <input style="display: none" id="image" type="file" name="image">
                        </div>
                        <div class="right">
                            <cstInput typeName='text' stringName='Тегіңіз*' stringPlaceholder='Иваш' nameWrap='s_name' v-model="form.s_name" :danger="hasError" />
                            <cstInput typeName='text' stringName='Есіміңіз*' stringPlaceholder='Асылжан' nameWrap='username' v-model="form.username" :danger="hasError" />
                            <cstInput typeName='text' stringName='Әкеңіздің аты' stringPlaceholder='Ивашұлы' nameWrap='l_name' v-model="form.l_name" :danger="hasError" />
                            <div class="r_wrap">
                                <div class="cst_btn_size">
                                    <btn square=1 text='Сақтау' />
                                </div>
                                <div class="info">
                                    Осы бетте көрсетілген ақпараттар марапат қағаздарында жазылады
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="additions">
                    <div class="block" :style="{ backgroundImage: `url(${getImgUrl('tel_block.png')})` }">
                        <div class="head">Телефон</div>
                        <div class="body" :class="{green: $auth.user.phone_activated}">{{$auth.user.tel_num}}</div>
                        <div v-if='$auth.user.phone_activated' class="success">
                            <img src="~assets/images/shield-green.svg" alt="">
                            Расталған
                        </div>
                        <div class="edit">
                            <a @click.prevent='popupIsActive=1' href="#">Өзгерту</a>
                            <a v-if='!$auth.user.phone_activated' href="#">Растау</a>
                        </div>
                    </div>
                    <div class="block" :style="{ backgroundImage: `url(${getImgUrl('email_block.png')})` }">
                        <div class="head">Email</div>
                        <div class="body" :class="{green: $auth.user.email_rastalgan}">armanaydar@gmail.com</div>
                        <div v-if='$auth.user.email_rastalgan' class="success">
                            <img src="~assets/images/shield-green.svg" alt="">
                            Расталған
                        </div>
                        <div class="edit">
                            <a href="#">Өзгерту</a>
                            <a v-if='!$auth.user.email_rastalgan' href="#">Растау</a>
                        </div>
                    </div>
                    <div class="block" :style="{ backgroundImage: `url(${getImgUrl('pass_block.png')})` }">
                        <div class="head">Құпия сөз</div>
                        <div class="body pass">******************</div>
                        <div class="edit">
                            <a href="#">Өзгерту</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import header_kroshki from '@/components/header_kroshki.vue'
    import cstInput from '@/components/forms/cstInput.vue'
    import btn from '@/components/forms/btn.vue'
    import verifiedPopup from '@/components/popups/verifiedPopup.vue'

    export default {
        components: {
            header_kroshki,
            cstInput,
            btn,
            verifiedPopup
        },
        data() {
            return {
                popupIsActive: 0,
                header_kroshki: [{
                    name: 'Жеке кабинет',
                    link: '/profile'
                }, {
                    name: 'Жеке ақпараттарды өзгерту'
                }],
                form: {
                    s_name: '',
                    username: '',
                    l_name: ''
                },
                tel_num: '',
                hasError: null,
            }
        },
        fetch() {
            this.form.username = this.$auth.user.username;
            this.form.s_name = this.$auth.user.s_name;
            this.form.l_name = this.$auth.user.l_name;
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('../../assets/images/', false)
                return images('./' + pet)
            },
        }
    }

</script>
<style scoped lang="scss">

    .main {
        padding: 40px 0 150px;

        .profile_block {
            padding: 30px;
            background: #FFFFFF;
            border: 1px solid #D6D6D6;
            border-radius: 6px;

            h3 {
                font-size: 24px;
                font-weight: 600;
                line-height: 28px;
                margin: 0;
            }

            .wrap {
                margin-top: 30px;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 30px;
            }

            .left {
                .photo {
                    width: 160px;
                    height: 160px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        cursor: pointer;

                        .sam_photo {
                            filter: brightness(0.5);
                        }

                        img {
                            width: 64px;
                            height: 64px;
                        }
                    }

                    .sam_photo {
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        background: 50% 50% / 100% url('../../assets/images/nur.jpg');
                        filter: brightness(0.7);
                        transition: all 0.3s;
                    }

                    img {
                        position: absolute;
                        width: 54px;
                        height: 54px;
                        transition: all 0.3s;
                    }
                }
            }

            .right {
                .cst_btn_size {
                    width: 240px;
                    height: 55px;
                }

                .r_wrap {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 25px;
                    align-items: center;
                }

                .info {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    color: #888888;
                }
            }
        }

        .additions {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;

            .block {
                padding: 30px 20px;
                background: 50% 100% / 100% no-repeat #F9F9F9;
                border-radius: 6px;

                .head {
                    color: #888888;
                }

                .body {
                    margin-top: 7px;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 21px;
                    color: #363636;

                    &.pass {
                        text-decoration: underline;
                    }

                    &.green {
                        color: #03B113;
                    }
                }

                .success {
                    display: flex;
                    align-items: center;
                    color: #03B113;

                    img {
                        margin-right: 5px;
                    }
                }

                .edit {
                    margin-top: 20px;

                    a {
                        font-size: 16px;
                        line-height: 19px;
                        color: #1C77FD;

                        &:first-child {
                            margin-right: 30px;
                        }
                    }
                }
            }
        }
    }

</style>
<style lang="scss">
    .popup {
        .block {
            .body {
                label {
                    font-family: Gilroy;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 22px;
                    color: #000000;
                    margin-bottom: 10px;
                }

                input {
                    margin: 0px;
                }
            }
        }
    }

    .profile_block {
        .right {
            label {
                color: #888888;
            }

            input {
                margin-bottom: 20px;
                color: #888888;
            }
        }
    }

</style>
