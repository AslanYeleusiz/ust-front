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
                                <div class="sam_photo" :style="{ backgroundImage: `url(${getApiImgUrl(form.img)})`}"></div>
                                <div v-if="loadingImg" class="spinner-border text-light position-absolute" role="status"></div>
                                <img v-else src="~assets/images/camera.svg" alt="">
                            </label>
                            <input style="display: none" @change="refreshImage" id="image" accept="image/jpeg, image/png, image/gif" type="file" name="image" multiple>
                        </div>
                        <div class="right">
                            <cstInput typeName='text' stringName='Тегіңіз*' stringPlaceholder='Иваш' nameWrap='s_name' v-model="form.s_name" :danger="errors.s_name" :danger-text="errors.s_name" />
                            <cstInput typeName='text' stringName='Есіміңіз*' stringPlaceholder='Асылжан' nameWrap='username' v-model="form.username" :danger="errors.username" :danger-text="errors.username" />
                            <cstInput typeName='text' stringName='Әкеңіздің аты' stringPlaceholder='Ивашұлы' nameWrap='l_name' v-model="form.l_name" :danger="errors.l_name" :danger-text="errors.l_name" />
                            <div class="r_wrap">
                                <div class="cst_btn_size">
                                    <cstBtn v-if="loading" :loading=1 square=1 />
                                    <cstBtn v-else @click.native="changeProfile" square=1 text='Сақтау' />
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
                            <a @click.prevent='popupIsActive=1' href="">Өзгерту</a>
                            <a v-if='!$auth.user.phone_activated' @click.prevent='phoneRastau' href="">Растау</a>
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
                            <a @click.prevent='popupIsActive=6' href="">Өзгерту</a>
                            <a v-if='!$auth.user.email_rastalgan' @click.prevent='emailRastau' href="">Растау</a>
                        </div>
                    </div>
                    <div class="block" :style="{ backgroundImage: `url(${getImgUrl('pass_block.png')})` }">
                        <div class="head">Құпия сөз</div>
                        <div class="body pass">******************</div>
                        <div class="edit">
                            <a href="" @click.prevent="popupIsActive=10">Өзгерту</a>
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
    import cstBtn from '@/components/forms/btn.vue'
    import verifiedPopup from '@/components/popups/verifiedPopup.vue'

    export default {
        components: {
            header_kroshki,
            cstInput,
            cstBtn,
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
                    l_name: '',
                    img: 'userDefault.png',
                    last_img: 'userDefault.png',
                },
                errors: {
                    s_name: null,
                    username: null,
                    l_name: null
                },
                tel_num: '',
                hasError: null,
                loading: 0,
                loadingImg: 0,
                hasImage: 0,
            }
        },
        fetch() {
            this.form.username = this.$auth.user.username;
            this.form.s_name = this.$auth.user.s_name;
            this.form.l_name = this.$auth.user.l_name;
            if(this.$auth.user.img1 == ''){
                this.form.img = 'userDefault.png'
                this.hasImage = 0
            }else{
                this.form.img = this.$auth.user.img1;
                this.form.last_img = this.$auth.user.img1;
                this.hasImage = 1
            }

        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('../../assets/images/', false)
                return images('./' + pet)
            },
            getApiImgUrl(pet) {
                var images = this.$store.state.apiUrl+'/images/avatars/'+pet;
                console.log(images)
                return images
            },
            phoneRastau() {
                this.popupIsActive = 4;
                this.$bus.$emit('tel_rastau');
            },
            emailRastau() {
                this.popupIsActive = 9;
                this.$bus.$emit('email_rastau');
            },
            changeProfile() {
                this.loading = 1
                this.$api.$post('/profile/change', this.form).then((res) => {
                    this.loading = 0
                    this.$bus.$emit('successPopup')
                    this.hasImage = 1
                    setTimeout(()=>{
                        window.location.reload()
                    },1500)
                }).catch((error) => {
                    this.loading = 0
                    console.log(error.response);
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                        this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                    setTimeout(() => {
                        for (let [key, value] of Object.entries(this.errors)) {
                            this.errors[key] = null;
                        }
                    }, 3000);
                });
            },
            refreshImage(event) {
                if(this.hasImage >= 1) this.destroyImage()
                this.loadingImg = 1
                const fd = new FormData();
                fd.append('file', event.target.files[0]);
                this.$api.$post('/profile/change/photo', fd).then((response) => {
                    console.log(response)
                    this.hasImage = 2
                    this.loadingImg = 0
                    this.form.img = response.img
                }).catch(function(error) {
                    console.log(error)
                });
            },
            destroyImage() {
                this.$axios.$get('/profile/change/photo/destroy', {
                    params: {
                        img: this.form.img,
                        last_img: this.form.last_img
                    }
                }).then(()=>{
                    console.log('Avatar is destroyed!')
                });
            }
        },
        beforeDestroy() {
            if(this.hasImage == 2) this.destroyImage()
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

                @media all and (max-width: 767px) {
                    text-align: center;
                }

            }

            .wrap {
                margin-top: 30px;
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 30px;

                @media all and (max-width: 767px) {
                    grid-template-columns: 1fr;
                }

            }

            .left {
                .photo {
                    width: 160px;
                    height: 160px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media all and (max-width: 767px) {
                        width: auto;
                        height: auto;
                    }

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
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #ffffff;
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
                    width: 100%;
                    max-width: 240px;
                    height: 55px;

                    @media all and (max-width: 767px) {
                        max-width: 100%;
                    }

                }

                .r_wrap {
                    display: grid;
                    grid-template-columns: 240px 1fr;
                    grid-gap: 25px;
                    align-items: center;

                    @media all and (max-width: 991px) {
                        grid-template-columns: 1fr;
                        grid-gap: 15px;
                    }

                }

                .info {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    color: #888888;

                    @media all and (max-width: 767px) {
                        text-align: center;
                    }

                }
            }
        }

        .additions {
            margin-top: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;

            @media all and (max-width: 991px) {
                grid-template-columns: 1fr;
            }

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
                    font-family: 'Gilroy-Bold';
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 22px;
                    color: #000000;
                    margin-bottom: 10px;
                }

                &.password {
                    label {
                        font-family: 'Gilroy-Regular';
                        font-size: 16px;
                        line-height: 19px;
                    }

                    input {
                        font-family: 'Gilroy-Regular';
                    }
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

            .danger_message {
                transform: translateY(-17px);
            }

            input {
                margin-bottom: 20px;
                color: #888888;
            }
        }
    }

</style>
