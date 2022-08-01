<template>
    <div class="footer">
        <footer>
            <div class="cst-ct">
                <div class="f_grid">
                    <div class="f-1">
                        <img src="~assets/images/mainLogoWhite.png" alt="">
                        <div class="span">Ғылыми-әдістемелік орталық</div>
                        <div class="socseti d-flex j-b">
                            <img src="~assets/images/vk.svg" alt="">
                            <img src="~assets/images/facebook.svg" alt="">
                            <img src="~assets/images/youtube.svg" alt="">
                            <img src="~assets/images/instagramm.svg" alt="">
                            <img src="~assets/images/agent.svg" alt="">
                        </div>
                    </div>
                    <div class="f-2">
                        <div class="h">Редакциямен байланыс</div>
                        <div class="redaqcia">
                            <div class="f_block">
                                <img src="~assets/images/call.svg" alt="">
                                <div class="num">
                                    <span>+7 (771) 234-55-99</span>
                                    <div class="span">Жұмыс кестесі: Дүйсенбі – жұма, 9:00 – 18:00</div>
                                </div>
                            </div>
                            <div class="f_block nm">
                                <img src="~assets/images/location.svg" alt="">
                                <div class="num">
                                    <div class="span">Мекенжай: </div>
                                    <div class="text">Bilim Media Group 010000, Нұр-Сұлтан қ., Мәңгілік Ел д., 55/13, блок С 2.1, 2 қабат</div>
                                </div>
                            </div>
                            <div class="f_block nm">
                                <img src="~assets/images/sms.svg" alt="">
                                <div class="num">
                                    <div class="span">Электронды пошта</div>
                                    <div class="text">admin@ust.kz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="footer_end d-flex aj-c">
            Сайт Peaksoft веб-студиясында жасалған - Peaksoft.kz
        </div>
    </div>
</template>


<script>
    export default {

    }

</script>


<style scoped lang="scss">
    .footer {
        z-index: 16;
        footer {
            background: #303030;
            padding: 40px 0;
            .f_grid {
                display: grid;
                grid-template-columns: 1fr 2fr;
                grid-gap: 30px;
                @media all and (max-width: 991px){
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 30px;
                }
                .socseti {
                    margin-top: 35px;
                    @media all and (max-width: 991px){max-width: 272px;}
                    @media all and (max-width: 767px){margin-top: 20px;}
                    @media all and (max-width: 500px){
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                        grid-gap: 10px;
                    }
                }
                .f-1{
                    @media all and (max-width: 500px){
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                .f-2 {
                    .h {
                        line-height: 16px;
                        color: #ffffff;
                        @media all and (max-width: 500px){text-align: center;}
                    }
                    .text {
                        font-size: 16px;
                        line-height: 19px;
                        color: #ffffff;
                        margin-top: 5px;
                    }
                    .redaqcia {
                        margin-top: 20px;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 20px 30px;
                        @media all and (max-width: 500px){
                            margin-top: 20px;
                            display: grid;
                            grid-template-columns: 1fr;
                            grid-gap: 20px;
                            padding: 0 30px;
                        }
                        .f_block {
                            display: flex;
                            align-items: flex-start;
                            img {margin-top: 5px;}
                        }
                        .f_block.nm img {margin-top: 0px;}
                        .num {
                            margin-left: 10px;
                            span {
                                font-size: 24px;
                                font-weight: 700;
                                line-height: 28px;
                                color: #ffffff;
                                @media all and (max-width: 767px){font-size: 20px;}
                            }
                            .span {margin: 0;}
                        }
                    }
                }
            }
            .span {
                margin-top: 10px;
                font-size: 18px;
                font-weight: 300;
                line-height: 21px;
                color: #888888;
            }
        }
        .footer_end {
            background: #000000;
            height: 60px;
            color: #A1A1A1;
            @media all and (max-width: 500px){
                font-size: 12px;
                line-height: 14px;
            }
        }
    }


</style>
