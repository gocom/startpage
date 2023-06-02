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

import Storage from '../lib/Storage';

/**
 * Abstract collection.
 *
 * @abstract
 */
class AbstractCollection {
  /**
   * Model.
   *
   * @return {class<AbstractModel>}
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
   * Gets an item.
   *
   * @param {string} id
   *
   * @return {Promise<AbstractModel>}
   */
  async getItem(id) {
    const db = await this.getDb();
    const data = await db.getItem(id);

    return this.getInstance(data);
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
   * @return {Promise}
   */
  async iterate(fn) {
    const db = await this.getDb();

    return db.iterate((data) => {
      const model = this.getInstance(data);

      return fn(model);
    });
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
      entity.id = await this.getNextId();
    }

    if (!entity.position) {
      entity.position = await this.getNextPosition();
    }

    const db = await this.getDb();

    await db.setItem(entity.id, entity.data);

    return entity;
  }

  /**
   * Saves multiple items.
   *
   * @param {AbstractModel[]} models
   *
   * @return {Promise<AbstractModel[]>}
   */
  async saveMultiple(models) {
    const promises = models.map((model) => this.save(model));

    return Promise.all(promises);
  }

  /**
   * Imports the given data items.
   *
   * @param {Object[]} items
   *
   * @return {Promise<void>}
   */
  async import(items) {
    const models = items.map((data, index) => {
      const model = this.getInstance(data);

      if (!model.position) {
        model.position = items.length + index;
      }

      return model;
    });

    const startPosition = await this.getNextPosition();

    models
      .sort((a, b) => a.position - b.position)
      .forEach((model, index) => {
        model.position = startPosition + index;
        model.id = `${this.model.idPrefix}${model.position}`;
      });

    return this.saveMultiple(models);
  }

  /**
   * Exports all item data.
   *
   * @returns {Promise<Object[]>}
   */
  async export() {
    const items = [];

    await this.iterate((model) => {
      items.push(model.data);
    });

    return items;
  }

  /**
   * Deletes the given item.
   *
   * @param {AbstractModel} model
   *
   * @return {Promise<void>}
   */
  async delete(model) {
    const entity = model;

    if (!entity.id) {
      return Promise.reject(new Error('Model does not have identifier.'));
    }

    return this.deleteById(entity.id);
  }

  /**
   * Deletes an item by the given identifier.
   *
   * @param {String} id
   *
   * @return {Promise<void>}
   */
  async deleteById(id) {
    const db = await this.getDb();

    return db.removeItem(id);
  }

  /**
   * Deletes all but the given items.
   *
   * @param {AbstractModel[]} models
   *
   * @return {Promise<void>}
   */
  async deleteAllBut(models) {
    const ids = models.map((model) => model.id);

    await this.iterate((model) => {
      if (!ids.includes(model.id)) {
        this.delete(model);
      }
    });
  }

  /**
   * Gets unique identifier for the next item.
   *
   * @return {Promise<string>}
   *
   * @private
   */
  async getNextId() {
    const position = await this.getNextPosition();

    return `${this.model.idPrefix}${position}`;
  }

  /**
   * Gets next position.
   *
   * @return {Promise<Number>}
   *
   * @private
   */
  async getNextPosition() {
    const db = await this.getDb();
    const count = await db.length();

    return count + 1;
  }

  /**
   * Gets storage instance.
   *
   * @return {Promise<LocalForage>}
   *
   * @private
   */
  async getDb() {
    return Storage.get(this.table);
  }

  /**
   * Gets new instance.
   *
   * @param {Object} [data]
   *
   * @return {AbstractModel}
   *
   * @public
   */
  getInstance(data) {
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
