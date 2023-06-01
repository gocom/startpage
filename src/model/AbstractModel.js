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

import defaultsDeep from 'lodash/defaultsDeep';

/**
 * Abstract data model.
 *
 * @abstract
 */
class AbstractModel {
  /**
   * Identifier prefix.
   *
   * @type {String}
   *
   * @static
   */
  static idPrefix = '_id_';

  /**
   * Identifier.
   *
   * @type {String}
   *
   * @public
   */
  id = '';

  /**
   * Position.
   *
   * @type {Number}
   *
   * @public
   */
  position = 0;

  /**
   * Is protected.
   *
   * @return {Object}
   *
   * @protected
   */
  originalData = {};

  /**
   * Internal data field names.
   *
   * @return {String[]}
   *
   * @protected
   */
  internal = [
    'id',
    'position',
  ];

  /**
   * Constructor.
   *
   * @param {Object} data
   */
  constructor(data = {}) {
    defaultsDeep(this, data, this.defaults);

    this.originalData = defaultsDeep({}, data, this.defaults);

    this.id = data.id || '';
    this.originalData.id = this.id;

    this.position = data.position || 0;
    this.originalData.position = this.position;
  }

  /**
   * Defaults.
   *
   * @return {Object}
   *
   * @abstract
   *
   * @protected
   */
  get defaults() {
    return {};
  }

  /**
   * Gets key-value data export.
   *
   * @return {Object}
   */
  get data() {
    const data = {};

    for (const name of Object.keys(this.defaults)) {
      data[name] = this[name];
    }

    for (const name of this.internal) {
      data[name] = this[name];
    }

    return data;
  }

  /**
   * Whether the model has been modified.
   *
   * @return {Boolean}
   */
  get isModified() {
    return this.modified.length > 0;
  }

  /**
   * Gets an array of modified fields names.
   *
   * @return {String[]}
   */
  get modified() {
    const modified = [];

    for (const name of Object.keys(this.defaults)) {
      if (this.originalData[name] !== this[name]) {
        modified.push(name);
      }
    }

    for (const name of this.internal) {
      if (this.originalData[name] !== this[name]) {
        modified.push(name);
      }
    }

    return modified;
  }
}

export default AbstractModel;
