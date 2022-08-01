<template>
    <div>
        <erezhe :isOpen='erezhe_popup' @closePopup='erezhe_popup=0' />
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex a-c">
                        <NuxtLink to="/material">
                            <button class="btn back">
                                <img src="~assets/images/arrow-left-blue.svg" alt="">
                                <span>Артқа қайту</span>
                            </button>
                        </NuxtLink>
                        <div class="kroshki">
                            <NuxtLink to="materialdar">Менің материалдарым</NuxtLink> / Жаңа материал жариялау
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="main">
            <div class="cst-ct">
                <div class="info_block">
                    <Lottie :width="30" :height="30" :options="defaultOptions" v-on:animCreated="handleAnimation" />
                    <div class="body">
                        <b>«Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген.</b><br><br>

                        Сайтта жарияланған барлық материалдар журналдың интернет басылымына жарияланған болып саналады. Барлық қолданушыларға журналдың интернет басылымына жариялағандығын растайтын сертификат беріледі. Журнал министірлікте тіркелгендіктен сертификат аттестацияға жарамды. Бұл ұстаздардың дәрежесін көтеру мақсатында "Ұстаз тілегі" орталығы ұйымдастырған мүмкіндік. <br>
                        <button class="btn btn_green">
                            Куәлікті көру
                        </button>
                    </div>
                </div>
                <div class="form">
                    <div class="h3" id="main">1.<span>Материал ақпаратын енгізу</span></div>
                    <div class="cst-pd">
                        <div class="block">
                            <label for="title">Материал тақырыбы</label>
                            <input v-model="form.title" type="text" id="title" class="form-control myInput" :class="{danger_input: errors.title}" placeholder="Ашық сабақ Ыбырай Алтынсарин 5 сынып" @click="errors.title=null">
                            <span v-if="errors.title" class="danger_message">{{errors.title}}</span>
                        </div>
                        <div class="block">
                            <label for="file">Материал файлын жүктеу</label>
                            <div class="dropzone" :class="{active: dropzone_state==3}">
                                <div v-show='dropzone_state==1' class="input_state">
                                    <div class="info_extend">
                                        <b>doc, docx, ppt, pptx, pdf</b><br>
                                        файлдарын жүктеуге болады
                                    </div>
                                    <Lottie :width="170" :height="170" :options="uploadOption" v-on:animCreated="handleAnimation" />

                                    <div class="info_download">Файлды жүктеу</div>
                                </div>
                                <div v-show='dropzone_state==2' class="loading_state">
                                    <div class="info_extend">
                                        {{procent_zagruski}}% жүктелуде...
                                    </div>
                                    <Lottie v-if='dropzone_state==2' :width="340" :height="340" :options="loadingOption" v-on:animCreated="handleAnimation" />
                                </div>
                                <div v-show='dropzone_state==3' class="success_state">
                                    <div class="info_extend">
                                        Сіздің файлыңыз сәтті жүктелді
                                    </div>
                                    <Lottie v-if='dropzone_state==3' :width="170" :height="170" :options="successOption" v-on:animCreated="handleAnimation" />
                                    <div class="info_download">
                                        {{file_name}}
                                        <edit color='#1C77FD' />
                                        <span class="blue">өзгерту</span>
                                    </div>
                                </div>
                                <div class="drop_file_input">
                                    <input type="file" name="doc_file" class="file_input" @change="previewFiles" multiple>
                                    <div class="help_block">{{file_error}}</div>
                                </div>
                            </div>
                            <span v-if="errors.file_doc" class="danger_message">{{errors.file_doc}}</span>
                        </div>
                        <div class="block">
                            <label for="description">Материал туралы қысқаша түсінік</label>
                            <textarea v-model="form.description" type="text" id="description" class="form-control myInput" :class="{danger_input: errors.description}" placeholder="Қысқаша түсінік ретінде материалдың басқаларға пайдасы, негізгі ойы, форматы туралы ақпарат жазуға болады." @click="errors.description=null"></textarea>
                            <span v-if="errors.description" class="danger_message">{{errors.description}}</span>
                        </div>
                        <div class="block">
                            <div class="category">
                                <btnGroup :category='subjects' placeholder='Пәнді таңдаңыз' @entered-category='form.zhanr=$event+1' />
                                <btnGroup :category='directions' placeholder='Бағытын таңдаңыз' @entered-category='form.zhanr2=$event+1' />
                                <btnGroup :category='classes' placeholder='Сыныбын таңдаңыз' @entered-category='form.zhanr3=$event+1' />
                            </div>
                            <div class="info">
                                <img src="~assets/images/message-question-yellow.svg" alt="">
                                <div class="body">Егер сізге категория жеткіліксіз болса, бізге 8-771-234-5599 номеріне ватсап арқылы толық ақпаратты жазып жіберіңіз</div>
                            </div>
                        </div>
                    </div>
                    <div class="h3">2.<span>Автор жайлы ақпарат</span></div>
                    <div class="cst-pd">
                        <div class="block">
                            <label for="author">Сертификат алушының толық аты-жөні</label>
                            <input v-model="form.author" type="text" id="author" class="form-control myInput" :class="{danger_input: errors.author}" placeholder="мысалы: Досболов Марат Кенесұлы" @click="errors.author=null">
                            <span v-if="errors.author" class="danger_message">{{errors.author}}</span>
                        </div>
                        <div class="block">
                            <label for="place_work">Сертификат алушының жұмыс орны немесе оқу орны</label>
                            <input v-model="form.work" type="text" id="work" class="form-control myInput" :class="{danger_input: errors.work}" placeholder="мысалы: Ақмола облысы Астана қаласы №7 жалпы орта мектебі КММ бастауыш сынып мұғалімі" @click="errors.work=null">
                            <span v-if="errors.work" class="danger_message">{{errors.work}}</span>
                        </div>
                        <div class="block">
                            <label>Жетекшіні қосу</label>
                            <div>
                                <button class="btn switch" :class="{active: activeZhetekshi}" @click="activeZhetekshi = !activeZhetekshi, form.zhetekshi=''"></button>
                                <div v-show='activeZhetekshi' class="block">
                                    <label for="zhetekshi">Жетекшінің толық аты-жөні</label>
                                    <input v-model="form.zhetekshi" type="text" id="zhetekshi" class="form-control myInput" placeholder="мысалы: Досболов Марат Кенесұлы">
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <label>Жинаққа жариялау</label>
                            <div class="d-flex a-c">
                                <button class="btn switch" :class='{active: form.zhinak}' @click='form.zhinak = !form.zhinak ? 1:0'></button>
                                <span class="zharnama" v-show='form.zhinak'>Жарнасы: 3000 тг</span>
                            </div>
                        </div>
                    </div>
                    <div class="h3">3.<span>Сату</span></div>
                    <div class="cst-pd">
                        <div class="block">
                            <div class="sellBlock">
                                <div class="header">
                                    <img src="~assets/images/shield-tick.svg" alt="">
                                    <div class="rainbow">Ақылы материал</div>
                                </div>
                                <div class="body">
                                    <div class="d-flex a-c">
                                        <button class="btn switch" :class='{active: activeSell}' @click='activeSell = !activeSell,form.sell=0'></button>
                                        <span class="aqyly">Материалды ақылы түрде жариялау</span>
                                    </div>
                                    <div v-show="activeSell">
                                        <div class="info">250-500 теңге аралығындағы материалдарды көп сатып алады.</div>
                                        <div class="sellTypeSum">
                                            <button v-for='(sellType, index) in sellSumType' class="btn sumBlock" @click='form.sell=sellType' :class='{active: form.sell==sellType}'>
                                                {{sellType}} тг
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="zharialau">
                        <button @click.prevent="sendData()" class="btn myBtn">Материал жариялау</button>
                        <div class="erezhe">Сіз материалды жариялау арқылы <a @click='erezhe_popup=1'>сайттың ережелерімен</a> келіскеніңізді растайсыз.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "@/assets/lottie_files/info/animation_kpny1i8h.json"
    import * as animationUpload from "@/assets/lottie_files/upload/lf30_editor_lp05g8qp.json"
    import * as animationLoading from "@/assets/lottie_files/Loading/lf30_editor_si87nbm9.json"
    import * as animationSuccess from "@/assets/lottie_files/done/lf30_editor_baziyhkx.json"
    import edit from '@/components/svg/edit.vue'
    import btnGroup from '@/components/forms/btnGroup.vue'
    import erezhe from '@/components/popups/erezhe.vue'

    export default {
        components: {
            Lottie,
            edit,
            btnGroup,
            erezhe
        },
        data() {
            return {
                dropzone_state: 1,
                subjects: [],
                directions: [],
                classes: [],
                activeZhetekshi: false,
                activeZhinak: false,
                activeSell: false,
                sellSumType: [250, 450, 700, 900, 1300, 1500, 1900, 2500],
                activeSellSum: null,
                anim: null,
                form: {
                    title: '',
                    description: '',
                    zhanr: 1,
                    zhanr2: 1,
                    zhanr3: 1,
                    author: '',
                    work: '',
                    sell: 0,
                    zhetekshi: '',
                    ssilka_video: '',
                    zhinak: 0,
                    filename: '',
                    file_doc: '',
                    raw: '',
                    file: null,
                },
                errors: {
                    author: null,
                    description: null,
                    title: null,
                    work: null,
                    file_doc: null,
                },
                file_error: '',
                file_name: '',
                procent_zagruski: 0,
                erezhe_popup: 0,
                defaultOptions: {
                    animationData: animationData
                },
                uploadOption: {
                    animationData: animationUpload
                },
                loadingOption: {
                    animationData: animationLoading,
                    loop: false,
                },
                successOption: {
                    animationData: animationSuccess,
                    loop: false,
                },
                animationSpeed: 1,
                formHasSended: false,
                config: {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                },
                timeOuter: null
            }

        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
            sendForm() { // send FILE
                const fd = new FormData();
                fd.append('file', this.form.file);
                this.$axios.post("/word/zharialau", fd, this.config).then((response) => {
                        this.form.filename = response.data.filename;
                        this.form.file_doc = response.data.file_doc;
                        this.form.raw = response.data.raw;
                    })
                    .catch(function(error) {console.log(error.response)});
            },
            sendData() { // send data to DB
                this.$api.$post("/word/zharialau", this.form, {}).then(res => {
                    this.formHasSended = true;
                    this.$bus.$emit('successPopup');
                    this.$router.push('/menin-materialdarym');
                })
                .catch(error => {
                    const data = error.response.data.errors;
                    var container = this.$el.querySelector(`#main`);
                    for (let [key, value] of Object.entries(this.errors))
                        this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    if (data) container.scrollIntoView({behavior: "smooth"});
                });
            },
            previewFiles(event) {
                this.anim.play();
                this.dropzone_state = 2;
                this.destroyFileInFolder();
                this.errors.file_doc=null;
                const intervalOuter = setInterval(() => {this.procent_zagruski += 3}, 100);
                this.timeOuter = setTimeout(() => {
                    this.dropzone_state = 3;
                    clearInterval(intervalOuter);
                    this.procent_zagruski = 0;
                    this.file_name = event.target.files[0].name;
                    if (this.validation_file(event.target.files[0])) {
                        this.form.file = event.target.files[0];
                        this.sendForm();
                    };
                }, 3300);
                console.log(event.target.files[0]);
            },
            async getCategory() {
                let cats = await this.$axios
                    .$get("/word/getCategories")
                    .then((response) => (
                        this.subjects = response.subjects,
                        this.directions = response.directions,
                        this.classes = response.classes
                    ));
            },
            activateBtn(e) {
                e = !e;
            },
            validation_file(e) {
                let done_extend_list = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/pdf'];
                let chec = false;
                for (let n = 0; n < done_extend_list.length; n++) {
                    if (done_extend_list[n] == e.type) chec = true;
                }
                if (!chec) {
                    this.file_error = 'Разрешено загрузка файлов только со следующими разрешениями pdf, pptx, ppt, docx, doc.';
                    return false;
                }
                if (e.size > 1024 * 1024 * 10) {
                    this.file_error = 'Файл превышает 10Мб.';
                    return false;
                }
                return true;
            },
            destroyFileInFolder(){
                if(this.form.file_doc){
                    this.$axios.$post('/word/file/destroy', {
                        filename: this.form.filename,
                        file_doc: this.form.file_doc
                    }, {headers: {'Content-Type': 'application/json'}}).then(() => {
                        console.log('File destroyed');
                    }).catch((err) => {
                        console.log(err.response);
                    })
                }
            }
        },
        async fetch() {
            await this.getCategory();
        },
        beforeDestroy() {
            clearTimeout(this.timeOuter);
            if (!this.formHasSended) {
                this.destroyFileInFolder();
            }
        }
    }

</script>

<style scoped lang="scss">
    @keyframes example {
        0% {background-position: 0% 100%}
        50% {background-position: 100% 0%}
        100% {background-position: 0% 100%}
    }

    .otstup {
        padding-bottom: 66px;
        @media all and (max-width: 767px){
            padding-bottom: 132px;
        }
    }

    .main_header {
        .back {
            border: 1px solid #3E6CED;
            border-radius: 4px;
            font-weight: 600;
            line-height: 20px;
            color: #3E6CED;
            @media all and (max-width: 883px) {span {display: none;}}
        }

        .kroshki {
            margin-left: 15px;
            line-height: 20px;
            color: #888888;
        }
    }

    .main {
        padding-bottom: 150px;
    }

    .info_block {
        background: #E6F7E8;
        border-radius: 4px;
        padding: 20px;
        margin-top: 20px;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 15px;
        .body {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: #03B113;
            @media all and (max-width: 767px) {
                font-size: 14px;
                line-height: 18px;
            }
            @media all and (max-width: 575px) {
                font-size: 12px;
                line-height: 16px;
            }
            .btn_green {
                background: #03B113;
                border-radius: 6px;
                width: 100%;
                max-width: 200px;
                height: 40px;
                color: #FFFFFF;
                font-weight: 500;
                margin-top: 15px;
            }
        }
    }

    .form {
        margin-top: 40px;
        .h3 {
            font-size: 24px;
            font-weight: 600;
            line-height: 28px;
            margin-top: 70px;
            @media all and (max-width: 767px) {
                font-size: 22px;
                line-height: 26px;
            }
            @media all and (max-width: 693px) {
                font-size: 20px;
                line-height: 24px;
            }
            @media all and (max-width: 575px) {
                font-size: 18px;
                line-height: 22px;
            }
            &:first-child {margin: 0;}
            span {margin-left: 20px;}
        }

        .cst-pd {
            padding: 0 50px;

            @media all and (max-width: 575px) {
                padding: 0 16px 0 32px;
            }
        }

        .block {
            margin-top: 24px;

            &:first-child {
                margin-top: 30px;
            }

            label {
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                color: #363636;
                margin-bottom: 7px;

                @media all and (max-width: 575px) {
                    font-size: 14px;
                    line-height: 17px;
                }
            }

            textarea.myInput {
                height: 140px;
                ;
            }

            .myInput {
                background: #FAFAFA;
                border: 1px solid #D6D6D6;
                border-radius: 6px;
                padding: 15px 20px;
                height: auto;

                @media all and (max-width: 575px) {
                    padding: 15px;
                }

                &::placeholder {
                    font-size: 14px;
                    font-weight: 400;
                    color: #8B8B8B;
                }
            }

            .danger_input {
                border: 1px solid #dc3545;
            }

            .dropzone {
                display: block;
                position: relative;
                background: #EFF3FF;
                border: 1px dashed #1C77FD;
                border-radius: 6px;
                height: 220px;
                cursor: pointer;
                transition: 0.3s all;
                overflow: hidden;

                &.active {
                    background: #E6F7E8;
                    border: 1px dashed #03B113;
                }

                .input_state {
                    transform: translateY(-15px);

                    .info_extend {
                        position: absolute;
                        top: 137px;
                        width: 100%;
                        text-align: center;
                    }

                    .info_download {
                        text-align: center;
                        color: #1E63E9;
                        text-decoration: underline;
                        margin-top: 11px;
                        font-weight: 600;
                    }
                }

                .loading_state {
                    transform: translateY(-60px);
                    display: flex;
                    justify-content: center;

                    .info_extend {
                        position: absolute;
                        top: 138px;
                        width: 100%;
                        text-align: center;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }

                .success_state {
                    .info_extend {
                        position: absolute;
                        top: 150px;
                        text-align: center;
                        width: 100%;
                        font-size: 14px;
                        text-align: center;
                        color: #03B113;
                        font-weight: 700;
                    }

                    .info_download {
                        text-align: center;
                        margin-top: 4px;

                        .blue {
                            color: #1C77FD;
                            text-decoration: underline;
                        }
                    }
                }

                .drop_file_input {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;

                    .file_input {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        cursor: pointer;
                    }

                    .help_block {
                        text-align: center;
                        width: 100%;
                        color: #a94442;
                        padding-bottom: 5px;
                        font-size: 12px;
                        font-weight: 800;
                    }
                }
            }

            .category {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 10px;

                @media all and (max-width: 883px) {
                    grid-template-columns: 1fr;
                }
            }

            .info {
                display: flex;
                align-items: center;
                margin-top: 20px;

                img {
                    margin-right: 10px;
                }

                .body {
                    max-width: 480px;
                    font-weight: 300;
                    color: #888888;

                    @media all and (max-width: 575px) {
                        font-size: 12px;
                        line-height: 1.4;
                    }
                }
            }

            .switch {
                width: 80px;
                height: 30px;
                background: #D6D6D6;
                border-radius: 26px;
                display: flex;
                align-items: center;
                justify-content: center;

                &.active {
                    &::after {
                        transform: translateX(50%);
                        background: #03B113;
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #363636;
                    transition: all 0.3s;
                    transform: translateX(-50%);
                }
            }

            .zharnama {
                font-size: 16px;
                font-weight: 600;
                line-height: 23px;
                margin-left: 25px;
            }

            .sellBlock {
                background: #F9F9F9;
                border: 1px solid #D6D6D6;

                .header {
                    padding: 20px 30px;
                    border-bottom: 1px solid #D6D6D6;
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 10px;
                    }

                    .rainbow {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 29px;
                        background: linear-gradient(61.13deg, #9C1EE9 32.51%, #6398FF 91.27%);
                        background-size: 200%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                        animation-name: example;
                        animation-duration: 4s;
                        animation-iteration-count: infinite;
                    }
                }

                .body {
                    padding: 30px;

                    .aqyly {
                        font-size: 16px;
                        font-weight: 400;
                        color: #363636;
                        margin-left: 20px;
                    }

                    .sellTypeSum {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        grid-gap: 10px;
                        max-width: 440px;
                        margin-top: 20px;

                        @media all and (max-width: 883px) {
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }

                        @media all and (max-width: 442px) {
                            grid-template-columns: 1fr 1fr 1fr;
                        }

                        @media all and (max-width: 364px) {
                            grid-gap: 5px;
                        }

                        .sumBlock {
                            padding: 0;
                            background: #D6D6D6;
                            border-radius: 6px;
                            height: 30px;
                            font-size: 16px;
                            font-weight: 700;
                            line-height: 23px;
                            color: #363636;

                            &.active {
                                color: #FFFFFF;
                                background: #000000;
                            }
                        }
                    }
                }

            }
        }

        .zharialau {
            margin-top: 70px;
            display: grid;
            grid-template-columns: 270px auto;
            grid-gap: 30px;
            align-items: center;

            @media all and (max-width: 883px) {
                grid-gap: 15px;
                grid-template-columns: 235px auto;
            }

            @media all and (max-width: 767px) {
                grid-template-columns: 1fr;
                grid-gap: 25px;
            }

            .myBtn {
                height: 50px;
                background: #1E63E9;
                border-radius: 26px;
                color: #ffffff;

                @media all and (max-width: 767px) {
                    width: 100%;
                }
            }

            .erezhe {
                font-size: 16px;
                line-height: 19px;
                max-width: 350px;

                @media all and (max-width: 767px) {
                    max-width: 100%;
                    text-align: center;
                }

                a {
                    color: #1E63E9;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .danger_message {
        position: absolute;
        font-size: 11px;
        line-height: 13px;
        color: #dc3545;
    }

</style>
