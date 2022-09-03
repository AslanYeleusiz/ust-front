<template>
    <header>
        <div class="otstup"></div>
        <div class="main_header">
            <div class="cst-ct d-flex a-c j-b">
                <div class="d-flex a-c">
                    <button @click='gotoBack' class="btn back">
                        <img src="~assets/images/arrow-left-blue.svg" alt="">
                        <span class="backtext">Артқа қайту</span>
                    </button>
                    <div class="kroshki">
                        <template v-for='(head, index) in header'>
                            <span v-if='index>0'> / </span>
                            <span v-if='head.link'>
                                <NuxtLink :to="head.link">{{head.name}}</NuxtLink>
                            </span>
                            <span v-else>{{head.name}}</span>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
    export default {
        props: ['header'],
        methods: {
            gotoBack() {
                this.$router.go(-1);
            }
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
        background: #ffffff;
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
        .backtext{
            @media all and (max-width: 767px){
                display: none;
            }

        }
    }

</style>
