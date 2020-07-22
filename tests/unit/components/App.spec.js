import { mount } from '@vue/test-utils';
import Component from '../../../src/components/App';

test('app created', () => {
  const wrapper = mount(Component);

  expect(wrapper.text().length).toBeGreaterThan(0);
});
