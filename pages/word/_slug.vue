<template>
    <div>
        <oplataPopup :price="calcPercent(material.sell)" :oplataOpen="oplataPopup" @closePopup="oplataPopup=0" @next="oplataPopup++" />
        <header_kroshki :header='header' gotoUrl='/material' />
        <section class="main">
            <div class="cst-ct">
                <div class="head">{{material.title}}</div>
                <div class="desc">
                    <div class="prefix">Материал туралы қысқаша түсінік</div>
                    {{material.description}}
                </div>
                <div class="materialBlock" :class="{payed:material.sell > 0}">
                    <div class="left">
                        <div class="header">Авторы:</div>
                        <div class="autor">
                            <div class="avatar"></div>
                            <NuxtLink to="#" class="name">{{material.author}}</NuxtLink>
                        </div>
                        <div v-if="material.sell > 0" class="autor payed">
                            <div class="guard"></div>
                            <div class="pay_info">
                                <span class="gradient">Автор материалды ақылы түрде жариялады.</span><br>
                                Сатылымнан түскен қаражат авторға автоматты түрде аударылады. <a href="#">Толығырақ</a>
                            </div>
                        </div>
                        <div class="material_info">
                            <div>
                                <img src="~assets/images/note-text.svg" alt="">
                                <span>{{material.date}}</span>
                            </div>
                            <div>
                                <img src="~assets/images/eye_materials.svg" alt="">
                                <span>{{material.view}}</span>
                            </div>
                            <div>
                                <img src="~assets/images/import.svg" alt="">
                                <span>{{material.download}} рет жүктелген</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="payment">
                            <template v-if="!isPurchased && ($auth.user ? $auth.user.id : 0) != material.user_id">
                                <div class="free">
                                    <template v-if="material.sell>0">
                                        <template v-if="material.skidka">
                                            Бүгін алсаңыз
                                            <span class="skidka">
                                                {{material.skidka.skidka}}% жеңілдік
                                            </span><br>
                                            беріледі
                                        </template>
                                        <template v-else>
                                            Материал ақылы
                                        </template>
                                    </template>
                                    <template v-else>
                                        Материал тегін
                                    </template>
                                </div>
                                <div v-if="material.sell>0" class="text-center mt-10">
                                    <span v-if="material.skidka" class="old">{{material.sell}} тг</span> <span class="new">{{calcPercent(material.sell)}} тг</span>
                                </div>
                                <cstBtn v-if="!loading && material.sell>0" @click.native="buyThisMaterial()" :text="calcPercent(material.sell) + 'тг - Сатып алу'" img="importwhite.svg" class="cst_size" />
                                <cstBtn v-else-if="loading" loading=1 class="cst_size" />
                                <cstBtn v-else @click.native="download()" text="Тегін жүктеу" img="importwhite.svg" class="cst_size" />
                            </template>
                            <template v-else>
                                <img src="~assets/images/wallet-check.png" alt="">
                                <div class="free">
                                    <span class="gradient">
                                        {{$auth.user.id == material.user_id ? 'Материал' : 'Материал сатып'}}
                                        <br>
                                        {{$auth.user.id == material.user_id ? '№'+material.id : 'алынған'}}
                                    </span>
                                </div>
                                <cstBtn @click.native="download()" text="Жүктеп алу" img="importwhite.svg" class="cst_size" />
                            </template>

                        </div>
                    </div>
                </div>
                <div class="padDocAccess">
                    <div class="docAccess">
                        <img src="~assets/images/message-question-yellow.svg" alt="">
                        <div>Бұл бетте материалдың қысқаша нұсқасы ұсынылған. Материалдың толық нұсқасын жүктеп алып, көруге болады</div>
                    </div>
                </div>
                <template v-if="material.raw=='pdf'">
                    <iframe id="iframepdf" width='100%' height='600px' :src="'https://ust.kz/frontend/web/'+material.file_doc" frameborder='0'></iframe>
                </template>
                <template v-else>
                    <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src=https://ust.kz/frontend/web/'+material.file_doc" width='100%' height='600px' frameborder='0'></iframe>
                </template>
                <bigBtn v-if="!isPurchased && material.sell>0 && ($auth.user ? $auth.user.id : 0) != material.user_id" @click.native="buyThisMaterial()" class="downloadBtn" :text="calcPercent(material.sell) + 'тг - Сатып алу'" img="importwhite.svg" />
                <bigBtn v-else @click.native="download()" class="downloadBtn" text="Материалды жүктеу" img="importwhite.svg" />
                <div class="share">
                    Материал ұнаса әріптестеріңізбен бөлісіңіз
                    <div class="seti">
                        <button onclick="open('https://api.whatsapp.com/send?text=https://eduline.kz/materials/dadada-22.html&amp;utm_source=share2','send',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`)" class="btn whatsapp">
                            <img src="~assets/images/whatsapp.svg" alt="">
                            Ватсапта бөлісу
                        </button>
                        <button onclick="open('https://t.me/share/url?url=https://eduline.kz/materials/dadada-22.html&utm_source=share2','send',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`)" class="btn telegram">
                            <img src="~assets/images/telegram.svg" alt="">
                            Телеграммда бөлісу
                        </button>
                        <button onclick="open('https://www.facebook.com/sharer.php?src=sp&u=https://eduline.kz/materials/dadada-22.html&utm_source=share2','send',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`)" class="btn facebook">
                            <img src="~assets/images/facebook_fill.svg" alt="">
                            Фейсбукта бөлісу
                        </button>
                        <button @click="copyUrl" class="btn sharer">
                            <img src="~assets/images/share.svg" alt="">
                            Сілтемені көшіру
                        </button>
                    </div>
                </div>
                <div class="sertificate">
                    <img src="~assets/images/green-certificate.svg" alt="">
                    <div class="body">
                        <div class="info">
                            «Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген.
                        </div>
                        <div class="desc">
                            Бұл сертификат «Ustaz tilegi» Республикалық ғылыми – әдістемелік журналының желілік басылымына өз авторлық жұмысын жарияланғанын растайды. Журнал Қазақстан Республикасы Ақпарат және Қоғамдық даму министрлігінің №KZ09VPY00029937 куәлігін алған. Сондықтан аттестацияға жарамды.
                        </div>
                        <div class="certBtns">
                            <emptyBtn @click.native="getCertificate" text="Сертификатты көру" />
                            <NuxtLink to="/zharialau">
                                <emptyBtn text="Осындай сертификат алу" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!--
                <button class="btn btn-danger report">
                    <img src="~assets/images/flag.svg" alt="">
                    Шағымдану
                </button>
-->
                <reportBtn text="Шағымдану" class="report" />
            </div>
        </section>
        <section class="others">
            <div class="materials-list">
                <div class="cst-ct">
                    <div v-if="authors_materials!=null" class="list first">
                        <div class="head">Автордың материалдары</div>
                        <template v-for='material_item in authors_materials'>
                            <block :material="material_item" />
                        </template>
                        <glassBtn v-if="authors_materials.length == 3" @click.native="more" text="Автордың барлық материалдары" class="authorBtn" radian=1 />
                    </div>
                    <div class="list second">
                        <div class="head">Ұқсас материалдар</div>
                        <template v-for='material_item in others'>
                            <block :material="material_item" />
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import download from '@/components/svg/download.vue'
    import block from '@/components/materials/forms/block.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import emptyBtn from '@/components/forms/emptyBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import reportBtn from '@/components/forms/reportBtn.vue'
    import glassBtn from '@/components/forms/glassBtn.vue'
    import oplataPopup from '@/components/popups/oplataPopup.vue'
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            download,
            block,
            header_kroshki,
            emptyBtn,
            bigBtn,
            reportBtn,
            glassBtn,
            oplataPopup,
            cstBtn
        },
        data() {
            return {
                material: {
                    user: {}
                },
                authors_materials: [],
                title: '',
                header: [{
                    name: 'Материалдар',
                    link: '/material'
                }, {
                    name: '',
                }],
                others: [],
                oplataPopup: 0,
                isPurchased: 0,
                loading: 0,
            }
        },
        head() {
            return {
                title: this.material.title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.material.zhanr + ' - бойынша ' + this.material.title + ' - атты ' + this.material.zhanr2 + ' - ұстаз тілегі сайтынан тегін жүктеп алыңыз.',
                }, ],
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }, ],
            }
        },

        methods: {
            buyThisMaterial() {
                if (this.$loginOrRoute()) {
                    this.oplataPopup = 6
                    this.loading = 1
                    this.$api.post('/word/' + this.material.id + '/purchase', {
                        sell: this.calcPercent(this.material.sell),
                        skidka: this.material.skidka ? this.material.skidka.skidka : 0,
                    }).then((res) => {
                        console.log(res);
                        if (res.data.purchase) {
                            this.oplataPopup = 7
                            this.isPurchased = 1
                        } else this.oplataPopup = 5
                        this.loading = 0
                    }).catch((err) => {
                        console.log(err);
                        this.loading = 0
                    })
                }
            },
            getCertificate() {
                this.$axios.get('/word/' + this.material.id + '/certificate', {
                    responseType: 'blob'
                }).then((response) => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    var d = new Date();
                    fileLink.setAttribute('download', d.toLocaleString() + '.jpeg');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
            },
            calcPercent(e) {
                return Math.round(e - e * (this.material.skidka ? this.material.skidka.skidka : 0) / 100);
            },
            copyUrl() {
                let tempInput = document.createElement('textarea');
                let copyUrlBtn = document.querySelector('.sharer');
                tempInput.style.fontSize = '12pt';
                tempInput.style.border = '0';
                tempInput.style.padding = '0';
                tempInput.style.margin = '0';
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                tempInput.setAttribute('readonly', '');
                tempInput.value = window.location.href;
                copyUrlBtn.parentNode.appendChild(tempInput);
                tempInput.select();
                tempInput.setSelectionRange(0, 99999);
                document.execCommand('copy');
                tempInput.parentNode.removeChild(tempInput);
                alert('Сілтеме сәтті көшірілді!');
            },
            download() {
                this.$axios.$get('/word/' + this.material.id + '/download', {
                    responseType: 'blob'
                }).then((response) => {
                    const blob = new Blob([response]);
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = this.material.filename;
                    link.click();
                })
            },
            more() {
                //                this.$axios.$get('/word/'+this.material.user.id+'/materials').then((res)=>{
                //                    console.log(res)
                //                })
                this.$router.push('/word/' + this.material.user_id + '/materials')
            }
        },
        async fetch() {
            await this.$axios.$get('/word/' + this.$route.params.slug).then((res) => {
                this.material = res.material
                this.header[1].name = res.material.title
                this.authors_materials = res.authors_materials
                this.others = res.others
                this.isPurchased = res.isPurchased
                console.log(res.material)
            });
        }
    }

</script>


<style scoped lang="scss">
    .main {
        padding-top: 30px;

        iframe {
            border: 1px solid #363636;
            border-radius: 4px;
            background: #FFFFFF;
        }

        .private_head {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .privateBlock {
                display: flex;
                align-items: center;
                ;
                border-radius: 24px;
                padding: 0 18px 0 19px;
                height: 40px;
                background-image: url(../../assets/images/Background_priv.png);

                img {
                    margin-right: 10px;
                }

                div {
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 26px;
                    background: linear-gradient(61.13deg, #9C1EE9 32.51%, #6398FF 91.27%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            }

            .f {
                background: linear-gradient(61.13deg, #9C1EE9 32.51%, #6398FF 91.27%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-size: 16px;
                font-weight: 500;
                line-height: 23px;
                margin-left: 20px;

            }
        }

        .head {
            font-size: 28px;
            font-weight: 600;
            line-height: 33px;
        }

        .desc {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin-top: 14px;
            color: #363636;

            .prefix {
                color: #888888;
            }
        }

        .materialBlock {
            margin-top: 30px;
            padding: 30px;
            background: #F9F9F9;
            border-radius: 10px;
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 40px;

            @media all and (max-width: 883px) {
                grid-template-columns: 1fr;
                grid-gap: 20px;
            }

            span.gradient {
                background: linear-gradient(61.13deg, #9C1EE9 32.51%, #6398FF 91.27%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            .left {
                font-weight: 400;
                line-height: 19px;
                color: #888888;

                .header {
                    font-size: 16px;
                }

                .autor {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    align-items: center;
                    margin-top: 10px;
                    grid-gap: 10px;

                    &.payed {
                        margin-top: 20px;
                    }

                    .avatar,
                    .guard {
                        width: 24px;
                        height: 24px;

                    }

                    .avatar {
                        background-size: cover;
                        border-radius: 50%;
                        background-image: url(assets/images/dake.png);
                    }

                    .guard {
                        background-size: contain;
                        background-image: url(assets/images/shield-tick.svg);
                    }

                    .name {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 21px;
                        color: #363636;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                .material_info {
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    grid-gap: 10px 20px;
                    font-size: 18px;
                    line-height: 21px;

                    div {
                        display: flex;
                        align-items: center;

                        img {
                            width: 20px;
                            height: 20px;
                            margin-right: 4px;
                        }
                    }
                }

            }

            .right {
                .payment {
                    background: #FFFFFF;
                    /* Line 2 */

                    border: 1px solid #F0F0F0;
                    border-radius: 10px;
                    padding: 30px 20px;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 21px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .free {
                        color: #363636;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19px;

                        .gradient {
                            margin-top: 5px;
                        }

                        .skidka {
                            color: #03B113;
                            font-weight: 600;
                        }
                    }

                    .mt-10 {
                        font-size: 16px;
                        margin-top: 10px;
                        font-family: 'Lato-Regular';

                        .old {
                            text-decoration-line: line-through;
                            color: #888888;
                            font-weight: 500;
                        }

                        .new {
                            color: #03B113;
                            padding-left: 5px;
                            font-weight: 700;
                            font-size: 22px;
                        }
                    }

                    .cst_size {
                        margin-top: 20px;
                        width: 230px;
                        height: 50px;
                    }

                }
            }

            &.payed {
                background: #FFFDF2;
            }
        }

        .sertificate {
            margin-top: 30px;
            background: #F9F9F9;
            border-radius: 10px;
            padding: 30px;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 24px;
            flex-direction: row;
            align-items: flex-start;

            @media all and (max-width: 883px) {
                grid-template-columns: auto;
                justify-items: center;
            }

            .body {
                .info {
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #363636;
                }

                .desc {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                    margin: 20px 0 20px;
                }

                .certBtns {
                    display: grid;
                    grid-template-columns: auto auto 1fr;
                    grid-gap: 20px;

                    @media all and (max-width: 991px) {
                        grid-template-columns: 1fr;
                        grid-gap: 15px;
                    }
                }
            }
        }

        .docAccess {
            padding: 20px;
            background: #F9F9F9;
            border-radius: 4px;
            margin-top: 30px;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 10px;
            align-items: center;

            @media all and (max-width: 883px) {
                margin-top: 50px;
            }

            img {
                margin-right: 5px;
            }

            div {
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                color: #888888;
            }

        }

        .downloadBtn {
            width: 288px;
            height: 50px;
            display: block;
            margin: 30px auto 0;
        }

        .share {
            margin-top: 50px;
            text-align: center;

            .seti {
                margin-top: 10px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
                border-radius: 6px;
                overflow: hidden;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 1px;
                background: #D6D6D6;

                @media all and (max-width: 883px) {
                    grid-template-columns: 1fr 1fr;
                }

                button {
                    background: #ffffff;
                    padding: 0;
                    display: block;
                    width: 100%;
                    height: 50px;
                    border-radius: 0;
                    font-size: 14px;
                    font-weight: 600;

                    img {
                        margin-right: 10px;
                    }
                }

                .whatsapp {
                    color: #03B113;

                    &:hover {
                        background: #EAFFEA;
                    }
                }

                .telegram {
                    color: #039BE5;

                    &:hover {
                        background: #CAEDFE;
                    }
                }

                .facebook {
                    color: #1976D2;

                    &:hover {
                        background: #BEDFFF;
                    }
                }

                .sharer {
                    color: #1C77FD;

                    &:hover {
                        background: #C7DDFF;
                    }
                }
            }
        }

        .report {
            margin-top: 20px;
            width: 201px;
            height: 50px;
        }
    }

    .others {
        .materials-list {
            position: relative;
            background: #ffffff;
            z-index: 2;
            padding-top: 100px;
            padding-bottom: 100px;

            @media all and (max-width: 767px) {
                padding-top: 30px;
            }

            .list {
                &.second {
                    margin-top: 80px;
                }

                .authorBtn {
                    height: 50px;
                    margin-top: 20px;

                    img {
                        transform: rotate(180deg);
                    }
                }
            }

            .head {
                margin-bottom: 30px;
                font-size: 28px;
                font-weight: 600;
                line-height: 33px;
                color: #363636;
            }

            .block {
                padding: 20px 20px;
            }
        }
    }

</style>
<style lang="scss">
    .main .sertificate .body .certBtns button {
        width: auto;
        padding: 10px 18px;
    }

</style>
