import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from "../views/FormView.vue";
import FonctionView from "@/views/FonctionView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
        path:'/fonctionalitees',
        name: 'fonctionalitees',
        component: FonctionView
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
