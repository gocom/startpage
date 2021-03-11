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

import KeyboardShortcut from '../KeyboardShortcut';

export default {
  props: {
    limit: {
      type: Number,
      default: 8,
    },
    total: {
      type: Number,
      default: 0,
    },
    route: {
      type: String,
      default: 'page',
    },
    param: {
      type: String,
      default: 'page',
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  components: {
    KeyboardShortcut,
  },

  methods: {
    /**
     * Sets page.
     *
     * Given page number is ignored if its invalid, or same as the current page.
     *
     * @param {number} number
     *
     * @return {void}
     */
    setPage(number) {
      const page = Math.min(this.pageCount, Math.max(1, number));

      if (this.page === page) {
        return;
      }

      if (this.requestedPage === page) {
        this.page = page;
        this.$parent.$emit('change-page', this.page);
        return;
      }

      const params = {};

      params[this.param] = page;

      this.$router.push({
        name: this.route,
        params,
      })
        .then(() => {
          this.page = page;
          this.$parent.$emit('change-page', this.page);
        });
    },

    /**
     * Go to next page.
     *
     * @return {void}
     */
    nextPage() {
      this.setPage(this.page + 1);
    },

    /**
     * Go to previous page.
     *
     * @return {void}
     */
    previousPage() {
      this.setPage(this.page - 1);
    },
  },

  computed: {
    /**
     * Gets requested page number.
     *
     * @return {number}
     */
    requestedPage() {
      return parseInt(this.$route.params[this.param], 10) || 1;
    },

    /**
     * Gets number of pages.
     *
     * @return {Number}
     */
    pageCount() {
      return Math.ceil(this.total / this.limit) || 1;
    },

    /**
     * Gets page numbers.
     *
     * @return {Object[]}
     */
    pages() {
      const pages = this.pageCount;

      if (pages === 1) {
        return [];
      }

      return [...Array(pages).keys()].map((index) => {
        const number = index + 1;

        return {
          number,
          isActive: this.page === number,
        };
      });
    },
  },

  watch: {
    /**
     * Navigates to the requested page once we know the total number of pages.
     */
    total() {
      this.setPage(this.requestedPage);
    },
  },
};
