<template>
    <div id="chat-window">
        <div id="message-window">
            <message v-for="(message,index) in messages" 
            :key="index" :message='message'></message>
        </div>
        <div id="users-window">
            <user v-for="(user,index) in users" :key="index" :user='user'></user>
        </div>
        <div id="input-window">
            <input id="message-input" autocomplete="off" style="com" @keyup.enter="sendMsg">
            <button id="message-send-btn" @click="sendMsg">send</button>
        </div>
    </div>
</template>

<script>
    import Message from './Message'
    import User from './User'
    import message_type from '../js/message-type'
    export default {
        data() {
            return {
                messages: [{
                    name:'nirean',
                    msg:'hello world'
                }],
                users:[]
            }
        },
        props: {
            name: {
                type: String,
                default: 'uesr',
            }
        },
        components: {
            Message,
            User,
        },
        mounted(){
            
        },
        sockets: {
            'chat message': function (msg) {
                console.log(msg);
                msg.type = message_type.RECEIVE;
                this.messages = this.messages.concat(msg);
            },
            'user number':function(user){
                console.log(user);
                this.users.splice(0,this.users.length,...user.users);
            }
        },
        methods: {
            sendMsg(e) {
                this.$socket.emit('chat message', {
                    name: this.name,
                    msg: document.getElementById('message-input').value
                });
                this.messages = this.messages.concat({
                    msg: document.getElementById('message-input').value,
                    type:message_type.SEND});
                document.getElementById('message-input').value = '';
            }

        }
    }
</script>

<style scoped>
    #chat-window {
        height: 100%;
        width: 100%;
        position: relative;
    }

    #message-window{
        width: 100%;
        
        overflow: hidden;
    }
    #input-window {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
    }
    
    #message-input {
        flex: 1 1 0;
        overflow: hidden;
    }

    #message-send-btn {
        flex: 0 1 20vw;
        overflow: hidden;
        
    }

    #users-window{
        display: flex;
        

    }
</style>