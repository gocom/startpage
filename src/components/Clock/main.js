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

import moment from 'moment';

export default {
    data () {
        return {
            hours: '',
            minutes: '',
            seconds: '',
            amPm: '',
        };
    },

    methods: {
        format(format) {
            return moment().format(format);
        }
    },

    mounted() {
        const self = this;

        const clockTimer = function () {
            const date = new Date();

            const time = {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
                amPm: 'AM',
            };

            if (time.hours === 0) {
                time.hours = 12;
            }

            if (time.hours > 12) {
                time.hours -= 12;
                time.amPm = 'PM';
            }

            Object.keys(time).forEach((component) => {
                let value = time[component];

                if (Number.isInteger(value) && value < 10) {
                    value = '0' + value;
                }

                self[component] = value;
            });

            self.clockTimer = setTimeout(clockTimer, 1000);
        };

        clockTimer();
    },

    beforeDestroy() {
        clearTimeout(this.clockTimer);
    }
};
