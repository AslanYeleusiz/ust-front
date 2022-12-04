<template>
    <div>
        <videoPopup :isOpen="videoOpen" :youtube="youtubeLink" @closePopup="videoOpen=0"></videoPopup>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <img class="mainLogo" src="~assets/images/Newlogo.png">
                    <div class="d-flex a-c">
                        <div class="free-cert-button">
                            <certBtn text="Тегін сертификат алу" />
                        </div>
                        <notification class="notification" />
                    </div>
                </div>
            </div>
        </header>
        <section class="main">
            <div class="cst-ct">
                <h2 class="h2 t-c">
                    <span class="blue-text">Ustaz tilegi</span> - аттестацияға жарамды курстар мен олимпиадаларға қатысып, <span class="yellow-text">өз санатыңызды көтеріңіз!</span>
                </h2>
                <div class="main_slider">
                    <div class="block1 d-flex aj-c">
                        <div class="bcontent">
                            <div class="htext">Жеке кабинет</div>
                            <div class="dtext">Сіздің барлық жетістіктеріңіз<br>осында</div>
                            <div class="cst_btn">
                                <cstBtn @click.native="gotoProfile" style="font-size: 18px" text='Кіру / Тіркелу' img="user.svg" />
                            </div>
                        </div>
                    </div>
                    <div class="block2">
                        <div class="bcontent">
                            <div class="htext">Айлықты есептеу калькуляторы</div>
                            <div class="dtext">тегін, әрі оңай</div>
                            <div class="cst_btn">
                                <cstBtn text='Есептеу' />
                            </div>
                        </div>
                    </div>
                    <div class="block3">
                        <div class="bcontent">
                            <div class="htext">ҚМЖ</div>
                            <div class="dtext">Мұғалімге қажетті барлық құжаттарды жүктеу</div>
                            <div class="cst_btn">
                                <cstBtn text='Тізімді көру' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile_main_slider">
                    <client-only>
                        <carousel v-bind="options">
                            <slide>
                                <div class="block1 d-flex aj-c">
                                    <div class="bcontent">
                                        <div class="htext">Жеке кабинет</div>
                                        <div class="dtext">Сіздің барлық жетістіктеріңіз<br>осында</div>
                                        <div class="cst_btn">
                                            <cstBtn @click.native="gotoProfile" style="font-size: 16px" text='Кіру / Тіркелу' img="user.svg" />
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="block2">
                                    <div class="bcontent">
                                        <div class="htext">Айлықты есептеу калькуляторы</div>
                                        <div class="dtext">тегін, әрі оңай</div>
                                        <div class="cst_btn">
                                            <cstBtn text='Есептеу' />
                                        </div>
                                    </div>
                                </div>

                            </slide>
                            <slide>
                                <div class="block3">
                                    <div class="bcontent">
                                        <div class="htext">ҚМЖ</div>
                                        <div class="dtext">Мұғалімге қажетті барлық құжаттарды жүктеу</div>
                                        <div class="cst_btn">
                                            <cstBtn text="Тізімді көру" />
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <!--
                            <div class="mms_block jeke_kabinet d-flex aj-c">
                                <div class="bcontent">
                                    <div class="htext">Жеке кабинет</div>
                                    <div class="dtext">Сіздің барлық жетістіктеріңіз<br>осында</div>
                                    <button class="btn">
                                        <img src="~assets/images/user.svg" alt="">
                                        Кіру / Тіркелу
                                    </button>
                                </div>
                            </div>
                            <div class="mms_block calcul">
                                asd
                            </div>
                            <div class="mms_block qmj">
                                asd
                            </div>
-->

                        </carousel>
                    </client-only>

                </div>
                <div class="otherLinks">
                    <template v-for="(links_item, index) in links_items">
                        <NuxtLink :to="links_item.route_name" class="link-item">
                            <img :src="getImgUrl(links_item.image)">
                            <div class="lhead">{{links_item.head}}</div>
                            <div class="lbody">{{links_item.body}}</div>
                        </NuxtLink>
                    </template>
                </div>
            </div>

        </section>
        <section class="main_ustazdar">
            <div class="cst-ct">
                <h2 class="mu_h2">Ұстаздарға</h2>
            </div>
            <div class="main_cst_slider">
                <div class="cst-ct">
                    <div class="link_section">
                        <template v-for="(links_item, index) in links_to_page">
                            <NuxtLink :to="links_item.route_name" class="mu_block d-flex j-b a-c">
                                <div class="mu_fst d-flex a-c">
                                    <img :src="getImgUrl(links_item.image)" alt="">
                                    <span>{{links_item.name}}</span>
                                </div>
                                <img src="~assets/images/arrow-right.png" alt="">
                            </NuxtLink>
                        </template>
                    </div>
                </div>

            </div>
        </section>
        <!--
        <section class="main_sharalar">
            <div class="cst-ct">
                <h2 class="h2">Жоспарланған іс-шаралар</h2>
            </div>
            <div class="main_cst_slider">
                <div class="cst-ct">
                    <div class="ms_sharalar">
                        <template v-for="(links_item, index) in zhosparlar">
                            <div class="ms_block">
                                <span class="type vebinar">{{getType(links_item.type)}}</span><br>
                                <div class="ms_head">{{links_item.title}}</div>
                                <div class="ms_time">{{links_item.date}}</div>
                                <NuxtLink :to="links_item.route_name" class="ms_link">Толығырақ <img src="~assets/images/arrow-right-blue.png" alt=""></NuxtLink>
                            </div>
                        </template>
                    </div>
                </div>
            </div>


        </section>
-->
        <section class="main_diploms">
            <div class="cst-ct">
                <div class="mb_notification">
                    <img src="~assets/images/success3d.png" alt="">
                    <div class="mb_text">Біздің олимпиадалар рұқсат етілген олимпиадалар тізімінде бар. Жарыстарға қатысып, алған марапаттарыңыз портфолиоға салуға жарамды.</div>
                </div>
                <div class="mb_head">
                    ДИПЛОМДАР МЕН СЕРТИФИКАТТАР
                    <div class="mb_prepend">
                        алып, санатыңызды көтеріңіз!
                    </div>
                </div>
                <div class="mb_body">
                    <div v-for="zhospar in zhosparlar" :key="zhospar" :style="{backgroundImage: `url(` + getImgUrl(zhospar.img) + `)`}" class="mb_block">
                        <div class="mb_title">{{zhospar.title}}</div>
                        <div>
                            <div class="a-c">
                                <img src="~assets/images/coin.svg" alt="">
                                <div>Қатысу жарнасы: 490 тг</div>
                            </div>
                            <div class="a-c">
                                <img src="~assets/images/calendar-2.svg" alt="">
                                <div>Уақыты: 1-31 қазан аралығында</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="main_calc">
            <div class="cst-ct">
                <div class="calc_grid">
                    <div class="calc_header">
                        <h2>Өз материалыңызды жариялап, табыс табыңыз!</h2>
                        <span>Ustaz tilegi - ғылым-әдістемелік орталығының сайтына өз материалыңызды жариялап, бағасын жазыңыз. Басқа педагогтар сіздің материалыңызды сатып алған кезде, ақшасын сіздің картаңызға (каспий, халық) аударамыз.</span>
                        <span>Барлығы заңды. Салық төлеу, жарнама жасау, басқа педагогтармен келісуді біз жасаймыз. Сіз сапалы материал дайындасаңыз жеткілікті.</span>
                    </div>
                    <div class="calc_body">
                        <div class="cb_head">Шамамен қанша табатыныңызды есептеп көріңіз</div>
                        <span class="cb_prefix">Материал бағасы</span>
                        <div class="cb_sum">
                            <button class="btn money" v-on:click="calcMaterialCost=100" v-bind:class="{'active':(calcMaterialCost === 100)}">100 тг</button>
                            <button class="btn money" v-on:click="calcMaterialCost=150" v-bind:class="{'active':(calcMaterialCost === 150)}">150 тг</button>
                            <button class="btn money" v-on:click="calcMaterialCost=200" v-bind:class="{'active':(calcMaterialCost === 200)}">200 тг</button>
                            <button class="btn money" v-on:click="calcMaterialCost=350" v-bind:class="{'active':(calcMaterialCost === 350)}">350 тг</button>
                            <button class="btn money" v-on:click="calcMaterialCost=500" v-bind:class="{'active':(calcMaterialCost === 500)}">500 тг</button>
                            <button class="btn money" v-on:click="calcMaterialCost=1000" v-bind:class="{'active':(calcMaterialCost === 1000)}">1000 тг</button>
                        </div>
                        <div class="cb_inputs">
                            <div class="d-flex a-c j-b">
                                Сіз жариялаған материал саны:
                                <input v-model="calcMaterialsValue" type="number" class="cb_input">
                            </div>
                            <input v-model="calcMaterialsValue" class="cb_range" type="range" min="0" max="100" v-bind:style="{ backgroundSize: calcMaterialsValue+'% 100%' }" />
                            <div class="d-flex a-c j-b">
                                Жүктеу саны:
                                <input v-model="calclDownloads" type="number" class="cb_input">
                            </div>
                            <input v-model="calclDownloads" class="cb_range" type="range" min="0" max="100" v-bind:style="{ backgroundSize: calclDownloads+'% 100%' }" />
                        </div>
                        <div class="cb_itog d-flex a-c j-b">
                            <div>Айлық табыс:</div>
                            <div class="green">{{calcMaterialsValue*calclDownloads*calcMaterialCost}} тг</div>
                        </div>
                    </div>
                    <div class="calc_buttons">
                        <div class="calc_btn">
                            <cstBtn text='Жариялап, табыс табу' />
                        </div>
                        <div class="calc_btn">
                            <cstBtn text='Материалдар үлгісін көру' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main_about">
            <div class="cst-ct">
                <div class="header">Орталық туралы</div>
                <div class="span span1">«Ustaz tilegi» Республикалық ғылыми – әдістемелік орталығы білім беру қызметін Қазақстан Республикасы Білім және ғылым министрлігінің №95 «Педагогтердің біліктілігін арттыру курстарын ұйымдастыру және жүргізу, сондай-ақ педагогтің қызметін курстан кейінгі қолдау қағидалары» бұйрығына сәйкес жүзеге асырады.</div>
                <div class="header head2">Орталық туралы</div>
                <a href="#">Білім және ғылым министірлігінің ресми жауабы</a>
                <a href="#">БАҚ ретінде тіркелген куәлік</a>
                <a href="#">Министірлікпен келісілген курстар туралы бұйрық</a>
                <div class="main_profile">
                    <img src="~assets/images/nur.jpg" alt="">
                    <div>
                        <div class="prev">Орталық директоры</div>
                        <div class="header">Қосымтаева Нұржамал</div>
                        <div class="span">В условиях рыночной экономики у Вас есть право выбора организации образования по прохождению курсов повышения квалификации педагогических работников. Этот выбор Вам предоставлен государством. И только Вы имеете право принимать решение где и как Вам обучаться. </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main_search">
            <div class="cst-ct">
                <div class="header">
                    Берілген құжаттарды тексеру
                </div>
                <form action="" class="ms_search">
                    <input type="text" class="form-control" placeholder="Мысалы: KZ123456779">
                    <div class="cst_size_btn">
                        <cstBtn square=1 text='Тексеру' />
                    </div>

                </form>
                <span>Ағылшын әріптерімен жазылады. Егер өз құжатыңызды таба алмасаңыз, 8-771-234-5599 номеріне ватсапқа жазыңыз</span>
            </div>
        </section>
        <section class="main_questions">
            <div class="cst-ct">
                <div class="header">
                    Жиі қойылатын сұрақтарға жауаптар
                </div>
                <div class="mq_list">
                    <template v-for="(links_item, index) in questions">
                        <a href="#" @click.prevent="videoOpen=1">
                            <div class="mq_block">
                                <div class="play">
                                    <img src="~assets/images/playCent.svg" alt="">
                                </div>
                                <div class="desc">{{links_item.title}}</div>
                            </div>
                        </a>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import cstBtn from '@/components/forms/btn.vue'
    import certBtn from '@/components/forms/certBtn.vue'
    import notification from '@/components/svg/notification.vue'
    import videoPopup from '@/components/popups/videoPopup.vue'

    export default {
        components: {
            cstBtn,
            certBtn,
            notification,
            videoPopup,
        },
        layout: 'default',
        data() {
            return {
                options: {
                    perPage: 1,
                    paginationEnabled: false,
                    spacePadding: 15,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true,
                    paginationEnable: false,
                },
                youtubeLink: 'https://www.youtube.com/watch?v=UZ7PjWSFhFM',
                calcMaterialsValue: 15,
                calclDownloads: 15,
                calcMaterialCost: 1000,
                videoOpen: 0,
                title: 'Ustaz tilegi - Ұстаз тілегі Республикалық ұастаздар сайты',
                links_items: [
                    {
                        image: 'userl.svg',
                        head: 'Жеке кабинет',
                        body: 'Сіздің барлық жетістіктеріңіз осында',
                        route_name: 'profile',
                    },
                    {
                        image: 'bonus.svg',
                        head: 'Бонус',
                        body: 'Жетістік жинап, ақша тап',
                        route_name: 'bonus',
                    },
                    {
                        image: 'calculator.svg',
                        head: 'Калькулятор',
                        body: 'тегін, әрі оңай',
                        route_name: 'calculator',
                    },
                    {
                        image: 'folder-2.svg',
                        head: 'ҚМЖ',
                        body: 'Мұғалімге қажетті құжаттар',
                        route_name: 'folders',
                    },
                    {
                        image: 'medal-2.svg',
                        head: 'Байқау',
                        body: 'Республикалық байқауларға қатысыңыз',
                        route_name: 'medals',
                    },
                    {
                        image: 'document-text-2.svg',
                        head: 'Материал',
                        body: 'тегін ашық сабақтар',
                        route_name: 'materials',
                    },
                    {
                        image: 'teacher-2.svg',
                        head: 'Курс',
                        body: 'Біліктілік арттыру курстарына қатысыңыз',
                        route_name: 'kurstar',
                    },
                    {
                        image: 'video-square-2.svg',
                        head: 'Вебинар',
                        body: 'Апта сайын жаңа білімді үйреніңіз',
                        route_name: 'vebinarlar',
                    },
                    {
                        image: 'cup-2.svg',
                        head: 'Олимпиада',
                        body: 'Қатысып дипломдарды жүктеп алыңыз!',
                        route_name: 'olimpiadalar',
                    },
                    {
                        image: 'medal-star-2.svg',
                        head: 'Турнир',
                        body: 'Біліміңізді сынап марапаттарды алыңыз',
                        route_name: 'turnirler',
                    },
                    {
                        image: 'monitor-recorder-2.svg',
                        head: 'Конференция',
                        body: 'Республика бойынша конференциялар',
                        route_name: 'konference',
                    },
                    {
                        image: 'book-2.svg',
                        head: 'Жинақ',
                        body: 'Жинаққа мақала жариялаңыз',
                        route_name: 'zhinaq',
                    },
                ],
                links_to_page: [
                    {
                        image: 'message-question.svg',
                        name: 'Жеке кеңес алу',
                        route_name: 'zheke_qenes_alu',
                    },
                    {
                        image: 'folder-3.svg',
                        name: 'ҚМЖ жасау бойынша кеңес алу',
                        route_name: 'qmj_zhasau',
                    },
                    {
                        image: 'bookmark.svg',
                        name: 'Авторлық бағдарлама жасауды үйрену',
                        route_name: 'bookmark',
                    },
                    {
                        image: 'clipboard.svg',
                        name: 'Аттестацияның екінші кезеңінен өткізу',
                        route_name: 'qmj_zhasau',
                    },
                    {
                        image: 'award.svg',
                        name: 'Педагог шебер атану',
                        route_name: 'award',
                    },
                    {
                        image: 'folder-3.svg',
                        name: 'ҚМЖ жасау бойынша кеңес алу',
                        route_name: 'qmj_zhasau_qenes_alu',
                    },
                    {
                        image: 'folder-3.svg',
                        name: 'Тәрбиешілер дайындайтын құжаттың әдістемелік негіздері',
                        route_name: 'tarbie',
                    },
                    {
                        image: 'clipboard.svg',
                        name: 'Аттестацияның екінші кезеңінен өткізу',
                        route_name: 'attestation',
                    },
                    {
                        image: 'clipboard.svg',
                        name: 'Аттестацияның екінші кезеңінен өткізу',
                        route_name: 'attestation',
                    },
                    {
                        image: 'clipboard.svg',
                        name: 'Аттестацияның екінші кезеңінен өткізу',
                        route_name: 'attestation',
                    },
                ],
                zhosparlar: [{
                        title: 'Республикалық Қазан айының зияткерлік олимпиадасы',
                        route_name: 'sabaqta_qoldanylatyn_yszdik_adis_tasilder',
                        img: 'mb_cup.png',
                    },
                    {
                        title: 'Қазан айының блиц-турнирі',
                        route_name: 'sabaqta_qoldanylatyn_yszdik_adis_tasilder',
                        img: 'mb_medal-star.png',
                    },
                    {
                        title: 'Республикалық байқаулар',
                        route_name: 'sabaqta_qoldanylatyn_yszdik_adis_tasilder',
                        img: 'mb_medal.png',
                    },
                    {
                        title: 'Сабақта қолданылатын үздік әдіс-тәсілдер',
                        route_name: 'sabaqta_qoldanylatyn_yszdik_adis_tasilder',
                        img: 'mb_cup.png',
                    },
                    {
                        title: 'Халықаралық Қазан айының зияткерлік олимпиадасы',
                        route_name: 'sabaqta_qoldanylatyn_yszdik_adis_tasilder',
                        img: 'mb_cup.png',
                    },
                ],
                questions: [{
                        title: 'Олимпиадаларға ұжым болып қатыса аламыз ба?',
                        route_name: 'olimpiada',
                    },
                    {
                        title: 'Сайтқа тіркелгенімді қалай білемін?',
                        route_name: 'olimpiada',
                    },
                    {
                        title: 'Материал жариялап, тегін алған сертификатым аттестацияға жарамды ма?',
                        route_name: 'olimpiada',
                    },
                    {
                        title: 'Турнирге қалай қатысуға болады?',
                        route_name: 'olimpiada',
                    },

                ]

            }
        },
        methods: {
            getImgUrl(pet) {
                var images = require.context('../assets/images/', false)
                return images('./' + pet)
            },
            getType(num) {
                if (num == 1) return 'Вебинар';
                else return 'Не вебинар';
            },
            gotoProfile() {
                this.$router.push('/profile');
            }
        },
        props: ['slideOpen'],

        head() {
            return {
                title: this.title,
            }
        }

    }

</script>

<style scoped lang="scss">
    .main_header {
        @media all and (max-width: 767px) {
            display: none;
        }
    }

    .cst_size_btn {
        height: 55px;

        @media all and (max-width: 767px) {
            height: 40px;
        }

        @media all and (max-width: 500px) {
            height: 55px;
        }

    }

    .otstup {
        padding-bottom: 66px;
    }

    .block1 .cst_btn {
        width: 240px;
        height: 55px;
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

</style>
