import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/Base'
import Index from '@/components/pages/Index'
import Dialog from '@/components/pages/Dialog'
import Visitor from '@/components/pages/Visitor'
import History from '@/components/pages/History'
import Settings from '@/components/pages/Settings'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Customer from '@/components/pages/Customer'
import Order from '@/components/pages/Order'
import Statistics from '@/components/pages/Statistics'

//order
import AllOrder from '@/components/pages/order/components/AllOrder'
import Waiting from '@/components/pages/order/components/Waiting'
import Created from '@/components/pages/order/components/Created'
import Copied from '@/components/pages/order/components/Copied'
import Dealing from '@/components/pages/order/components/Dealing'
import Finished from '@/components/pages/order/components/Finished'


//settings
import DialogRule from '@/components/pages/settings/DialogRule'
import DistributionRule from '@/components/pages/settings/DistributionRule'

//statistics
import AccessStats from '@/components/pages/statistics/AccessStats'
import CheckInStats from '@/components/pages/statistics/CheckInStats'
import StatisticsOverall from '@/components/pages/statistics/StatisticsOverall'
import WorkQualityStats from '@/components/pages/statistics/WorkQualityStats'
import WorkQuantityStats from '@/components/pages/statistics/WorkQuantityStats'
import { registerMap } from 'echarts'

//dialog iconfont import
import '../assets/iconfont-d/iconfont.css'

// import { component } from 'vue/types/umd'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes: [,
        {
            path: '',
            redirect: '/login',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        // {
        //     path: '/register',
        //     component: Register
        // },
        {
            path: '/',
            component: Base,
            children: [,
                {
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
                },
                {
                    path: 'customer',
                    component: Customer
                },
                {
                    path: 'order',
                    redirect: 'order/allorder',
                    component: Order,
                    children: [
                      {
                        path:'allOrder',
                        component:AllOrder
                      },
                      {
                        path:'waiting',
                        component:Waiting
                      },
                      {
                        path:'created',
                        component:Created
                      },
                      {
                        path:'copied',
                        component:Copied
                      },
                      {
                        path:'dealing',
                        component:Dealing
                      },
                      {
                        path:'finished',
                        component:Finished
                      },
                    ]
                },
                {
                    path: 'statistics',
                    redirect: 'statistics/statisticsOverall',
                    component: Statistics,
                    children: [
                      {
                        path:'statisticsOverall',
                        component:StatisticsOverall
                      },
                      {
                        path:'workQuantityStats',
                        component:WorkQuantityStats
                      },
                      {
                        path:'workQualityStats',
                        component:WorkQualityStats
                      },
                      {
                        path:'checkInStats',
                        component:CheckInStats
                      },
                      {
                        path:'accessStats',
                        component:AccessStats
                      },
                    ]
                }
            ]
        }
    ]
})
