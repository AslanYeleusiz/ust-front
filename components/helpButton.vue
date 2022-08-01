<template>
    <button class="btn helperBtn">
            <Lottie :width="30" :height="30" :options="defaultOptions" v-on:animCreated="handleAnimation" />
            <span class="h3">Көмек</span>
    </button>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "~/assets/lottie_files/help/36218-bouncing-question-mark.json";
    export default {
        components: {
            Lottie
        },
        data() {
            return {
                defaultOptions: {
                    animationData: animationData
                },
                animationSpeed: 1,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            }
        }

    }

</script>


<style scoped lang="scss">
    .helperBtn {
        position: fixed;
        right: 30px;
        bottom: 30px;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        @media all and (max-width: 767px) {
            display: none;
        }
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
        border-radius: 40px;
        width: 145px;
        height: 70px;
        &:focus{
            outline: 1px solid #B6FFB5 !important;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1) !important;
        }
        outline: 1px solid #B6FFB5;
        outline-offset: -5px;
        .h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
        div{
            margin: 0 !important;
        }
    }

</style>
