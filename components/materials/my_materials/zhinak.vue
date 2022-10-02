<template>
    <div>
        <qualik />
        <div class="batlygy">
            Жинаққа жіберілген материалдар
        </div>
        <hr>
        <not_found v-if="loading == 2" text="Жинақтар тізімі бос." desc="Жинаққа жіберу үшін өз материалыңызды тандап, жинаққа жіберу батырмасын басыңыз" />
        <div v-show="loading == 1" class="text-center mt-3">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
        <template v-for='material in materials'>
            <zhinaqBlock :material="material"/>
        </template>
    </div>
</template>


<script>
    import not_found from '@/components/landing/not_found.vue'
    import zhinaqBlock from '@/components/materials/my_materials/forms/zhinaqBlock.vue'
    import qualik from '@/components/materials/my_materials/forms/qualik.vue'

    export default {
        components: {
            zhinaqBlock,
            qualik,
            not_found
        },
        data() {
            return {
                materials: [],
                loading: 0,
                materials_count: 0,
                COUNT: 0,
                currentPage: 1,
                lastPage: 1,
            }
        },
        async fetch() {
            this.loading = 1;
            const token = this.$auth.strategy.token.get();
            await this.$axios.$get('/menin-materialdarym', {
                headers: {'Authorization': `Bearer ${token}`},
                params: {
                    page: this.currentPage,
                    type: 2
                }
            }).then((res) => {
                let posts = res.data;
                this.materials_count = posts.count_materials;
                this.COUNT = posts.COUNT;
                this.currentPage = posts.materials.current_page;
                this.lastPage = posts.materials.last_page;
                this.materials = posts.materials.data;
                if(posts.count_materials == 0) this.loading = 2;
                else this.loading = 0;
            }).catch(res => {
                console.log(res.response);
            });

        },

    }

</script>


<style scoped lang="scss">


</style>
