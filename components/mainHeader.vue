<template>
    <div>
        <div class="mobile_header d-flex a-c">
            <div class="cst-ct d-flex a-c j-b">
                <button @click="$emit('openMenu')" class="btn menu_btn">
                    <img src="~assets/images/menu.png" alt="">
                </button>
                <img class="mainLogo" src="~assets/images/Newlogo.png">
                <div class="d-flex a-c">
                    <img class="notification" src="~assets/images/notification.svg">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['slideOpen'],
    }

</script>


<style scoped lang="scss">
    .mobile_header {
        display: none !important;
        position: fixed;
        top: 0;
        width: 100%;
        height: 66px;
        background: #FAFAFA;
        border-bottom: 1px solid #D6D6D6;
        z-index: 15;
        @media all and (max-width: 767px) {
            display: flex !important;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
        }

    }

</style>
