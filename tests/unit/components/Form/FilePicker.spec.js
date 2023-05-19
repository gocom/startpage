import { mount } from '@vue/test-utils';
import Component from '../../../../src/components/Form/FilePicker';

test('file preview', () => {
  const wrapper = mount(Component);
  const { vm } = wrapper;

  vm.file = null;
  expect(vm.hasPreview).toBeFalsy();
  expect(vm.preview).toBeNull();

  vm.file = 'file';
  expect(vm.hasPreview).toBeTruthy();
  expect(vm.preview).toBe('file');

  wrapper.destroy();
});

test('select and remove a file', () => {
  const wrapper = mount(Component);
  const { vm } = wrapper;

  vm.file = null;

  vm.select('filename');

  expect(vm.scale('filename')).resolves.toBe('filename');

  vm.file = 'filename';

  vm.remove();

  expect(vm.file).toBeNull();

  wrapper.destroy();
});
