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

import KeyboardShortcut from '../KeyboardShortcut';

export default {
  data() {
    return {
      isOpen: true,
    };
  },

  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    closeAfter: {
      type: Number,
      default: 5,
    },
    id: {
      type: String,
      default: '',
    },
  },

  components: {
    KeyboardShortcut,
  },

  methods: {
    close() {
      this.$emit('close');

      this.isOpen = false;
    },

    open() {
      this.$emit('open');

      this.isOpen = true;
    },
  },

  mounted() {
    if (this.closeAfter) {
      setTimeout(
        () => this.close(),
        this.closeAfter * 1000,
      );
    }
  },

  watch: {
    message() {
      this.open();
    },
    id() {
      this.open();
    },
  },
};
