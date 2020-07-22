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

import LocalForage from 'localforage';
import SyncDriver from 'localforage-webextensionstorage-driver/sync';

/**
 * Storage.
 */
class Storage {
  /**
   * Constructor.
   */
  constructor() {
    this.db = 'start_page';
    this.tables = {};
    this.drivers = [
      SyncDriver,
      LocalForage.LOCALSTORAGE,
      LocalForage.WEBSQL,
      LocalForage.INDEXEDDB,
    ];
  }

  /**
   * Creates a table.
   *
   * @param {String} table
   *
   * @returns {LocalForage}
   */
  create(table) {
    const store = LocalForage.createInstance({
      name: this.db,
      storeName: table,
      driver: this.drivers,
    });

    this.tables[table] = store;

    return store;
  }

  /**
   * Drops the given table by name.
   *
   * @param {String} table
   *
   * @returns {Promise<void>}
   */
  drop(table) {
    return this.tables[table].dropInstance();
  }

  /**
   * Gets a table by name.
   *
   * @param {String} table
   *
   * @returns {LocalForage}
   */
  get(table) {
    return this.tables[table] || this.create(table);
  }

  /**
   * Inserts an array of items to the given table.
   *
   * @param {String} table
   * @param {Object[]} items
   *
   * @returns {Promise}
   */
  async insert(table, items) {
    const store = this.get(table);

    const promises = await items.map((item, index) => store
      .setItem(String(item.id || index + 1), item));

    return Promise.all(promises);
  }
}

export default new Storage();
