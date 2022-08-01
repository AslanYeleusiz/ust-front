<template>
    <div class="ustaztilegi">
        <div class="head">
            «Ustaz tilegi» Республикалық ғылыми – әдістемелік журналы министірліктің №KZ09VPY00029937 куәлігімен ресми тіркелген.
        </div>
        <div class="row">
            <div class="col-md-7">
                <div class="desc">
                    Жинақтың сертификаты аттестацияға жарамды <br>
                    Жинақтың форматы: Электронды және қағаз түрінде <br>
                    Шығу жиілігі: айына 1 рет <br>
                    Шығу тілі: Қазақша, орысша, ағылшынша <br>
                    Қабылдау уақыты: қабылдау жүруде <br>
                    Сертификат: Электронды және қағаз түрінде (Сіздің кеңесшіңіз жібереді) <br>
                    Жариялау бағасы: <br>
                    Электронды түрде: 3000 тг
                </div>
            </div>
            <div class="col-md">
                <div class="btnMinGroup">
                    <button class="btn myBtnMini">Жинаққа жариялау</button>
                    <button class="btn myBtnMini">Шыққан жинақтарды көру</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {

    }

</script>


<style scoped lang="scss">
.ustaztilegi {
        padding: 20px 40px 15px;
        background: #FFF7E7;
        border-radius: 4px;
        margin-bottom: 40px;

        .head {
            font-size: 20px;
            font-weight: 600;
            line-height: 23px;
        }

        .desc {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            margin-top: 20px;
            padding-bottom: 17px;
        }

        .myBtnMini {
            background: #1E63E9;
            border-radius: 26px;
            width: 100%;
            max-width: 220px;
            height: 40px;
            color: #ffffff;
            margin-top: 18px;
        }

        .btnMinGroup {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            flex-direction: column;
            @media all and (max-width: 767px){
                align-items: flex-start;
            }

        }
    }
</style>
