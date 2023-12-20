import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component:() => import('../views/Home.vue'),
    },
    {
        path: '/cadastrar-anime',
        component:() => import('../views/Post.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router