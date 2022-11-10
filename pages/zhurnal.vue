<template>
    <div>
        <headLink :head='head' active=0 />
        <section class="materials">
            <div class="cst-ct d-flex head">
                <div class="statistic">
                    <div class="h2">{{COUNT}} материал жарияланған</div>
                    <div class="dbody">Өз тәжірибеңізбен бөлісіп, мыңдаған педагогтың алғысы мен аттестацияға жарамды сертификат алыңыз!</div>
                    <NuxtLink to="/zharialau">
                        <cstBtn class="zharialauBtn" text="Материал жариялау" />
                    </NuxtLink>
                </div>
                <div class="algysKhat">
                    <img src="~assets/images/algysKhat.jpg" alt="">
                    <span>«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген.</span>
                </div>
            </div>
            <div class="cst-ct">
                <form action="" class="adisteme">
                    <div class="h2">Оқу әдістемелік материалдар</div>
                    <form @submit.prevent class="searchBlock">
                        <cstBtn @click.native.prevent="searchData()" class="searchBtn" text="Іздеу" />
                        <input v-model='search' type="text" class="form-control searchInput" placeholder="Зат есім сабақ жоспары" v-on:keyup.enter="searchData()">
                        <div @click="clearSearchRes()" class="d-flex aj-c clearInput">&#10006;</div>
                    </form>
                    <transition name="categories">
                        <div v-show="searchCategoryShow && categoryIsActive<4" class="category">
                            <btnGroup :category='subjects' :placeholder='cat_text[0]' @entered-category='subjectsSearch($event)' />

                            <btnGroup :category='directions' :placeholder='cat_text[1]' @entered-category='directionsSearch($event)' />

                            <btnGroup :category='classes' :placeholder='cat_text[2]' @entered-category='classesSearch($event)' />
                        </div>
                    </transition>
                    <transition name="categories">
                        <div v-show="categoryIsActive < 4" class="hider_block">
                            <button type="button" @click="openCategory" class="btn hider" :class="{active: searchCategoryShow}">
                                <span>Пән / Бағыт / Сынып</span>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5984 1.45825L9.1651 6.89159C8.52344 7.53325 7.47344 7.53325 6.83177 6.89159L1.39844 1.45825" stroke="#363636" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </transition>
                </form>
            </div>
            <div class="advice">
                <div class="cst-ct">
                    <div class="categories">
                        <button v-for='(cat, index) in category' type="button" class="btn categories-item" :class='{active: categoryIsActive==index}' @click="teginWordSearch(index)">
                            {{cat}}
                        </button>
                    </div>
                </div>
            </div>
            <div class="materials-list">
                <div class="cst-ct">
                    <transition name='categories'>
                        <div v-if='categoryIsActive==3 && waitAnimate'>
                            <div class="folder1">
                                <div class="fbody">
                                    <div class="body">
                                        Жинаққа немесе журналға материал жариялағыңыз келсе немесе сіздің мақалаңыз жинаққа шықпай қалса <span class="orange">8-771-234-55-99 номеріне WhatsApp-арқылы жазыңыз</span>
                                    </div>
                                    <div class="bgfolder"></div>
                                </div>
                                <img src="~assets/images/Empty-Files.svg" alt="" class="folder">
                            </div>
                            <qualik />
                        </div>
                    </transition>

                    <transition name='categories'>
                        <div v-if='categoryIsActive==4 && waitAnimate'>
                            <zhenildik :materials='materials' :loading='loading' />
                        </div>
                    </transition>

                    <div class="d-flex justify-content-between align-items-center">
                        <span class="value">{{categoryIsActive < 3 ? 'Барлығы' : categoryIsActive == 3 ? 'Жинақтар' : 'ҚМЖ саны'}}: <b>{{materials_count}}</b> {{categoryIsActive < 4 ? 'материал' : ''}}</span>
                        <btnGroup v-if="categoryIsActive==4" :category='qmgCat' placeholder='Пән: таңдау' type=2 @entered-category='qmgSearch($event)' />
                    </div>
                    <div v-if='categoryIsActive<3'>
                        <list :popular_materials='popular_materials' :materials='materials' :loading='loading' :categoryIsActive='categoryIsActive' :currentPage="currentPage" />
                    </div>
                    <div v-if='categoryIsActive==3'>
                        <zhinak_list :materials='materials' :loading='loading' />
                    </div>
                    <div v-if='categoryIsActive==4'>
                        <qmj_list :materials='materials' :loading='loading' />
                    </div>
                    <div class="paginate">
                        <pagination :currentPage="currentPage" :lastPage="lastPage" @set-page="Pageload" :loading="loading" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "~/assets/lottie_files/help/36218-bouncing-question-mark.json"
    import pagination from '@/components/pagination.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import list from '@/components/materials/list.vue'
    import qmj_list from '@/components/materials/qmj_list.vue'
    import zhinak_list from '@/components/materials/zhinak_list.vue'
    import qualik from '@/components/materials/my_materials/forms/qualik.vue'
    import zhenildik from '@/components/materials/my_materials/forms/zhenildik.vue'
    import headLink from '@/components/header.vue'
    import cstBtn from '@/components/forms/btn.vue'


    export default {
        head() {
            return {
                title: this.headTitle,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.headDescription
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.headKeyword
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]

            }
        },

        scrollToTop: true,
        components: {
            Lottie,
            pagination,
            btnGroup,
            list,
            zhinak_list,
            qualik,
            headLink,
            qmj_list,
            zhenildik,
            cstBtn
        },
        data() {
            return {
                headTitle: 'Ұстаздарға материалдар, ашық сабақтар, сабақ жоспарлары',
                headDescription: 'Мұғалімдерге ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, омж, қмж құжаттарды тегін жүктеп сабақта қолдануға болады. Ашық сабақтар сайты',
                headKeyword: 'ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, қысқа мерзімді жоспар, орта мерзімді жоспар, олимпиада сұрақтар, қмж, омж, сабақтар',
                head: [{
                    link: '/material',
                    name: 'Материалдар',
                }, {
                    link: '/menin-materialdarym',
                    name: 'Менің материалдарым',
                }],
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
                searchCategoryShow: false,
                category: ['Барлығы', 'Тегін', 'Ақылы', 'Жинақ', 'Дайын ҚМЖ'],
                categoryIsActive: 0,
                search: '',
                posts: [],
                subjects: [],
                subjectsInner: null,
                directions: [],
                directionsInner: null,
                classes: [],
                classesInner: null,
                qmgCat: [],
                qmgCatInner: null,
                materials: [],
                materials_count: null,
                COUNT: null,
                currentPage: null,
                lastPage: null,
                loading: true,
                cat_text: ['Пәнді таңдаңыз', 'Бағытын таңдаңыз', 'Сыныбын таңдаңыз'],
                popular_materials: null,
                waitAnimate: 1,
            }
        },
        methods: {
            openCategory() {
                this.searchCategoryShow ? this.searchCategoryShow = false : this.searchCategoryShow = true;
            },
            clearSearchRes() {
                this.search = '';
            },
            async Pageload(n) {
                this.currentPage = n;
                this.categoryIsActive < 4 ? this.getData() : this.getQmg();
            },
            searchData(){
                this.categoryIsActive != 4 ? this.getData() : this.getQmg()
            },
            async getCategory() {
                let cats = await this.$axios
                    .$get("/word/getCategories")
                    .then((response) => (
                        this.subjects = response.subjects,
                        this.directions = response.directions,
                        this.classes = response.classes));
            },
            async getData() {
                this.loading = true;
                this.popular_materials = null;
                await this.$axios.$get('/word', {
                    params: {
                        title: this.search,
                        subject: this.subjectsInner ? this.subjectsInner.lat_name : null,
                        direction: this.directionsInner ? this.directionsInner.lat_name : null,
                        class: this.classesInner ? this.classesInner.lat_name : null,
                        page: this.currentPage,
                        sell: this.categoryIsActive,
                    }
                }).then((res) => {
                    this.materials_count = res.count_materials;
                    this.COUNT = res.COUNT;
                    this.currentPage = res.materials.current_page;
                    this.lastPage = res.materials.last_page;
                    this.materials = res.materials.data;
                }).catch((err) => {
                    console.log(err.response);
                })
                this.loading = false;
            },

            subjectsSearch(e) {
                this.subjectsInner = this.subjects[e];
                this.currentPage = 1;
                this.changeUrlState();
                this.getData();
            },
            directionsSearch(e) {
                this.directionsInner = this.directions[e];
                this.currentPage = 1;
                this.changeUrlState();
                this.getData();
            },
            classesSearch(e) {
                this.classesInner = this.classes[e];
                this.currentPage = 1;
                this.changeUrlState();
                this.getData();
            },
            changeUrlState() {
                var s = null
                var d = null
                var c = null
                c = this.classesInner ? this.classesInner.lat_name : null
                d = this.directionsInner ? this.directionsInner.lat_name :
                    (c ? 'barlik_materialdar' : null)
                s = this.subjectsInner ? this.subjectsInner.lat_name :
                    (d ? 'barlyk_pander' : (c ? 'barlyk_pander' : null))
                this.addHashToLocation(
                    '/materialdar/' + s + (d ? '/' + d : '') + (c ? '/' + c : '') + '.html'
                )
                s = null
                d = null
                c = null
                c = this.classesInner ? this.classesInner.name : null
                d = this.directionsInner ? this.directionsInner.name :
                    (c ? 'Барлық материалдар' : null)
                s = this.subjectsInner ? this.subjectsInner.name :
                    (d ? 'Барлық пәндер' : (c ? 'Барлық пәндер' : null))
                this.headTitle = s + (d ? ' -' + d : '') + (c ? ' -' + c : '')
            },
            qmgSearch(e) {
                this.qmgCatInner = this.qmgCat[e].id;
                this.currentPage = 1;
                this.getQmg();
            },
            teginWordSearch(e) {
                if (this.categoryIsActive != e) {
                    this.waitAnimate = 0
                    this.categoryIsActive = e;
                    this.currentPage = 1;
                    switch(e){
                        case 0: {
                            this.headTitle = 'Ұстаздарға материалдар, ашық сабақтар, сабақ жоспарлары'
                            this.headKeyword = 'ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, қысқа мерзімді жоспар, орта мерзімді жоспар, олимпиада сұрақтар, қмж, омж, сабақтар'
                            this.headDescription = 'Мұғалімдерге ашық сабақтар, сабақ жоспарлары, тәрбие сағаттары, омж, қмж құжаттарды тегін жүктеп сабақта қолдануға болады. Ашық сабақтар сайты'
                            this.addHashToLocation('/material')
                            break;
                        }
                        case 1: {
                            this.headTitle = 'Тегін ашық сабақтар, сабақ жоспарлары, қысқа мерзімді жоспарлар'
                            this.headKeyword = 'ашық сабақ, сабақ жоспарлар, жоспар, сабақтар, қмж, омж, ұжм, олимпиада жауаптары, тест сұрақтары, аттестация, мұғалімге'
                            this.headDescription = 'Мұғалімдерге ашық сабақтар, сабақ жоспарлары, қысқа мерзімді жоспарлар, тест сұрақтары, қмж, омж, сабақ жоспарларының үлгілерін тегін жүктеп алыңыз'
                            this.addHashToLocation('/material/tegin')
                            break;
                        }
                        case 2: {
                            this.headTitle = 'Педагогтарға арналған сабақтар мен жоспарлар, қысқа мерзімді жоспарлар'
                            this.headKeyword = 'педагогтарға, тест жауаптары ашық сабақ, сабақ жоспарлар, жоспар, сабақтар, қмж, омж, ұжм, олимпиада жауаптары, тест сұрақтары, аттестация, мұғалімге'
                            this.headDescription = 'Педагогтарға арналған ашық сабақтар мен жоспарлар жинаған ұстаз тілегі сайтынан жүктеп алып, өз сабағыңызда қолданыңыз. Сайтта 300 000 астам ашық сабақтар жарияланған'
                            this.addHashToLocation('/material/payd')
                            break;
                        }
                        case 3: {
                            this.headTitle = '«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы'
                            this.headKeyword = 'журнал, жинақ, жинаққа материал жариялау, тегін сертификат, жинақтарды көру, ұстаз тілегі журналы, журналға жазылу, журнал сертификаты'
                            this.headDescription = '«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген. Журнал министірлікте тіркелгендіктен сертификат аттестацияға жарамды'
                            this.addHashToLocation('/zhurnal')
                            break;
                        }
                        case 4: {
                            this.headTitle = 'ҚМЖ, қысқа мерзімді сабақ жоспарлары'
                            this.headKeyword = 'қмж, қысқа мерзімді сабақ жоспарлары, 472 бұйрықпен жазылған қмж, қысқа мерзімді жоспар, 472 бұйрық үлгісі, қмж үлгісі, қмж жүктеу, краткосрочный план урока, Поурочные планы, қмж тегін жүктеу'
                            this.headDescription = 'ҚМЖ, 472 бұйрық бойынша жазылған дайын Қысқа мерзімді сабақ жоспарларын осы беттен жүктеп алып сабақ барысында қолдана аласыз. ҚР білім және Ғылым министірлігінің стандарты бойынша жазылған'
                            this.addHashToLocation('/qmg')
                            break;
                        }
                    }
                    e < 4 ? this.getData() : this.getQmg();
                    setTimeout(() => {
                        this.waitAnimate = 1
                    }, 300)
                }
            },
            addHashToLocation(params) {
                history.pushState({},
                    null,
                    this.$store.state.appUrl + params
                )
            },


            getQmg() {
                this.loading = true;
                this.$axios.$get('/word/qmg/bolimder', {
                    params: {
                        page: this.currentPage,
                        category: this.qmgCatInner,
                        title: this.search,
                    }
                }).then((res) => {
                    console.log(res.data)
                    this.materials = res.data.bolimder.data
                    this.currentPage = res.data.bolimder.current_page
                    this.lastPage = res.data.bolimder.last_page
                    this.materials_count = res.data.bolimder.total
                    this.loading = false;
                    this.qmgCat = res.data.subjects
                    var fit = {
                        id: null,
                        name: 'Барлық пән'
                    }
                    this.qmgCat.unshift(fit)
                })
            }


        },
        async fetch() {
            this.teginWordSearch(3)
            await this.getData();
            await this.getCategory();
            this.popular_materials = await this.$axios.$get('/word/popular');
        },
    }

</script>


<style scoped lang="scss">
    .categories-enter-active,
    .categories-leave-active {
        transition: 0.3s;
    }

    .categories-enter,
    .categories-leave-to {
        opacity: 0;
        transform: translateY(-15px);
        transition: 0.3s;
    }

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
            position: relative;
            height: 100%;

            .d-flex {
                height: 100%;
            }
        }

        .free-cert {
            position: absolute;
            right: 66px;

            .free-cert-button {
                @media all and (max-width: 883px) {
                    display: none;
                }

            }
        }

        .NuxtLink-item {
            display: flex;
            align-items: center;
            color: #363636;
            height: 100%;
            margin-right: 40px;
            padding: 0;

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

    .materials {
        background: top / 100% 340px url(assets/images/materialsBG.jpg) no-repeat #F9F9F9;

        @media all and (max-width: 767px) {
            background: #F9F9F9;
        }

        .head {
            align-items: center;

            @media all and (max-width: 767px) {
                display: none !important;
            }

            .statistic {
                .h2 {
                    font-size: 26px;
                    font-weight: 600;
                    line-height: 31px;
                    margin: 0;

                    @media all and (max-width: 883px) {
                        font-size: 22px;
                        line-height: 28px;
                    }

                }

                .dbody {
                    margin-top: 10px;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;

                    @media all and (max-width: 883px) {
                        font-size: 14px;
                        line-height: 16px;
                    }

                }

                .zharialauBtn {
                    margin-top: 20px;
                    width: 250px;
                    height: 50px;

                    @media all and (max-width: 991px) {
                        width: 215px;
                    }

                    @media all and (max-width: 883px) {
                        width: 190px;
                    }

                }
            }

            .algysKhat {
                max-width: 370px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.15);
                border-radius: 0px 0px 20px 20px;
                padding: 20px;

                @media all and (max-width: 883px) {
                    max-width: 275px;
                }

                span {
                    margin-top: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: center;
                    color: #03B113;
                    width: 296px;

                    @media all and (max-width: 883px) {
                        width: auto;
                    }

                }
            }
        }

        .adisteme {
            padding: 40px;
            margin-top: 14px;
            background: #ffffff;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            text-align: center;

            .h2 {
                margin-bottom: 24px;
                text-transform: uppercase;

                @media all and (max-width: 767px) {
                    margin-bottom: 30px;
                }

            }

            .searchBlock {
                display: flex;
                align-items: center;
                justify-content: flex-end;

                @media all and (max-width: 767px) {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-areas: 'a''b''c';
                    align-items: flex-start;
                    grid-gap: 10px;
                }

                .clearInput {
                    font-size: 16px;
                    opacity: 0;
                    position: absolute;
                    height: 50px;
                    padding: 6px 12px;
                    margin-right: 130px;
                    cursor: pointer;

                    @media all and (max-width: 767px) {
                        height: 40px;
                        margin: 0;
                        justify-self: end;
                    }

                }

                .searchInput {
                    height: 50px;
                    background: 20px / auto 24px url(assets/images/search-normal.svg) no-repeat #F8F8F8;
                    border: 0.5px solid #909090;
                    border-radius: 26px;
                    padding: 0 40px 0 60px;

                    &:hover {
                        border: 1px solid #1E63E9;
                    }

                    &:focus {
                        border: 1px solid #1E63E9;
                    }

                    &:focus~.clearInput {
                        opacity: 1;
                    }

                    @media all and (max-width: 767px) {
                        grid-area: a;
                        height: 40px;
                    }


                }

                .searchBtn {
                    position: absolute;
                    width: 120px;
                    height: 40px;
                    margin-right: 5px;

                    @media all and (max-width: 767px) {
                        position: relative;
                        width: auto;
                        grid-area: b;
                        margin: 0;
                    }

                }
            }

            .category {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 10px;
                margin-top: 40px;
                grid-template-rows: 40px;

                @media all and (max-width: 767px) {
                    margin-top: 20px;
                    grid-template-columns: 1fr;
                    grid-template-rows: 40px 40px 40px;
                }

                select {
                    background: 211px / 20px 20px url(assets/images/arrow-down.svg) no-repeat #F3F3F3;

                    border: 1px solid #D6D6D6;
                    border-radius: 6px;
                    height: 50px;
                    padding: 0 15px 0 20px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    -ms-appearance: none;
                    appearance: none;

                    @media all and (max-width: 1099px) {
                        background-position: 170px 14px;
                    }

                    &:focus {
                        outline: 1px solid #0045CB;
                    }

                    option {
                        background: #ffffff;
                    }
                }
            }

            .hider_block {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 30px;
                transition: 0.3s;

                @media all and (max-width: 767px) {
                    margin-top: 20px;
                }

                .hider {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px dashed #363636;
                    padding: 0;

                    span {
                        display: block;
                        margin-right: 10px;
                    }

                    img {
                        width: 20px;
                        height: 20px;
                    }

                    &:hover {
                        color: #0045CB;
                        border-bottom-color: #0045CB;

                        svg path {
                            stroke: #0045CB;
                        }
                    }
                }

                .hider.active {
                    color: #888888;
                    border-bottom-color: #888888;

                    svg {
                        transform: rotate(180deg);

                        path {
                            stroke: #888888;
                        }
                    }
                }
            }
        }

        .advice {
            margin-top: 60px;
            height: 62px;
            overflow-x: scroll;
            position: relative;
            transform: translateY(1px);
            z-index: 3;

            &::-webkit-scrollbar {
                display: none;
            }

            @media all and (max-width: 767px) {}

        }

        .categories {

            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 1px;
            background-color: #D6D6D6;
            background-image: linear-gradient(0deg, #D6D6D6 60%, #F9F9F9 40%);
            background-size: 40px 45px;

            @media all and (max-width: 767px) {}

            .categories-item {
                padding: 0;
                height: 62px;
                background: #F9F9F9;
                border: 1px solid #F9F9F9;
                border-bottom: 1px solid #D6D6D6;

                @media all and (max-width: 767px) {
                    font-size: 14px;
                    width: 100px;
                }

            }

            .categories-item.active {
                height: 62px;
                background: #FFFFFF;
                border-radius: 6px 6px 0px 0px;
                border: 1px solid #D6D6D6;
                border-bottom: 1px solid #ffffff;
                margin: 0 -1px;
                position: relative;
                z-index: 3;
            }
        }

        .materials-list {
            position: relative;
            background: #ffffff;
            border-top: 1px solid #D6D6D6;
            z-index: 2;
            padding-top: 40px;
            padding-bottom: 100px;

            @media all and (max-width: 767px) {
                padding-top: 30px;
            }

            .value {
                font-size: 18px;
                line-height: 21px;
            }

            .paginate {
                margin-top: 30px;
            }

            .folder1 {
                margin: 20px 0;
                position: relative;
                width: 100%;
                background: #FFF7E7;
                border-radius: 4px;

                .folder {
                    position: absolute;
                    right: 0;
                    transform: translate(-37px, -164px);

                    @media all and (max-width: 883px) {
                        transform: translate(-11px, -176px);
                    }

                    @media all and (max-width: 500px) {
                        width: 125px;
                        height: 125px;
                        transform: translate(-27px, -141px);
                    }

                    @media all and (max-width: 422px) {
                        width: 100px;
                        height: 100px;
                        transform: translate(-13px, -112px);
                    }


                }

                .bgfolder {
                    position: absolute;
                    width: 132px;
                    height: 137px;
                    background: url(assets/images/Empty-Files.svg) no-repeat;
                    filter: blur(18px);
                    transform: translate(-54px, -21px);
                    right: 0;

                    @media all and (max-width: 1099px) {
                        transform: translate(-54px, -14px);

                    }

                    @media all and (max-width: 991px) {
                        transform: translate(-54px, -1px);
                    }

                    @media all and (max-width: 883px) {
                        transform: translate(-19px, 30px);
                    }

                    @media all and (max-width: 767px) {
                        transform: translate(-21px, -24px);
                    }

                    @media all and (max-width: 500px) {
                        filter: blur(23px);
                    }

                    @media all and (max-width: 422px) {
                        width: 100px;
                        height: 100px;
                        transform: translate(-32px, 5px);
                    }


                }

                .fbody {
                    display: flex;
                    justify-content: space-between;
                    overflow: hidden;
                    position: relative;
                }

                .body {
                    padding: 30px 40px;
                    max-width: 67%;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 19px;
                    color: #363636;

                    @media all and (max-width: 767px) {
                        font-size: 14px;
                        line-height: 17px;
                        padding: 25px 30px;
                    }

                    @media all and (max-width: 500px) {
                        font-size: 12px;
                        line-height: 15px;
                        padding: 20px;
                    }

                    .orange {
                        color: #FF8B0D;
                    }
                }
            }
        }
    }

</style>
