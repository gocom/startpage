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
 * Site.
 */
class Site {
  static idCounter = 0;

  /**
   * Constructor.
   *
   * @param {object} options
   * @param {string} options.url Link URL
   * @param {string} [options.name] Name
   * @param {string} [options.fa] Font icon class names
   * @param {string} [options.backgroundColor] Background color
   * @param {string} [options.textColor] Foreground color
   * @param {string} [options.thumbnail] Thumbnail image URL
   * @param {string} [options.icon Logo] icon image URL
   */
  constructor(options) {
    Site.idCounter += 1;
    this.url = new URL(options.url);
    this.name = options.name || null;
    this.fa = options.fa || null;
    this.backgroundColor = options.backgroundColor || null;
    this.textColor = options.textColor || null;
    this.thumbnail = options.thumbnail || null;
    this.icon = options.icon || null;
    this.position = Site.idCounter;
    this.id = Site.idCounter;
  }
}

export default Site;
