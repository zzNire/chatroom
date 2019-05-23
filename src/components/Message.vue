<template>
    <div id='message'>
        <div id="receive" v-if="!message.type">
            <div id="user-icon">
                <div id="icon" :style="{backgroundImage:`url(${userIcon})`}"></div>
            </div>
            <div id='user-message'>
                <p id="user-name">{{message.name}}</p>
                <p id="msg-text">{{message.msg}}</p>
            </div>
        </div>
        <div id="send" v-else>
            <div id='user-message'>
                <p id="msg-text">{{message.msg}}</p>
            </div>
            <div id="user-icon">
                <div id="icon" :style="{backgroundImage:`url(${userIcon})`}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        computed: {
            userIcon() {
                return this.message.src ? this.message.src : require('../../public/IMG_5840.jpg')
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 0;
    }

    #message {
        margin: 10px 5px;
        position: relative;
        overflow: hidden;
    }

    #receive{
        display: flex;
    }

    #send{
        display: flex;
        align-items:baseline;
        overflow: hidden;
        float: right;
    }
   
    #user-icon {
        margin-top: 5px;
        background-size: 100%;
        flex: 0 0 40px;
    }

    #send #user-icon{
        margin-top:0;
    }
    #user-icon div {
        height: 30px;
        width: 30px;
        background-size: cover;
        border-radius: 15px;
        margin: 0 5px;
    }


    #user-name {
        font-size: 13px;
        line-height: 16px;
        margin: 5px;
    }


    #msg-text {
        width: fit-content;
        max-width: 70vw;
        background-color: silver;
        border-radius: 6px;
        font-size: 14px;
        line-height: 16px;
        padding: 5px 10px;
    }
</style>