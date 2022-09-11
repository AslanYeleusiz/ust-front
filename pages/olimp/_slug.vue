<template>
    <div>
        <confirmedPopup />
        <header_kroshki :header="header" />
        <div class="cst-ct">
            <div class="header">
                Республикалық Дүниетану пәні бойынша мұғалімдерге арналған олимпиада
            </div>
            <div class="userBlock">
                <div class="prev">Қатысушылар</div>
                <div class="users">
                    <div class="block edit">
                        <div class="body">
                            <div class="input-wrap">
                                <cstInput stringPlaceholder="Қатысушының толық аты-жөні" />
                                <div class="cst-size-btn">
                                    <btnGroup :category='classes' placeholder='Сыныбы' />
                                </div>
                            </div>
                            <div class="wrap">
                                <saveBtn v-if="loading" loading=1 />
                                <saveBtn v-else text="Сақтау" />
                                <saveBtn text="Болдырмау" red=1 />
                            </div>
                            <div class="numeric">
                                <div class="num">1</div>
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <div class="body">
                            <div class="name">Сембиев Нартай Аманғалиұлы</div>
                            <div class="wrap-edit">
                                <div class="grid">
                                    <editBtn text="Өзгерту" img='1' />
                                    <editBtn text="Жою" img='2' />
                                </div>
                                <div class="code">
                                    Қатысу коды:<br><b>27519209</b>
                                </div>
                                <div class="cst_size_btn">
                                    <cstBtn text="Тест тапсыру - 600 тг" radian=1 />
                                </div>
                            </div>
                            <div class="numeric">
                                <div class="num">2</div>
                            </div>
                        </div>
                    </div>
                </div>
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

    export default {
        components: {
            confirmedPopup,
            header_kroshki,
            cstInput,
            btnGroup,
            saveBtn,
            editBtn,
            cstBtn
        },
        data() {
            return {
                header: [{
                    name: 'Олимпиадалар',
                    link: '/onlineolimpiada'
                }, {
                    name: '',
                }],
                classes: [{
                    name: '1-сынып'
                }],
                loading: 0,
            }
        },

    }

</script>


<style scoped lang="scss">
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

                    .input-wrap {
                        height: 40px;
                        display: grid;
                        grid-template-columns: 1fr auto;
                        grid-gap: 10px;
                        position: relative;
                        z-index: 4;

                        input::placeholder {
                            font-size: 14px;
                        }

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
                            display: grid;
                            grid-template-columns: 135px 135px;
                            grid-gap: 10px;
                            height: 40px;
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
                }
            }
        }

    }

</style>
