<template>
    <div class="reklamas">
        <div class="zhenildik">
            <div class="comp"></div>
            <div class="first">
                <div class="pre">Ұстаз тілегінде жаңа бөлімнің <br>ашылуына орай</div>
                <div class="skidka">20% - жеңілдік</div>
                <div class="foot">Барлық файлдарға</div>
            </div>
            <div class="second">
                Өз уақытыңызбен барлық күшіңізді оқушыға сапалы сабақ беруге жұмсаңыз. Барлық қағазбастылық жұмысты бізге тапсырыңыз. Дайын сабақ жоспарларын алып еліміздің білімінің дамуына үлес қосыңыз!
            </div>
        </div>
        <div class="buiryq">
            <div class="content">
                <div class="info">ҚР Білім және Ғылым министірлігінің стандартымен <b>472-бұйрыққа</b> сай жасалған</div>
                <img class="logo" src="~assets/images/ust_kz_logo.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .reklamas {
        display: flex;
        align-items: center;
        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        background: #ffffff;
        overflow: hidden;
        position: relative;
        margin-bottom: 30px;

        .zhenildik {

            width: 100%;
            max-width: 585px;
            position: relative;
            color: #FFFFFF;
            font-family: Gilroy;
            z-index: 2;
            background: #03B113;
            -webkit-clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);

            .comp {
                width: 347px;
                height: 196px;
                background-position: 50% 50%;
                background-image: url(~assets/images/comp.png);
                background-size: cover;
                background-repeat: no-repeat;
                position: absolute;
                right: 0;
                transform: translate(53px, 18px);
            }

            .first {
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                padding: 25px 0 15px 30px;
                text-align: center;



                .pre {
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 22px;

                }

                .skidka {
                    font-size: 44px;
                    font-weight: 700;
                    line-height: 30px;
                    color: #FFCA0D;

                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    margin-top: 15px;

                }

                .foot {
                    margin-top: 10px;
                    font-size: 18px;
                    font-weight: 400;
                }
            }

            .second {
                padding: 20px 80px 20px 20px;
                background: #0D7D17;
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;

            }
        }

        .buiryq {
            position: absolute;
            top: 0;
            right: 0;
            width: 336px;
            height: 100%;
            padding: 15px 15px 15px 0;

            .content {
                border: 2px solid #0D7D17;
                border-radius: 6px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
                padding: 20px 20px 20px 100px;

                .info {
                    text-align: right;
                    height: 96px;
                    font-family: Gilroy;
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }
    }

    @media all and (max-width: 1099px) {
        .reklamas .zhenildik .first .skidka {
            font-size: 40px;
            line-height: 28px;
        }

        .reklamas .zhenildik .first .pre {
            font-size: 17px;
            line-height: 21px;
        }

        .reklamas .zhenildik .first .foot {
            margin-top: 10px;
            font-size: 17px;
            font-weight: 400;
        }

        .reklamas .zhenildik {
            max-width: 523px;
        }

        .reklamas .zhenildik .comp {
            transform: translate(94px, 18px);
        }

        .reklamas .buiryq .content {
            padding: 20px 20px 20px 147px;
        }

        .reklamas .buiryq .content .logo {
            width: 177px;
        }
    }

    @media all and (max-width: 991px) {
        .reklamas .zhenildik .first .skidka {
            font-size: 36px;
            line-height: 28px;
        }

        .reklamas .zhenildik .first .pre {
            font-size: 16px;
            line-height: 19px;
        }

        .reklamas .zhenildik .first .foot {
            font-size: 16px;
        }

        .reklamas .zhenildik .second {
            font-size: 13px;
        }

        .reklamas .zhenildik .comp {
            transform: translate(136px, 18px);
        }

        .reklamas .zhenildik {
            max-width: 439px;
        }

        .reklamas .buiryq .content .info {
            font-size: 15px;
            line-height: 18px;
        }

        .reklamas .buiryq .content {
            padding: 20px 20px 20px 178px;
        }

        .reklamas .buiryq .content .logo {
            width: 135px;
        }
    }

    @media all and (max-width: 883px) {
        .reklamas {
            flex-direction: column;
            align-items: flex-start;
        }

        .reklamas .buiryq {
            position: relative;
            width: 100%;
            height: auto;
            padding: 20px;

        }

        .reklamas .zhenildik {
            width: 100%;
            max-width: 100%;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .reklamas .zhenildik .comp {
            width: 312px;
            height: 175px;
            transform: translate(47px, 16px);
        }

        .reklamas .zhenildik .first .skidka {
            font-size: 33px;
            line-height: 27px;
            margin-top: 10px;
        }

        .reklamas .buiryq .content {
            border: none;
            height: auto;
            display: block;
            padding: 0;
        }

        .reklamas .buiryq .content .info {
            text-align: left;
            height: auto;
        }

        .reklamas .buiryq .content .logo {
            display: none;
        }

        .reklamas .zhenildik .second {
            padding: 12px 30px 15px 20px;
        }

    }

    @media all and (max-width: 575px) {
        .reklamas .zhenildik .comp {
            width: 247px;
            background-position: 0% 50%;
            height: 153px;
            transform: translate(0, 32px);
        }
    }

    @media all and (max-width: 500px) {
        .reklamas .zhenildik .first .skidka {
            font-size: 29px;
            line-height: 25px;
        }

        .reklamas .zhenildik .first .pre {
            font-size: 15px;
            line-height: 17px;
        }

        .reklamas .zhenildik .first .foot {
            font-size: 15px;
        }

        .reklamas .zhenildik .second {
            font-size: 12px;
        }

        .reklamas .zhenildik .comp {
            width: 231px;
            height: 144px;
        }
    }

    @media all and (max-width: 450px) {
        .reklamas .zhenildik .first .foot {
            font-size: 14px;
            margin-top: 3px;
        }

        .reklamas .zhenildik .first .pre {
            font-size: 14px;
            line-height: 16px;
        }

        .reklamas .zhenildik .first .skidka {
            font-size: 25px;
            line-height: 22px;
            margin-top: 5px;
        }

        .reklamas .zhenildik .comp {
            width: 208px;
            height: 132px;
            transform: translate(0, 20px);
        }

        .reklamas .buiryq .content .info {
            font-size: 14px;
            line-height: 18px;
        }

        .reklamas .zhenildik .second {
            line-height: 15px;
        }
    }

    @media all and (max-width: 416px) {
        .reklamas .zhenildik .comp {
            width: 160px;
            height: 107px;
            transform: translate(0, 40px);
        }

        .reklamas .zhenildik .first {
            padding: 25px 0 15px 25px;
        }
    }

    @media all and (max-width: 372px) {
        .reklamas .zhenildik .first {
            padding: 25px 0 15px 20px;
        }
    }

</style>
