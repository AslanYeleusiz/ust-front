<template>
    <button class="btn cst_btn">
        <div class="aj-c">
            <img src="~assets/images/flag.svg" alt="">
            {{text}}
        </div>
    </button>
</template>


<script>
export default {
    props: ['text']

}
</script>


<style scoped lang="scss">
    .cst_btn{
        width: 100%;
        height: 50px inherit;
        background: #FF0000;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 500;
        line-height: 23px;
        color: #ffffff;
        .aj-c{
            display: flex;
            gap: 10px;
        }
        &:hover{
            background: #D70000;
        }
        &:active{
            background: #B70000;
        }
    }
</style>
