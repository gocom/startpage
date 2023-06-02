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

import UniqueId from '../../../mixins/UniqueId';
import FilePicker from '../../Form/FilePicker';
import SiteCollection from '../../../model/Site/SiteCollection';
import Message from '../../Message';

export default {
  data() {
    return {
      error: null,
    };
  },

  components: {
    Message,
    FilePicker,
  },

  mixins: [
    UniqueId,
  ],

  computed: {
    hasError() {
      return Boolean(this.error);
    },
  },

  methods: {
    /**
     * Reloads view.
     *
     * @return {void}
     */
    reload() {
      window.location.reload();
    },

    /**
     * Imports config data.
     *
     * @param {string} file
     *
     * @returns {Promise<void>}
     */
    async importConfig(file) {
      try {
        const config = JSON.parse(file);

        const sites = config[SiteCollection.table];

        if (Array.isArray(sites)) {
          await SiteCollection.import(sites);
        }

        this.reload();
      } catch (e) {
        this.error = e.message;
      }
    },
  },
};
