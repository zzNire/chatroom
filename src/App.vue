<template>
  <div id="app">
    <div id="login" v-if="!name.length">
      <input id="login-name" @keyup.enter='enterName'  >
    </div>
    <chat-window  v-else  :name="name"></chat-window>
  </div>
</template>

<script>

import ChatWindow from './components/ChatWindow'
export default {
  name: 'app',
  data(){
    return {
      name:'',
    }
  },
  components: {
    ChatWindow
  },
  mounted(){
    console.log('socket'+this.name);
    document.getElementById('login-name').focus();
    this.$socket.on('')
  },
  methods:{
    enterName(e){
        this.name = document.getElementById('login-name').value;
        console.log(this.name);
        this.$socket.emit('user name', this.name)
    
    }
  }
}
</script>

<style>
#app{
  height: 100vh;
  width:100vw;
}
</style>
