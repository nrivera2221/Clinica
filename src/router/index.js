import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import ScheduleAppointment from '@/components/ScheduleAppointment.vue';
import AppointmentHistory from '@/components/AppointmentHistory.vue';
import Notfound from '@/components/Notfound.vue';
import AboutView from '../views/AboutView.vue';
import path from 'path';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/',
      name: 'path',
      component: path,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/', components:Login
    },
    {
      path: '/dashboard', components:Dashboard
    },
    {
      path: '/schedule', components:ScheduleAppointment
    },
    {
      path: '/history', components:AppointmentHistory
    },
    {
      path: '/:pathMatch(.*)*', components:Notfound
    },
  ]

export default router
