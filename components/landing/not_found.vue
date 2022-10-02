<template>
    <div class="not_found">
        <Lottie :width="150" :height="150" :options="notFoundOption" v-on:animCreated="handleAnimation" />
        <div class="head">{{text}}</div>
        <div class="body">{{desc}}</div>
        <NuxtLink v-if="link" :to="link" class="cst_size_btn">
            <cstBtn :text="btnText" square=1 />
        </NuxtLink>
    </div>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as notFoundData from "@/assets/lottie_files/not_found/82408-search.json"
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstBtn,
            Lottie
        },
        data() {
            return {
                notFoundOption: {
                    animationData: notFoundData
                },
                animationSpeed: 1,
            }
        },
        props: ['text', 'desc', 'btnText', 'link'],
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            },
        }

    }

</script>


<style scoped lang="scss">
    .not_found {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 60px;

        .head {
            font-size: 36px;
            font-weight: 600;
            line-height: 42px;
            color: #002A4D;
            margin-top: 20px;
        }

        .body {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            margin-top: 12px;
        }

        .cst_size_btn {
            width: 230px;
            height: 50px;
            margin-top: 40px;
        }
    }

</style>
