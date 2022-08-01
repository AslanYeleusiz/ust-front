<template>
    <div>
        <div class="d-flex j-b a-c">
            <div class="batlygy">
                Барлығы: 35
            </div>
            <div></div>
        </div>
        <hr>
        <div class="zhinaktar">
            <template v-for="material in materials">
                <zhinakBlock :material="material" />
            </template>
        </div>
    </div>
</template>


<script>
    import zhinakBlock from '@/components/materials/forms/zhinakBlock.vue'

    export default {
        components: {
            zhinakBlock
        },
        data() {
            return {
                filter: [{
                    name: 'Барлығы'
                }, {
                    name: 'Менің материалдарым'
                }, {
                    name: 'Ақылы материалдарым'
                }],
                materials: [
                    {
                        "id": 306946,
                        "title": "Журналистика үшін жаралғанмын!",
                        "description": "Журналист – халық  қорғаушысы,қамқоршысы.Қоғам мен жоғары билік арасындағы байланыстырушы.Бір және бірнеше саланы бойына жиа білетін адам.",
                        "zhanr": "Басқа  ",
                        "zhanr2": "Эссе, шығарма, мазмұндама ",
                        "zhanr3": "11 сынып",
                        "date": "2022-07-11",
                        "sell": 250,
                        "purchased": 0,
                        "chec": 1,
                        "author": "Омарова Ақбота",
                        "work": "М.Дулатұлы атындағы 68 мектеп-гимназия",
                        "view": 9,
                        "download": 0,
                        "likes": 0,
                        "zhinak": 0,
                        "lat_title": "jyrnalistika_usin_jaralganmyn",
                    },
                    {
                        "id": 306944,
                        "title": "Оңтүстік Кореяның білім саласы",
                        "description": "Оңтүстік Кореяда жақсы білім алу кез-келген корейліктің мансабыың қалыптасуында шешуші болып табылады, сондықтан ең жоғары басымдығы міндетті түрде түсетін беделді оқу орнына беріледі, ал түсу емтихандарын тапсыру үрдісі айтарлықтай қиын сипатта болуы мүмкін. Корей мемлекеттік әкімшілік органдары нақты бүкіл білім беру процесін ерте жастан бастап баланың және оның соңғы жылы жоғары сыныптарда бақылайды. Ең көп артықшылық математика, корей және ағылшын тілдері, нақты ғылымдар және қоғам туралы ғылымдарға бойынша беріледі. Дене шынықтыру маңызды емес, оған аз көңіл бөлінеді, өйткені ол білім беру пәні емес деп саналады, оның салдары ретінде көптеген мектептерде тиісті спорттық құрал-саймандар жоқ. Оңтүстік Корея барлық білім беру мекемелерінде, бастауыш мектеп жоғары оқу орындарында жоғары жылдамдықты Интернетке қол жеткізуді қамтамасыз еткен алғашқы ел.",
                        "zhanr": "Барлық пәндер ",
                        "zhanr2": "Мақала  ",
                        "zhanr3": "11 сынып",
                        "date": "2022-07-10",
                        "sell": 0,
                        "purchased": 0,
                        "chec": 0,
                        "author": "Акималиева Асель Нурланкызы",
                        "work": "Хромтау қаласы 5 мектеп",
                        "view": 17,
                        "download": 0,
                        "likes": 0,
                        "zhinak": 0,
                        "lat_title": "ongtustik_koreyanyng_bilim_salasy",
                    }
                ],
            }
        },

    }

</script>


<style scoped lang="scss">
.zhinaktar{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        @media all and (max-width: 883px){
            grid-template-columns: 1fr 1fr;
        }
        @media all and (max-width: 500px){
            grid-template-columns: 1fr;
        }

    }
</style>
