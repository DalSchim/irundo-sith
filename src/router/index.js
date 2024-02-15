import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from "../views/pages/FormView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/home',
        children: [
            {
                path: '/home',



                name: 'home',
                component: HomeView,
            },
        ]
    },

    {
        path: '/form',
        name: 'form',
        component: FormView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue')
    },
    {
        path:'/qui-sommes-nous',
        name: 'qui-sommes-nous',
        component: () => import(/* webpackChunkName: "qui-sommes-nous" */ '../views/pages/QuiSommeNousView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})
export default router
