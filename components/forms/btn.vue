<template>
    <button class="btn cst_btn" :class="{square:square}">
        <img v-if='img' :src='getImgUrl(img)' alt="">
        {{text}}
    </button>
</template>


<script>
export default {
    props: ['text','img', 'square'],
    methods: {
        getImgUrl(pet) {
            var images = require.context('../../assets/images/', false)
            return images('./' + pet)
        },
    }
}
</script>


<style scoped lang="scss">
    .cst_btn{
        width: 100%;
        height: 100%;
        background: #1E63E9;
        border-radius: 9999px;
        color: #FFFFFF;
        &:hover{background: #0045CB;}
        &:focus{background: #0045CB;}
        &:active{background: #0037A1;}
        &.square{
            border-radius: 6px;
        }
    }
</style>
