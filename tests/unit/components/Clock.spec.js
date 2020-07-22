import { mount } from '@vue/test-utils';
import Component from '../../../src/components/Clock';

test('displays time', () => {
  const wrapper = mount(Component);
  const { vm } = wrapper;

  expect(String(vm.seconds)).toMatch(/^[0-6][0-9]$/);
  expect(vm.amPm).toMatch(/(am|pm)/i);

  wrapper.destroy();
});
