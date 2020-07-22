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

import Shortcut from '../../lib/Shortcut';
import config from '../../config';
import SiteSearch from "../../model/SiteSearch";
import Pagination from '../Pagination';

export default {
    data () {
        return {
            sites: config.sites,
            limit: 8,
            page: 1,
            showNumbers: false,
        }
    },

    components: {
        Pagination,
    },

    methods: {
        /**
         * Gets site by position.
         *
         * @param {number} position
         *
         * @return {Site}
         */
        getByPosition(position) {
            for (const site of this.items) {
                if (site.position === position) {
                    return site;
                }
            }
        },

        /**
         * Opens the given site.
         *
         * @param {Site} site
         *
         * @return {void}
         */
        open(site) {
            window.location.href = site.url.toString();
        },

        /**
         * Toggle position numbers.
         *
         * @return {void}
         */
        togglePositionNumbers() {
            this.showNumbers = !this.showNumbers
        },

        /**
         * Sets site search.
         *
         * Actives site search for the given site.
         *
         * @param {Site} site
         *
         * @return {void}
         */
        setSiteSearch(site) {
            SiteSearch.site = SiteSearch.site === site
                ? null
                : site;
        },

        /**
         * Whether site search is active for the given site.
         *
         * @param {Site} site
         *
         * @return {boolean}
         */
        isSiteSearch(site) {
            return SiteSearch.site === site;
        },
    },

    computed: {
        /**
         * Gets total number of items.
         *
         * @return {number}
         */
        totalCount() {
            return this.sites.length;
        },

        /**
         * Gets items.
         *
         * @returns {Site[]}
         */
        items() {
            const start = Math.max(0, (this.page * this.limit) - this.limit),
                end = start + this.limit;

            return this.sites.slice(start, end).map((site, index) => {
                site.position = index + 1;

                return site;
            });
        }
    },

    mounted() {
        Shortcut.once('Alt', () => this.togglePositionNumbers());

        this.$on('change-page', (page) => {
            this.page = page;
        });
    },

    beforeDestroy() {
        Shortcut.remove('Alt');
    },
}
