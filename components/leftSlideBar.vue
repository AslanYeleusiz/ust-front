<template>
    <div>
        <div class="menuSlideBar" :class="{disabled: slideOpen}">
            <div class="d-flex menuHeaderLogo aj-c">
                <navBarLogo />
            </div>
            <button @click="$emit('openMenu')" class="open_menu_button d-flex aj-c">
                <arrowLeft :class="{imgRotate: slideOpen}" />
            </button>
            <div class="menu">
                <ul class="menu-ul">
                    <template v-if="!$auth.user">
                        <li class="menu-li">
                            <a href="#" @click="$emit('openLogin')" class="d-flex a-c">
                                <profileCircle/>
                                <span class="menu-li-span">Кабинетке кіру</span>
                            </a>
                        </li>
                    </template>
                    <template v-if="$auth.user">
                        <li class="menu-li">
                            <NuxtLink to="/profile" class="d-flex a-c">
                                <profileCircle/>
                                <span class="menu-li-span">Жеке кабинет</span>
                            </NuxtLink>
                        </li>
                        <transition name="fade">
                            <div class="inline" v-show='!slideOpen'>
                                <li class="menu-li">
                                    <div class="d-flex a-c">
                                        <span class="line"></span>
                                        <span class="menu-li-span">ID номер: {{$auth.user.id}}</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c">
                                        <span class="line"></span>
                                        <span class="menu-li-span">Баланс {{$auth.user.balance}} ₸</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c">
                                        <span class="line"></span>
                                        <span class="menu-li-span">Бонус {{$auth.user.bonus}} B</span>
                                    </div>
                                </li>
                                <li class="menu-li">
                                    <div class="d-flex a-c">
                                        <button @click='logout' class="btn menu-li-span">Шығу</button>
                                    </div>
                                </li>
                            </div>
                        </transition>
                    </template>
                </ul>
                <div class="menu-syzyq"></div>
                <ul class="menu-ul">
                    <li class="menu-li">
                        <NuxtLink to="/kurstar" class="d-flex a-c">
                            <teacher/>
                            <span class="menu-li-span">Курстар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/olimpiada" class="d-flex a-c">
                            <cup/>
                            <span class="menu-li-span">Олимпиядалар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/turnirler" class="d-flex a-c">
                            <medalStar/>
                            <span class="menu-li-span">Турнирлер</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/baiqaular" class="d-flex a-c">
                            <medal/>
                            <span class="menu-li-span">Байқаулар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/vebinarlar" class="d-flex a-c">
                            <videoSquare/>
                            <span class="menu-li-span">Вебинарлар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/konference" class="d-flex a-c">
                            <monitorRecorder/>
                            <span class="menu-li-span">Конференциялар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/material" class="d-flex a-c">
                            <documentText/>
                            <span class="menu-li-span">Материалдар</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-li">
                        <NuxtLink to="/test" class="d-flex a-c">
                            <folder/>
                            <span class="menu-li-span">Сабақ жоспарлар</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="!slideOpen" @click="$emit('openMenu')" class="bg_popup" :class="{active: !slideOpen}"></div>
    </div>
</template>

<script>
    import teacher from '@/components/svg/teacher.vue'
    import profileCircle from '@/components/svg/profile-circle.vue'
    import cup from '@/components/svg/cup.vue'
    import medalStar from '@/components/svg/medalStar.vue'
    import medal from '@/components/svg/medal.vue'
    import videoSquare from '@/components/svg/videoSquare.vue'
    import monitorRecorder from '@/components/svg/monitorRecorder.vue'
    import documentText from '@/components/svg/documentText.vue'
    import folder from '@/components/svg/folder.vue'
    import arrowLeft from '@/components/svg/arrowLeftCopy.vue'

    export default {
        components: {
            teacher,
            profileCircle,
            cup,
            medalStar,
            medal,
            videoSquare,
            monitorRecorder,
            documentText,
            folder,
            arrowLeft
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('../assets/images/', false)
                return images('./' + pet)
            },
            logout() {
                this.$auth.logout().then(() => {
                    this.router.push('/')
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
