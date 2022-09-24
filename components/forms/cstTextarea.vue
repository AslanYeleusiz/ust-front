<template>
    <textarea placeholder="Егер сіздің қатеңіз тізімде жоқ болса, қатеңізді осы жерге толығырақ жазып беруіңізді сұраймыз..." v-model="inputVal">{{inputVal}}</textarea>
</template>


<script>
    export default {
        props: ['value'],
        data() {
            return {
                inputVal: this.value
            }
        },

        watch: {
            inputVal(val) {
                this.$emit('input', val);
            }
        }
    }

</script>


<style scoped lang="scss">
    textarea {
        width: 100%;
        background: #FAFAFA;
        /* Line */
        height: 100px;

        border: 1px solid #C7C7C7;
        outline: 0px solid #C7C7C7;
        border-radius: 6px;
        padding: 5px 10px;
        transition: 0.2s linear;
        &::placeholder{
            transition: 0.2s;
        }
        &:focus{
            &::placeholder{
                color: #FAFAFA;
            }
            outline: 1px solid #0045CB;
        }
    }

</style>
