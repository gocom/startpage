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

import SiteSearch from '../../model/Site/SiteSearch';
import KeyboardShortcut from '../KeyboardShortcut';
import config from '../../config';
import SearchSuggestion from '../SearchSuggestion';
import UniqueId from '../../mixins/UniqueId';
import SiteIndex from '../../model/Site/SiteIndex';

export default {
  data() {
    return {
      query: '',
      placeholderTemplate: 'Search %s...',
      idx: null,
      results: [],
      isActive: false,
      selected: -1,
    };
  },

  components: {
    SearchSuggestion,
    KeyboardShortcut,
  },

  mixins: [
    UniqueId,
  ],

  computed: {
    provider() {
      return config.search.provider;
    },

    placeholder() {
      const name = SiteSearch.value
        ? SiteSearch.value.name
        : this.provider.name;

      return this.placeholderTemplate.replace('%s', name);
    },

    items() {
      return this.isSuggestionsOpen
        ? this.results.slice(0, 5)
        : [];
    },

    isSuggestionsOpen() {
      return this.isActive && this.results.length >= 1 && !SiteSearch.value;
    },

    selectedSuggestion() {
      return this.items[this.selected] || null;
    },

    isSuggestionFocused() {
      return this.selectedSuggestion !== null;
    },
  },

  methods: {
    submit() {
      const terms = [
        this.query,
      ];

      if (SiteSearch.value) {
        terms.push(
          this.provider.siteTerm
            .replace('%s', SiteSearch.value.hostname),
        );
      }

      const url = this.provider.url
        .replace('%s', encodeURIComponent(terms.join(' ')));

      this.query = '';

      window.location.href = url;
    },

    prev() {
      if (this.selected <= -1) {
        this.selected = this.items.length - 1;
      } else {
        this.selected -= 1;
      }
    },

    next() {
      if (this.selected >= (this.items.length - 1)) {
        this.selected = -1;
      } else {
        this.selected += 1;
      }
    },

    open() {
      const item = this.selectedSuggestion;

      if (item) {
        const url = item.url.toString();

        this.reset();

        window.location.href = url;
      }
    },

    isActiveIndex(index) {
      return index === this.selected;
    },

    reset() {
      this.query = '';
      this.results = [];
    },

    focus() {
      this.selected = -1;
      this.isActive = true;
    },

    blur() {
      this.selected = -1;

      if (this.query === '') {
        this.isActive = false;
      }
    },

    focusToField() {
      this.$refs.searchInput.focus();
    },

    closeField() {
      this.isActive = false;
      this.$refs.searchInput.blur();
    },

    search() {
      SiteIndex.search(this.query)
        .then((results) => {
          this.results = results;
        });
    },
  },

  mounted() {
    SiteSearch.onChange((site) => {
      if (site) {
        this.focusToField();
      }
    });
  },
};
