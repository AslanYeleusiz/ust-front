<template>
    <div class="btn-group" v-click-outside="hide">
        <button type="button" class="btn myBtn" :class="{active: isOpen, soup: type==2}" data-bs-toggle="dropdown" aria-expanded="false"  @click="openedMenu">
           <template v-if='isActive!=null'>
               {{category[isActive].name}}
           </template>
           <template v-else>
               {{placeholder}}
           </template>
            <img src="~assets/images/arrow-down.svg" alt="">
        </button>
        <ul v-show="isOpen" class="dropdown-menu">
            <li v-for='(cat, index) in category'><a class="dropdown-item" @click="sendRes(index)">{{cat.name}}</a></li>
        </ul>
    </div>
</template>


<script>
    import ClickOutside from 'vue-click-outside'
    export default {
        data() {
            return {
                isOpen: false,
                isActive: null
            }
        },
        props: ['category', 'placeholder', 'type'],
        methods: {
            openedMenu() {
                this.isOpen ? this.isOpen = false : this.isOpen = true
            },
            hide() {
                this.isOpen = false
            },
            sendRes(e) {
                this.isActive = e;
                this.$emit('entered-category', this.isActive);
                setTimeout(()=>{
                    this.hide()
                },150)
            }
        },
        directives: {
            ClickOutside
        }

    }

</script>


<style scoped lang="scss">
    *{
        font-family: Raleway;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    .dropdown-menu {
        display: block;
    }
    .myBtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F3F3F3;
        border: 1px solid #D6D6D6;
        border-radius: 6px !important;
        padding: 0 15px 0 20px;
        height: 50px;
        &.soup{
            width: 160px;
            height: 40px;
            background: #FFFFFF;
            border: 0.5px solid #F0F0F0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 40px !important;
            color: #888888;
            &.active,
            &:active,
            &:focus {
                border: 1px solid #ffffff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.075) !important;
            }
        }
        img{
            transition: 0.15s;
        }
        &.active{
            border: 1px solid #0045CB;
            img{
                transform: scale(1,-1);
            }
        }
    }
    .dropdown-menu{
        width: 260px;
        max-height: 240px;
        overflow-y: scroll;
        padding: 0 10px 0 10px;
        @media all and (max-width: 693px){
            width: 100%;
        }

        .dropdown-item{
            padding: 15px 20px;
            transition: 0.05s;
            border-bottom: 1px solid #D6D6D6;
            white-space: normal;
            &:hover{
                background: #0045CB;
                color: #ffffff;
                cursor: pointer;
            }
        }
        &::-webkit-scrollbar {width: 6px;}
        &::-webkit-scrollbar-track {background: #F0F0F0;}
        &::-webkit-scrollbar-thumb {
            background: #888888;
            border-radius: 30px;
        }
    }
</style>
