<template>
    <div class="block">
        <div class="image" :style="{backgroundImage: 'url(' + getImgUrl('zhinak_suret.jpg') + ')'}"></div>
        <div class="wrap">
            <div class="title">
            {{material.title}}
        </div>
        <cstBtn text="Үлгісін көру" class="myBtn" imgToRight="arrow-right-white.svg" />
        </div>
    </div>
</template>


<script>
    import cstBtn from '@/components/forms/btn.vue'

    export default {
        components: {
            cstBtn
        },
        props: ['material'],
        methods: {
            getImgUrl(pet) {
                var images = require.context('~/assets/images/', false)
                return images('./' + pet)
            },
        }
    }

</script>


<style scoped lang="scss">
    .block {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        background: #FFFFFF;
        /* Shadow объемный */

        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 15px 10px;

        .image {
            width: 100%;
            height: 247px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .title {
            padding: 0 10px;
            font-family: Raleway;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            color: #1E63E9;
        }

        .myBtn {
            height: 40px;
        }

        &:hover {
            cursor: pointer;

            .title {
                text-decoration: underline;
            }
        }
        .wrap{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
        }
    }

    @media all and (max-width: 1099px) {
        .block .image {
            height: 319px;
        }
    }

    @media all and (max-width: 991px) {
        .block .image {
            height: 258px;
        }
    }

    @media all and (max-width: 883px) {
        .block .image {
            height: 209px;
        }
    }

    @media all and (max-width: 500px) {
        .block .image {
            height: 82vw;
        }

        .block[data-v-768ccabd] {
            padding: 30px 35px;
        }

    }

</style>
