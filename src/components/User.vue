<template>
    <div id="user">
        <div id="user-icon" :style="{backgroundImage:`url(${userIcon})`}">

        </div>
        <p id="user-name">{{user.name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        user:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    computed: {
            userIcon() {
                return this.user.src ? this.user.src : require('../../public/IMG_5840.jpg')
            }
        }
}
</script>

<style scoped>
#user{
    flex:0 0 40px;

}
#user-icon{
    background-size: cover;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    margin: 5px;
}
#user-name{
    width: 40px;
    text-align: center;
    font-size: 12px;
}
</style>
