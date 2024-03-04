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
        component: () => import(/* webpackChunkName: "qui-sommes-nous" */ '../views/pages/QuiSommeNousView.vue'),
    }
]
// crée un scroll to top pour les route qui sommes nous et form
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    const routesWithScrollTop = ['/form', '/qui-sommes-nous'];
    if (routesWithScrollTop.includes(to.path)) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50);
    }
});

// scroll to #fonctionnalite si la route est fonctionnalite1#nos-fonctionnalites au dessu de 100px
router.beforeEach((to, from, next) => {
    if (to.hash === '#nos-fonctionnalites') {

        // si  la media query est mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                const targetElement2 = document.querySelector('#content');
                if (targetElement2) {
                    const targetPosition = targetElement2.offsetTop - 100;
                    if (targetPosition < 0) {
                        return;
                    }
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Optional: Add smooth scrolling behavior
                    });
                }
            }
                , 50);

        } else {
            setTimeout(() => {
                const targetElement = document.querySelector('#nos-fonctionnalites');

                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 100;
                    if (targetPosition < 0) {
                        return;
                    }
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Optional: Add smooth scrolling behavior
                    });
                }
            }, 50);
        }
    }
    next();
});


export default router
