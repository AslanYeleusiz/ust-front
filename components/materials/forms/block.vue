<template>
    <a target="_blank" :href="'word/'+material.lat_title+'-'+material.id+'.html'" class="block" :class='{green: material.sell>0}'>
        <div class="h2">
            <div class="title">
                <img v-if='material.sell>0' src="~assets/images/shield-tick.svg" alt="">
                <span>{{material.title}}</span>
            </div>
            <div v-if='material.sell>0' class="money">{{material.sell}} тг</div>
        </div>
        <div class="info">
            <div class="name">
                <img src="~assets/images/user_material.svg" alt="">
                <span>{{material.author}}</span>
            </div>
            <div class="d-flex">
                <div class="date">
                <img src="~assets/images/note-text.svg" alt="">
                <span>{{material.date}}</span>
            </div>
            <div class="views">
                <img src="~assets/images/eye_materials.svg" alt="">
                <span> {{material.view}} </span>
            </div>
            <div class="downloads">
                <img src="~assets/images/import.svg" alt="">
                <span> {{material.download}} </span>
            </div>
            </div>
        </div>
        <div v-if="material.description != null" class="body">
            {{material.description}}
        </div>
    </a>
</template>


<script>
    export default {
        props: ['material'],
    }

</script>


<style scoped lang="scss">
    .block {
        display: block;
        width: 100%;
        padding: 30px 20px;
        border-bottom: 1px solid #F0F0F0;

        &:first-child {
            border-top: 1px solid #F0F0F0;
        }

        font-family: Raleway;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: #888888;
        transition: 0.15s;

        &:hover {
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            text-decoration: none;

            .h2 span {
                text-decoration: underline;
            }
        }

        .h2 {
            font-size: 20px;
            font-weight: 600;
            line-height: 23px;
            color: #1E63E9;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;

            .title {
                display: flex;
                align-items: center;

                @media all and (max-width: 883px) {
                    align-items: flex-start;
                }

                @media all and (max-width: 767px) {
                    flex-direction: column;
                    align-items: flex-start;

                    img {
                        margin-bottom: 5px;
                    }
                }

            }

            .money {
                color: #03B113;
                min-width: 58px;
            }

            img {
                margin-right: 5px;
                width: 24px;
                height: 24px;
            }
        }

        .info {
            display: flex;

            @media all and (max-width: 883px) {
                flex-wrap: wrap;

                .name {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }

            .name {
                max-width: 250px;
                display: flex;

                span {
                    display: block;
                    margin-left: 5px;
                }
            }

            img {
                width: 16px;
                height: 16px;
            }

            .name,
            .date,
            .views {
                margin-right: 20px;
            }

        }
        .body{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-top: 10px;
        }
    }

    .green {
        background: #EDFFED;
        margin-top: 10px;
    }

</style>
