<template>
    <div>
        <header>
            <div class="otstup"></div>
            <div class="main_header">
                <div class="cst-ct d-flex a-c j-b">
                    <div class="d-flex a-c">
                        <NuxtLink to="/materialdar">
                            <button class="btn back">
                                <img src="~assets/images/arrow-left-blue.svg" alt="">
                                Артқа қайту
                            </button>
                        </NuxtLink>
                        <div class="kroshki">
                            <NuxtLink to="materialdar">Турнир</NuxtLink> / Қазан айының Республикалық ағылшын тілінен ұстаздар турнирі
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="main">
            <div class="cst-ct">
                <div class="head">
                    <h3>Қазан айының Республикалық ағылшын тілінен ұстаздар турнирі</h3>
                    <div class="qatysushy">
                       <div class="pre">Қатысушылар</div>
                        <div class="block">
                           <div class="numeric">
                               <div class="num">1</div>
                           </div>
                            <div class="body">

                            </div>
                        </div>
                    </div>
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
    .otstup {
        padding-bottom: 66px;

        @media all and (max-width: 767px) {
            padding-bottom: 132px;
        }
    }
    .main_header {
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

    }
    .main{
        .head{
            margin-top: 60px;
            h3{
                font-size: 24px;
                font-weight: 700;
                line-height: 30px;
            }
            .qatysushy{
                background: #F8F8F8;
                border-radius: 10px;
                padding: 30px;
                margin-top: 30px;
                .pre{
                    font-size: 18px;
                    padding-bottom: 20px;
                }
                .block{
                    background: #FFFFFF;
                    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
                    border-radius: 6px;
                    height: 120px;
                    .numeric{
                        background: #9F9F9F;
                        border-radius: 4px;
                        width: 45px;
                        height: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &::before{
                            content: '';
                            position: absolute;
                            width: 65px;
                            height: 65px;
                            background: #ffffff;
                            transform: rotate(45deg) translate(36px,1px);
                        }
                        .num{
                            transform: translate(-8px,-8px);
                            font-size: 16px;
                            font-weight: 800;
                            line-height: 19px;
                            color: #FFFFFF;
                        }
                    }
                }

            }
        }
    }
</style>
