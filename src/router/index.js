import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/public/HomeView"
import Demo from "@/views/public/Demo";
//import LoginView from "../views/public/LoginView";
//import RegisterView from "@/views/public/RegisterView";
// import DefaultView from "@/views/private/DefaultView";
// import TutorialView from "@/views/private/TutorialView";
// import AlertView from "@/views/private/AlertView";
// import ProfileView from "@/views/private/ProfileView";
import SettingsView from "@/views/private/SettingsView";
// import ProjectView from "@/views/private/ProjectView";
// import EditorView from "@/views/private/EditorView";

const ifAuthentificated = (to, from, next) => {
  if(sessionStorage.getItem('token') != null) {
    next()
    return
  }
  next('/connexion')
}

const redirectIfAuthentificated = (to, from, next) => {
  if(sessionStorage.getItem('token') != null) {
    next('acceuil')
    return
  }
  next()
}

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
    component: import('@/views/public/LoginView'), //LoginView
    beforeEnter: redirectIfAuthentificated,
  },
  {
    path: '/inscription',
    name: 'Register',
    component: import('@/views/public/RegisterView'), //RegisterView
    beforeEnter: redirectIfAuthentificated,
  },
  {
    path: '/activation-de-compte/:token',
    name: 'ActivateAccount',
    component: import('@/components/utils/ActivateAccount'),
    beforeEnter: redirectIfAuthentificated,
  },
  {
    path: '/mot-de-passe-oublie', 
    name: 'ForgetPassword',
    component: import('@/components/utils/ForgetPassword'),
    beforeEnter: redirectIfAuthentificated,
  },
  {
    path: '/mot-de-passe-oublie/:token',
    name: 'ForgetPasswordForm',
    component: import('@/components/utils/ForgetPasswordForm'),
    beforeEnter: redirectIfAuthentificated,
  },
  {
    path: '/acceuil',
    name: 'Default',
    component: import('@/views/private/DefaultView'),
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/tutoriels',
    name: 'Tutorials',
    component: import('@/views/private/TutorialView'),
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/alerts',
    name: 'Alert',
    component: import('@/views/private/AlertView'),
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/profil/:user',
    name: 'Profile',
    component: import('@/views/private/ProfileView'),
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/parametres',
    name: 'Setting',
    component: SettingsView,
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/projet/:code/:id',
    name: 'projetView',
    component: import('@/views/private/ProjectView'),
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/editeur/:name',
    name: 'Editeur',
    component: () => import('@/views/private/EditorView'), //EditorView
    beforeEnter: ifAuthentificated,
  },
  {
    path: '/leave-feedback',
    name: 'FeedBack',
    component: () => import('@/views/public/FeedBackView')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/shared/404')
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
