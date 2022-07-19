import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/public/HomeView"
import LoginView from "../views/public/LoginView";
import RegisterView from "@/views/public/RegisterView";
import Demo from "@/views/public/Demo";
import DefaultView from "@/views/private/DefaultView";
import TutorialView from "@/views/private/TutorialView";
import AlertView from "@/views/private/AlertView";
import ProfileView from "@/views/private/ProfileView";
import SettingsView from "@/views/private/SettingsView";
import ProjectView from "@/views/private/ProjectView";
// import EditorView from "@/views/private/EditorView";

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
    path: '/tutoriels',
    name: 'Tutorials',
    component: TutorialView
  },
  {
    path: '/alerts',
    name: 'Alert',
    component: AlertView
  },
  {
    path: '/profil/:user',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/parametres',
    name: 'Setting',
    component: SettingsView
  },
  {
    path: '/projet/:code',
    name: 'projetView',
    component: ProjectView
  },
  {
    path: '/editeur/:name',
    name: 'Editeur',
    component: () => import('@/views/private/EditorView') //EditorView
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
