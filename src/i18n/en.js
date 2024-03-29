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

export default {
  search: {
    label: 'Search',
    placeholder: 'Search {provider}...',
    button: 'Search',
    reset: 'Reset',
  },
  site: {
    error: {
      save: 'Saving failed due to a storage error. Image might be too big for the storage. Error: {error}.',
    },
    open: {
      confirm: {
        save: 'Save and open',
        discard: 'Discard and open',
        cancel: 'Cancel',
        title: 'Discard currently open site?',
        message: 'Do you want to discard the currently open site, or save it before opening the new one?',
      },
    },
    edit: {
      cancel: {
        confirm: {
          save: 'Save',
          discard: 'Discard',
          cancel: 'Cancel',
          title: 'Discard currently open site?',
          message: 'Do you want to discard the currently open site, or save it before closing it?',
        },
      },
    },
  },
  confirm: {
    yes: 'Yes',
    no: 'No',
  },
  config: {
    error: {
      import: 'Importing configuration failed. Please check that the given file is valid. Error: {error}',
    },
  },
};
