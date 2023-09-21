import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () =>
    import ('./../views/HomeView.vue')
const ProductView = () =>
    import ('./../views/ProductView.vue')
const NotFoundView = () =>
    import ('./../views/NotFoundView.vue')
const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/product/:id',
        name: 'productview',
        component: ProductView
    }, {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFoundView
    }]
})

export default router