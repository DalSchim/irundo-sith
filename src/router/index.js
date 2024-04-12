import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from "../views/pages/FormView.vue";
import ServeursHebergesView from "@/components/fonctioonnalite/ServeursHebergesView.vue";
import ServeursLocauxView from "@/components/fonctioonnalite/ServeursLocauxView.vue";
import AdministrationView from "@/components/fonctioonnalite/AdministrationView.vue";
import SuportFunctionView from "@/components/fonctioonnalite/SuportFunctionView.vue";


// Ajoute ici tes routes pour tes views
const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/ServeursHeberges',
        component: HomeView,
        children: [
            {path: 'ServeursHeberges', name: 'ServeursHeberges', component: ServeursHebergesView},
            {path: 'ServeursLocaux', name: 'ServeursLocaux', component: ServeursLocauxView},
            {path: 'Administration', name: 'Administration', component: AdministrationView},
            {path: 'SuportFunctionView', name: 'SuportFunctionView', component:SuportFunctionView },

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
    },
    {
        path: '/conditions-generales',
        name: 'conditions-generales',
        component: () => import(/* webpackChunkName: "conditions-generales" */ '../views/pages/ConditionView.vue'),
    },
    {
        path: '/politique-de-confidentialite',
        name: 'politique-de-confidentialite',
        component: () => import(/* webpackChunkName: "politique-de-confidentialite" */ '../views/pages/ConfidentialView.vue'),

    }

]
// crée un scroll to top pour les route qui sommes nous et form
const router = createRouter({
    history: createWebHistory(),
    routes,
});


// scroll to top pour les routes qui sommes nous et form

router.afterEach((to) => {
    const routesWithScrollTop = ['/form', '/qui-sommes-nous', '/conditions-generales', '/politique-de-confidentialite'];
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
