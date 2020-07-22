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
 * Navigate.
 */
class Navigate {
  /**
   * Constructor.
   */
  constructor() {
    this.params = new URLSearchParams(window.location.hash.substring(1));
  }

  /**
   * Gets query parameter.
   *
   * @param {string} name
   *
   * @returns {string}
   */
  getParam(name) {
    return this.params.get(name);
  }

  /**
   * Sets query parameter.
   *
   * @param {string}      name
   * @param {string|null|number} value
   *
   * @return {this}
   */
  setParam(name, value) {
    if (value === null) {
      this.params.delete(name);
    } else {
      this.params.set(name, value);
    }

    window.location.hash = this.params.toString();

    return this;
  }
}

export default new Navigate();
