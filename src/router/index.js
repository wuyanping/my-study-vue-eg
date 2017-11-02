/**
* 路由
*/
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// -------------------------------------------------------------
const catalog = resolve => {
    require.ensure(['../components/catalog.vue'], () => {
        resolve(require('../components/catalog.vue'))
    }, 'catalog')
}
// ----------------------------vue实例--------------------------------
const vueShiLi = resolve => {
    require.ensure(['../components/basic/vueShiLi.vue'], () => {
        resolve(require('../components/basic/vueShiLi.vue'))
    }, 'vueShiLi')
}
const computed = resolve => {
    require.ensure(['../components/basic/computed.vue'], () => {
        resolve(require('../components/basic/computed.vue'))
    }, 'computed')
}
const classAndStyle = resolve => {
    require.ensure(['../components/basic/classAndStyle.vue'], () => {
        resolve(require('../components/basic/classAndStyle.vue'))
    }, 'classAndStyle')
}
const template = resolve => {
    require.ensure(['../components/basic/template.vue'], () => {
        resolve(require('../components/basic/template.vue'))
    }, 'template')
}

// --------------------------进阶-----------------------------------
const mixin = resolve => {
    require.ensure(['../components/jinJie/mixin.vue'], () => {
        resolve(require('../components/jinJie/mixin.vue'))
    }, 'mixin')
}
// -------------------------------------------------------------
const Drag = resolve => {
    require.ensure(['../components/drag.vue'], () => {
        resolve(require('../components/drag.vue'))
    }, 'Drag')
}

const word = resolve => {
    require.ensure(['../components/eg/word.vue'], () => {
        resolve(require('../components/eg/word.vue'))
    }, 'word')
}

var routes = [
    {
        path: '/',
        name: 'catalog',
        component: catalog
    },
    {
        path: '/vueShiLi',
        name: 'vueShiLi',
        component: vueShiLi
    },
    {
        path: '/computed',
        name: 'computed',
        component: computed
    },
    {
        path: '/classAndStyle',
        name: 'classAndStyle',
        component: classAndStyle
    },
    {
        path: '/template',
        name: 'template',
        component: template
    },
    {
        path: '/mixin',
        name: 'mixin',
        component: mixin
    },
    {
        path: '/drag',
        name: 'Drag',
        component: Drag
    },
    {
        path: '/word',
        name: 'word',
        component: word
    }
]

export default new Router({
    // mode: 'history',
    routes
})
