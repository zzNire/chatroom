## vue socket.io
### 安装
```js
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000/',
}))
```
### 使用
监听消息
```js
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
}
```
发送请求
```js
this.$emit();
```