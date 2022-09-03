<template>
    <div class="layout">
        <successPopup />
        <Nuxt />
        <helpButton />
    </div>
</template>

<script>
    import successPopup from '@/components/popups/successPopup.vue'
    import helpButton from '@/components/helpButton.vue'

export default {
    components: {
        successPopup,
        helpButton
    }
}
</script>

<style scoped>

</style>


