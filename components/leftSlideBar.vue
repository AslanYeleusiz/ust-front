<template>
    <div>
        <div class="menuSlideBar" :class="{disabled: slideOpen}">
            <div class="d-flex menuHeaderLogo aj-c">
                <navBarLogo />
            </div>
            <button @click="$emit('openMenu')" class="open_menu_button d-flex aj-c">
                <img :class="{imgRotate: slideOpen}" src="~assets/images/arrow-left.svg">
            </button>
            <div class="menu">
                <ul class="menu-ul">
                    <template v-if="!$auth.user">
                        <li class="menu-li">
                            <a href="#" @click="$emit('openLogin')" class="d-flex a-c p-0">
                                <img src="~assets/images/profile-circle.svg" alt="">
                                <span class="menu-li-span">Кабинетке кіру</span>
                            </a>
                        </li>
                    </template>
                    <template v-if="$auth.user">
                        <li class="menu-li">
                            <NuxtLink to="/profile" class="d-flex a-c p-0">
                                <img src="~assets/images/profile-circle.svg" alt="">
                                <span class="menu-li-span">Жеке кабинет</span>
                            </NuxtLink>
                        </li>
                        <transition name="fade">
                            <div class="inline" v-show='!slideOpen'>
                                <li class="menu-li">
                                    <div class="d-flex a-c p-0">
                                        <span class="line"></span>
                                        <span class="menu-li-span">ID номер: {{$auth.user.id}}</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c p-0">
                                        <span class="line"></span>
                                        <span class="menu-li-span">Баланс 990 000 ₸</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c p-0">
                                        <span class="line"></span>
                                        <span class="menu-li-span">Бонус 302 000 B</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c p-0">
                                        <button @click='logout' class="btn menu-li-span">Шығу</button>
                                    </div>
                                </li>
                            </div>
                        </transition>
                    </template>
                </ul>
                <div class="menu-syzyq"></div>
                <ul class="menu-ul">
                    <template v-for="(menu_item, index) in menu_items">
                        <li class="menu-li">
                            <NuxtLink :to="menu_item.route_name" class="d-flex a-c">
                                <img :src="getImgUrl(menu_item.image)">
                                <span class="menu-li-span">{{ menu_item.name }}</span>
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div v-show="!slideOpen" @click="$emit('openMenu')" class="bg_popup" :class="{active: !slideOpen}"></div>
    </div>

</template>

<script>
    export default {
        methods: {
            getImgUrl(pet) {
                var images = require.context('../assets/images/', false)
                return images('./' + pet)
            },
            logout() {
                this.$auth.logout().then(() => {
                    this.router.push('kurstar')
                });
            }
        },
        props: ['slideOpen'],
        data() {
            return {

                menu_items: [{
                        name: 'Курстар',
                        image: "teacher.svg",
                        route_name: "/kurstar",
                    },
                    {
                        name: 'Олимпиядалар',
                        image: "cup.svg",
                        route_name: "/olimpiada",
                    },
                    {
                        name: 'Турнирлер',
                        image: "medal-star.svg",
                        route_name: "/turnirler",
                    },
                    {
                        name: 'Байқаулар',
                        image: "medal.svg",
                        route_name: "/baiqaular",
                    },
                    {
                        name: 'Вебинарлар',
                        image: "video-square.svg",
                        route_name: "/vebinarlar",
                    },
                    {
                        name: 'Конференциялар',
                        image: "monitor-recorder.svg",
                        route_name: "/konference",
                    },
                    {
                        name: 'Материалдар',
                        image: "document-text.svg",
                        route_name: "/material",
                    },
                    {
                        name: 'Сабақ жоспарлар',
                        image: "folder.svg",
                        route_name: "/zhosparlar",
                    },
                ]
            }
        },
    }

</script>

<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-5px);
        transition: 0.2s;
    }

    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .2s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.2s;
    }

</style>
