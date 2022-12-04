<template>
    <div>
        <div class="prehead">
            <header>
                <div class="otstup"></div>
                <div class="main_header">
                    <div class="cst-ct d-flex a-c j-b">
                        <div class="d-flex overflow">
                            {{user.fio ? user.fio : 'Қолданушының'}} жеке парақшасы
                        </div>
                        <div class="d-flex a-c free-cert">
                            <div class="free-cert-button">
                                <certBtn text='Тегін сертификат алу' />
                            </div>
                            <notification class='notification' />
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="mains">
            <div class="cst-ct">
                <div class="user_block">
                    <div class="avatar" :style="{ backgroundImage: `url(${getApiImgUrl(user.img1)})`}"></div>
                    <div class="profile">
                        <div class="name">{{user.fio ? user.fio : 'Аты-жөні енгізілмеген'}}</div>
                        <div class="id">ID номер: {{user.id}}</div>
                        <div class="phone">Телефон: {{$auth.user.admin ? user.tell_num ? user.tell_num : 'Енгізілмеген' : '************'}} <br> Email: {{$auth.user.admin ? user.email ? user.email : 'Енгізілмеген' : '************'}}</div>
                    </div>
                </div>
                <div class="materialdar">
                    <div class="h">Материалдары</div>
                    <div class="val">Барлығы: <b>213136</b> материал</div>
                </div>
                <div class="list">
                    <template v-for="material_item in materials.data">
                        <block :material="material_item" />
                    </template>
                </div>
                <div class="paginate">
                    <pagination :currentPage="materials.currentPage" :lastPage="materials.lastPage" @set-page="Pageload" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import certBtn from '@/components/forms/certBtn.vue'
    import notification from '@/components/svg/notification.vue'
    import block from '@/components/materials/forms/block.vue'
    import pagination from '@/components/pagination.vue'
    export default {
        components: {
            certBtn,
            notification,
            block,
            pagination
        },
        data() {
            return {
                materials: [],
                user: {
                    fio: null,
                },
                currentPage: 1,
                loading: 0,
            }
        },

        props: ['head', 'active'],
        methods: {
            getApiImgUrl(pet) {
                pet = !pet ? 'userDefault.png' : pet;
                var images = this.$store.state.apiUrl + '/images/avatars/' + pet;
                console.log(images)
                return images
            },
            Pageload(n) {
                this.loading = 1
                this.currentPage = n;
                this.getData();
            },
            getData() {
                this.$axios.$get('word/' + this.$route.params.id + '/materials', {
                    params: {
                        page: this.currentPage
                    }
                }).then((res) => {
                    this.materials = res.materials
                    this.loading = 0
                })
            }
        },
        mounted() {
            this.$axios.$get('word/' + this.$route.params.id + '/materials').then((res) => {
                this.materials = res.materials
                this.user = res.user
                console.log(res.user)
            })
        },
    }

</script>


<style scoped lang="scss">
    .otstup {
        padding-bottom: 66px;

        @media all and (max-width: 767px) {
            padding-bottom: 132px;
        }
    }

    .main_header {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;

        background: #ffffff;

        .cst-ct {
            height: 100%;

            .d-flex {
                height: 100%;
            }
        }

        .overflow {
            display: flex;
            align-items: center;
            color: #888888;
        }

        .free-cert {
            position: absolute;
            right: 66px;

            .free-cert-button {
                @media all and (max-width: 883px) {
                    display: none;
                }
            }

            .notification {
                cursor: pointer;
                stroke: #363636;

                &:hover {
                    stroke: #0045CB;
                }

                &:active {
                    stroke: #0037A1;
                }
            }
        }

        .NuxtLink-item {
            display: flex;
            align-items: center;
            color: #363636;
            height: 100%;
            margin-right: 40px;
            white-space: nowrap;

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

    .prehead {
        height: 210px;
        background: #F9F9F9;
    }

    .mains {
        transform: translateY(-114px);

        .h2 {
            padding: 0;
        }

        .user_block {
            background: #FFFFFF;
            border: 1px solid #EAEAEA;
            box-shadow: 7px 0px 20px rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            padding: 40px 60px;
            font-size: 16px;
            font-weight: 300;
            line-height: 19px;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 33px;
            align-items: center;
            color: #363636;

            .avatar {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background-position: 50% 50%;
                background-size: cover;
                background-repeat: no-repeat;
            }

            .profile {
                .name {
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 21px;
                }

                .id {
                    margin-top: 10px;
                }

                .phone {
                    margin-top: 30px;
                    line-height: 23px;
                    color: #888888;
                }
            }
        }

        .materialdar {
            margin-top: 60px;

            .h {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                color: #000000;
            }

            .val {
                margin-top: 10px;
                font-size: 18px;
                font-weight: 400;
                line-height: 21px;

                b {
                    font-weight: 700;
                }

            }
        }

        .list,
        .paginate {
            margin-top: 30px;
        }

    }

    @media all and (max-width: 883px) {
        .mains .materialdar .h {
            font-size: 29px;
            line-height: 35px;
        }

        .mains .materialdar .val {
            font-size: 16px;
            line-height: 19px;
        }
    }

    @media all and (max-width: 767px) {
        .mains {
            transform: translateY(-69px);
        }

        .main_header {
            height: 58px;
            background: none;
            border-bottom: none;
            color: #888888;
            position: absolute;

            .cst-ct {
                justify-content: center;
            }
        }

        .mains .user_block[data-v-cabed1ea] {
            grid-template-columns: 1fr;
            grid-gap: 40px;
            justify-items: center;
        }

        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .mains .user_block {
            padding: 40px 30px 50px;
            max-width: 80%;
            margin: 0 auto;
        }
    }

    @media all and (max-width: 575px) {
        .mains .materialdar .h {
            font-size: 27px;
            line-height: 33px;
        }

        .mains .materialdar .val {
            font-size: 15px;
            line-height: 17px;
        }

    }

    @media all and (max-width: 500px) {
        .mains .materialdar .h {
            font-size: 26px;
            line-height: 31px;
        }

        .mains .materialdar .val {
            font-size: 14px;
            line-height: 15px;
        }
    }

</style>
