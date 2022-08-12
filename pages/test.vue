<template>
    <div>
        <header_kroshki :header='header'/>
    </div>
</template>


<script>
    import btn from '@/components/forms/btn.vue'
    import certBtn from '@/components/forms/certBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import header_kroshki from '@/components/header_kroshki.vue'

    export default {
        data() {
            return {
                header:
                [{
                    name: 'Материалдар',
                    link: '/material'
                },{
                    name: 'Белг3л3 б3л',
                    link: '/material'
                },{
                    name: 'Белг3л3 б3л',
                }]
            }
        },

        components: {
            btn,
            certBtn,
            bigBtn,
            header_kroshki
        }
    }

</script>


<style scoped>
    .cst_ct_btn {
        width: 380px;
        height: 70px;
    }

</style>
