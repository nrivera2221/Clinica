import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Login from '../Login.vue';

describe('Login.vue', () => {
  it('renderiza el formulario de login', () => {
    const wrapper = mount(Login);
    expect(wrapper.find('form').exists()).toBe(true);
  });
});
