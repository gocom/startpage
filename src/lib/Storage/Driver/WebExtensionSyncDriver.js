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
 * Whether storage API outputs promises.
 *
 * @returns {boolean}
 */
function isPromiseAvailable() {
  const storage = getStorage();

  try {
    if (storage
      && storage.local.get
      && storage.local.get()
      && typeof storage.local.get().then === 'function') {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
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
  const isSupported = !!(storage && storage[property]);

  /** @var {StorageArea} driver */
  const driver = isSupported
    ? storage[property]
    : {
      clear() {},
      get() {},
      remove() {},
      set() {},
    };

  /**
   * Executes StorageArea function.
   *
   * @param fn
   * @param arg
   *
   * @returns {*|Promise<unknown>}
   */
  function execute(fn, ...arg) {
    if (isPromiseAvailable()) {
      return fn.apply(driver, arg);
    }

    return new Promise((resolve) => {
      fn.apply(driver, ...arg, (...data) => {
        resolve(...data);
      });
    });
  }

  return {
    dbInfo: {},
    _driver: name,
    _support: isSupported,

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
      const self = this;
      const items = await execute(driver.get, null);
      const keys = Object.keys(items);

      keys.forEach((key) => {
        if (key.indexOf(self.dbInfo.keyPrefix) === 0) {
          driver.remove(key);
        }
      });

      if (callback) {
        callback();
      }
    },

    async iterate(iterator, callback) {
      const self = this;
      const items = await execute(driver.get, null);
      const keys = Object.keys(items);

      keys.forEach((key, i) => {
        if (key.indexOf(self.dbInfo.keyPrefix) === 0) {
          iterator(items[key], key, i);
        }
      });

      if (callback) {
        callback();
      }
    },

    async getItem(key, callback) {
      try {
        const keyName = `${this.dbInfo.keyPrefix}${key}`;
        let result = await execute(driver.get, keyName);

        result = result[keyName];

        result = result === undefined
          ? null
          : result;

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

    async key(n, callback) {
      const self = this;
      const results = await execute(driver.get, null);
      const result = Object.keys(results)
        .filter((key) => key.indexOf(self.dbInfo.keyPrefix));

      if (callback) {
        callback(result);
      }

      return result;
    },

    async keys(callback) {
      const self = this;
      const results = await execute(driver.get, null);
      const keys = Object.keys(results)
        .filter((key) => key.indexOf(self.dbInfo.keyPrefix));

      if (callback) {
        callback(keys);
      }

      return keys;
    },

    async length(callback) {
      const self = this;
      const results = await execute(driver.get, null);
      const { length } = Object.keys(results)
        .filter((key) => key.indexOf(self.dbInfo.keyPrefix));

      if (callback) {
        callback(length);
      }

      return length;
    },

    async removeItem(key, callback) {
      await execute(driver.remove, `${this.dbInfo.keyPrefix}${key}`);

      if (callback) {
        callback();
      }
    },

    async setItem(key, value, callback) {
      const keyName = `${this.dbInfo.keyPrefix}${key}`;

      await execute(driver.set, {
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
