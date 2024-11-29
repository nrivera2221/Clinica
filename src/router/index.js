import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import ScheduleAppointment from '@/components/ScheduleAppointment.vue';
import AppointmentHistory from '@/components/AppointmentHistory.vue';
import Notfound from '@/components/Notfound.vue';
import path from 'path';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const routes = [
    {
      path: '/',
      name: 'path',
      component: path,
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
