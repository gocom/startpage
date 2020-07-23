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

import Fuse from 'fuse.js';
import Storage from './Storage';

/**
 * Search index.
 */
class SearchIndex {
  /**
   * Constructor.
   */
  constructor() {
    this.stores = {};
  }

  /**
   * Creates an index.
   *
   * @param {String} table
   * @param {Object} [options]
   *
   * @return {Promise<Fuse>}
   */
  async create(table, options) {
    const store = this.stores[table];

    if (store) {
      return this.get(table);
    }

    this.stores[table] = {
      options,
      fuse: null,
      status: false,
    };

    await this.index(table);

    return this.stores[table].fuse;
  }

  /**
   * Indexes a table.
   *
   * @param {String} table
   *
   * @return {Fuse}
   */
  async index(table) {
    const store = this.stores[table];

    if (!store) {
      return Promise.reject(new Error('No index setup.'));
    }

    const list = [];

    await Storage.get(table).iterate((item) => {
      list.push(item);
    });

    const fuse = new Fuse(list, store.options);

    this.stores[table].fuse = fuse;
    this.stores[table].status = true;

    return fuse;
  }

  /**
   * Gets an index by table name.
   *
   * @param {String} table
   *
   * @returns {Fuse}
   */
  async get(table) {
    const store = this.stores[table];

    if (!store) {
      return Promise.reject(new Error('No index setup.'));
    }

    if (!store.status) {
      await this.index(table);
    }

    return this.stores[table].fuse;
  }

  /**
   * Marks an index as stale.
   *
   * @param {string} table
   *
   * @return {this}
   */
  markAsStale(table) {
    this.stores[table].status = false;

    return this;
  }

  /**
   * Search all.
   *
   * @param {String} term
   * @param {Object} [options]
   *
   * @return {Object[]}
   */
  search(term, options) {
    const results = [];

    Object.entries(this.stores).forEach(([, store]) => {
      store.fuse.search(term, options).forEach((item) => results.push(item));
    });

    return results;
  }
}

export default new SearchIndex();
