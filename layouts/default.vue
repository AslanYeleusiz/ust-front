<template>
    <div class="layout-default">
        <loginPopup :login-open="loginPopup" @closePopup="loginPopup=0" @openLogin="loginPopup=1" @openRegister="loginPopup=2" @resetPassword="loginPopup=3"/>
        <successPopup />
        <leftSlideBar :slide-open="slideActive" @openMenu="slideBarShow" @openLogin="loginPopup=1" />
        <mainHeader @openMenu="slideBarShow" />
        <Nuxt />
        <helpButton />
        <footerDefault />
    </div>
</template>


<script>
    import successPopup from '@/components/popups/successPopup.vue'

    export default {
        components: {
            successPopup
        },
        data() {
            return {
                slideActive: true,
                loginPopup: 0,
            }
        },
        props: {
            slideOpen: Boolean,
            loginOpen: Number,
        },
        methods: {
            slideBarShow() {
                this.slideActive = this.slideActive ? false : true;
            },
        },
        mounted() {
            this.$bus.$on('openLogin', ()=>{
                this.loginPopup = 1;
            })
            this.$bus.$on('closeMenu', ()=>{
                this.slideActive = true;
            })

        }
    }

</script>


<style scoped>


</style>
