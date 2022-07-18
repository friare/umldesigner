import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/public/HomeView"
import LoginView from "../views/public/LoginView";
import RegisterView from "@/views/public/RegisterView";
import Demo from "@/views/public/Demo";
import DefaultView from "@/views/private/DefaultView";

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/projet-demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/connexion',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/inscription',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/mot-de-passe-oublie',
    name: 'ForgetPassword',
    component: LoginView
  },
  {
    path: '/acceuil',
    name: 'Default',
    component: DefaultView
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/shared/404')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})

export default router
