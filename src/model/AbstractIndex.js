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

/**
 * Search index.
 *
 * @abstract
 */
class AbstractIndex {
  /**
   * Index storage instance.
   *
   * @type {Fuse}
   *
   * @private
   */
  store = null;

  /**
   * Whether the index is stale and needs re-indexes.
   *
   * @type {Boolean}
   *
   * @public
   */
  isStale = false;

  /**
   * Search index keys.
   *
   * @return {String[]}
   *
   * @abstract
   */
  get keys() {
    throw new Error('AbstractSearchIndex.keys needs to be implemented.');
  }

  /**
   * Collection.
   *
   * @return {AbstractCollection}
   *
   * @abstract
   */
  get collection() {
    throw new Error('AbstractSearchIndex.collection needs to be implemented.');
  }

  /**
   * Searches the index.
   *
   * @param {String} query
   *
   * @returns {Promise<AbstractModel[]>}
   *
   * @public
   */
  async search(query) {
    const fuse = await this.get();

    return fuse.search(query)
      .map((result) => this.collection.getInstance(result.item));
  }

  /**
   * Creates an index based on the collection.
   *
   * @return {Promise<Fuse>}
   *
   * @private
   */
  async create() {
    const list = [];

    await this.collection.iterate((item) => {
      list.push(item);
    });

    this.store = new Fuse(list, {
      keys: this.keys,
    });

    this.isStale = false;

    return this.store;
  }

  /**
   * Gets the index.
   *
   * @returns {Promise<Fuse>}
   *
   * @private
   */
  async get() {
    if (!this.store || this.isStale) {
      await this.create();
    }

    return this.store;
  }
}

export default AbstractIndex;
