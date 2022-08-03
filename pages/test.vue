<template>
    <div>
        <div class="cst-ct">
            <div class="cst_ct_btn">
                <bigBtn text='Олимпиадаға қатысу'/>
            </div>
        </div>
    </div>
</template>


<script>
    import btn from '@/components/forms/btn.vue'
    import certBtn from '@/components/forms/certBtn.vue'
    import bigBtn from '@/components/forms/bigBtn.vue'

    export default {
        components: {
            btn,
            certBtn,
            bigBtn
        }
    }

</script>


<style scoped>
    .cst_ct_btn {
        width: 380px;
        height: 70px;
    }

</style>
