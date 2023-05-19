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

export default {
  props: {
    id: {
      type: String,
      default: 'file',
    },
    current: {
      type: String,
      default: '',
    },
    accept: {
      type: String,
      default: '',
    },
    imageWidth: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      file: null,
    };
  },

  computed: {
    hasPreview() {
      return Boolean(this.file);
    },

    preview() {
      return this.file;
    },
  },

  methods: {
    upload() {
      const { files } = this.$refs.upload;
      const file = files[0] || null;

      if (file) {
        const fr = new FileReader();

        fr.onload = () => {
          this.select(fr.result);
        };

        fr.readAsDataURL(file);
      }
    },

    scale(file) {
      return new Promise((resolve) => {
        if (!file || this.imageWidth === 0) {
          resolve(file);
          return;
        }

        const image = new Image();

        image.onload = () => {
          const width = image.width <= this.imageWidth
            ? image.width
            : this.imageWidth;

          const height = Math.floor((image.height / image.width) * width);

          const canvas = document.createElement('canvas');

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');

          ctx.drawImage(
            image,
            0,
            0,
            width,
            height,
          );

          const data = canvas.toDataURL(
            'image/jpg',
            0.7,
          );

          resolve(data);
        };

        image.src = file;
      });
    },

    select(file) {
      if (!file) {
        this.$refs.upload.value = null;
        this.file = null;
        this.$emit('pick', this.file);
        return;
      }

      this.scale(file)
        .then((result) => {
          this.file = result;
          this.$emit('pick', this.file);
        });
    },

    remove() {
      this.select(null);
    },
  },

  mounted() {
    this.file = this.current;
  },

  watch: {
    current(newValue) {
      this.file = newValue;
    },
  },
};
