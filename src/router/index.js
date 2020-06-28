import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Base from '@/components/base.vue'
import Index from '@/components/pages/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Base,
        children: [{
            path: 'index',
            component: Index
        }]
    }]
})