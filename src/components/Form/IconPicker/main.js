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

import fa from './db/fa';
import socicon from './db/socicon';

export default {
  props: {
    name: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      selected: null,
    };
  },

  beforeCreate() {
    this.icons = []
      .concat(fa)
      .concat(socicon);
  },

  methods: {
    select(icon) {
      this.selected = icon
        ? icon.icon
        : null;

      this.$parent.$emit(`selected-icon-${this.name}`, this.selected);
    },

    isSelected(icon) {
      return this.selected === icon.icon;
    },

    remove() {
      this.select(null);
    },
  },

  mounted() {
    this.selected = this.icon;
  },
};
