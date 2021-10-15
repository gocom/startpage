import { mount } from '@vue/test-utils';
import Component from '../../../../src/components/Form/ColorPicker';

test('color', () => {
  const wrapper = mount(Component);
  const { vm } = wrapper;

  vm.value = 'invalid';
  expect(vm.isAccepted).toBeFalsy();
  expect(vm.cssColor).toBe('');

  vm.value = '#000';
  expect(vm.isAccepted).toBeTruthy();
  expect(vm.cssColor).toBe('#000');

  vm.value = '#ffffff';
  expect(vm.isAccepted).toBeTruthy();
  expect(vm.cssColor).toBe('#ffffff');

  vm.change();

  wrapper.destroy();
});
