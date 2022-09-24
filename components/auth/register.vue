<template>
    <form action="" class="loginForm">
        <div class="registerForm">
            <div>
                <cstInput v-model="form.email" type-name="Email" name-wrap="email" string-name="Email Почтаңыз" string-placeholder="Почтаңызды енгізіңіз" :danger="errors.email" :danger-text="errors.email" />
                <cstPasswordInput v-model="form.password" type-name="password" name-wrap="password" string-name="Құпиясөз:" string-placeholder="Құпия сөзді енгізіңіз" :danger="errors.password" :danger-text="errors.password" class="mb" />
                <cstPasswordInput v-model="form.password_confirm" type-name="password" name-wrap="password_confirm" string-name="Құпия сөзді қайта енгізіңіз" :danger="errors.password_confirm" :danger-text="errors.password_confirm" string-placeholder="Құпия сөзді қайта енгізіңіз" />
                <div></div>
            </div>
            <div>
                <cstInput v-model="form.tel_num" type-name="text" name-wrap="tel_num" string-name="Телефон:" string-placeholder="+7 (7__) ___-__-__" :danger="errors.tel_num" :danger-text="errors.tel_num" />
                <cstInput v-model="form.username" type-name="text" name-wrap="username" string-name="Фамилия" string-placeholder="Фамилияңызды енгізіңіз" :danger="errors.username" :danger-text="errors.username" />
                <cstInput v-model="form.s_name" type-name="text" :danger="errors.s_name" :danger-text="errors.s_name" name-wrap="s_name" string-name="Әкеңіздің есімі" string-placeholder="Әкеңіздік есімін енгізіңіз" />
                <cstInput v-model="form.l_name" type-name="text" name-wrap="l_name" :danger="errors.l_name" :danger-text="errors.l_name" string-name="Есіміңіз" string-placeholder="Есіміңізді енгізіңіз" />
            </div>
        </div>
        <hr>
        <div class="radio">
            <div class="radio-item">
                <input v-model="form.user_status_id" type="radio" id="radio1" name="user_status_id" value="1" class="radio_input">
                <label for="radio1">Педагог</label>
            </div>
            <div class="radio-item">
                <input v-model="form.user_status_id" type="radio" id="radio2" name="user_status_id" value="2" class="radio_input">
                <label for="radio2">Оқушы</label>
            </div>
            <div class="radio-item">
                <input v-model="form.user_status_id" type="radio" id="radio3" name="user_status_id" value="3" class="radio_input">
                <label for="radio3">Басқа (ата-ана т.б.)</label>
            </div>
        </div>
        <span class="danger_message">{{errors.user_status_id}}</span>
        <button @click.prevent="submit" class="btn btn-primary enter w-100">
            Тіркелу
        </button>
    </form>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstPasswordInput from '@/components/forms/cstPasswordInput.vue'

    export default {
        components: {
            cstInput,
            cstPasswordInput,
        },
        data() {
            return {
                form: {
                    email: '',
                    username: '',
                    password: '',
                    password_confirm: '',
                    l_name: '',
                    s_name: '',
                    tel_num: '',
                    user_status_id: null,
                },
                errors: {
                    email: null,
                    username: null,
                    password: null,
                    password_confirm: null,
                    l_name: null,
                    s_name: null,
                    tel_num: null,
                    user_status_id: null,
                },
            }
        },

        methods: {

            submit() {
                this.$axios.post('/auth/register', this.form).then((response) => {
                    if (typeof response.data.access_token !== 'underfined') {
                        this.$auth.setUserToken(response.data.access_token, true);
                        this.$emit('closePopup');
                        setTimeout(()=>{
                            window.location.reload();
                        },500)
                    }
                }).catch((error) => {
                                        console.log(error);
                    const data = error.response.data.errors;
                    for (let [key, value] of Object.entries(this.errors)) {
                         this.errors[key] = data[key] !== undefined ? data[key].join() : null;
                    }
                    setTimeout(()=>{
                        for (let [key, value] of Object.entries(this.errors)) {
                             this.errors[key] = null;
                        }
                    },2000)
                });
            },
        }
    }

</script>


<style scoped lang="scss">
    .danger_message {
        position: absolute;
        font-size: 11px;
        line-height: 13px;
        color: #dc3545;
    }

</style>
