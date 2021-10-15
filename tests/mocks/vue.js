import { createLocalVue } from '@vue/test-utils';
import Vue2TouchEvents from 'vue2-touch-events';

const localVue = createLocalVue();

localVue.use(Vue2TouchEvents);

export default localVue;
