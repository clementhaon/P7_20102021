import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "news",
    component: () => import("../views/news.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/create.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },
  {
    path: "/post/:id",
    name: "post",
    component: () => import("../views/onePost.vue"),
  },
  
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: '/twitter',
    beforeEnter() {location.href = 'http://twitter.com'}
  },
  {
    path: '/facebook',
    beforeEnter() {location.href = 'http://facebook.com'}
  },
  {
    path: '/pinterest',
    beforeEnter() {location.href = 'http://pinterest.com'}
  },
  {
    path: '/instagram',
    beforeEnter() {location.href = 'http://instagram.com'}
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
