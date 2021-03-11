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

import SiteCollection from '../../model/Site/SiteCollection';
import ErrorMessage from '../../model/Message/ErrorMessage';
import SuccessMessage from '../../model/Message/SuccessMessage';
import Confirm from '../Dialog/Confirm';
import DropdownMenu from '../Dropdown/Menu';
import DropdownItem from '../Dropdown/Item';
import SiteSearchToggle from '../SiteSearchToggle';
import PositionIndicator from '../PositionIndicator';

export default {
  props: {
    site: {
      type: Object,
      default: {},
    },
    isPositionVisible: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isConfirmingDelete: false,
    };
  },

  components: {
    Confirm,
    DropdownMenu,
    DropdownItem,
    SiteSearchToggle,
    PositionIndicator,
  },

  computed: {
    /**
     * Whether the site is editable.
     *
     * @return {boolean}
     */
    isEditable() {
      return this.site && this.site.id && !this.site.isProtected;
    },
  },

  methods: {
    /**
     * Opens a site.
     *
     * @return {void}
     */
    open() {
      window.location.href = this.site.absoluteUrl.toString();
    },

    /**
     * Confirm delete.
     *
     * @return {void}
     */
    confirmDelete() {
      this.isConfirmingDelete = true;
    },

    /**
     * Decline delete.
     *
     * @return {void}
     */
    declineDelete() {
      this.isConfirmingDelete = false;
    },

    /**
     * Deletes a site.
     *
     * @return {void}
     */
    remove() {
      SiteCollection.delete(this.site)
        .then(() => {
          SuccessMessage.value = 'Site removed successfully.';
          this.$emit('delete');
        })
        .catch(() => {
          ErrorMessage.value = 'Failed to remove the site.';
        });
    },

    /**
     * Triggers edit event for the site.
     *
     * @return {void}
     */
    edit() {
      this.$emit('edit', this.site);
    },
  },
};
