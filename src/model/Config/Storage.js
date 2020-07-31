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

import ConfigValue from './ConfigValue';
import ConfigValueCollection from './ConfigValueCollection';

/**
 * Config storage.
 */
class Storage {
  /**
   * Gets value.
   *
   * @param {String} id
   *
   * @return {Promise<*>}
   */
  static async get(id) {
    try {
      const model = await ConfigValueCollection.getItem(id);

      return model.value;
    } catch (e) {
      // Config value does not exist.
      return null;
    }
  }

  /**
   * Sets value.
   *
   * @param {String} id
   * @param {*} value
   *
   * @return {Promise<void>}
   */
  static async set(id, value) {
    const model = new ConfigValue({
      id,
      value,
    });

    await ConfigValueCollection.save(model);
  }
}

export default Storage;
