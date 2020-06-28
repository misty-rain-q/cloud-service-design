import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Base from '@/components/base.vue'
import Index from '@/components/pages/Index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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