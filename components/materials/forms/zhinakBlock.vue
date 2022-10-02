<template>
    <div class="block">
        <div class="sub">
            <div>
                <div class="photo"></div>
                <div class="title">{{material.title}}</div>
            </div>
            <cstBtn text="Жүктеу" img="importwhite.svg" class="myBtn" />
        </div>
    </div>
</template>


<script>
    import download from '@/components/svg/download.vue'
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            download,
            cstBtn
        },
        props: ['material']
    }

</script>


<style scoped lang="scss">
    .block {
        background: #FFFFFF;
        /* Shadow объемный */

        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 15px 10px;
        @media all and (max-width: 500px){
            padding: 30px 35px;
        }

        .photo {
            max-width: 247px;
            height: 274px;
            @media all and (max-width: 1099px){
                height: 200px;
            }
            @media all and (max-width: 991px){
                height: 168px;
            }
            @media all and (max-width: 883px){
                height: 210px;
            }
            @media all and (max-width: 500px){
                height: 76vw;
                max-width: none;
            }

            background-position: 50% 50%;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(../../../assets/images/zhinak_suret.jpg);
        }

        .sub {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .title {
            padding: 0 10px;
            margin: 20px 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;

        }

        .myBtn {
            height: 40px;
        }
    }

</style>
