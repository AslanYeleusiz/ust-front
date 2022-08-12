<template>
    <div class="zhetistikterList">
        <kroshki :header="header" />
        <div class="cst-ct">
            <div class="head">Менің соңғы жетістіктерім</div>
            <div class="zhetistikter">
               <template v-for='n in 20'>
                   <div class="block">
                    <div class="body"><b>27.12.2021 16:30 Сембиев Нартай</b> - Үздік ұстаз турниріне қатысып I Дәрежелі диплом жеңіп алды</div>
                    <NuxtLink to="asd" class="next">Толығырақ
                        <img src="~assets/images/arrow-left-blue.svg" alt="">
                    </NuxtLink>
                </div>
               </template>


            </div>
            <div class="paginator">
                <pagination />
            </div>
        </div>
    </div>
</template>


<script>
    import kroshki from '@/components/header_kroshki.vue'
    import pagination from '@/components/pagination.vue'
    export default {
        components: {
            kroshki,
            pagination
        },
        data() {
            return {
                header: [{
                    name: 'Жеке кабинет',
                    link: '/profile'
                }, {
                    name: 'Менің соңғы жетістіктерім'
                }]
            }
        },

    }

</script>


<style scoped lang="scss">
    .zhetistikterList{
        padding: 40px 0 100px;
    }
    .head {
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;

        @media all and (max-width: 767px) {
            font-size: 22px;
            line-height: 26px;
        }

        @media all and (max-width: 575px) {
            font-size: 20px;
            line-height: 24px;
        }

    }

    .zhetistikter {
        margin-top: 20px;
        padding-bottom: 40px;

        .block {
            border-radius: 6px;
            background: #F9F9F9;
            padding: 20px;
            margin-bottom: 10px;

            .next {
                color: #1E63E9;
                margin-top: 5px;
                font-size: 14px;
                line-height: 20px;
                display: flex;
                align-items: center;

                @media all and (max-width: 767px) {
                    font-size: 12px;
                    line-height: 17px;
                }

                img {
                    transform: rotate(180deg);
                    width: 20px;
                    height: 20px;
                    margin-left: 5px;
                }
            }

            .body {
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;

                @media all and (max-width: 767px) {
                    font-size: 14px;
                    line-height: 17px;
                }

                b {
                    font-weight: 600;
                }
            }
        }
    }

</style>
