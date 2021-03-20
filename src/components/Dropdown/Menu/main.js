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

import KeyboardShortcut from '../../KeyboardShortcut';

export default {
  data() {
    return {
      isOpen: false,
    };
  },

  props: {
    label: {
      type: String,
      default: '',
    },
  },

  components: {
    KeyboardShortcut,
  },

  methods: {
    /**
     * Toggle menu.
     *
     * @return {void}
     */
    toggle() {
      this.isOpen = !this.isOpen;
    },

    /**
     * Closes menu.
     *
     * @return {void}
     */
    close() {
      this.isOpen = false;
    },

    /**
     * Opens menu.
     *
     * @return {void}
     */
    open() {
      this.isOpen = true;
    },

    /**
     * Selects previous item.
     *
     * @return {void}
     */
    prevItem() {
      const menuItems = this.getMenuItems();
      const activeIndex = this.getActiveItemIndex(menuItems);
      const maxIndex = this.getMaxItemIndex(menuItems);

      if (activeIndex <= 0) {
        this.activateItem(menuItems, maxIndex);
      } else {
        this.activateItem(menuItems, activeIndex - 1);
      }
    },

    /**
     * Selects next item.
     *
     * @return {void}
     */
    nextItem() {
      const menuItems = this.getMenuItems();
      const activeIndex = this.getActiveItemIndex(menuItems);
      const maxIndex = this.getMaxItemIndex(menuItems);

      if (maxIndex <= activeIndex) {
        this.activateItem(menuItems, 0);
      } else {
        this.activateItem(menuItems, activeIndex + 1);
      }
    },

    /**
     * Gets menu item.
     *
     * @return {NodeList|*[]}
     */
    getMenuItems() {
      const { menu } = this.$refs;

      if (menu) {
        return menu.querySelectorAll('[role=menuitem]');
      }

      return [];
    },

    /**
     * Actives the given item index in the menu item node list.
     *
     * @param {NodeList} menuItems
     * @param {Number} itemIndex
     *
     * @return {void}
     */
    activateItem(menuItems, itemIndex) {
      const activeItem = this.getActiveItem(menuItems);

      if (activeItem) {
        activeItem.ariaCurrent = null;
        activeItem.blur();
      }

      for (const [index, item] of menuItems.entries()) {
        if (itemIndex === index) {
          item.ariaCurrent = 'true';

          item.focus();

          return;
        }
      }
    },

    /**
     * Gets active item index in the given menu item node list.
     *
     * @param {NodeList} menuItems
     *
     * @return {Number}
     */
    getActiveItemIndex(menuItems) {
      for (const [index, item] of menuItems.entries()) {
        const { ariaCurrent } = item;

        if (ariaCurrent === 'true' || item.activeElement) {
          return index;
        }
      }

      return -1;
    },

    /**
     * Gets active item in the given menu item node list.
     *
     * @param {NodeList} menuItems
     *
     * @return {null|any}
     */
    getActiveItem(menuItems) {
      for (const item of menuItems) {
        const { ariaCurrent } = item;

        if (ariaCurrent === 'true' || item.activeElement) {
          return item;
        }
      }

      return null;
    },

    /**
     * Gets maximum index value for the given menu item node list.
     *
     * @param {NodeList} menuItems
     *
     * @return {Number}
     */
    getMaxItemIndex(menuItems) {
      return Math.max(0, menuItems.length - 1);
    },
  },
};
