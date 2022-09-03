<template>
   <div>
       <turnirPopup :active="active" @close="active=0" />
   </div>
</template>


<script>
    import btn from '@/components/forms/btn.vue'
    import certBtn from '@/components/forms/certBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'
    import header_kroshki from '@/components/header_kroshki.vue'
    import saveBtn from '@/components/forms/saveBtn.vue'
    import editBtn from '@/components/forms/editBtn.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'
    import exitBtn from '@/components/forms/exitBtn.vue'
    import exitDefaultBtn from '@/components/forms/exitDefaultBtn.vue'
    import turnirPopup from '@/components/popups/turnirPopup.vue'

    export default {
        components: {
            btn,
            certBtn,
            bigBtn,
            header_kroshki,
            saveBtn,
            editBtn,
            confirmedPopup,
            exitBtn,
            exitDefaultBtn,
            turnirPopup
        },
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
                }],
                active: 1,
            }
        },


    }

</script>


<style scoped>
    .cst_ct_btn {
        width: 135px;
        height: 40px;
    }

</style>
