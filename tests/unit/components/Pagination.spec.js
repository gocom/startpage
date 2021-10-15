import { mount } from '@vue/test-utils';
import Component from '../../../src/components/Pagination';
import localVue from '../../mocks/vue';

const $route = {
  params: {
    page: 3,
  },
};

const $router = {
  push() {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

test('page number', () => {
  const wrapper = mount(Component, {
    localVue,
    mocks: {
      $route,
      $router,
    },
    propsData: {
      total: 24,
    },
  });

  const { vm } = wrapper;

  expect(vm.page).toBe(1);
  expect(vm.pageCount).toBe(3);
  expect(vm.pages.length).toBe(3);

  vm.setPage(3);
  vm.setPage(2);
  vm.setPage(2);
  vm.setPage(1);

  vm.nextPage();
  vm.nextPage();
  vm.previousPage();

  wrapper.destroy();
});

test('single page number', () => {
  const wrapper = mount(Component, {
    localVue,
    mocks: {
      $route,
      $router,
    },
    propsData: {
      total: 0,
    },
  });

  const { vm } = wrapper;

  expect(vm.pageCount).toBe(1);
  expect(vm.pages.length).toBe(0);

  wrapper.destroy();
});
