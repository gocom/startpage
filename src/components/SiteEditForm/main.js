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
import Confirm from '../Dialog/Confirm';

export default {
  data() {
    return {
      site: null,
      isOpen: false,
      hasError: false,
      error: null,
      isConfirmingCancel: false,
      isConfirmingOpen: false,
      openingSite: null,
    };
  },

  props: {
    edit: {
      type: Object,
      default: null,
    },
  },

  components: {
    Confirm,
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

    isModified() {
      return Boolean(this.site && this.site.isModified);
    },

    confirmCancel() {
      if (this.isModified()) {
        this.isConfirmingCancel = true;
      } else {
        this.cancel();
      }
    },

    declineCancel() {
      this.isConfirmingCancel = false;
    },

    cancel() {
      this.$emit('cancel');
      this.site = null;
      this.isOpen = false;
      this.isConfirmingCancel = false;
    },

    confirmOpen() {
      if (this.isModified()) {
        this.isConfirmingOpen = true;
      } else {
        this.open();
      }
    },

    declineOpen() {
      this.$emit('decline');
      this.openingSite = null;
      this.isConfirmingOpen = false;
    },

    open() {
      if (this.isConfirmingOpen) {
        this.$emit('cancel');
      }

      this.site = this.openingSite || new SiteModel();

      this.openingSite = null;
      this.isConfirmingOpen = false;

      if (!this.site.id) {
        this.randomize();
      }

      this.isOpen = true;
    },

    save() {
      this.isConfirmingCancel = false;

      SiteCollection.save(this.site)
        .then(() => {
          this.$emit('save');

          if (this.openingSite) {
            this.open();
          } else {
            this.site = null;
            this.isOpen = false;
          }
        })
        .catch((reason) => {
          this.error = reason.message;
          this.hasError = true;
        });
    },

    randomize() {
      this.site.backgroundColor = Color.random;
      this.site.textColor = '#ffffff';

      this.site.originalData.backgroundColor = this.site.backgroundColor;
      this.site.originalData.textColor = this.site.textColor;
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
    edit: {
      handler(site) {
        if (site) {
          this.openingSite = site;

          if (this.isOpen) {
            this.confirmOpen();
          } else {
            this.open();
          }
        }
      },
      immediate: true,
    },
  },
};
