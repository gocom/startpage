/**
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
 */

/*
 * Copyright (C) 2021 Jukka Svahn
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

import Shortcut from '../../lib/Shortcut';

export default {
  data() {
    return {
      isVisible: false,
    };
  },

  props: {
    position: {
      type: String,
      default: '',
    },
  },

  methods: {
    /**
     * Opens the indicated item.
     *
     * @return {void}
     */
    open() {
      this.$emit('open');
    },

    /**
     * Show position indicator.
     *
     * @return {void}
     */
    show() {
      this.isVisible = true;
    },

    /**
     * Hide position indicator.
     *
     * @return {void}
     */
    hide() {
      this.isVisible = false;
    },
  },

  mounted() {
    Shortcut
      .on('Alt', () => this.show())
      .up('Alt', () => this.hide())
      .on(this.position, () => this.open())
      .on(`Alt+${this.position}`, () => this.open());
  },

  beforeDestroy() {
    Shortcut
      .remove('Alt')
      .remove(this.position)
      .remove(`Alt+${this.position}`);
  },
};
