import { createLocalVue, config } from '@vue/test-utils';
import Vue2TouchEvents from 'vue2-touch-events';

const localVue = createLocalVue();

config.mocks.$t = () => {};

localVue.use(Vue2TouchEvents);

export default localVue;
