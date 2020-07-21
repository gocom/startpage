import SiteSearch from '../../model/SiteSearch';
import Shortcut from '../../lib/Shortcut';
import lunr from 'lunr';
import config from '../../config';

export default {
    name: 'search',

    data() {
        return {
            url: 'https://www.google.com/search?q=%s&hl=en&pws=0',
            query: null,
            provider: 'Google',
            placeholderTemplate: 'Search %s...',
            idx: null,
            results: []
        };
    },

    computed: {
        placeholder() {
            const name = SiteSearch.site
                ? SiteSearch.site.name
                : this.provider;

            return this.placeholderTemplate.replace('%s', name);
        },

        items() {
            return this.results;
        },
    },

    methods: {
        submit(url) {
            const components = [
                this.query,
            ];

            if (SiteSearch.site) {
                components.push(`site:${SiteSearch.site.url.hostname}`);
            }

            this.query = null;

            window.location.href = url.replace('%s', encodeURIComponent(components.join(' ')));
        },

        focus() {
            Shortcut.on('!<SearchClose>Escape', () => this.closeField());
        },

        blur() {
            Shortcut.remove('<SearchClose>');
        },

        focusToField() {
            document.querySelector('.search input[name=query]').focus();
        },

        closeField() {
            document.querySelector('.search input[name=query]').blur();
        },

        buildIndex() {
            if (this.idx !== null) {
                return;
            }

            this.idx = lunr(function () {
                this.field('name');
                this.field('url');

                for (const site of config.sites) {
                    this.add(site);
                }
            });
        },

        search() {
            if (this.query) {
                this.buildIndex();

                this.results = this.idx.search(this.query);

                return;
            }

            this.results = [];
        },
    },

    mounted() {
        SiteSearch.onChange(site => {
            if (site) {
                this.focus();
            }
        });

        Shortcut.on('<SearchFocus>Cmd+F', () => this.focusToField());
    },

    beforeDestroy() {
        Shortcut.remove('<SearchFocus>');
    }
};
