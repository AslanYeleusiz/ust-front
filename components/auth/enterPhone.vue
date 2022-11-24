<template>
    <form action="" class="loginForm">
        <div class="cst_pd_popup">
            <cstInput
                    v-model="form.email"
                    type-name="Email"
                    name-wrap="Email"
                    string-name="Email Почтаңыз:"
                    string-placeholder="Почтаңызды енгізіңіз"
                    :danger="hasError"
            />
            <cstPasswordInput
                    v-model="form.password"
                    type-name="password"
                    name-wrap="password"
                    string-name="Құпиясөз:"
                    string-placeholder="•••••••••••••••••"
                    :danger="hasError"
                    />
            <div v-if="hasError" class="erreorMessage">
                Сіз логин немесе парольді қате енгіздіңіз!
            </div>
            <button @click.prevent="submit" class="btn btn-primary w-100 enter">Кіру</button>
        </div>
    </form>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'
    export default {
        components: {
            cstInput,
            cstPasswordInput
        },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                hasError: false,


            }
        },
        methods: {
            submit() {
                this.$auth.loginWith('laravelJWT', { data: {
                    email: this.form.email,
                    password: this.form.password
                } }).then((e) => {
                    localStorage.setItem('access_token', e.data.access_token);
                    this.hasError=null;
                    this.$emit('closePopup');
                }).catch((error) => {
                    if(error.response.status === 401){
                        this.hasError=true;
                        setTimeout(()=>{
                            this.hasError=false;
                        },3000);
                    }
                });
            },
        }
    }

</script>


<style scoped lang="scss">
    .erreorMessage{
        margin: 15px 0 0;
        color: #dc3545;
        text-align: center;
    }
</style>
