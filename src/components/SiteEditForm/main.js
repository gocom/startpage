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

import SiteCollection from '../../model/Site/SiteCollection';
import SiteModel from '../../model/Site/Site';
import UniqueId from '../../mixins/UniqueId';
import ColorPicker from '../Form/ColorPicker';
import IconPicker from '../Form/IconPicker';
import FilePicker from '../Form/FilePicker';
import Message from '../Message';
import Modal from '../Modal';
import Site from '../Site';
import Color from '../../lib/Color';
import KeyboardShortcut from '../KeyboardShortcut';

export default {
  data() {
    return {
      site: this.edit || new SiteModel(),
      isOpen: false,
      hasError: false,
    };
  },

  props: {
    edit: {
      type: Object,
      default: null,
    },
  },

  components: {
    ColorPicker,
    IconPicker,
    FilePicker,
    Site,
    KeyboardShortcut,
    Message,
    Modal,
  },

  mixins: [
    UniqueId,
  ],

  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data());
    },

    close() {
      this.site = new SiteModel();

      this.isOpen = false;

      this.$emit('cancel');
    },

    open() {
      this.randomize();

      this.isOpen = true;
    },

    save() {
      SiteCollection.save(this.site)
        .then(() => {
          this.$emit('save');
          this.close();
        })
        .catch(() => {
          this.hasError = true;
        });
    },

    randomize() {
      if (!this.site.id) {
        this.site.backgroundColor = Color.random;
        this.site.textColor = '#ffffff';
      }
    },

    setTextColor(color) {
      this.site.textColor = color;
    },

    setBackgroundColor(color) {
      this.site.backgroundColor = color;
    },

    setFa(icon) {
      this.site.fa = icon;
    },

    setThumbnail(file) {
      this.site.thumbnail = file;
    },

    setIcon(file) {
      this.site.icon = file;
    },
  },

  watch: {
    edit(site) {
      if (site) {
        this.site = site;
        this.isOpen = true;
      }
    },
  },
};
