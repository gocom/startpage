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

import SiteCollection from '../../model/Site/SiteCollection';
import SiteModel from '../../model/Site/Site';
import UniqueId from '../../mixins/UniqueId';
import ColorPicker from '../Form/ColorPicker';
import IconPicker from '../Form/IconPicker';
import FilePicker from '../Form/FilePicker';
import Site from '../Site';
import Color from '../../lib/Color';

export default {
  data() {
    return {
      name: null,
      url: null,
      fa: null,
      backgroundColor: Color.random,
      textColor: '#FFFFFF',
      thumbnail: null,
      icon: null,
      position: null,
      isOpen: false,
    };
  },

  components: {
    ColorPicker,
    IconPicker,
    FilePicker,
    Site,
  },

  mixins: [
    UniqueId,
  ],

  computed: {
    site() {
      return new SiteModel({
        url: this.url,
        name: this.name,
        fa: this.fa,
        backgroundColor: this.backgroundColor,
        textColor: this.textColor,
        thumbnail: this.thumbnail,
        icon: this.icon,
        position: this.position,
      });
    },
  },

  methods: {
    toggle() {
      this.randomize();

      this.isOpen = !this.isOpen;
    },

    save() {
      SiteCollection.save(this.site)
        .then(() => {
          this.$parent.$emit('reload');
        });
    },

    randomize() {
      this.backgroundColor = Color.random;
    },
  },

  mounted() {
    this.$on('picked-color-background-color', (color) => {
      this.backgroundColor = color;
    });

    this.$on('picked-color-text-color', (color) => {
      this.textColor = color;
    });

    this.$on('selected-icon-fa', (icon) => {
      this.fa = icon;
    });

    this.$on('uploaded-file-thumbnail', (file) => {
      this.thumbnail = file;
    });

    this.$on('uploaded-file-icon', (file) => {
      this.icon = file;
    });
  },
};
