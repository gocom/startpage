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

import Storage from '../lib/Storage';
import SearchIndex from '../lib/SearchIndex';

/**
 * Abstract collection.
 *
 * @abstract
 */
class AbstractCollection {
  /**
   * Identifier prefix.
   *
   * @type {String}
   */
  idPrefix = '_id_';

  /**
   * Prefix added to imported item's identifiers.
   *
   * @type {String}
   */
  importIdPrefix = '_im_';

  /**
   * Model.
   *
   * @return {AbstractModel}
   *
   * @abstract
   */
  get model() {
    throw new Error('AbstractCollection.model needs to be implemented.');
  }

  /**
   * Table name.
   *
   * @return {String}
   *
   * @abstract
   */
  get table() {
    throw new Error('AbstractCollection.table needs to be implemented.');
  }

  /**
   * Search index keys.
   *
   * @return {String[]}
   *
   * @abstract
   */
  get indexKeys() {
    throw new Error('AbstractCollection.indexKeys needs to be implemented.');
  }

  /**
   * Gets an item.
   *
   * @param {string} id
   *
   * @return {Promise<AbstractModel>}
   */
  async getItem(id) {
    const data = await this._db.getItem(id);

    return this._getInstance(data);
  }

  /**
   * Gets items.
   *
   * @return {Promise<AbstractModel[]>}
   */
  async getItems() {
    const items = [];

    await this.iterate((model) => {
      items.push(model);
    });

    return items;
  }

  /**
   * Iterates over items.
   *
   * @param {AbstractCollection~itemFn} fn
   *
   * @return {Promise<AbstractModel|null>}
   */
  async iterate(fn) {
    let current = null;

    await this._db.iterate((data) => {
      const model = this._getInstance(data);

      current = model;

      return fn(model);
    });

    return current;
  }

  /**
   * Saves an item.
   *
   * @param {AbstractModel} model
   *
   * @return {Promise<AbstractModel>}
   */
  async save(model) {
    const entity = model;

    if (!entity.id) {
      await this._getNextId().then((nextId) => {
        entity.id = nextId;
      });
    }

    await this._db.setItem(entity.id, entity);

    return entity;
  }

  /**
   * Saves multiple items.
   *
   * @param {AbstractModel[]} models
   *
   * @return {Promise<AbstractModel>}
   */
  async saveMultiple(models) {
    const promises = await models.map((model) => this.save(model));

    return Promise.all(promises);
  }

  /**
   * Imports the given items.
   *
   * This replaces the last import set. This is intended to be used with
   * items that are loaded from the config.
   *
   * @param {AbstractModel[]} models
   *
   * @return {Promise<void>}
   */
  async import(models) {
    const startPosition = -1 - models.length;
    const ids = [];

    const constant = models.map((model, index) => {
      const entity = model;

      if (!entity.id) {
        const positional = String(index + 1);

        entity.id = `${this.importIdPrefix}${positional}`;
      }

      ids.push(entity.id);

      if (!entity.position) {
        entity.position = startPosition + index;
      }

      return entity;
    });

    await this.iterate((model) => {
      if (String(model.id || '').startsWith(this.importIdPrefix) && !ids.includes(model.id)) {
        this.delete(model);
      }
    });

    return this.saveMultiple(constant);
  }

  /**
   * Deletes the given item.
   *
   * @param {AbstractModel} model
   *
   * @return {Promise<void>}
   */
  async delete(model) {
    if (!model.id) {
      return Promise.reject(new Error('Model does not have identifier.'));
    }

    return this.deleteById(model.id);
  }

  /**
   * Deletes an item by the given identifier.
   *
   * @param {String} id
   *
   * @return {Promise<void>}
   */
  async deleteById(id) {
    return this._db.removeItem(id);
  }

  /**
   * Searches the collection using index.
   *
   * @param {string} query
   *
   * @return {Promise<AbstractModel[]>}
   */
  async search(query) {
    const fuse = await this._getIndex();

    return fuse.search(query).map((result) => {
      const { item } = result;

      return this._getInstance(item);
    });
  }

  /**
   * Gets unique identifier for the next item.
   *
   * @return {Promise<string>}
   *
   * @private
   */
  async _getNextId() {
    let count = 1;

    await this._db.length().then((numberOfKeys) => {
      count = numberOfKeys + 1;
    });

    return `${this.idPrefix}${count}`;
  }

  /**
   * Gets storage instance.
   *
   * @return {LocalForage}
   *
   * @private
   */
  get _db() {
    return Storage.get(this.table);
  }

  /**
   * Gets index.
   *
   * @return {Promise<Fuse>}
   */
  async _getIndex() {
    return SearchIndex.create(this.table, {
      keys: this.indexKeys,
    });
  }

  /**
   * Gets new instance.
   *
   * @param {Object} [data]
   *
   * @return {AbstractModel}
   *
   * @private
   */
  _getInstance(data) {
    const Model = this.model;

    return new Model(data || {});
  }
}

export default AbstractCollection;

/**
 * Model handler callback.
 *
 * This callback receives items in question.
 *
 * @callback AbstractCollection~itemFn
 *
 * @param {AbstractModel} model
 */
