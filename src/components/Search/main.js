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

import lunr from 'lunr';
import SiteSearch from '../../model/SiteSearch';
import Shortcut from '../../lib/Shortcut';
import config from '../../config';

export default {
  name: 'search',

  data() {
    return {
      query: null,
      placeholderTemplate: 'Search %s...',
      idx: null,
      results: [],
    };
  },

  computed: {
    provider() {
      return config.search.provider;
    },

    placeholder() {
      const name = SiteSearch.site
        ? SiteSearch.site.name
        : this.provider.name;

      return this.placeholderTemplate.replace('%s', name);
    },

    items() {
      return this.results;
    },
  },

  methods: {
    submit() {
      const terms = [
        this.query,
      ];

      if (SiteSearch.site) {
        terms.push(
          this.provider.siteTerm
            .replace('%s', SiteSearch.site.url.hostname),
        );
      }

      const url = this.provider.url
        .replace('%s', encodeURIComponent(terms.join(' ')));

      this.query = null;

      window.location.href = url;
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

      this.idx = lunr(function index() {
        this.field('name');
        this.field('url');

        config.sites.forEach((site) => {
          this.add(site);
        });
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
    SiteSearch.onChange((site) => {
      if (site) {
        this.focus();
      }
    });

    Shortcut.on('<SearchFocus>Cmd+F', () => this.focusToField());
  },

  beforeDestroy() {
    Shortcut.remove('<SearchFocus>');
  },
};
