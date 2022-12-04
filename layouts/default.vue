<template>
    <div class="layout-default">
        <loginPopup :login-open="loginPopup" @closePopup="loginPopup=0" @openLogin="loginPopup=1" @nextLogin="loginPopup=2" @smsLogin="loginPopup=3" />
        <successPopup />
        <leftSlideBar :slide-open="slideActive" @openMenu="slideBarShow" @openLogin="loginPopup=1" />
        <mainHeader @openMenu="slideBarShow" />
        <Nuxt v-if="hasLoaded" />
        <helpButton />
        <footerDefault />
    </div>
</template>


<script>
    import successPopup from '@/components/popups/successPopup.vue'

    export default {
        head() {
            return {
                link: [{
                    rel: 'canonical',
                    href: this.$store.state.appUrl + this.$route.path
                }]
            }
        },
        components: {
            successPopup
        },
        data() {
            return {
                slideActive: true,
                loginPopup: 0,
                hasLoaded: false,
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
            setTimeout(()=>{
                this.slideActive = (window.innerWidth <= 769 ? true : false);
            },700)
        },
        created(){
            this.hasLoaded = true;
        }
    }

</script>

<style scoped>


</style>
