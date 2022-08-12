import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../view/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../view/Home/index.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../view/User/index.vue')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../view/mall')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../view/other/pageOne.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../view/other/pageTwo.vue')
            },
        ]

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/Login/login.vue')
    }


]


const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router