/**
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
 */

/*
 * Copyright (C) 2023 Jukka Svahn
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

import Draggable from 'vuedraggable';
import config from '../../config';
import Pagination from '../Pagination';
import SiteEditForm from '../SiteEditForm';
import ConfigEditForm from '../Config/Edit/Form';
import Site from '../Site';
import SiteCollection from '../../model/Site/SiteCollection';
import ConfigStorage from '../../model/Config/Storage';

export default {
  data() {
    return {
      edit: null,
      isDraggable: true,
      isUpdating: false,
      sites: [],
      page: 1,
      columns: 4,
      rows: 3,
      positions: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'Z',
        'X',
        'C',
      ],
    };
  },

  components: {
    Pagination,
    Site,
    SiteEditForm,
    Draggable,
    ConfigEditForm,
  },

  methods: {
    /**
     * Gets position identifier for the given index.
     *
     * @param {Number} index
     *
     * @returns {string|null}
     */
    getPosition(index) {
      return this.positions[index] || null;
    },

    /**
     * Opens the given site.
     *
     * @param {Site} site
     *
     * @return {void}
     */
    open(site) {
      window.location.href = site.absoluteUrl.toString();
    },

    /**
     * Opens site in editor.
     *
     * @param {Site} site
     *
     * @return {void}
     */
    setEdit(site) {
      this.edit = site;
    },

    /**
     * Reloads items from collection.
     *
     * @return {void}
     */
    reload() {
      const sites = [];

      SiteCollection.iterate((model) => {
        sites.push(model);
      }).then(() => {
        this.sites = sites;
      });
    },

    /**
     * Saved editor.
     *
     * @return {void}
     */
    save() {
      this.edit = null;

      this.reload();
    },

    /**
     * Cancel editing.
     *
     * @return {void}
     */
    cancel() {
      this.edit = null;
    },

    /**
     * Whether drag and drop sorting is currently allowed.
     *
     * @return {Boolean}
     */
    isDraggingAllowed() {
      return this.isDraggable;
    },

    /**
     * Sets current page.
     *
     * @param {Number} page
     *
     * @return {void}
     */
    setPage(page) {
      this.page = page;
    },

    /**
     * Go to next page.
     *
     * @return {void}
     */
    nextPage() {
      this.$refs.pagination.nextPage();
    },

    /**
     * Go to previous page.
     *
     * @return {void}
     */
    previousPage() {
      this.$refs.pagination.previousPage();
    },

    /**
     * Updates positions.
     */
    savePositions(positions) {
      const sites = this.sites
        .sort((a, b) => a.position - b.position);

      let position = 0;

      sites.forEach((site) => {
        const entity = site;
        position += 1;

        if (positions[entity.id]) {
          entity.position = positions[entity.id];
        } else {
          entity.position = position;
        }
      });

      SiteCollection.saveMultiple(sites)
        .then(() => {
          this.isDraggable = true;
        });
    },
  },

  computed: {
    /**
     * Gets limit.
     *
     * @return {number}
     */
    limit() {
      return this.columns * this.rows;
    },

    /**
     * Gets total number of items.
     *
     * @return {number}
     */
    totalCount() {
      return this.sites.length;
    },

    previousPageItems: {
      /**
       * Gets items.
       *
       * Returns an empty array so that the dropzone does not display any items.
       *
       * @returns {Site[]}
       */
      get() {
        return [];
      },

      /**
       * Moves items to the previous page.
       *
       * @param {Site[]} items
       */
      set(items) {
        this.isDraggable = false;
        this.isUpdating = true;

        const startPosition = Math.max(0, (this.page * this.limit) - this.limit) + 1;
        const previousPageStart = Math.max(0, startPosition - this.limit - 1);

        if (items.length === 0 || (previousPageStart === 0 && startPosition === 1)) {
          return;
        }

        const previousPageEnd = previousPageStart + this.limit;

        const allSortedItems = this.sites
          .sort((a, b) => a.position - b.position);

        const currentPageItems = allSortedItems
          .slice(startPosition - 1, startPosition - this.limit - 1);

        const previousPageItems = allSortedItems
          .slice(previousPageStart, previousPageEnd);

        const positions = {};

        items.reverse().forEach((site, index) => {
          positions[site.id] = startPosition - 1 - index;
        });

        previousPageItems.slice(items.length * -1).forEach((site, index) => {
          positions[site.id] = startPosition + index;
        });

        let counter = items.length - 1;

        currentPageItems.forEach((site) => {
          if (positions[site.id] === undefined) {
            positions[site.id] = startPosition + counter;
            counter += 1;
          }
        });

        this.savePositions(positions);
      },
    },

    nextPageItems: {
      /**
       * Gets items.
       *
       * Returns an empty array so that the dropzone does not display any items.
       *
       * @returns {Site[]}
       */
      get() {
        return [];
      },

      /**
       * Moves items to the next page.
       *
       * @param {Site[]} items
       */
      set(items) {
        this.isDraggable = false;
        this.isUpdating = true;

        const startPosition = Math.max(0, (this.page * this.limit) - this.limit) + 1;
        const endPosition = startPosition + this.limit;
        const nextPageStart = startPosition + this.limit - 1;

        if (items.length === 0 || nextPageStart >= this.sites.length) {
          return;
        }

        const nextPageEnd = nextPageStart + this.limit;

        const allSortedItems = this.sites
          .sort((a, b) => a.position - b.position);

        const currentPageItems = allSortedItems
          .slice(startPosition - 1, endPosition - 1);

        const nextPageItems = allSortedItems
          .slice(nextPageStart, nextPageEnd);

        const positions = {};

        items.forEach((site, index) => {
          positions[site.id] = endPosition + 1 + index;
        });

        nextPageItems.slice(0, items.length).forEach((site, index) => {
          positions[site.id] = endPosition - index;
        });

        let counter = 0;

        currentPageItems.forEach((site) => {
          if (positions[site.id] === undefined) {
            positions[site.id] = startPosition + counter;
            counter += 1;
          }
        });

        this.savePositions(positions);
      },
    },

    items: {
      /**
       * Gets items.
       *
       * @returns {Site[]}
       */
      get() {
        const start = Math.max(0, (this.page * this.limit) - this.limit);
        const end = start + this.limit;

        return this.sites
          .sort((a, b) => a.position - b.position)
          .slice(start, end);
      },

      /**
       * Updates item order.
       *
       * This uses site instances so any other mutations in the instances will
       * be saved too.
       *
       * @param {Site[]} items
       */
      set(items) {
        if (this.isUpdating) {
          this.isDraggable = true;
          this.isUpdating = false;

          return;
        }

        if (items.length === 0) {
          return;
        }

        this.isDraggable = false;

        const startPosition = Math.max(0, (this.page * this.limit) - this.limit) + 1;

        const positions = {};

        items.forEach((site, index) => {
          positions[site.id] = startPosition + index;
        });

        this.savePositions(positions);
      },
    },
  },

  mounted() {
    this.reload();

    ConfigStorage.get('sites.imported')
      .then((value) => {
        if (!value) {
          SiteCollection.import(config.sites)
            .then(() => {
              ConfigStorage.set('sites.imported', true)
                .then(() => {
                  this.reload();
                });
            });
        }
      });

    ConfigStorage.get('tiles.columns')
      .then((value) => {
        if (value) {
          this.columns = value;
        }
      });

    ConfigStorage.get('tiles.rows')
      .then((value) => {
        if (value) {
          this.rows = value;
        }
      });
  },
};
