/**
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
 */

/*
 * Copyright (C) 2020 Jukka Svahn
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

import Navigate from '../../lib/Navigate';
import Shortcut from '../../lib/Shortcut';

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

    methods: {
        /**
         * Sets page.
         *
         * @param {number} number
         *
         * @return {void}
         */
        setPage(number) {
            this.page = Math.min(Math.max(1, Math.min(this.pageCount, number)), this.pageCount);

            this.$parent.$emit('change-page', this.page);

            Navigate.setParam(this.param, this.page);
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
         * Gets number of pages.
         *
         * @return {Number}
         */
        pageCount() {
            return Math.ceil(this.total / this.limit);
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

            return [...Array(pages).keys()].map(index => {
                const number = index + 1;

                return {
                    number,
                    isActive: this.page === number
                };
            });
        },
    },

    mounted() {
        this.setPage(parseInt(Navigate.getParam(this.param), 10) || 1);

        Shortcut
            .on('ArrowLeft', () => this.previousPage())
            .on('a', () => this.previousPage())
            .on('ArrowRight', () => this.nextPage())
            .on('d', () => this.nextPage());
    },

    beforeDestroy() {
        Shortcut
            .remove('ArrowLeft')
            .remove('a')
            .remove('ArrowRight')
            .remove('d')
            .remove('Alt');
    },
}
