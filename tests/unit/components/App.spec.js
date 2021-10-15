import { mount } from '@vue/test-utils';
import Component from '../../../src/components/App';
import localVue from '../../mocks/vue';

test('app created', () => {
  const wrapper = mount(Component, {
    localVue,
  });

  expect(wrapper.text().length).toBeGreaterThan(0);
});
