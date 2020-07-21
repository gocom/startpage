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
