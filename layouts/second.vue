<template>
    <div class="layout">
        <successPopup />
        <confirmedPopup />
        <Nuxt />
        <helpButton />
    </div>
</template>

<script>
    import successPopup from '@/components/popups/successPopup.vue'
    import helpButton from '@/components/helpButton.vue'
    import confirmedPopup from '@/components/popups/confirmedPopup.vue'

export default {
    components: {
        successPopup,
        helpButton,
        confirmedPopup
    }
}
</script>

<style scoped>

</style>


