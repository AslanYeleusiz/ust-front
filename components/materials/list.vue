<template>
    <div class="list">
        <transition name="categories">
            <div v-if='categoryIsActive==0&&popular_materials&&currentPage==1' class="popular_list">
                <div class="head">🔥 Аптаның үздік 5 материалы</div>
                <template v-for='material_item in popular_materials'>
                    <block :material="material_item" />
                </template>
            </div>
        </transition>
        <div class="loading" v-show="loading">
            <div class="spinner-border" role="status"></div>
        </div>
        <template v-if="!loading" v-for='material_item in materials'>
            <block :material="material_item" />
        </template>
    </div>
</template>


<script>
    import block from '@/components/materials/forms/block.vue'
    export default {
        props: [
            'popular_materials',
            'materials',
            'loading',
            'categoryIsActive',
            'currentPage'
        ],
        components: {
            block
        },
    }

</script>


<style scoped lang="scss">
    .categories-enter-active,
    .categories-leave-active {
        transition: 0.3s;
    }

    .categories-enter,
    .categories-leave-to {
        opacity: 0;
        transform: translateY(-15px);
        transition: 0.3s;
    }

    .list {
        margin-top: 40px;

        @media all and (max-width: 767px) {
            margin-top: 30px;
        }

    }

    .popular_list {
        background: #FFFDF2;
        border: 1px solid #FF8B0D;
        border-radius: 6px;
        padding: 25px 20px;
        margin-top: 50px;

        .head {
            font-size: 20px;
            font-weight: 700;
            line-height: 23px;
            padding-bottom: 20px;
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        padding-bottom: 70vh;
    }

</style>
