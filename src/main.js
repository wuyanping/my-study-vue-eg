import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'

// import store from './vuex/index'
// 将axios挂载到prototype上，在组件就可以直接使用this.axios访问

// 引入axios，将 axios 改写为 Vue 的原型属性
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueRouter)

// 注册指令
import Directive from './directive/directive.js'
Object.keys(Directive).forEach(key => Vue.directive(key, Directive[key]()))


// require('./config/init')

const app = new Vue({
    router,
    // store: store,
    render: h => h(App)
}).$mount('#app')
