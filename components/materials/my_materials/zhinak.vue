<template>
    <div>
        <qualik />
        <div class="batlygy">
            Жинаққа жіберілген материалдар
        </div>
        <hr>
        <div class="loading" v-show="loading">
            <div class="spinner-border" role="status"></div>
        </div>
        <template v-for='material in materials'>
            <zhinaqBlock :material="material"/>
        </template>
    </div>
</template>


<script>
    import zhinaqBlock from '@/components/materials/my_materials/forms/zhinaqBlock.vue'
    import qualik from '@/components/materials/my_materials/forms/qualik.vue'

    export default {
        components: {
            zhinaqBlock,
            qualik
        },
        data() {
            return {
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
                        "num": "8-(701)-026-9595",
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
                        "num": "8-(701)-026-9595",
                        "likes": 0,
                        "zhinak": 0,
                        "lat_title": "ongtustik_koreyanyng_bilim_salasy",
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
                        "num": "8-(701)-026-9595",
                        "zhinak": 1,
                        "lat_title": "ongtustik_koreyanyng_bilim_salasy",
                    }
                ],
                loading: false,
                materials_count: 0,
                COUNT: 0,
                currentPage: 1,
                lastPage: 1,
            }
        },
        async fetch() {
            this.loading = true;
            const token = this.$auth.strategy.token.get();
            await this.$axios.$get('/menin-materialdarym', {
                headers: {'Authorization': `Bearer ${token}`},
                params: {
                    page: this.currentPage,
                    type: 2
                }
            }).then((res) => {
                let posts = res.data;
                this.materials_count = posts.count_materials;
                this.COUNT = posts.COUNT;
                this.currentPage = posts.materials.current_page;
                this.lastPage = posts.materials.last_page;
                this.materials = posts.materials.data;
            }).catch(res => {
                console.log(res.response);
            });
            this.loading = false;
        },

    }

</script>


<style scoped lang="scss">


</style>
