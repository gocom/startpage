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

/**
 * Keyboard shortcuts.
 */
class Shortcut
{
    /**
     * Constructor.
     */
    constructor() {
        this.shortcuts = {
            on: [],
            once: [],
        };

        this.listeners = {
            keyDown: null,
            keyUp: null,
        };

        this.metaKey = 'ctrl';

        this.metaKeys = [
            'ctrl',
            'win',
            'os',
            'cmd',
            'command',
            'meta',
            'super',
        ];

        this.excludedTargets = [
            'INPUT',
            'SELECT',
            'TEXTAREA',
            'input',
            'select',
            'textarea',
        ];

        this.shortcutRegex = /(!?)(?:<([^>]+)>)?\s?(.*)/i;

        this.listen();
    }

    /**
     * Adds a shortcut that triggers repeatedly as the key is hold.
     *
     * @param {String} shortcut
     * @param {Function} fn
     *
     * @return {this}
     *
     * @api
     */
    on(shortcut, fn) {
        this.add('on', shortcut, fn);

        return this;
    }

    /**
     * Triggers once key is pressed and once its
     *
     * @param {String}   shortcut
     * @param {Function} fn
     *
     * @return {this}
     *
     * @api
     */
    once(shortcut, fn) {
        this.add('once', shortcut, fn);

        return this;
    }

    /**
     * Adds a shortcut.
     *
     * @param {String}   type
     * @param {String}   shortcut
     * @param {Function} fn
     *
     * @return {this}
     *
     * @private
     */
    add(type, shortcut, fn) {
        const { isExcludedIncluded, name, shortcut: alias } = this.getShortcutComponents(shortcut);

        this.shortcuts[type].push({
            isExcludedIncluded,
            name,
            shortcut: alias,
            fn,
        });

        return this;
    }

    /**
     * Processes the given shortcut string into components.
     *
     * @param {String} shortcut
     *
     * @return {Object}
     *
     * @private
     */
    getShortcutComponents(shortcut) {
        const components = this.shortcutRegex.exec(shortcut);

        return {
            isExcludedIncluded: components[1] === '!',
            name: components[2] || null,
            shortcut: this.getNormalizedShortcut(components[3]),
        };
    }

    /**
     * Removes a matching shortcut.
     *
     * @param {String} shortcut
     *
     * @return {this}
     *
     * @api
     */
    remove(shortcut) {
        const match = this.getShortcutComponents(shortcut);

        for (const type of ['on', 'once']) {
            this.shortcuts[type] = this.shortcuts[type]
                .filter(item => (
                    !(match.shortcut && item.shortcut !== match.shortcut) ||
                    !(match.name && item.name !== match.name)
                ));
        }

        return this;
    }

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
        const target = event.target,
            tagName = target.tagName;

        return target.isContentEditable || this.excludedTargets.includes(tagName);
    }

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
            .map((key) => {
                return this.metaKeys.includes(key)
                    ? this.metaKey
                    : key;
            });

        return [... new Set(components)]
            .sort()
            .join('+');
    }

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

        if (event.key) {
            shortcut.push(event.key.toLowerCase());
        }

        return [... new Set(shortcut)].sort().join('+');
    }

    /**
     * Triggers matching listeners with the given keyboard event.
     *
     * @param {Object} target
     * @param {String[]} types
     * @param {KeyboardEvent} event
     *
     * @return {void}
     *
     * @private
     */
     trigger(target, types, event) {
        const isOnExcludedTarget = this.isOnExcludedTarget(event);
        const tokenizedEvent = this.getTokenizedEvent(event);

        for (const type of types) {
            for (const listener of this.shortcuts[type]) {
                if (!listener.isExcludedIncluded && isOnExcludedTarget || tokenizedEvent !== listener.shortcut) {
                    continue;
                }

                event.preventDefault();
                listener.fn.call(target, event);
            }
        }
    }

    /**
     * Registers listeners.
     *
     * @return {this}
     *
     * @private
     */
    listen() {
        const self = this;

        this.listeners.keyDown = function (event) {
            self.trigger.call(self, this, ['on', 'once'], event);
        };

        this.listeners.keyUp = function (event) {
            self.trigger.call(self, this, ['once'], event);
        };

        document.addEventListener('keydown', this.listeners.keyDown.bind(this));
        document.addEventListener('keyup', this.listeners.keyUp.bind(this));

        return this;
    }

    /**
     * Removes listeners.
     *
     * @return {this}
     *
     * @private
     */
    destroy() {
        document.removeEventListener('keydown', this.listeners.keyDown);
        document.removeEventListener('keyup', this.listeners.keyUp);

        return this;
    }
}

export default new Shortcut();
