<template>
    <header>
        <div class="otstup"></div>
        <div class="main_header">
            <div class="cst-ct d-flex a-c j-b">
                <div class="d-flex overflow">
                    <template v-for="(h, index) in head">
                        <NuxtLink :to="h.link" class="NuxtLink-item" :class="{active: index==active}">
                            {{h.name}}
                        </NuxtLink>
                    </template>
                </div>
                <div class="d-flex a-c free-cert">
                    <div class="free-cert-button">
                        <certBtn text='Тегін сертификат алу' />
                    </div>
                    <notification class='notification' />
                </div>
            </div>
        </div>
    </header>
</template>


<script>
    import certBtn from '@/components/forms/certBtn.vue'
    import notification from '@/components/svg/notification.vue'
    export default {
        components: {
            certBtn,
            notification
        },
        props: ['head','active']
    }

</script>


<style scoped lang="scss">
    .otstup {
        padding-bottom: 66px;

        @media all and (max-width: 767px) {
            padding-bottom: 132px;
        }
    }

    .main_header {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        background: #ffffff;

        .cst-ct {
            height: 100%;

            .d-flex {
                height: 100%;
            }
        }
        .overflow{
            max-width: 100vw;
            overflow-x: scroll;
            &::-webkit-scrollbar{
                height: 0;
            }
        }
        .free-cert {
            position: absolute;
            right: 66px;

            .free-cert-button {
                @media all and (max-width: 883px) {
                    display: none;
                }
            }

            .notification {
                cursor: pointer;
                stroke: #363636;

                &:hover {
                    stroke: #0045CB;
                }

                &:active {
                    stroke: #0037A1;
                }
            }
        }

        .NuxtLink-item {
            display: flex;
            align-items: center;
            color: #363636;
            height: 100%;
            margin-right: 40px;
            white-space: nowrap;

            &:hover {
                text-decoration: none;
            }
        }

        .NuxtLink-item.active {
            border-bottom: 2px solid #363636;
        }
    }

</style>
