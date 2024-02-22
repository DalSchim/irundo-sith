import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from "../views/pages/FormView.vue";
import Fonctionnalite2View from "@/components/fonctioonnalite/fonctionnalite2View.vue";
import Fonctionnalite1View from "@/components/fonctioonnalite/fonctionnalite1View.vue";
import Fonctionnalite3View from "@/components/fonctioonnalite/fonctionnalite3View.vue";
import Fonctionnalite4View from "@/components/fonctioonnalite/fonctionnalite4View.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/fonctionnalite1',
        component: HomeView,
        children: [
            {path: 'fonctionnalite1', name: 'fonctionnalite1', component: Fonctionnalite1View},
            {path: 'fonctionnalite2', name: 'fonctionnalite2', component: Fonctionnalite2View},
            {path: 'fonctionnalite3', name: 'fonctionnalite3', component: Fonctionnalite3View},
            {path: 'fonctionnalite4', name: 'fonctionnalite4', component: Fonctionnalite4View},

            // Ajoute d'autres routes pour tes fonctionnalités
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
        path: '/qui-sommes-nous',
        name: 'qui-sommes-nous',
        component: () => import(/* webpackChunkName: "qui-sommes-nous" */ '../views/pages/QuiSommeNousView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})
export default router
