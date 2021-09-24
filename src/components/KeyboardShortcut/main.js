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
    shortcut: {
      type: String,
      default: '',
    },
    force: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      normalized: null,
      metaKey: 'ctrl',
      metaKeys: [
        'ctrl',
        'win',
        'os',
        'cmd',
        'command',
        'meta',
        'super',
      ],
      excludedTargets: [
        'INPUT',
        'SELECT',
        'TEXTAREA',
        'input',
        'select',
        'textarea',
      ],
      keyCodePrefixRegex: /^Key|Digit/i,
    };
  },

  methods: {
    /**
     * Whether the even can be triggered.
     *
     * @param {String} emit
     * @param {KeyboardEvent} event
     *
     * @return {Boolean}
     *
     * @private
     */
    trigger(emit, event) {
      const isOnExcludedTarget = this.isOnExcludedTarget(event);
      const tokenizedEvent = this.getTokenizedEvent(event);

      if (!this.normalized) {
        this.normalized = this.getNormalizedShortcut(this.shortcut);
      }

      if ((this.force || !isOnExcludedTarget)
        && tokenizedEvent === this.normalized) {
        event.preventDefault();

        this.$emit(emit);
      }
    },

    /**
     * Down.
     *
     * @param {KeyboardEvent} event
     *
     * @return {void}
     */
    down(event) {
      this.trigger('down', event);
    },

    /**
     * Up.
     *
     * @param {KeyboardEvent} event
     *
     * @return {void}
     */
    up(event) {
      this.trigger('up', event);
    },

    /**
     * Whether the event is targeting or focus is on a excluded element.
     *
     * This allows writing into editable fields.
     *
     * @param {KeyboardEvent} event
     *
     * @returns {Boolean}
     *
     * @private
     */
    isOnExcludedTarget(event) {
      const { target } = event;
      const { tagName } = target;

      return target.isContentEditable || this.excludedTargets.includes(tagName);
    },

    /**
     * Gets normalized shortcut.
     *
     * @param {String} shortcut
     *
     * @return {String}
     *
     * @private
     */
    getNormalizedShortcut(shortcut) {
      const components = String(shortcut)
        .toLowerCase()
        .split('+')
        .map((key) => (this.metaKeys.includes(key) ? this.metaKey : key));

      return [...new Set(components)]
        .sort()
        .join('+');
    },

    /**
     * Gets tokenized event.
     *
     * @param {KeyboardEvent} event
     *
     * @return {String}
     *
     * @private
     */
    getTokenizedEvent(event) {
      const shortcut = [];

      if (event.altKey) {
        shortcut.push('alt');
      }

      if (event.ctrlKey || event.metaKey) {
        shortcut.push(this.metaKey);
      }

      if (event.shiftKey) {
        shortcut.push('shift');
      }

      if (this.keyCodePrefixRegex.test(event.code)) {
        shortcut.push(event.code.toLowerCase().replace(this.keyCodePrefixRegex, ''));
      } else if (event.key) {
        shortcut.push(event.key.toLowerCase());
      }

      return [...new Set(shortcut)].sort().join('+');
    },
  },

  mounted() {
    document.addEventListener('keydown', this.down);
    document.addEventListener('keyup', this.up);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.down);
    document.removeEventListener('keyup', this.up);
  },
};
