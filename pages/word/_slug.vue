<template>
    <div>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex a-c">
                        <NuxtLink to="/materialdar">
                            <button class="btn back">
                                <img src="~assets/images/arrow-left-blue.svg" alt="">
                                Артқа қайту
                            </button>
                        </NuxtLink>
                        <div class="kroshki">
                            <NuxtLink to="materialdar">Материалдар</NuxtLink> / Республикалық дүниетану пәнінен ұстаздар арасындағы олимпиада
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="main">
            <div class="cst-ct">
                <div v-if="material.sell" class="private_head">
                    <div class="privateBG">
                        <div class="privateBlock">
                            <img src="~assets/images/shield-tick.svg" alt="">
                            <div>Ақылы материал</div>
                        </div>
                    </div>
                    <div class="f">Автор материалды ақылы түрде жариялады</div>
                </div>
                <div class="head">{{material.title}}</div>
                <div class="desc">
                    <div class="prefix">Материал туралы қысқаша түсінік</div>
                    {{material.description}}
                </div>
                <div class="sertificate">
                    <img src="~assets/images/green-certificate.svg" alt="">
                    <div class="body">
                        <div class="info">
                            <NuxtLink to="/profile-id-2">
                                <div class="name">
                                    <img src="~assets/images/user-black.svg" alt="">
                                    <span>{{material.user.s_name}} {{material.user.username}} {{material.user.l_name}}</span>
                                </div>
                            </NuxtLink>
                            <div class="date">
                                <img src="~assets/images/note-text.svg" alt="">
                                <span>{{material.date}}</span>
                            </div>
                            <div class="views">
                                <img src="~assets/images/eye_materials.svg" alt="">
                                <span>{{material.view}}</span>
                            </div>
                            <div class="downloads">
                                <img src="~assets/images/import.svg" alt="">
                                <span>{{material.download}}</span>
                            </div>
                        </div>
                        <div class="desc">
                            Бұл сертификат «Ustaz tilegi» Республикалық ғылыми – әдістемелік журналының желілік басылымына өз авторлық жұмысын жарияланғанын растайды. Журнал Қазақстан Республикасы Ақпарат және Қоғамдық даму министрлігінің №KZ09VPY00029937 куәлігін алған. Сондықтан аттестацияға жарамды.
                        </div>
                        <div class="certBtns">
                            <button class="btn certBtn">Сертификатты жүктеу</button>
                            <button class="btn certBtn">Материалды жүктеу</button>
                            <button class="btn certBtn">Сертификат алу</button>
                        </div>
                    </div>
                </div>
                <div class="padDocAccess">
                    <div class="docAccess">
                        <img src="~assets/images/access.svg" alt="">
                        <span>Материалдың толық нұсқасын жүктеп алып, көруге болады</span>
                    </div>
                </div>
                <template v-if="material.raw=='docx'||material.raw=='doc'">
                    <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src=ust.kz/frontend/web/'+material.file_doc" width='100%' height='720px' frameborder='0'></iframe>
                </template>
                <template v-if="material.raw=='pdf'">
                    <iframe id="iframepdf" width='100%' height='720px' src="files/example.pdf" frameborder='0'></iframe>
                </template>
                <button @click="download()" class="btn btn-primary downloadBtn">
                    <download color="#ffffff" />
                    Материалды жүктеу
                </button>
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
                <div class="informer">
                    <img src="~assets/images/info-circle.svg" alt="">
                    <div class="body">
                        БАҚ тіркелгендігі туралы куәлік: 15685-ИА. Материалдарды қайта басуға және де басқа түрде қолдануға, сонымен қоса электрондық БАҚ-да тек қана сайттың әкімшілігінің жазбаша рұқсатымен ғана жүзеге асырылады. Сонымен қатар сайқа сілтеме міндетті түрде болу керек. Егер Сіз біздің сайтта заңсыз түрде материалдар қолданғанын көрсеңіз, сайт әкімшілігіне жеткізіңіз - материалдар жойылады. Редакцияның көзқарасы автордың көзқарасымен сәйкес келмеуі мүмкін.
                    </div>
                </div>
                <button class="btn btn-danger report">
                    <img src="~assets/images/flag.svg" alt="">
                    Шағымдану
                </button>
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
                        <NuxtLink to='/other'>
                            <button class="btn authorBtn">
                                Автордың барлық материалдары
                                <img src="~assets/images/arrow-left-blue.svg" alt="">
                            </button>
                        </NuxtLink>
                    </div>
                    <div class="list second">
                        <div class="head">Ұқсас материалдар</div>
                        <template v-for='material_item in materials'>
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

    export default {
        components: {
            download,
            block,
        },
        data() {
            return {
                material: [],
                materials: [
                    {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, ],
                authors_materials: [
                    {
                    type: 2,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, {
                    type: 1,
                    sell: 250,
                    title: 'Презентация Пісіру жіктерінің түрлері',
                    author: 'Қабыл Ақылжан Ғалымжанұлы',
                    date: '03 Шілде 2020',
                    views: 135,
                    downloads: 3,
                }, ]
            }
        },
        head(){
            return {
                title: this.material.title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: this.material.title+' атты Мақала   - ұстаз тілегі сайтынан тегін жүктеп алыңыз.',
                }],
            }
        },

        methods: {
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
                this.$axios.$get('/word/'+this.material.id+'/download',{responseType: 'blob'}).then((response)=>{
                      const blob = new Blob([response]);
                      const link = document.createElement('a');
                      link.href = window.URL.createObjectURL(blob);
                      link.download = this.material.filename;
                      link.click();
                })
            },
        },
        async fetch() {
            this.material = await this.$axios.$get('/word/'+this.$route.params.slug);
        }
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
        .back {
            border: 1px solid #3E6CED;
            border-radius: 4px;
            font-weight: 600;
            line-height: 20px;
            color: #3E6CED;
        }

        .kroshki {
            margin-left: 15px;
            line-height: 20px;
            color: #888888;
        }

    }

    .main {
        padding-top: 30px;

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
            .f{
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

        .sertificate {
            margin-top: 30px;
            background: #F9F9F9;
            border-radius: 10px;
            padding: 30px;
            display: flex;
            flex-direction: row;

            .body {
                padding-left: 24px;

                .info {
                    display: flex;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;

                    div {
                        display: flex;
                        word-wrap: break-word;
                        margin-left: 30px;
                        opacity: 0.7;

                        img {
                            width: 20px;
                            height: 20px;
                            margin-right: 5px;
                        }

                        &:first-child {
                            opacity: 1;
                            margin: 0;
                            color: #363636;
                        }
                    }

                    span {
                        display: block;
                    }
                }

                .desc {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                    margin: 20px 0 20px;
                }

                .certBtns {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 30px;

                    .certBtn {
                        width: 100%;
                        border: 1px solid #1E63E9;
                        border-radius: 6px;
                        padding: 10px 0;
                        color: #1E63E9;
                    }
                }
            }
        }

        .padDocAccess {
            padding: 0 10px;
        }

        .docAccess {
            padding: 15px 25px;
            background: #E2FFE2;
            border: 1px solid #03B113;
            border-radius: 4px;

            img {
                margin-right: 5px;
            }

            span {
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                color: #03B113;
            }

        }

        .downloadBtn {
            width: 288px;
            height: 50px;
            background: #1E63E9;
            border-radius: 30px;
            display: block;
            margin: 30px auto 0;

            svg {
                margin-right: 10px;
                width: 24px;
            }
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
                    color: #03B113
                }

                .telegram {
                    color: #039BE5
                }

                .facebook {
                    color: #1976D2
                }

                .sharer {
                    color: #1C77FD
                }




            }
        }

        .informer {
            padding: 30px;
            margin-top: 40px;
            background: #F9F9F9;
            border-radius: 10px;
            display: flex;
            align-items: center;

            .body {
                margin-left: 25px;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
            }
        }

        .report {
            background: #FF0000;
            margin-top: 20px;
            border-radius: 30px;
            width: 201px;
            height: 50px;

            img {
                margin-right: 10px;
            }
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
                    display: block;
                    width: 100%;
                    height: 50px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #1E63E9;
                    background: #EFF3FF;
                    border-radius: 36px;
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
