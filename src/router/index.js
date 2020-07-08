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

//settings
import PersonInfo from '@/components/pages/settings/PersonInfo'
import SettingsNotice from '@/components/pages/settings/SettingsNotice'
import CompanyInfo from '@/components/pages/settings/CompanyInfo'
import ServicerManage from '@/components/pages/settings/ServicerManage'
import GroupManage from '@/components/pages/settings/GroupManage'
import RoleManage from '@/components/pages/settings/RoleManage'
import CommonWords from '@/components/pages/settings/CommonWords'
import AutoReply from '@/components/pages/settings/AutoReply'
import DialogRule from '@/components/pages/settings/DialogRule'
import DialogComment from '@/components/pages/settings/DialogComment'
import DistributionRule from '@/components/pages/settings/DistributionRule'
import CustomerInfo from '@/components/pages/settings/CustomerInfo'
import CustomerTag from '@/components/pages/settings/CustomerTag'
import Blacklist from '@/components/pages/settings/Blacklist'
import BaseSettings from '@/components/pages/settings/BaseSettings'
import OrderType from '@/components/pages/settings/OrderType'
import OperationLog from '@/components/pages/settings/OperationLog'
import MessageNotice from '@/components/pages/settings/MessageNotice'



//statistics
import AccessStats from '@/components/pages/statistics/AccessStats'
import WorkQualityStats from '@/components/pages/statistics/WorkQualityStats'
import WorkQuantityStats from '@/components/pages/statistics/WorkQuantityStats'
import { registerMap } from 'echarts'

//dialog iconfont import
import '../assets/iconfont-d/iconfont.css'
// import { component } from 'vue/types/umd'

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
                    path: 'customer',
                    component: Customer
                },
                {
                    path: 'order',
                    component: Order
                },
                {
                    path: 'statistics',
                    component: Statistics
                },
                {
                    path: 'settings',
                    component: Settings,
                    children: [,
                        {
                            path: 'personInfo',
                            component: PersonInfo
                        },
                        {
                            path: 'settingsNotice',
                            component: SettingsNotice
                        },
                        {
                            path: 'companyInfo',
                            component: CompanyInfo
                        },
                        {
                            path: 'servicerManage',
                            component: ServicerManage
                        },
                        {
                            path: 'groupManage',
                            component: GroupManage
                        },
                        {
                            path: 'roleManage',
                            component: RoleManage
                        },
                        {
                            path: 'commonWords',
                            component: CommonWords
                        },
                        {
                            path: 'autoReply',
                            component: AutoReply
                        },
                        {
                            path: 'dialogRule',
                            component: DialogRule
                        },
                        {
                            path: 'dialogComment',
                            component: DialogComment
                        },
                        {
                            path: 'distributionRule',
                            component: DistributionRule
                        },
                        {
                            path: 'customerInfo',
                            component: CustomerInfo
                        },
                        {
                            path: 'customerTag',
                            component: CustomerTag
                        },
                        {
                            path: 'blacklist',
                            component: Blacklist
                        },
                        {
                            path: 'baseSettings',
                            component: BaseSettings
                        },
                        {
                            path: 'orderType',
                            component: OrderType
                        },
                        {
                            path: 'operationLog',
                            component: OperationLog
                        },
                        {
                            path: 'messageNotice',
                            component: MessageNotice
                        }
                    ]
                },
            ]
        }
    ]
})