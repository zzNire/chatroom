import Vue from 'vue'
import App from './App.vue'

import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000/',
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
