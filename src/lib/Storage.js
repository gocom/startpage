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
   * Database name.
   *
   * @type {string}
   */
  db = 'start_page';

  /**
   * Table instances.
   *
   * Keys match the name of the table.
   *
   * @type {Object}
   */
  tables = {};

  /**
   * An array of drivers.
   *
   * @type {Array}
   */
  drivers = [];

  /**
   * Constructor.
   */
  constructor() {
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
   *
   * @private
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
   * Gets a table by name.
   *
   * @param {String} table
   *
   * @returns {LocalForage}
   *
   * @public
   */
  get(table) {
    return this.tables[table] || this.create(table);
  }
}

export default new Storage();
