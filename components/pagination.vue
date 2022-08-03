<template>
    <div>
        <div class="pagination">


            <button v-if="currentPage!=1" @click="$emit('set-page',currentPage-1)" class="btn prev">
                <arrowLeft class="arrow"/>
                <span>Артқа</span>
            </button>
            <button v-else type="button" class="btn prev disabled">
                <arrowLeft class="arrow"/>
                <span>Артқа</span>
            </button>


            <div class="page_list">


                <div v-if="currentPage>2" class="d-flex">
                    <div class="page_item">1</div>
                    <div v-if="currentPage>3" class="page_disabled">...</div>
                </div>


                <div v-if="currentPage>1" class="page_item">{{currentPage-1}}</div>
                <div class="page_item active">{{currentPage}}</div>
                <div v-if="currentPage<lastPage" class="page_item">{{currentPage+1}}</div>


                <div v-if="lastPage-2>=currentPage" class="d-flex">
                    <div v-if="lastPage-3>=currentPage" class="page_disabled">...</div>
                    <div @click="$emit('set-page',lastPage)" class="page_item">{{lastPage}}</div>
                </div>



            </div>


            <button v-if="currentPage!=lastPage" @click="$emit('set-page',currentPage+1)" class="btn next">
                <arrowLeft class="arrow"/>
                <span>Келесі</span>
            </button>
            <button v-else type="button" class="btn next disabled">
                <arrowLeft class="arrow"/>
                <span>Келесі</span>
            </button>


        </div>
    </div>
</template>


<script>
    import arrowLeft from '@/components/svg/arrow-left.vue'

    export default {
        components: {arrowLeft},
        props: ['currentPage', 'lastPage']
    }

</script>


<style scoped lang="scss">
    .pagination {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        button {
            font-size: 14px;
            font-weight: 600;
            line-height: 16px;
            color: #1E63E9;
            img {
                display: none;

                @media all and (max-width: 767px) {
                    display: block;
                }
            }

            span {
                @media all and (max-width: 767px) {
                    display: none;
                }
            }
        }

        .prev,
        .next {
            padding: 0;
            margin: 0;
            width: 150px;
            height: 50px;
            background: #EFF3FF;
            border-radius: 6px;
            @media all and (max-width: 767px){
                width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .arrow{
                display: none;
                stroke: #1E63E9;
                @media all and (max-width: 767px){
                    display: block;
                }
            }
            &.disabled {
                opacity: 0.5;
            }
            &:hover{
                background: #0045CB;
                color: #ffffff;
                &.disabled{
                    background: #EFF3FF;
                    color: #1E63E9;
                    cursor: default;
                }
                .arrow{
                    stroke: #ffffff;
                }
            }
            &:active{
                background: #0037A1;
                color: #ffffff;
                .arrow{
                    stroke: #ffffff;
                }
            }
        }

        .next {
            .arrow {
                transform: rotate(180deg);
            }
        }

        .page_list {
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            color: #888888;
            display: flex;
            align-items: center;
            flex-direction: row;
            .page_item {
                margin: 0 7px;
                &.active {
                    color: #1E63E9;
                }
            }

        }
    }

</style>
