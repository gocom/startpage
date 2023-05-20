/**
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
 */

/**
 * This StorageArea LocalForage storage driver is based on Espen Henriksen's
 * WebExtension Storage Driver, with added support for key prefixes and
 * instance namespacing and optimizations. Manifest 2 support is dropped,
 * leading to some performance benefits.
 *
 * {@link https://github.com/esphen/localforage-webExtensionStorage-driver}
 */

/*
 * Copyright (C) 2023 Jukka Svahn
 * Copyright (c) 2016 Espen Henriksen
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

/**
 * Gets storage.
 *
 * @returns {browser.storage|chrome.storage|null}
 */
function getStorage() {
  if (typeof browser !== 'undefined' && browser.storage) {
    return browser.storage;
  }

  if (typeof chrome !== 'undefined' && chrome.storage) {
    return chrome.storage;
  }

  return null;
}

/**
 * Gets key prefix.
 *
 * @param {object} options
 * @param {object} defaultConfig
 *
 * @returns {string}
 */
function getKeyPrefix(options, defaultConfig) {
  const value = [];

  value.push(options.name);

  if (options.storeName !== defaultConfig.storeName) {
    value.push(options.storeName);
  }

  value.push('');

  return value.join('/');
}

/**
 * Creates driver instance.
 *
 * @param {string} name
 * @param {string} property
 */
function createDriver(name, property) {
  const storage = getStorage();

  /** @var {StorageArea} driver */
  const driver = storage && storage[property]
    ? storage[property]
    : null;

  return {
    dbInfo: {},
    _driver: name,
    _support: driver !== null,

    // eslint-disable-next-line no-underscore-dangle
    _initStorage(options) {
      const self = this;

      this.dbInfo = {
        // eslint-disable-next-line no-underscore-dangle
        keyPrefix: getKeyPrefix(options, self._defaultConfig || {}),
      };

      return Promise.resolve();
    },

    async clear(callback) {
      const items = await driver.get();
      const results = [];

      for (const [key] of Object.entries(items)) {
        if (key.indexOf(this.dbInfo.keyPrefix) === 0) {
          results.push(driver.remove(key));
        }
      }

      await Promise.all(results);

      if (callback) {
        callback();
      }
    },

    async iterate(iterator, callback) {
      const items = await driver.get();
      let index = 0;

      for (const [key, value] of Object.entries(items)) {
        if (key.indexOf(this.dbInfo.keyPrefix) === 0) {
          const result = iterator(value, key, index);

          if (result !== undefined) {
            if (callback) {
              callback(result);
            }

            return result;
          }
        }

        index += 1;
      }

      if (callback) {
        callback();
      }

      return undefined;
    },

    async getItem(key, callback) {
      try {
        const keyName = `${this.dbInfo.keyPrefix}${key}`;
        const items = await driver.get(keyName);

        const result = items[keyName] === undefined
          ? null
          : items[keyName];

        if (callback) {
          callback(null, result);
        }

        return result;
      } catch (e) {
        if (callback) {
          callback(e);
        }

        throw e;
      }
    },

    async key(keyIndex, callback) {
      const keys = await this.keys();
      const results = Object.keys(keys).slice(keyIndex, 1);

      const key = results.length === 0
        ? null
        : results[0];

      if (callback) {
        callback(key);
      }

      return key;
    },

    async keys(callback) {
      const items = await driver.get();
      const keys = Object.keys(items)
        .filter((key) => key.indexOf(this.dbInfo.keyPrefix) === 0);

      if (callback) {
        callback(keys);
      }

      return keys;
    },

    async length(callback) {
      const { length } = await this.keys();

      if (callback) {
        callback(length);
      }

      return length;
    },

    async removeItem(key, callback) {
      await driver.remove(`${this.dbInfo.keyPrefix}${key}`);

      if (callback) {
        callback();
      }
    },

    async setItem(key, value, callback) {
      const keyName = `${this.dbInfo.keyPrefix}${key}`;

      await driver.set({
        [keyName]: value,
      });

      if (callback) {
        callback();
      }
    },
  };
}

export const local = createDriver(
  'webExtensionLocalStorage',
  'local',
);

export const sync = createDriver(
  'webExtensionSyncStorage',
  'sync',
);
