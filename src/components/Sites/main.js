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

import Draggable from 'vuedraggable';
import config from '../../config';
import Pagination from '../Pagination';
import SiteEditForm from '../SiteEditForm';
import Site from '../Site';
import SiteCollection from '../../model/Site/SiteCollection';
import ConfigStorage from '../../model/Config/Storage';

export default {
  data() {
    return {
      edit: null,
      isDraggable: true,
      sites: [],
      limit: 12,
      page: 1,
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
        this.isDraggable = false;

        const startPosition = items
          .map((site) => site.position)
          .sort()
          .reverse()[0] || 0;

        const positions = {};

        items.forEach((site, index) => {
          positions[site.id] = startPosition + index;
        });

        const update = [];

        this.sites.forEach((site) => {
          const entity = site;

          if (positions[entity.id]) {
            entity.position = positions[entity.id];
            update.push(entity);
          }
        });

        SiteCollection.saveMultiple(update)
          .then(() => {
            this.isDraggable = true;
          });
      },
    },

    nextPage: {
      /**
       * @returns {Site[]}
       */
      get() {
        return [];
      },

      set() {
        // @todo
      },
    },

    prevPage: {
      /**
       * @returns {Site[]}
       */
      get() {
        return [];
      },

      set() {
        // @todo
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

    this.$on('change-page', (page) => {
      this.page = page;
    });

    this.$on('reload', () => {
      this.reload();
    });
  },
};
