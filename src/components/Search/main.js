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

import SiteSearch from '../../model/SiteSearch';
import Shortcut from '../../lib/Shortcut';
import SearchIndex from '../../lib/SearchIndex';
import config from '../../config';
import SearchSuggestion from '../SearchSuggestion';
import UniqueId from '../../mixins/UniqueId';

export default {
  data() {
    return {
      query: '',
      placeholderTemplate: 'Search %s...',
      idx: null,
      results: [],
      isActive: false,
      selected: 0,
    };
  },

  components: {
    SearchSuggestion,
  },

  mixins: [
    UniqueId,
  ],

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
      return this.isSuggestionsOpen
        ? this.results.slice(0, 5)
        : [];
    },

    isSuggestionsOpen() {
      return this.isActive && this.results.length >= 1 && !SiteSearch.site;
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
            .replace('%s', SiteSearch.site.hostname),
        );
      }

      const url = this.provider.url
        .replace('%s', encodeURIComponent(terms.join(' ')));

      this.query = '';

      window.location.href = url;
    },

    prev() {
      this.selected -= 1;

      if (this.selected < -1) {
        this.selected = this.items.length - 1;
      }
    },

    next() {
      this.selected += 1;

      if (this.selected > (this.items.length - 1)) {
        this.selected = -1;
      }
    },

    open() {
      const item = this.items[this.selected];

      if (item) {
        const url = item.url.toString();

        this.reset();

        window.location.href = url;
      }
    },

    isActiveIndex(index) {
      return index === this.selected;
    },

    addShortcuts() {
      Shortcut
        .on('!<SearchClose>Escape', () => this.closeField())
        .on('!<SearchPrev>ArrowUp', () => this.prev())
        .on('!<SearchNext>ArrowDown', () => this.next())
        .on('!<SearchOpen>Enter', () => this.open());
    },

    removeShortcuts() {
      Shortcut
        .remove('<SearchClose>')
        .remove('<SearchPrev>')
        .remove('<SearchNext>')
        .remove('<SearchOpen>');
    },

    reset() {
      this.query = '';
      this.results = [];
    },

    focus() {
      this.selected = -1;
      this.isActive = true;
      this.addShortcuts();
    },

    blur() {
      this.selected = -1;

      if (this.query === '') {
        this.isActive = false;
        this.removeShortcuts();
      }
    },

    focusToField() {
      this.$refs.searchInput.focus();
    },

    closeField() {
      this.isActive = false;
      this.$refs.searchInput.blur();

      if (this.query !== '') {
        this.removeShortcuts();
      }
    },

    search() {
      const keys = [
        'name',
      ];

      SearchIndex.create('sites', { keys })
        .then((fuse) => {
          this.results = fuse.search(this.query).map((result) => result.item);
        });
    },
  },

  mounted() {
    SiteSearch.onChange((site) => {
      if (site) {
        this.focusToField();
      }
    });

    Shortcut.on('<SearchFocus>Cmd+F', () => this.focusToField());
  },

  beforeDestroy() {
    Shortcut.remove('<SearchFocus>');
  },
};
