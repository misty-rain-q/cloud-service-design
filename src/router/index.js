import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/base.vue'
import Index from '@/components/pages/Index'
import Dialog from '@/components/pages/Dialog'
import Visitor from '@/components/pages/Visitor'
import History from '@/components/pages/History'
import Settings from '@/components/pages/Settings'

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
            },
            {
                path: 'dialog',
                component: Dialog
            },
            {
                path: 'visitor',
                component: Visitor
            },
            {
                path: 'history',
                component: History
            },
            {
                path: 'settings',
                component: Settings
            }
        ]
    }]
})