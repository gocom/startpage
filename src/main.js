/**
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
 */

/*
 * Copyright (C) 2021 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vue2TouchEvents from 'vue2-touch-events';
import VueRouter from 'vue-router';
import autofocus from 'vue-autofocus-directive';
import App from './components/App';
import messages from './i18n';

Vue.use(Vue2TouchEvents);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.directive('autofocus', autofocus);

const routes = [
  {
    name: 'page',
    path: '/page/:page',
    component: App,
  },
];

const router = new VueRouter({
  routes,
});

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  i18n,
});
