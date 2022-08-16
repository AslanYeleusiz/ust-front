<template>
   <transition name="fadePopup">
    <div v-if="Animate" class="Lottie">
       <div class="fon">
           <Lottie :width="250" :height="250" :options="defaultOptions" v-on:animCreated="handleAnimation" />
       </div>

    </div>
    </transition>
</template>


<script>
    import Lottie from 'vue-lottie/src/lottie.vue'
    import * as animationData from "@/assets/lottie_files/done/lf30_editor_baziyhkx.json";

    export default {
        components: {
            Lottie
        },
        data() {
            return {
                Animate: false,
                defaultOptions: {
                    animationData: animationData,
                    loop: false,
                },
                animationSpeed: 1,
            }
        },
        methods: {
            handleAnimation: function(anim) {
                this.anim = anim;
            }
        },
        mounted(){
            this.$bus.$on('successPopup', ()=>{
                this.Animate = true;
                setTimeout(()=>{
                    this.Animate = false;
                },1800);
            });
        }
    }
</script>


<style scoped lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: .2s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transition: 0.3s;
    }
    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: 0.3s;
    }
    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transition: 0.3s;
    }
    .Lottie{
        position: fixed;
        z-index: 25;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.4);
        .fon{
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background: radial-gradient(#ffffff 50%, rgba(0,0,0,0) 50%);
        }
    }
</style>
