import Vue from 'vue';
import Site from "./Site";

class SiteSearch
{
    /**
     * Constructor.
     */
    constructor() {
        this.dataModel = new Vue({
            data() {
                return {
                    site: null,
                }
            }
        });
    }

    /**
     * Whether site search is active.
     *
     * @returns {boolean}
     */
    get isActive() {
        return this.dataModel.site !== null;
    }

    /**
     * Sets site.
     *
     * @param {Site} site
     *
     * @return {void}
     */
    set site(site) {
        this.dataModel.site = site;
        this.dataModel.$emit('change', site);
    }

    /**
     * Gets site.
     *
     * @return {Site}
     */
    get site() {
        return this.dataModel.site;
    }

    /**
     * Listens for changes in the specified value.
     *
     * @param {function} fn
     *
     * @return {void}
     */
    onChange(fn) {
        this.dataModel.$on('change', fn);
    }
}

export default new SiteSearch();
