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

import UniqueId from '../../../../mixins/UniqueId';
import ColorPicker from '../../../Form/ColorPicker';
import FilePicker from '../../../Form/FilePicker';
import KeyboardShortcut from '../../../KeyboardShortcut';
import Modal from '../../../Modal';
import ConfigStorage from '../../../../model/Config/Storage';
import Export from '../../Export';
import Import from '../../Import';

export default {
  data() {
    return {
      isOpen: false,
      textColor: null,
      backgroundColor: null,
      backgroundImage: null,
    };
  },

  components: {
    ColorPicker,
    FilePicker,
    KeyboardShortcut,
    Modal,
    Export,
    Import,
  },

  mixins: [
    UniqueId,
  ],

  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data());
    },

    close() {
      this.isOpen = false;

      this.$emit('cancel');
    },

    open() {
      this.isOpen = true;
    },

    toggle() {
      this.isOpen = !this.isOpen;
    },

    reload() {
      window.location.reload();
    },

    save() {
      ConfigStorage.set('background.color', this.backgroundColor)
        .then((value) => {
          this.backgroundColor = value;
        });

      ConfigStorage.set('background.image', this.backgroundImage)
        .then((value) => {
          this.backgroundImage = value;
        });

      this.isOpen = false;

      window.location.reload();
    },

    setBackgroundColor(color) {
      this.backgroundColor = color;
    },

    setBackgroundImage(file) {
      this.backgroundImage = file;
    },
  },

  mounted() {
    ConfigStorage.get('background.color')
      .then((value) => {
        this.backgroundColor = value;
      });

    ConfigStorage.get('background.image')
      .then((value) => {
        this.backgroundImage = value;
      });
  },
};
