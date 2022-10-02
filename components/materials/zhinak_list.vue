<template>
    <div class="list">
        <div v-show="loading" class="text-center mt-3">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <div class="zhinaktar">
            <template v-if="!loading" v-for='material_item in materials'>
                <zhinakBlock :material="material_item" />
            </template>
        </div>
    </div>
</template>


<script>
    import zhinakBlock from '@/components/materials/forms/zhinakBlock.vue'
    export default {
        props: ['materials', 'loading'],
        components: {
            zhinakBlock
        }
    }

</script>


<style scoped lang="scss">
    .list {
        margin-top: 40px;

        @media all and (max-width: 767px) {
            margin-top: 30px;
        }
    }

    .zhinaktar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        @media all and (max-width: 883px) {
            grid-template-columns: 1fr 1fr;
        }

        @media all and (max-width: 500px) {
            grid-template-columns: 1fr;
        }

    }

</style>
