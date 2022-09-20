<template>
    <div class="registerCode">
        <olimpiadaPopup :active="active" @close="active=0" :tuser="katysushy" />
        <div class="cst-ct">
            <div class="codeCheckBlock code-enter">
                <div class="header">Олимпиадаға кіру үшін берілген кодты енгізіңіз!</div>
                <div class="cst-size-inp">
                    <cstInput
                        @keyup.enter.native="startOlimp"
                        stringPlaceholder="Мысалы: 123456789"
                        v-model="code"
                        :dangerText="error_message"
                        :danger="error_message"
                        class="code-enter-input"
                    />
                </div>
                <div class="cst-size-btn">
                    <cstBtn v-if="loading" loading=1  />
                    <cstBtn v-else @click.native="startOlimp" text="Олимпиаданы бастау" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import cstInput from '@/components/forms/cstInput.vue'
    import cstBtn from '@/components/forms/btn.vue'
    import olimpiadaPopup from '@/components/popups/olimpiadaPopup.vue'

    export default {
        components: {
            cstInput,
            cstBtn,
            olimpiadaPopup
        },
        layout: 'third',
        data() {
            return {
                code: null,
                loading: 0,
                error_message: '',
                active: 0,
                katysushy: null,
            }
        },

        methods: {
            startOlimp() {
                if(this.code != null){
                    this.loading = 1
                    this.$api.$get('/olimpiada/test/load',{
                        params: {
                            code: this.code
                        }
                    }).then((res)=>{
                        if(res.status == false){
                            this.error_message = res.data.message
                        }else{
                            var timer = 3600
                            if(res.status == true){
                                var suraktar = res.data[0];
                                var katysushy = res.data[1];
                            }else if(res.status == 'continue'){
                                var suraktar = new Array();
                                res.data[0].forEach((e)=>{
                                    e.surak.my_answer = e.zhauap_id
                                    suraktar.push(e.surak)
                                });
                                var katysushy = res.data[1];
                                timer = res.date
                            }

//                            this.$router.push('/olimpiada/test/erezhe');
                            this.$router.push({
                                name: 'olimpiada-test-erezhe',
                                params: {
                                    suraktar: suraktar,
                                    katysushy: katysushy,
                                    status: res.status,
                                    timer: timer
                                }
                            });
                        }
                        this.loading = 0

                    }).catch((err)=>{
                        this.loading = 0
                        console.log(err)
                    })
                }
                else this.error_message = 'Берілген кодты енгізіңіз!'
//
            }
        },

        mounted() {
            console.log(this.$route.params)
            if(this.$route.params.status == 'result'){
                this.katysushy = this.$route.params.katysushy
                this.active=1
            }
        }

    }

</script>


<style scoped lang="scss">
    .registerCode {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F9F9F9;

        .codeCheckBlock {
            width: 100%;
            max-width: 840px;
            background: #FFFFFF;
            box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.05);
            border-radius: 30px;
            padding: 50px 20px 60px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .header {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                color: #363636;
                text-align: center;
                max-width: 572px;
                margin: 0 auto;
            }

            .cst-size-inp,
            .cst-size-btn {
                width: 100%;
                max-width: 400px;
                height: 50px;
            }

            .cst-size-inp {
                margin-top: 40px;
            }

            .cst-size-btn {
                margin-top: 30px;
            }
        }
    }

    @media all and (max-width: 1099px) {
        .registerCode .codeCheckBlock .header {
            font-size: 30px;
            line-height: 36px;
        }
    }

    @media all and (max-width: 883px) {
        .registerCode .codeCheckBlock .header {
            font-size: 28px;
            line-height: 33px;
        }
    }

    @media all and (max-width: 500px) {
        .registerCode .codeCheckBlock .header {
            font-size: 26px;
            line-height: 31px;
        }

        .registerCode .codeCheckBlock .cst-size-inp {
            margin-top: 30px;
        }

        .registerCode .codeCheckBlock .cst-size-btn[data-v-cc436974] {
            margin-top: 20px;
        }



    }

    @media all and (max-width: 438px) {
        .registerCode .codeCheckBlock .header {
            font-size: 24px;
            line-height: 29px;
        }
    }

</style>
<style lang="scss">
    .code-enter-input .danger_message{
        position: relative;
    }
</style>
