import { describe, it, expect } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';

import { mount } from '@vue/test-utils';
import Login from '../Login.vue';
import Dashboard from '../Dashboard.vue';
import DashboardView from '@/views/DashboardView.vue';

describe('Login.vue', () => {
  it('renderiza el formulario de login', () => {
    const wrapper = mount(Login); //Se define la existencia de Login
    expect(wrapper.find('form').exists()).toBe(true);
  });
  
  it('Probando la vista DashboardView', async() => {
    const router = createRouter({ //Se define la ruta
      history: createWebHistory(),
      routes: [{
        path:'/',
        name:'DashboardView',
        component: DashboardView
      }],
    })
  })
});
