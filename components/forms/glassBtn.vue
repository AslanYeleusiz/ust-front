<template>
    <button class="btn cst_btn" :class="{radian:radian}">
      <refresh v-if="svg==1" />
       <img v-if='img' :src='getImgUrl(img)' alt="">
        {{text}}
    </button>
</template>


<script>
    import refresh from '@/components/svg/refresh.vue'

export default {
    props: ['text','img', 'radian', 'svg'],
    components: {refresh},
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
            svg{
                stroke: #FFFFFF;
            }
        }
        &:active{
            background: #0037A1;
            color: #FFFFFF;
            svg{
                stroke: #FFFFFF;
            }
        }
        &.radian{
            border-radius: 999px;
        }
        img{
            margin-right: 10px;
        }
        svg{
            margin-right: 10px;
            stroke: #1E63E9;
            transition: 0.2s;
        }
    }
</style>
