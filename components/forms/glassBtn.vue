<template>
    <button class="btn cst_btn" :class="{radian:radian}">
       <img v-if='img' :src='getImgUrl(img)' alt="">
        {{text}}
    </button>
</template>


<script>
export default {
    props: ['text','img', 'radian'],
    methods: {
        getImgUrl(pet) {
            var images = require.context('@/assets/images/', false)
            return images('./' + pet)
        },
    }
}
</script>


<style scoped lang="scss">
    .cst_btn{
        width: 100%;
        height: 100%;
        background: #EFF3FF;
        border-radius: 6px;
        color: #1C77FD;
        &:hover{
            background: #0045CB;
            color: #FFFFFF;
        }
        &:active{
            background: #0037A1;
            color: #FFFFFF;
        }
        &.radian{
            border-radius: 999px;
        }
        img{
            margin-right: 10px;
        }
    }
</style>
