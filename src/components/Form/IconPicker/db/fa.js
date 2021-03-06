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

const icons = [
  {
    name: '500px',
    icon: 'fab fa-500px',
  },
  {
    name: 'accessible-icon',
    icon: 'fab fa-accessible-icon',
  },
  {
    name: 'accusoft',
    icon: 'fab fa-accusoft',
  },
  {
    name: 'acquisitions-incorporated',
    icon: 'fab fa-acquisitions-incorporated',
  },
  {
    name: 'ad',
    icon: 'fas fa-ad',
  },
  {
    name: 'address-book',
    icon: 'fas fa-address-book',
  },
  {
    name: 'address-book',
    icon: 'far fa-address-book',
  },
  {
    name: 'address-card',
    icon: 'fas fa-address-card',
  },
  {
    name: 'address-card',
    icon: 'far fa-address-card',
  },
  {
    name: 'adjust',
    icon: 'fas fa-adjust',
  },
  {
    name: 'adn',
    icon: 'fab fa-adn',
  },
  {
    name: 'adobe',
    icon: 'fab fa-adobe',
  },
  {
    name: 'adversal',
    icon: 'fab fa-adversal',
  },
  {
    name: 'affiliatetheme',
    icon: 'fab fa-affiliatetheme',
  },
  {
    name: 'air-freshener',
    icon: 'fas fa-air-freshener',
  },
  {
    name: 'airbnb',
    icon: 'fab fa-airbnb',
  },
  {
    name: 'algolia',
    icon: 'fab fa-algolia',
  },
  {
    name: 'align-center',
    icon: 'fas fa-align-center',
  },
  {
    name: 'align-justify',
    icon: 'fas fa-align-justify',
  },
  {
    name: 'align-left',
    icon: 'fas fa-align-left',
  },
  {
    name: 'align-right',
    icon: 'fas fa-align-right',
  },
  {
    name: 'alipay',
    icon: 'fab fa-alipay',
  },
  {
    name: 'allergies',
    icon: 'fas fa-allergies',
  },
  {
    name: 'amazon',
    icon: 'fab fa-amazon',
  },
  {
    name: 'amazon-pay',
    icon: 'fab fa-amazon-pay',
  },
  {
    name: 'ambulance',
    icon: 'fas fa-ambulance',
  },
  {
    name: 'american-sign-language-interpreting',
    icon: 'fas fa-american-sign-language-interpreting',
  },
  {
    name: 'amilia',
    icon: 'fab fa-amilia',
  },
  {
    name: 'anchor',
    icon: 'fas fa-anchor',
  },
  {
    name: 'android',
    icon: 'fab fa-android',
  },
  {
    name: 'angellist',
    icon: 'fab fa-angellist',
  },
  {
    name: 'angle-double-down',
    icon: 'fas fa-angle-double-down',
  },
  {
    name: 'angle-double-left',
    icon: 'fas fa-angle-double-left',
  },
  {
    name: 'angle-double-right',
    icon: 'fas fa-angle-double-right',
  },
  {
    name: 'angle-double-up',
    icon: 'fas fa-angle-double-up',
  },
  {
    name: 'angle-down',
    icon: 'fas fa-angle-down',
  },
  {
    name: 'angle-left',
    icon: 'fas fa-angle-left',
  },
  {
    name: 'angle-right',
    icon: 'fas fa-angle-right',
  },
  {
    name: 'angle-up',
    icon: 'fas fa-angle-up',
  },
  {
    name: 'angry',
    icon: 'fas fa-angry',
  },
  {
    name: 'angry',
    icon: 'far fa-angry',
  },
  {
    name: 'angrycreative',
    icon: 'fab fa-angrycreative',
  },
  {
    name: 'angular',
    icon: 'fab fa-angular',
  },
  {
    name: 'ankh',
    icon: 'fas fa-ankh',
  },
  {
    name: 'app-store',
    icon: 'fab fa-app-store',
  },
  {
    name: 'app-store-ios',
    icon: 'fab fa-app-store-ios',
  },
  {
    name: 'apper',
    icon: 'fab fa-apper',
  },
  {
    name: 'apple',
    icon: 'fab fa-apple',
  },
  {
    name: 'apple-alt',
    icon: 'fas fa-apple-alt',
  },
  {
    name: 'apple-pay',
    icon: 'fab fa-apple-pay',
  },
  {
    name: 'archive',
    icon: 'fas fa-archive',
  },
  {
    name: 'archway',
    icon: 'fas fa-archway',
  },
  {
    name: 'arrow-alt-circle-down',
    icon: 'fas fa-arrow-alt-circle-down',
  },
  {
    name: 'arrow-alt-circle-down',
    icon: 'far fa-arrow-alt-circle-down',
  },
  {
    name: 'arrow-alt-circle-left',
    icon: 'fas fa-arrow-alt-circle-left',
  },
  {
    name: 'arrow-alt-circle-left',
    icon: 'far fa-arrow-alt-circle-left',
  },
  {
    name: 'arrow-alt-circle-right',
    icon: 'fas fa-arrow-alt-circle-right',
  },
  {
    name: 'arrow-alt-circle-right',
    icon: 'far fa-arrow-alt-circle-right',
  },
  {
    name: 'arrow-alt-circle-up',
    icon: 'fas fa-arrow-alt-circle-up',
  },
  {
    name: 'arrow-alt-circle-up',
    icon: 'far fa-arrow-alt-circle-up',
  },
  {
    name: 'arrow-circle-down',
    icon: 'fas fa-arrow-circle-down',
  },
  {
    name: 'arrow-circle-left',
    icon: 'fas fa-arrow-circle-left',
  },
  {
    name: 'arrow-circle-right',
    icon: 'fas fa-arrow-circle-right',
  },
  {
    name: 'arrow-circle-up',
    icon: 'fas fa-arrow-circle-up',
  },
  {
    name: 'arrow-down',
    icon: 'fas fa-arrow-down',
  },
  {
    name: 'arrow-left',
    icon: 'fas fa-arrow-left',
  },
  {
    name: 'arrow-right',
    icon: 'fas fa-arrow-right',
  },
  {
    name: 'arrow-up',
    icon: 'fas fa-arrow-up',
  },
  {
    name: 'arrows-alt',
    icon: 'fas fa-arrows-alt',
  },
  {
    name: 'arrows-alt-h',
    icon: 'fas fa-arrows-alt-h',
  },
  {
    name: 'arrows-alt-v',
    icon: 'fas fa-arrows-alt-v',
  },
  {
    name: 'artstation',
    icon: 'fab fa-artstation',
  },
  {
    name: 'assistive-listening-systems',
    icon: 'fas fa-assistive-listening-systems',
  },
  {
    name: 'asterisk',
    icon: 'fas fa-asterisk',
  },
  {
    name: 'asymmetrik',
    icon: 'fab fa-asymmetrik',
  },
  {
    name: 'at',
    icon: 'fas fa-at',
  },
  {
    name: 'atlas',
    icon: 'fas fa-atlas',
  },
  {
    name: 'atlassian',
    icon: 'fab fa-atlassian',
  },
  {
    name: 'atom',
    icon: 'fas fa-atom',
  },
  {
    name: 'audible',
    icon: 'fab fa-audible',
  },
  {
    name: 'audio-description',
    icon: 'fas fa-audio-description',
  },
  {
    name: 'autoprefixer',
    icon: 'fab fa-autoprefixer',
  },
  {
    name: 'avianex',
    icon: 'fab fa-avianex',
  },
  {
    name: 'aviato',
    icon: 'fab fa-aviato',
  },
  {
    name: 'award',
    icon: 'fas fa-award',
  },
  {
    name: 'aws',
    icon: 'fab fa-aws',
  },
  {
    name: 'baby',
    icon: 'fas fa-baby',
  },
  {
    name: 'baby-carriage',
    icon: 'fas fa-baby-carriage',
  },
  {
    name: 'backspace',
    icon: 'fas fa-backspace',
  },
  {
    name: 'backward',
    icon: 'fas fa-backward',
  },
  {
    name: 'bacon',
    icon: 'fas fa-bacon',
  },
  {
    name: 'bacteria',
    icon: 'fas fa-bacteria',
  },
  {
    name: 'bacterium',
    icon: 'fas fa-bacterium',
  },
  {
    name: 'bahai',
    icon: 'fas fa-bahai',
  },
  {
    name: 'balance-scale',
    icon: 'fas fa-balance-scale',
  },
  {
    name: 'balance-scale-left',
    icon: 'fas fa-balance-scale-left',
  },
  {
    name: 'balance-scale-right',
    icon: 'fas fa-balance-scale-right',
  },
  {
    name: 'ban',
    icon: 'fas fa-ban',
  },
  {
    name: 'band-aid',
    icon: 'fas fa-band-aid',
  },
  {
    name: 'bandcamp',
    icon: 'fab fa-bandcamp',
  },
  {
    name: 'barcode',
    icon: 'fas fa-barcode',
  },
  {
    name: 'bars',
    icon: 'fas fa-bars',
  },
  {
    name: 'baseball-ball',
    icon: 'fas fa-baseball-ball',
  },
  {
    name: 'basketball-ball',
    icon: 'fas fa-basketball-ball',
  },
  {
    name: 'bath',
    icon: 'fas fa-bath',
  },
  {
    name: 'battery-empty',
    icon: 'fas fa-battery-empty',
  },
  {
    name: 'battery-full',
    icon: 'fas fa-battery-full',
  },
  {
    name: 'battery-half',
    icon: 'fas fa-battery-half',
  },
  {
    name: 'battery-quarter',
    icon: 'fas fa-battery-quarter',
  },
  {
    name: 'battery-three-quarters',
    icon: 'fas fa-battery-three-quarters',
  },
  {
    name: 'battle-net',
    icon: 'fas fa-battle-net',
  },
  {
    name: 'bed',
    icon: 'fas fa-bed',
  },
  {
    name: 'beer',
    icon: 'fas fa-beer',
  },
  {
    name: 'behance',
    icon: 'fab fa-behance',
  },
  {
    name: 'behance-square',
    icon: 'fab fa-behance-square',
  },
  {
    name: 'bell',
    icon: 'fas fa-bell',
  },
  {
    name: 'bell',
    icon: 'far fa-bell',
  },
  {
    name: 'bell-slash',
    icon: 'fas fa-bell-slash',
  },
  {
    name: 'bell-slash',
    icon: 'far fa-bell-slash',
  },
  {
    name: 'bezier-curve',
    icon: 'fas fa-bezier-curve',
  },
  {
    name: 'bible',
    icon: 'fas fa-bible',
  },
  {
    name: 'bicycle',
    icon: 'fas fa-bicycle',
  },
  {
    name: 'biking',
    icon: 'fas fa-biking',
  },
  {
    name: 'bimobject',
    icon: 'fab fa-bimobject',
  },
  {
    name: 'binoculars',
    icon: 'fas fa-binoculars',
  },
  {
    name: 'biohazard',
    icon: 'fas fa-biohazard',
  },
  {
    name: 'birthday-cake',
    icon: 'fas fa-birthday-cake',
  },
  {
    name: 'bitbucket',
    icon: 'fab fa-bitbucket',
  },
  {
    name: 'bitcoin',
    icon: 'fab fa-bitcoin',
  },
  {
    name: 'bity',
    icon: 'fab fa-bity',
  },
  {
    name: 'black-tie',
    icon: 'fab fa-black-tie',
  },
  {
    name: 'blackberry',
    icon: 'fab fa-blackberry',
  },
  {
    name: 'blender',
    icon: 'fas fa-blender',
  },
  {
    name: 'blender-phone',
    icon: 'fas fa-blender-phone',
  },
  {
    name: 'blind',
    icon: 'fas fa-blind',
  },
  {
    name: 'blog',
    icon: 'fas fa-blog',
  },
  {
    name: 'blogger',
    icon: 'fab fa-blogger',
  },
  {
    name: 'blogger-b',
    icon: 'fab fa-blogger-b',
  },
  {
    name: 'bluetooth',
    icon: 'fab fa-bluetooth',
  },
  {
    name: 'bluetooth-b',
    icon: 'fab fa-bluetooth-b',
  },
  {
    name: 'bold',
    icon: 'fas fa-bold',
  },
  {
    name: 'bolt',
    icon: 'fas fa-bolt',
  },
  {
    name: 'bomb',
    icon: 'fas fa-bomb',
  },
  {
    name: 'bone',
    icon: 'fas fa-bone',
  },
  {
    name: 'bong',
    icon: 'fas fa-bong',
  },
  {
    name: 'book',
    icon: 'fas fa-book',
  },
  {
    name: 'book-dead',
    icon: 'fas fa-book-dead',
  },
  {
    name: 'book-medical',
    icon: 'fas fa-book-medical',
  },
  {
    name: 'book-open',
    icon: 'fas fa-book-open',
  },
  {
    name: 'book-reader',
    icon: 'fas fa-book-reader',
  },
  {
    name: 'bookmark',
    icon: 'fas fa-bookmark',
  },
  {
    name: 'bootstrap',
    icon: 'fab fa-bootstrap',
  },
  {
    name: 'border-all',
    icon: 'fas fa-border-all',
  },
  {
    name: 'border-none',
    icon: 'fas fa-border-none',
  },
  {
    name: 'border-style',
    icon: 'fas fa-border-style',
  },
  {
    name: 'bowling-ball',
    icon: 'fas fa-bowling-ball',
  },
  {
    name: 'box',
    icon: 'fas fa-box',
  },
  {
    name: 'box-open',
    icon: 'fas fa-box-open',
  },
  {
    name: 'box-tissue',
    icon: 'fas fa-box-tissue',
  },
  {
    name: 'boxes',
    icon: 'fas fa-boxes',
  },
  {
    name: 'braille',
    icon: 'fas fa-braille',
  },
  {
    name: 'brain',
    icon: 'fas fa-brain',
  },
  {
    name: 'bread-slice',
    icon: 'fas fa-bread-slice',
  },
  {
    name: 'briefcase',
    icon: 'fas fa-briefcase',
  },
  {
    name: 'briefcase-medical',
    icon: 'fas fa-briefcase-medical',
  },
  {
    name: 'broadcast-tower',
    icon: 'fas fa-broadcast-tower',
  },
  {
    name: 'broom',
    icon: 'fas fa-broom',
  },
  {
    name: 'brush',
    icon: 'fas fa-brush',
  },
  {
    name: 'btc',
    icon: 'fab fa-btc',
  },
  {
    name: 'buffer',
    icon: 'fab fa-buffer',
  },
  {
    name: 'bug',
    icon: 'fas fa-bug',
  },
  {
    name: 'building',
    icon: 'fas fa-building',
  },
  {
    name: 'building',
    icon: 'far fa-building',
  },
  {
    name: 'bullhorn',
    icon: 'fas fa-bullhorn',
  },
  {
    name: 'bullseye',
    icon: 'fas fa-bullseye',
  },
  {
    name: 'burn',
    icon: 'fas fa-burn',
  },
  {
    name: 'buromobelexperte',
    icon: 'fab fa-buromobelexperte',
  },
  {
    name: 'bus',
    icon: 'fas fa-bus',
  },
  {
    name: 'bus-alt',
    icon: 'fas fa-bus-alt',
  },
  {
    name: 'business-time',
    icon: 'fas fa-business-time',
  },
  {
    name: 'buy-n-large',
    icon: 'fab fa-buy-n-large',
  },
  {
    name: 'buysellads',
    icon: 'fab fa-buysellads',
  },
  {
    name: 'calculator',
    icon: 'fas fa-calculator',
  },
  {
    name: 'calendar',
    icon: 'fas fa-calendar',
  },
  {
    name: 'calendar',
    icon: 'far fa-calendar',
  },
  {
    name: 'calendar-alt',
    icon: 'fas fa-calendar-alt',
  },
  {
    name: 'calendar-alt',
    icon: 'far fa-calendar-alt',
  },
  {
    name: 'calendar-check',
    icon: 'fas fa-calendar-check',
  },
  {
    name: 'calendar-check',
    icon: 'far fa-calendar-check',
  },
  {
    name: 'calendar-day',
    icon: 'fas fa-calendar-day',
  },
  {
    name: 'calendar-minus',
    icon: 'fas fa-calendar-minus',
  },
  {
    name: 'calendar-minus',
    icon: 'far fa-calendar-minus',
  },
  {
    name: 'calendar-plus',
    icon: 'fas fa-calendar-plus',
  },
  {
    name: 'calendar-plus',
    icon: 'far fa-calendar-plus',
  },
  {
    name: 'calendar-times',
    icon: 'fas fa-calendar-times',
  },
  {
    name: 'calendar-times',
    icon: 'far fa-calendar-times',
  },
  {
    name: 'calendar-week',
    icon: 'fas fa-calendar-week',
  },
  {
    name: 'camera',
    icon: 'fas fa-camera',
  },
  {
    name: 'camera-retro',
    icon: 'fas fa-camera-retro',
  },
  {
    name: 'campground',
    icon: 'fas fa-campground',
  },
  {
    name: 'canadian-maple-leaf',
    icon: 'fab fa-canadian-maple-leaf',
  },
  {
    name: 'candy-cane',
    icon: 'fas fa-candy-cane',
  },
  {
    name: 'cannabis',
    icon: 'fas fa-cannabis',
  },
  {
    name: 'capsules',
    icon: 'fas fa-capsules',
  },
  {
    name: 'car',
    icon: 'fas fa-car',
  },
  {
    name: 'car-alt',
    icon: 'fas fa-car-alt',
  },
  {
    name: 'car-battery',
    icon: 'fas fa-car-battery',
  },
  {
    name: 'car-crash',
    icon: 'fas fa-car-crash',
  },
  {
    name: 'car-side',
    icon: 'fas fa-car-side',
  },
  {
    name: 'caravan',
    icon: 'fas fa-caravan',
  },
  {
    name: 'caravan',
    icon: 'far fa-caravan',
  },
  {
    name: 'caret-down',
    icon: 'fas fa-caret-down',
  },
  {
    name: 'caret-left',
    icon: 'fas fa-caret-left',
  },
  {
    name: 'caret-right',
    icon: 'fas fa-caret-right',
  },
  {
    name: 'caret-square-down',
    icon: 'fas fa-caret-square-down',
  },
  {
    name: 'caret-square-down',
    icon: 'far fa-caret-square-down',
  },
  {
    name: 'caret-square-left',
    icon: 'fas fa-caret-square-left',
  },
  {
    name: 'caret-square-left',
    icon: 'far fa-caret-square-left',
  },
  {
    name: 'caret-square-right',
    icon: 'fas fa-caret-square-right',
  },
  {
    name: 'caret-square-right',
    icon: 'far fa-caret-square-right',
  },
  {
    name: 'caret-square-up',
    icon: 'fas fa-caret-square-up',
  },
  {
    name: 'caret-square-up',
    icon: 'far fa-caret-square-up',
  },
  {
    name: 'caret-up',
    icon: 'fas fa-caret-up',
  },
  {
    name: 'carrot',
    icon: 'fas fa-carrot',
  },
  {
    name: 'cart-arrow-down',
    icon: 'fas fa-cart-arrow-down',
  },
  {
    name: 'cart-plus',
    icon: 'fas fa-cart-plus',
  },
  {
    name: 'cash-register',
    icon: 'fas fa-cash-register',
  },
  {
    name: 'cat',
    icon: 'fas fa-cat',
  },
  {
    name: 'cc-amazon-pay',
    icon: 'fab fa-cc-amazon-pay',
  },
  {
    name: 'cc-amex',
    icon: 'fab fa-cc-amex',
  },
  {
    name: 'cc-apple-pay',
    icon: 'fab fa-cc-apple-pay',
  },
  {
    name: 'cc-diners-club',
    icon: 'fab fa-cc-diners-club',
  },
  {
    name: 'cc-discover',
    icon: 'fab fa-cc-discover',
  },
  {
    name: 'cc-jcb',
    icon: 'fab fa-cc-jcb',
  },
  {
    name: 'cc-mastercard',
    icon: 'fab fa-cc-mastercard',
  },
  {
    name: 'cc-paypal',
    icon: 'fab fa-cc-paypal',
  },
  {
    name: 'cc-stripe',
    icon: 'fab fa-cc-stripe',
  },
  {
    name: 'cc-visa',
    icon: 'fab fa-cc-visa',
  },
  {
    name: 'centercode',
    icon: 'fab fa-centercode',
  },
  {
    name: 'centos',
    icon: 'fab fa-centos',
  },
  {
    name: 'certificate',
    icon: 'fas fa-certificate',
  },
  {
    name: 'chair',
    icon: 'fas fa-chair',
  },
  {
    name: 'chalkboard',
    icon: 'fas fa-chalkboard',
  },
  {
    name: 'chalkboard-teacher',
    icon: 'fas fa-chalkboard-teacher',
  },
  {
    name: 'charging-station',
    icon: 'fas fa-charging-station',
  },
  {
    name: 'chart-area',
    icon: 'fas fa-chart-area',
  },
  {
    name: 'chart-bar',
    icon: 'fas fa-chart-bar',
  },
  {
    name: 'chart-bar',
    icon: 'far fa-chart-bar',
  },
  {
    name: 'chart-line',
    icon: 'fas fa-chart-line',
  },
  {
    name: 'chart-pie',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'check',
    icon: 'fas fa-check',
  },
  {
    name: 'check-circle',
    icon: 'fas fa-check-circle',
  },
  {
    name: 'check-circle',
    icon: 'far fa-check-circle',
  },
  {
    name: 'check-double',
    icon: 'fas fa-check-double',
  },
  {
    name: 'check-square',
    icon: 'fas fa-check-square',
  },
  {
    name: 'check-square',
    icon: 'far fa-check-square',
  },
  {
    name: 'cheese',
    icon: 'fas fa-cheese',
  },
  {
    name: 'chess',
    icon: 'fas fa-chess',
  },
  {
    name: 'chess-bishop',
    icon: 'fas fa-chess-bishop',
  },
  {
    name: 'chess-board',
    icon: 'fas fa-chess-board',
  },
  {
    name: 'chess-king',
    icon: 'fas fa-chess-king',
  },
  {
    name: 'chess-knight',
    icon: 'fas fa-chess-knight',
  },
  {
    name: 'chess-pawn',
    icon: 'fas fa-chess-pawn',
  },
  {
    name: 'chess-queen',
    icon: 'fas fa-chess-queen',
  },
  {
    name: 'chess-rook',
    icon: 'fas fa-chess-rook',
  },
  {
    name: 'chevron-circle-down',
    icon: 'fas fa-chevron-circle-down',
  },
  {
    name: 'chevron-circle-left',
    icon: 'fas fa-chevron-circle-left',
  },
  {
    name: 'chevron-circle-right',
    icon: 'fas fa-chevron-circle-right',
  },
  {
    name: 'chevron-circle-up',
    icon: 'fas fa-chevron-circle-up',
  },
  {
    name: 'chevron-down',
    icon: 'fas fa-chevron-down',
  },
  {
    name: 'chevron-left',
    icon: 'fas fa-chevron-left',
  },
  {
    name: 'chevron-right',
    icon: 'fas fa-chevron-right',
  },
  {
    name: 'chevron-up',
    icon: 'fas fa-chevron-up',
  },
  {
    name: 'child',
    icon: 'fas fa-child',
  },
  {
    name: 'chrome',
    icon: 'fab fa-chrome',
  },
  {
    name: 'chromecast',
    icon: 'fab fa-chromecast',
  },
  {
    name: 'church',
    icon: 'fas fa-church',
  },
  {
    name: 'circle',
    icon: 'fas fa-circle',
  },
  {
    name: 'circle',
    icon: 'far fa-circle',
  },
  {
    name: 'circle-notch',
    icon: 'fas fa-circle-notch',
  },
  {
    name: 'city',
    icon: 'fas fa-city',
  },
  {
    name: 'clinic-medical',
    icon: 'fas fa-clinic-medical',
  },
  {
    name: 'clipboard',
    icon: 'fas fa-clipboard',
  },
  {
    name: 'clipboard',
    icon: 'far fa-clipboard',
  },
  {
    name: 'clipboard-check',
    icon: 'fas fa-clipboard-check',
  },
  {
    name: 'clipboard-list',
    icon: 'fas fa-clipboard-list',
  },
  {
    name: 'clock',
    icon: 'fas fa-clock',
  },
  {
    name: 'clock',
    icon: 'far fa-clock',
  },
  {
    name: 'clone',
    icon: 'fas fa-clone',
  },
  {
    name: 'clone',
    icon: 'far fa-clone',
  },
  {
    name: 'closed-captioning',
    icon: 'fas fa-closed-captioning',
  },
  {
    name: 'closed-captioning',
    icon: 'far fa-closed-captioning',
  },
  {
    name: 'cloud',
    icon: 'fas fa-cloud',
  },
  {
    name: 'cloud-download-alt',
    icon: 'fas fa-cloud-download-alt',
  },
  {
    name: 'cloud-meatball',
    icon: 'fas fa-cloud-meatball',
  },
  {
    name: 'cloud-moon',
    icon: 'fas fa-cloud-moon',
  },
  {
    name: 'cloud-moon-rain',
    icon: 'fas fa-cloud-moon-rain',
  },
  {
    name: 'cloud-rain',
    icon: 'fas fa-cloud-rain',
  },
  {
    name: 'cloud-showers-heavy',
    icon: 'fas fa-cloud-showers-heavy',
  },
  {
    name: 'cloud-sun',
    icon: 'fas fa-cloud-sun',
  },
  {
    name: 'cloud-sun-rain',
    icon: 'fas fa-cloud-sun-rain',
  },
  {
    name: 'cloud-upload-alt',
    icon: 'fas fa-cloud-upload-alt',
  },
  {
    name: 'cloudscale',
    icon: 'fab fa-cloudscale',
  },
  {
    name: 'cloudsmith',
    icon: 'fab fa-cloudsmith',
  },
  {
    name: 'cloudversify',
    icon: 'fab fa-cloudversify',
  },
  {
    name: 'cocktail',
    icon: 'fas fa-cocktail',
  },
  {
    name: 'code',
    icon: 'fas fa-code',
  },
  {
    name: 'code-branch',
    icon: 'fas fa-code-branch',
  },
  {
    name: 'codepen',
    icon: 'fab fa-codepen',
  },
  {
    name: 'codiepie',
    icon: 'fab fa-codiepie',
  },
  {
    name: 'coffee',
    icon: 'fas fa-coffee',
  },
  {
    name: 'cog',
    icon: 'fas fa-cog',
  },
  {
    name: 'cogs',
    icon: 'fas fa-cogs',
  },
  {
    name: 'coins',
    icon: 'fas fa-coins',
  },
  {
    name: 'columns',
    icon: 'fas fa-columns',
  },
  {
    name: 'comment',
    icon: 'fas fa-comment',
  },
  {
    name: 'comment',
    icon: 'far fa-comment',
  },
  {
    name: 'comment-alt',
    icon: 'fas fa-comment-alt',
  },
  {
    name: 'comment-alt',
    icon: 'far fa-comment-alt',
  },
  {
    name: 'comment-dollar',
    icon: 'fas fa-comment-dollar',
  },
  {
    name: 'comment-dots',
    icon: 'fas fa-comment-dots',
  },
  {
    name: 'comment-dots',
    icon: 'far fa-comment-dots',
  },
  {
    name: 'comment-medical',
    icon: 'fas fa-comment-medical',
  },
  {
    name: 'comment-slash',
    icon: 'fas fa-comment-slash',
  },
  {
    name: 'comments',
    icon: 'fas fa-comments',
  },
  {
    name: 'comments',
    icon: 'far fa-comments',
  },
  {
    name: 'comments-dollar',
    icon: 'fas fa-comments-dollar',
  },
  {
    name: 'compact-disc',
    icon: 'fas fa-compact-disc',
  },
  {
    name: 'compass',
    icon: 'fas fa-compass',
  },
  {
    name: 'compass',
    icon: 'far fa-compass',
  },
  {
    name: 'compress',
    icon: 'fas fa-compress',
  },
  {
    name: 'compress-alt',
    icon: 'fas fa-compress-alt',
  },
  {
    name: 'compress-arrows-alt',
    icon: 'fas fa-compress-arrows-alt',
  },
  {
    name: 'concierge-bell',
    icon: 'fas fa-concierge-bell',
  },
  {
    name: 'confluence',
    icon: 'fab fa-confluence',
  },
  {
    name: 'connectdevelop',
    icon: 'fab fa-connectdevelop',
  },
  {
    name: 'contao',
    icon: 'fab fa-contao',
  },
  {
    name: 'cookie',
    icon: 'fas fa-cookie',
  },
  {
    name: 'cookie-bite',
    icon: 'fas fa-cookie-bite',
  },
  {
    name: 'copy',
    icon: 'fas fa-copy',
  },
  {
    name: 'copy',
    icon: 'far fa-copy',
  },
  {
    name: 'copyright',
    icon: 'fas fa-copyright',
  },
  {
    name: 'copyright',
    icon: 'far fa-copyright',
  },
  {
    name: 'cotton-bureau',
    icon: 'fab fa-cotton-bureau',
  },
  {
    name: 'couch',
    icon: 'fas fa-couch',
  },
  {
    name: 'cpanel',
    icon: 'fab fa-cpanel',
  },
  {
    name: 'creative-commons',
    icon: 'fab fa-creative-commons',
  },
  {
    name: 'creative-commons-by',
    icon: 'fab fa-creative-commons-by',
  },
  {
    name: 'creative-commons-nc',
    icon: 'fab fa-creative-commons-nc',
  },
  {
    name: 'creative-commons-nc-eu',
    icon: 'fab fa-creative-commons-nc-eu',
  },
  {
    name: 'creative-commons-nc-jp',
    icon: 'fab fa-creative-commons-nc-jp',
  },
  {
    name: 'creative-commons-nd',
    icon: 'fab fa-creative-commons-nd',
  },
  {
    name: 'creative-commons-pd',
    icon: 'fab fa-creative-commons-pd',
  },
  {
    name: 'creative-commons-pd-alt',
    icon: 'fab fa-creative-commons-pd-alt',
  },
  {
    name: 'creative-commons-remix',
    icon: 'fab fa-creative-commons-remix',
  },
  {
    name: 'creative-commons-sa',
    icon: 'fab fa-creative-commons-sa',
  },
  {
    name: 'creative-commons-sampling',
    icon: 'fab fa-creative-commons-sampling',
  },
  {
    name: 'creative-commons-sampling-plus',
    icon: 'fab fa-creative-commons-sampling-plus',
  },
  {
    name: 'creative-commons-share',
    icon: 'fab fa-creative-commons-share',
  },
  {
    name: 'creative-commons-zero',
    icon: 'fab fa-creative-commons-zero',
  },
  {
    name: 'credit-card',
    icon: 'fas fa-credit-card',
  },
  {
    name: 'critical-role',
    icon: 'fab fa-critical-role',
  },
  {
    name: 'crop',
    icon: 'fas fa-crop',
  },
  {
    name: 'crop-alt',
    icon: 'fas fa-crop-alt',
  },
  {
    name: 'cross',
    icon: 'fas fa-cross',
  },
  {
    name: 'crosshairs',
    icon: 'fas fa-crosshairs',
  },
  {
    name: 'crow',
    icon: 'fas fa-crow',
  },
  {
    name: 'crown',
    icon: 'fas fa-crown',
  },
  {
    name: 'crutch',
    icon: 'fas fa-crutch',
  },
  {
    name: 'css3',
    icon: 'fab fa-css3',
  },
  {
    name: 'css3-alt',
    icon: 'fab fa-css3-alt',
  },
  {
    name: 'cube',
    icon: 'fas fa-cube',
  },
  {
    name: 'cubes',
    icon: 'fas fa-cubes',
  },
  {
    name: 'cut',
    icon: 'fas fa-cut',
  },
  {
    name: 'cuttlefish',
    icon: 'fab fa-cuttlefish',
  },
  {
    name: 'd-and-d',
    icon: 'fab fa-d-and-d',
  },
  {
    name: 'd-and-d-beyond',
    icon: 'fab fa-d-and-d-beyond',
  },
  {
    name: 'dailymotion',
    icon: 'fab fa-dailymotion',
  },
  {
    name: 'dashcube',
    icon: 'fab fa-dashcube',
  },
  {
    name: 'database',
    icon: 'fas fa-database',
  },
  {
    name: 'deaf',
    icon: 'fas fa-deaf',
  },
  {
    name: 'deezer',
    icon: 'fab fa-deezer',
  },
  {
    name: 'delicious',
    icon: 'fab fa-delicious',
  },
  {
    name: 'democrat',
    icon: 'fas fa-democrat',
  },
  {
    name: 'deploydog',
    icon: 'fab fa-deploydog',
  },
  {
    name: 'deskpro',
    icon: 'fab fa-deskpro',
  },
  {
    name: 'desktop',
    icon: 'fas fa-desktop',
  },
  {
    name: 'dev',
    icon: 'fab fa-dev',
  },
  {
    name: 'deviantart',
    icon: 'fab fa-deviantart',
  },
  {
    name: 'dharmachakra',
    icon: 'fas fa-dharmachakra',
  },
  {
    name: 'dhl',
    icon: 'fab fa-dhl',
  },
  {
    name: 'diagnoses',
    icon: 'fas fa-diagnoses',
  },
  {
    name: 'diaspora',
    icon: 'fab fa-diaspora',
  },
  {
    name: 'dice',
    icon: 'fas fa-dice',
  },
  {
    name: 'dice-d20',
    icon: 'fas fa-dice-d20',
  },
  {
    name: 'dice-d6',
    icon: 'fas fa-dice-d6',
  },
  {
    name: 'dice-five',
    icon: 'fas fa-dice-five',
  },
  {
    name: 'dice-four',
    icon: 'fas fa-dice-four',
  },
  {
    name: 'dice-one',
    icon: 'fas fa-dice-one',
  },
  {
    name: 'dice-six',
    icon: 'fas fa-dice-six',
  },
  {
    name: 'dice-three',
    icon: 'fas fa-dice-three',
  },
  {
    name: 'dice-two',
    icon: 'fas fa-dice-two',
  },
  {
    name: 'digg',
    icon: 'fab fa-digg',
  },
  {
    name: 'digital-ocean',
    icon: 'fab fa-digital-ocean',
  },
  {
    name: 'digital-tachograph',
    icon: 'fas fa-digital-tachograph',
  },
  {
    name: 'directions',
    icon: 'fas fa-directions',
  },
  {
    name: 'discord',
    icon: 'fab fa-discord',
  },
  {
    name: 'discourse',
    icon: 'fab fa-discourse',
  },
  {
    name: 'disease',
    icon: 'fas fa-disease',
  },
  {
    name: 'divide',
    icon: 'fas fa-divide',
  },
  {
    name: 'dizzy',
    icon: 'fas fa-dizzy',
  },
  {
    name: 'dizzy',
    icon: 'far fa-dizzy',
  },
  {
    name: 'dna',
    icon: 'fas fa-dna',
  },
  {
    name: 'dochub',
    icon: 'fab fa-dochub',
  },
  {
    name: 'docker',
    icon: 'fab fa-docker',
  },
  {
    name: 'dog',
    icon: 'fas fa-dog',
  },
  {
    name: 'dollar-sign',
    icon: 'fas fa-dollar-sign',
  },
  {
    name: 'dolly',
    icon: 'fas fa-dolly',
  },
  {
    name: 'dolly-flatbed',
    icon: 'fas fa-dolly-flatbed',
  },
  {
    name: 'donate',
    icon: 'fas fa-donate',
  },
  {
    name: 'door-closed',
    icon: 'fas fa-door-closed',
  },
  {
    name: 'door-open',
    icon: 'fas fa-door-open',
  },
  {
    name: 'dot-circle',
    icon: 'fas fa-dot-circle',
  },
  {
    name: 'dot-circle',
    icon: 'far fa-dot-circle',
  },
  {
    name: 'dove',
    icon: 'fas fa-dove',
  },
  {
    name: 'download',
    icon: 'fas fa-download',
  },
  {
    name: 'draft2digital',
    icon: 'fab fa-draft2digital',
  },
  {
    name: 'drafting-compass',
    icon: 'fas fa-drafting-compass',
  },
  {
    name: 'dragon',
    icon: 'fas fa-dragon',
  },
  {
    name: 'draw-polygon',
    icon: 'fas fa-draw-polygon',
  },
  {
    name: 'dribbble',
    icon: 'fab fa-dribbble',
  },
  {
    name: 'dribbble-square',
    icon: 'fab fa-dribbble-square',
  },
  {
    name: 'dropbox',
    icon: 'fab fa-dropbox',
  },
  {
    name: 'drum',
    icon: 'fas fa-drum',
  },
  {
    name: 'drum-steelpan',
    icon: 'fas fa-drum-steelpan',
  },
  {
    name: 'drumstick-bite',
    icon: 'fas fa-drumstick-bite',
  },
  {
    name: 'drupal',
    icon: 'fab fa-drupal',
  },
  {
    name: 'dumbbell',
    icon: 'fas fa-dumbbell',
  },
  {
    name: 'dumpster',
    icon: 'fas fa-dumpster',
  },
  {
    name: 'dumpster-fire',
    icon: 'fas fa-dumpster-fire',
  },
  {
    name: 'dungeon',
    icon: 'fas fa-dungeon',
  },
  {
    name: 'dyalog',
    icon: 'fab fa-dyalog',
  },
  {
    name: 'earlybirds',
    icon: 'fab fa-earlybirds',
  },
  {
    name: 'ebay',
    icon: 'fab fa-ebay',
  },
  {
    name: 'edge',
    icon: 'fab fa-edge',
  },
  {
    name: 'edge-legacy',
    icon: 'fab fa-edge-legacy',
  },
  {
    name: 'edit',
    icon: 'fas fa-edit',
  },
  {
    name: 'edit',
    icon: 'far fa-edit',
  },
  {
    name: 'egg',
    icon: 'fas fa-egg',
  },
  {
    name: 'eject',
    icon: 'fas fa-eject',
  },
  {
    name: 'elementor',
    icon: 'fab fa-elementor',
  },
  {
    name: 'ellipsis-h',
    icon: 'fas fa-ellipsis-h',
  },
  {
    name: 'ellipsis-v',
    icon: 'fas fa-ellipsis-v',
  },
  {
    name: 'ello',
    icon: 'fab fa-ello',
  },
  {
    name: 'ember',
    icon: 'fab fa-ember',
  },
  {
    name: 'empire',
    icon: 'fab fa-empire',
  },
  {
    name: 'envelope',
    icon: 'fas fa-envelope',
  },
  {
    name: 'envelope',
    icon: 'far fa-envelope',
  },
  {
    name: 'envelope-open',
    icon: 'fas fa-envelope-open',
  },
  {
    name: 'envelope-open',
    icon: 'far fa-envelope-open',
  },
  {
    name: 'envelope-open-text',
    icon: 'fas fa-envelope-open-text',
  },
  {
    name: 'envelope-square',
    icon: 'fas fa-envelope-square',
  },
  {
    name: 'envira',
    icon: 'fab fa-envira',
  },
  {
    name: 'equals',
    icon: 'fas fa-equals',
  },
  {
    name: 'eraser',
    icon: 'fas fa-eraser',
  },
  {
    name: 'erlang',
    icon: 'fab fa-erlang',
  },
  {
    name: 'ethereum',
    icon: 'fab fa-ethereum',
  },
  {
    name: 'ethernet',
    icon: 'fas fa-ethernet',
  },
  {
    name: 'etsy',
    icon: 'fab fa-etsy',
  },
  {
    name: 'euro-sign',
    icon: 'fas fa-euro-sign',
  },
  {
    name: 'evernote',
    icon: 'fab fa-evernote',
  },
  {
    name: 'exchange-alt',
    icon: 'fas fa-exchange-alt',
  },
  {
    name: 'exclamation',
    icon: 'fas fa-exclamation',
  },
  {
    name: 'exclamation-circle',
    icon: 'fas fa-exclamation-circle',
  },
  {
    name: 'exclamation-triangle',
    icon: 'fas fa-exclamation-triangle',
  },
  {
    name: 'expand',
    icon: 'fas fa-expand',
  },
  {
    name: 'expand-alt',
    icon: 'fas fa-expand-alt',
  },
  {
    name: 'expand-arrows-alt',
    icon: 'fas fa-expand-arrows-alt',
  },
  {
    name: 'expeditedssl',
    icon: 'fab fa-expeditedssl',
  },
  {
    name: 'external-link-alt',
    icon: 'fas fa-external-link-alt',
  },
  {
    name: 'external-link-square-alt',
    icon: 'fas fa-external-link-square-alt',
  },
  {
    name: 'eye',
    icon: 'fas fa-eye',
  },
  {
    name: 'eye',
    icon: 'far fa-eye',
  },
  {
    name: 'eye-dropper',
    icon: 'fas fa-eye-dropper',
  },
  {
    name: 'eye-slash',
    icon: 'fas fa-eye-slash',
  },
  {
    name: 'eye-slash',
    icon: 'far fa-eye-slash',
  },
  {
    name: 'facebook',
    icon: 'fab fa-facebook',
  },
  {
    name: 'facebook-f',
    icon: 'fab fa-facebook-f',
  },
  {
    name: 'facebook-messenger',
    icon: 'fab fa-facebook-messenger',
  },
  {
    name: 'facebook-square',
    icon: 'fab fa-facebook-square',
  },
  {
    name: 'fan',
    icon: 'fas fa-fan',
  },
  {
    name: 'fantasy-flight-games',
    icon: 'fab fa-fantasy-flight-games',
  },
  {
    name: 'fast-backward',
    icon: 'fas fa-fast-backward',
  },
  {
    name: 'fast-forward',
    icon: 'fas fa-fast-forward',
  },
  {
    name: 'faucet',
    icon: 'fas fa-faucet',
  },
  {
    name: 'fax',
    icon: 'fas fa-fax',
  },
  {
    name: 'feather',
    icon: 'fas fa-feather',
  },
  {
    name: 'feather-alt',
    icon: 'fas fa-feather-alt',
  },
  {
    name: 'fedex',
    icon: 'fab fa-fedex',
  },
  {
    name: 'fedora',
    icon: 'fab fa-fedora',
  },
  {
    name: 'female',
    icon: 'fas fa-female',
  },
  {
    name: 'fighter-jet',
    icon: 'fas fa-fighter-jet',
  },
  {
    name: 'figma',
    icon: 'fab fa-figma',
  },
  {
    name: 'file',
    icon: 'fas fa-file',
  },
  {
    name: 'file',
    icon: 'far fa-file',
  },
  {
    name: 'file-alt',
    icon: 'fas fa-file-alt',
  },
  {
    name: 'file-alt',
    icon: 'far fa-file-alt',
  },
  {
    name: 'file-archive',
    icon: 'fas fa-file-archive',
  },
  {
    name: 'file-archive',
    icon: 'far fa-file-archive',
  },
  {
    name: 'file-audio',
    icon: 'fas fa-file-audio',
  },
  {
    name: 'file-audio',
    icon: 'far fa-file-audio',
  },
  {
    name: 'file-code',
    icon: 'fas fa-file-code',
  },
  {
    name: 'file-code',
    icon: 'far fa-file-code',
  },
  {
    name: 'file-contract',
    icon: 'fas fa-file-contract',
  },
  {
    name: 'file-csv',
    icon: 'fas fa-file-csv',
  },
  {
    name: 'file-download',
    icon: 'fas fa-file-download',
  },
  {
    name: 'file-excel',
    icon: 'fas fa-file-excel',
  },
  {
    name: 'file-excel',
    icon: 'far fa-file-excel',
  },
  {
    name: 'file-export',
    icon: 'fas fa-file-export',
  },
  {
    name: 'file-image',
    icon: 'fas fa-file-image',
  },
  {
    name: 'file-image',
    icon: 'far fa-file-image',
  },
  {
    name: 'file-import',
    icon: 'fas fa-file-import',
  },
  {
    name: 'file-invoice',
    icon: 'fas fa-file-invoice',
  },
  {
    name: 'file-invoice-dollar',
    icon: 'fas fa-file-invoice-dollar',
  },
  {
    name: 'file-medical',
    icon: 'fas fa-file-medical',
  },
  {
    name: 'file-medical-alt',
    icon: 'fas fa-file-medical-alt',
  },
  {
    name: 'file-pdf',
    icon: 'fas fa-file-pdf',
  },
  {
    name: 'file-pdf',
    icon: 'far fa-file-pdf',
  },
  {
    name: 'file-powerpoint',
    icon: 'fas fa-file-powerpoint',
  },
  {
    name: 'file-powerpoint',
    icon: 'far fa-file-powerpoint',
  },
  {
    name: 'file-prescription',
    icon: 'fas fa-file-prescription',
  },
  {
    name: 'file-signature',
    icon: 'fas fa-file-signature',
  },
  {
    name: 'file-upload',
    icon: 'fas fa-file-upload',
  },
  {
    name: 'file-video',
    icon: 'fas fa-file-video',
  },
  {
    name: 'file-video',
    icon: 'far fa-file-video',
  },
  {
    name: 'file-word',
    icon: 'fas fa-file-word',
  },
  {
    name: 'file-word',
    icon: 'far fa-file-word',
  },
  {
    name: 'fill',
    icon: 'fas fa-fill',
  },
  {
    name: 'fill-drip',
    icon: 'fas fa-fill-drip',
  },
  {
    name: 'film',
    icon: 'fas fa-film',
  },
  {
    name: 'filter',
    icon: 'fas fa-filter',
  },
  {
    name: 'fingerprint',
    icon: 'fas fa-fingerprint',
  },
  {
    name: 'fire',
    icon: 'fas fa-fire',
  },
  {
    name: 'fire-alt',
    icon: 'fas fa-fire-alt',
  },
  {
    name: 'fire-extinguisher',
    icon: 'fas fa-fire-extinguisher',
  },
  {
    name: 'firefox',
    icon: 'fab fa-firefox',
  },
  {
    name: 'firefox-browser',
    icon: 'fab fa-firefox-browser',
  },
  {
    name: 'first-aid',
    icon: 'fas fa-first-aid',
  },
  {
    name: 'first-order',
    icon: 'fab fa-first-order',
  },
  {
    name: 'first-order-alt',
    icon: 'fab fa-first-order-alt',
  },
  {
    name: 'firstdraft',
    icon: 'fab fa-firstdraft',
  },
  {
    name: 'fish',
    icon: 'fas fa-fish',
  },
  {
    name: 'fist-raised',
    icon: 'fas fa-fist-raised',
  },
  {
    name: 'flag',
    icon: 'fas fa-flag',
  },
  {
    name: 'flag',
    icon: 'far fa-flag',
  },
  {
    name: 'flag-checkered',
    icon: 'fas fa-flag-checkered',
  },
  {
    name: 'flag-usa',
    icon: 'fas fa-flag-usa',
  },
  {
    name: 'flask',
    icon: 'fas fa-flask',
  },
  {
    name: 'flickr',
    icon: 'fab fa-flickr',
  },
  {
    name: 'flipboard',
    icon: 'fab fa-flipboard',
  },
  {
    name: 'flushed',
    icon: 'fas fa-flushed',
  },
  {
    name: 'flushed',
    icon: 'far fa-flushed',
  },
  {
    name: 'fly',
    icon: 'fab fa-fly',
  },
  {
    name: 'folder',
    icon: 'fas fa-folder',
  },
  {
    name: 'folder',
    icon: 'far fa-folder',
  },
  {
    name: 'folder-minus',
    icon: 'fas fa-folder-minus',
  },
  {
    name: 'folder-open',
    icon: 'fas fa-folder-open',
  },
  {
    name: 'folder-open',
    icon: 'far fa-folder-open',
  },
  {
    name: 'folder-plus',
    icon: 'fas fa-folder-plus',
  },
  {
    name: 'font',
    icon: 'fas fa-font',
  },
  {
    name: 'font-awesome',
    icon: 'fab fa-font-awesome',
  },
  {
    name: 'font-awesome-alt',
    icon: 'fab fa-font-awesome-alt',
  },
  {
    name: 'font-awesome-flag',
    icon: 'fab fa-font-awesome-flag',
  },
  {
    name: 'fonticons',
    icon: 'fab fa-fonticons',
  },
  {
    name: 'fonticons-fi',
    icon: 'fab fa-fonticons-fi',
  },
  {
    name: 'football-ball',
    icon: 'fas fa-football-ball',
  },
  {
    name: 'fort-awesome',
    icon: 'fab fa-fort-awesome',
  },
  {
    name: 'fort-awesome-alt',
    icon: 'fab fa-fort-awesome-alt',
  },
  {
    name: 'forumbee',
    icon: 'fab fa-forumbee',
  },
  {
    name: 'forward',
    icon: 'fas fa-forward',
  },
  {
    name: 'foursquare',
    icon: 'fab fa-foursquare',
  },
  {
    name: 'free-code-camp',
    icon: 'fab fa-free-code-camp',
  },
  {
    name: 'freebsd',
    icon: 'fab fa-freebsd',
  },
  {
    name: 'frog',
    icon: 'fas fa-frog',
  },
  {
    name: 'frown',
    icon: 'fas fa-frown',
  },
  {
    name: 'frown',
    icon: 'far fa-frown',
  },
  {
    name: 'frown-open',
    icon: 'fas fa-frown-open',
  },
  {
    name: 'frown-open',
    icon: 'far fa-frown-open',
  },
  {
    name: 'fulcrum',
    icon: 'fab fa-fulcrum',
  },
  {
    name: 'funnel-dollar',
    icon: 'fas fa-funnel-dollar',
  },
  {
    name: 'futbol',
    icon: 'fas fa-futbol',
  },
  {
    name: 'futbol',
    icon: 'far fa-futbol',
  },
  {
    name: 'galactic-republic',
    icon: 'fab fa-galactic-republic',
  },
  {
    name: 'galactic-senate',
    icon: 'fab fa-galactic-senate',
  },
  {
    name: 'gamepad',
    icon: 'fas fa-gamepad',
  },
  {
    name: 'gas-pump',
    icon: 'fas fa-gas-pump',
  },
  {
    name: 'gavel',
    icon: 'fas fa-gavel',
  },
  {
    name: 'gem',
    icon: 'fas fa-gem',
  },
  {
    name: 'gem',
    icon: 'far fa-gem',
  },
  {
    name: 'genderless',
    icon: 'fas fa-genderless',
  },
  {
    name: 'get-pocket',
    icon: 'fab fa-get-pocket',
  },
  {
    name: 'gg',
    icon: 'fab fa-gg',
  },
  {
    name: 'gg-circle',
    icon: 'fab fa-gg-circle',
  },
  {
    name: 'ghost',
    icon: 'fas fa-ghost',
  },
  {
    name: 'gift',
    icon: 'fas fa-gift',
  },
  {
    name: 'gifts',
    icon: 'fas fa-gifts',
  },
  {
    name: 'git',
    icon: 'fab fa-git',
  },
  {
    name: 'git-alt',
    icon: 'fab fa-git-alt',
  },
  {
    name: 'git-square',
    icon: 'fab fa-git-square',
  },
  {
    name: 'github',
    icon: 'fab fa-github',
  },
  {
    name: 'github-alt',
    icon: 'fab fa-github-alt',
  },
  {
    name: 'github-square',
    icon: 'fab fa-github-square',
  },
  {
    name: 'gitkraken',
    icon: 'fab fa-gitkraken',
  },
  {
    name: 'gitlab',
    icon: 'fab fa-gitlab',
  },
  {
    name: 'gitter',
    icon: 'fab fa-gitter',
  },
  {
    name: 'glass-cheers',
    icon: 'fas fa-glass-cheers',
  },
  {
    name: 'glass-martini',
    icon: 'fas fa-glass-martini',
  },
  {
    name: 'glass-martini-alt',
    icon: 'fas fa-glass-martini-alt',
  },
  {
    name: 'glass-whiskey',
    icon: 'fas fa-glass-whiskey',
  },
  {
    name: 'glasses',
    icon: 'fas fa-glasses',
  },
  {
    name: 'glide',
    icon: 'fab fa-glide',
  },
  {
    name: 'glide-g',
    icon: 'fab fa-glide-g',
  },
  {
    name: 'globe',
    icon: 'fas fa-globe',
  },
  {
    name: 'globe-africa',
    icon: 'fas fa-globe-africa',
  },
  {
    name: 'globe-americas',
    icon: 'fas fa-globe-americas',
  },
  {
    name: 'globe-asia',
    icon: 'fas fa-globe-asia',
  },
  {
    name: 'globe-europe',
    icon: 'fas fa-globe-europe',
  },
  {
    name: 'gofore',
    icon: 'fab fa-gofore',
  },
  {
    name: 'golf-ball',
    icon: 'fas fa-golf-ball',
  },
  {
    name: 'goodreads',
    icon: 'fab fa-goodreads',
  },
  {
    name: 'goodreads-g',
    icon: 'fab fa-goodreads-g',
  },
  {
    name: 'google',
    icon: 'fab fa-google',
  },
  {
    name: 'google-drive',
    icon: 'fab fa-google-drive',
  },
  {
    name: 'google-pay',
    icon: 'fab fa-google-pay',
  },
  {
    name: 'google-play',
    icon: 'fab fa-google-play',
  },
  {
    name: 'google-plus',
    icon: 'fab fa-google-plus',
  },
  {
    name: 'google-plus-g',
    icon: 'fab fa-google-plus-g',
  },
  {
    name: 'google-plus-square',
    icon: 'fab fa-google-plus-square',
  },
  {
    name: 'google-wallet',
    icon: 'fab fa-google-wallet',
  },
  {
    name: 'gopuram',
    icon: 'fas fa-gopuram',
  },
  {
    name: 'graduation-cap',
    icon: 'fas fa-graduation-cap',
  },
  {
    name: 'gratipay',
    icon: 'fab fa-gratipay',
  },
  {
    name: 'grav',
    icon: 'fab fa-grav',
  },
  {
    name: 'greater-than',
    icon: 'fas fa-greater-than',
  },
  {
    name: 'greater-than-equal',
    icon: 'fas fa-greater-than-equal',
  },
  {
    name: 'grimace',
    icon: 'fas fa-grimace',
  },
  {
    name: 'grimace',
    icon: 'far fa-grimace',
  },
  {
    name: 'grin',
    icon: 'fas fa-grin',
  },
  {
    name: 'grin',
    icon: 'far fa-grin',
  },
  {
    name: 'grin-alt',
    icon: 'fas fa-grin-alt',
  },
  {
    name: 'grin-alt',
    icon: 'far fa-grin-alt',
  },
  {
    name: 'grin-beam',
    icon: 'fas fa-grin-beam',
  },
  {
    name: 'grin-beam',
    icon: 'far fa-grin-beam',
  },
  {
    name: 'grin-beam-sweat',
    icon: 'fas fa-grin-beam-sweat',
  },
  {
    name: 'grin-beam-sweat',
    icon: 'far fa-grin-beam-sweat',
  },
  {
    name: 'grin-hearts',
    icon: 'fas fa-grin-hearts',
  },
  {
    name: 'grin-hearts',
    icon: 'far fa-grin-hearts',
  },
  {
    name: 'grin-squint',
    icon: 'fas fa-grin-squint',
  },
  {
    name: 'grin-squint',
    icon: 'far fa-grin-squint',
  },
  {
    name: 'grin-squint-tears',
    icon: 'fas fa-grin-squint-tears',
  },
  {
    name: 'grin-squint-tears',
    icon: 'far fa-grin-squint-tears',
  },
  {
    name: 'grin-stars',
    icon: 'fas fa-grin-stars',
  },
  {
    name: 'grin-stars',
    icon: 'far fa-grin-stars',
  },
  {
    name: 'grin-tears',
    icon: 'fas fa-grin-tears',
  },
  {
    name: 'grin-tears',
    icon: 'far fa-grin-tears',
  },
  {
    name: 'grin-tongue',
    icon: 'fas fa-grin-tongue',
  },
  {
    name: 'grin-tongue',
    icon: 'far fa-grin-tongue',
  },
  {
    name: 'grin-tongue-squint',
    icon: 'fas fa-grin-tongue-squint',
  },
  {
    name: 'grin-tongue-squint',
    icon: 'far fa-grin-tongue-squint',
  },
  {
    name: 'grin-tongue-wink',
    icon: 'fas fa-grin-tongue-wink',
  },
  {
    name: 'grin-wink',
    icon: 'fas fa-grin-wink',
  },
  {
    name: 'grin-wink',
    icon: 'far fa-grin-wink',
  },
  {
    name: 'grip-horizontal',
    icon: 'fas fa-grip-horizontal',
  },
  {
    name: 'grip-lines',
    icon: 'fas fa-grip-lines',
  },
  {
    name: 'grip-lines-vertical',
    icon: 'fas fa-grip-lines-vertical',
  },
  {
    name: 'grip-vertical',
    icon: 'fas fa-grip-vertical',
  },
  {
    name: 'gripfire',
    icon: 'fab fa-gripfire',
  },
  {
    name: 'grunt',
    icon: 'fab fa-grunt',
  },
  {
    name: 'guitar',
    icon: 'fas fa-guitar',
  },
  {
    name: 'gulp',
    icon: 'fab fa-gulp',
  },
  {
    name: 'h-square',
    icon: 'fas fa-h-square',
  },
  {
    name: 'hacker-news',
    icon: 'fab fa-hacker-news',
  },
  {
    name: 'hacker-news-square',
    icon: 'fab fa-hacker-news-square',
  },
  {
    name: 'hackerrank',
    icon: 'fab fa-hackerrank',
  },
  {
    name: 'hamburger',
    icon: 'fas fa-hamburger',
  },
  {
    name: 'hammer',
    icon: 'fas fa-hammer',
  },
  {
    name: 'hamsa',
    icon: 'fas fa-hamsa',
  },
  {
    name: 'hand-holding',
    icon: 'fas fa-hand-holding',
  },
  {
    name: 'hand-holding-heart',
    icon: 'fas fa-hand-holding-heart',
  },
  {
    name: 'hand-holding-medical',
    icon: 'fas fa-hand-holding-medical',
  },
  {
    name: 'hand-holding-usd',
    icon: 'fas fa-hand-holding-usd',
  },
  {
    name: 'hand-holding-water',
    icon: 'fas fa-hand-holding-water',
  },
  {
    name: 'hand-lizard',
    icon: 'fas fa-hand-lizard',
  },
  {
    name: 'hand-lizard',
    icon: 'far fa-hand-lizard',
  },
  {
    name: 'hand-middle-finger',
    icon: 'fas fa-hand-middle-finger',
  },
  {
    name: 'hand-paper',
    icon: 'fas fa-hand-paper',
  },
  {
    name: 'hand-paper',
    icon: 'far fa-hand-paper',
  },
  {
    name: 'hand-peace',
    icon: 'fas fa-hand-peace',
  },
  {
    name: 'hand-peace',
    icon: 'far fa-hand-peace',
  },
  {
    name: 'hand-point-down',
    icon: 'fas fa-hand-point-down',
  },
  {
    name: 'hand-point-down',
    icon: 'far fa-hand-point-down',
  },
  {
    name: 'hand-point-left',
    icon: 'fas fa-hand-point-left',
  },
  {
    name: 'hand-point-left',
    icon: 'far fa-hand-point-left',
  },
  {
    name: 'hand-point-right',
    icon: 'fas fa-hand-point-right',
  },
  {
    name: 'hand-point-right',
    icon: 'far fa-hand-point-right',
  },
  {
    name: 'hand-point-up',
    icon: 'fas fa-hand-point-up',
  },
  {
    name: 'hand-point-up',
    icon: 'far fa-hand-point-up',
  },
  {
    name: 'hand-pointer',
    icon: 'fas fa-hand-pointer',
  },
  {
    name: 'hand-pointer',
    icon: 'far fa-hand-pointer',
  },
  {
    name: 'hand-rock',
    icon: 'fas fa-hand-rock',
  },
  {
    name: 'hand-rock',
    icon: 'far fa-hand-rock',
  },
  {
    name: 'hand-scissors',
    icon: 'fas fa-hand-scissors',
  },
  {
    name: 'hand-scissors',
    icon: 'far fa-hand-scissors',
  },
  {
    name: 'hand-sparkles',
    icon: 'fas fa-hand-sparkles',
  },
  {
    name: 'hand-spock',
    icon: 'fas fa-hand-spock',
  },
  {
    name: 'hand-spock',
    icon: 'far fa-hand-spock',
  },
  {
    name: 'hands',
    icon: 'fas fa-hands',
  },
  {
    name: 'hands-helping',
    icon: 'fas fa-hands-helping',
  },
  {
    name: 'hands-wash',
    icon: 'fas fa-hands-wash',
  },
  {
    name: 'handshake',
    icon: 'fas fa-handshake',
  },
  {
    name: 'handshake',
    icon: 'far fa-handshake',
  },
  {
    name: 'handshake-alt-slash',
    icon: 'fas fa-handshake-alt-slash',
  },
  {
    name: 'handshake-slash',
    icon: 'fas fa-handshake-slash',
  },
  {
    name: 'hanukiah',
    icon: 'fas fa-hanukiah',
  },
  {
    name: 'hard-hat',
    icon: 'fas fa-hard-hat',
  },
  {
    name: 'hashtag',
    icon: 'fas fa-hashtag',
  },
  {
    name: 'hat-cowboy',
    icon: 'fas fa-hat-cowboy',
  },
  {
    name: 'hat-cowboy-side',
    icon: 'fas fa-hat-cowboy-side',
  },
  {
    name: 'hat-wizard',
    icon: 'fas fa-hat-wizard',
  },
  {
    name: 'hdd',
    icon: 'fas fa-hdd',
  },
  {
    name: 'hdd',
    icon: 'far fa-hdd',
  },
  {
    name: 'head-side-cough',
    icon: 'fas fa-head-side-cough',
  },
  {
    name: 'head-side-cough-slash',
    icon: 'fas fa-head-side-cough-slash',
  },
  {
    name: 'head-side-mask',
    icon: 'fas fa-head-side-mask',
  },
  {
    name: 'head-side-virus',
    icon: 'fas fa-head-side-virus',
  },
  {
    name: 'heading',
    icon: 'fas fa-heading',
  },
  {
    name: 'headphones',
    icon: 'fas fa-headphones',
  },
  {
    name: 'headphones-alt',
    icon: 'fas fa-headphones-alt',
  },
  {
    name: 'headset',
    icon: 'fas fa-headset',
  },
  {
    name: 'heart',
    icon: 'fas fa-heart',
  },
  {
    name: 'heart',
    icon: 'far fa-heart',
  },
  {
    name: 'heart-broken',
    icon: 'fas fa-heart-broken',
  },
  {
    name: 'heartbeat',
    icon: 'fas fa-heartbeat',
  },
  {
    name: 'helicopter',
    icon: 'fas fa-helicopter',
  },
  {
    name: 'highlighter',
    icon: 'fas fa-highlighter',
  },
  {
    name: 'hiking',
    icon: 'fas fa-hiking',
  },
  {
    name: 'hippo',
    icon: 'fas fa-hippo',
  },
  {
    name: 'hips',
    icon: 'fab fa-hips',
  },
  {
    name: 'hire-a-helper',
    icon: 'fab fa-hire-a-helper',
  },
  {
    name: 'history',
    icon: 'fas fa-history',
  },
  {
    name: 'hockey-puck',
    icon: 'fas fa-hockey-puck',
  },
  {
    name: 'holly-berry',
    icon: 'fas fa-holly-berry',
  },
  {
    name: 'home',
    icon: 'fas fa-home',
  },
  {
    name: 'hooli',
    icon: 'fab fa-hooli',
  },
  {
    name: 'hornbill',
    icon: 'fab fa-hornbill',
  },
  {
    name: 'horse',
    icon: 'fas fa-horse',
  },
  {
    name: 'horse-head',
    icon: 'fas fa-horse-head',
  },
  {
    name: 'hospital',
    icon: 'fas fa-hospital',
  },
  {
    name: 'hospital',
    icon: 'far fa-hospital',
  },
  {
    name: 'hospital-alt',
    icon: 'fas fa-hospital-alt',
  },
  {
    name: 'hospital-symbol',
    icon: 'fas fa-hospital-symbol',
  },
  {
    name: 'hospital-user',
    icon: 'fas fa-hospital-user',
  },
  {
    name: 'hot-tub',
    icon: 'fas fa-hot-tub',
  },
  {
    name: 'hotdog',
    icon: 'fas fa-hotdog',
  },
  {
    name: 'hotel',
    icon: 'fas fa-hotel',
  },
  {
    name: 'hotjar',
    icon: 'fab fa-hotjar',
  },
  {
    name: 'hourglass',
    icon: 'fas fa-hourglass',
  },
  {
    name: 'hourglass',
    icon: 'far fa-hourglass',
  },
  {
    name: 'hourglass-end',
    icon: 'fas fa-hourglass-end',
  },
  {
    name: 'hourglass-half',
    icon: 'fas fa-hourglass-half',
  },
  {
    name: 'hourglass-start',
    icon: 'fas fa-hourglass-start',
  },
  {
    name: 'house-damage',
    icon: 'fas fa-house-damage',
  },
  {
    name: 'house-user',
    icon: 'fas fa-house-user',
  },
  {
    name: 'houzz',
    icon: 'fab fa-houzz',
  },
  {
    name: 'hryvnia',
    icon: 'fas fa-hryvnia',
  },
  {
    name: 'html5',
    icon: 'fab fa-html5',
  },
  {
    name: 'hubspot',
    icon: 'fab fa-hubspot',
  },
  {
    name: 'i-cursor',
    icon: 'fas fa-i-cursor',
  },
  {
    name: 'ice-cream',
    icon: 'fas fa-ice-cream',
  },
  {
    name: 'icicles',
    icon: 'fas fa-icicles',
  },
  {
    name: 'icons',
    icon: 'fas fa-icons',
  },
  {
    name: 'id-badge',
    icon: 'fas fa-id-badge',
  },
  {
    name: 'id-badge',
    icon: 'far fa-id-badge',
  },
  {
    name: 'id-card',
    icon: 'fas fa-id-card',
  },
  {
    name: 'id-card',
    icon: 'far fa-id-card',
  },
  {
    name: 'id-card-alt',
    icon: 'fas fa-id-card-alt',
  },
  {
    name: 'ideal',
    icon: 'fab fa-ideal',
  },
  {
    name: 'igloo',
    icon: 'fas fa-igloo',
  },
  {
    name: 'image',
    icon: 'fas fa-image',
  },
  {
    name: 'image',
    icon: 'far fa-image',
  },
  {
    name: 'images',
    icon: 'fas fa-images',
  },
  {
    name: 'images',
    icon: 'far fa-images',
  },
  {
    name: 'imdb',
    icon: 'fab fa-imdb',
  },
  {
    name: 'inbox',
    icon: 'fas fa-inbox',
  },
  {
    name: 'indent',
    icon: 'fas fa-indent',
  },
  {
    name: 'industry',
    icon: 'fas fa-industry',
  },
  {
    name: 'infinity',
    icon: 'fas fa-infinity',
  },
  {
    name: 'info',
    icon: 'fas fa-info',
  },
  {
    name: 'info-circle',
    icon: 'fas fa-info-circle',
  },
  {
    name: 'instagram',
    icon: 'fab fa-instagram',
  },
  {
    name: 'instagram-square',
    icon: 'fab fa-instagram-square',
  },
  {
    name: 'intercom',
    icon: 'fab fa-intercom',
  },
  {
    name: 'internet-explorer',
    icon: 'fab fa-internet-explorer',
  },
  {
    name: 'invision',
    icon: 'fab fa-invision',
  },
  {
    name: 'ioxhost',
    icon: 'fab fa-ioxhost',
  },
  {
    name: 'italic',
    icon: 'fas fa-italic',
  },
  {
    name: 'itch-io',
    icon: 'fab fa-itch-io',
  },
  {
    name: 'itunes',
    icon: 'fab fa-itunes',
  },
  {
    name: 'itunes-note',
    icon: 'fab fa-itunes-note',
  },
  {
    name: 'java',
    icon: 'fab fa-java',
  },
  {
    name: 'jedi',
    icon: 'fas fa-jedi',
  },
  {
    name: 'jedi-order',
    icon: 'fab fa-jedi-order',
  },
  {
    name: 'jenkins',
    icon: 'fab fa-jenkins',
  },
  {
    name: 'jira',
    icon: 'fab fa-jira',
  },
  {
    name: 'joget',
    icon: 'fab fa-joget',
  },
  {
    name: 'joint',
    icon: 'fas fa-joint',
  },
  {
    name: 'joomla',
    icon: 'fab fa-joomla',
  },
  {
    name: 'journal-whills',
    icon: 'fas fa-journal-whills',
  },
  {
    name: 'js',
    icon: 'fab fa-js',
  },
  {
    name: 'js-square',
    icon: 'fab fa-js-square',
  },
  {
    name: 'jsfiddle',
    icon: 'fab fa-jsfiddle',
  },
  {
    name: 'kaaba',
    icon: 'fas fa-kaaba',
  },
  {
    name: 'kaggle',
    icon: 'fab fa-kaggle',
  },
  {
    name: 'key',
    icon: 'fas fa-key',
  },
  {
    name: 'keybase',
    icon: 'fab fa-keybase',
  },
  {
    name: 'keyboard',
    icon: 'fas fa-keyboard',
  },
  {
    name: 'keyboard',
    icon: 'far fa-keyboard',
  },
  {
    name: 'keycdn',
    icon: 'fab fa-keycdn',
  },
  {
    name: 'khanda',
    icon: 'fas fa-khanda',
  },
  {
    name: 'kickstarter',
    icon: 'fab fa-kickstarter',
  },
  {
    name: 'kickstarter-k',
    icon: 'fab fa-kickstarter-k',
  },
  {
    name: 'kiss',
    icon: 'fas fa-kiss',
  },
  {
    name: 'kiss',
    icon: 'far fa-kiss',
  },
  {
    name: 'kiss-beam',
    icon: 'fas fa-kiss-beam',
  },
  {
    name: 'kiss-beam',
    icon: 'far fa-kiss-beam',
  },
  {
    name: 'kiss-wink-heart',
    icon: 'fas fa-kiss-wink-heart',
  },
  {
    name: 'kiss-wink-heart',
    icon: 'far fa-kiss-wink-heart',
  },
  {
    name: 'kiwi-bird',
    icon: 'fas fa-kiwi-bird',
  },
  {
    name: 'korvue',
    icon: 'fab fa-korvue',
  },
  {
    name: 'landmark',
    icon: 'fas fa-landmark',
  },
  {
    name: 'language',
    icon: 'fas fa-language',
  },
  {
    name: 'laptop',
    icon: 'fas fa-laptop',
  },
  {
    name: 'laptop-code',
    icon: 'fas fa-laptop-code',
  },
  {
    name: 'laptop-house',
    icon: 'fas fa-laptop-house',
  },
  {
    name: 'laptop-medical',
    icon: 'fas fa-laptop-medical',
  },
  {
    name: 'laravel',
    icon: 'fab fa-laravel',
  },
  {
    name: 'lastfm',
    icon: 'fab fa-lastfm',
  },
  {
    name: 'lastfm-square',
    icon: 'fab fa-lastfm-square',
  },
  {
    name: 'laugh',
    icon: 'fas fa-laugh',
  },
  {
    name: 'laugh',
    icon: 'far fa-laugh',
  },
  {
    name: 'laugh-beam',
    icon: 'fas fa-laugh-beam',
  },
  {
    name: 'laugh-beam',
    icon: 'far fa-laugh-beam',
  },
  {
    name: 'laugh-squint',
    icon: 'fas fa-laugh-squint',
  },
  {
    name: 'laugh-squint',
    icon: 'far fa-laugh-squint',
  },
  {
    name: 'laugh-wink',
    icon: 'fas fa-laugh-wink',
  },
  {
    name: 'laugh-wink',
    icon: 'far fa-laugh-wink',
  },
  {
    name: 'layer-group',
    icon: 'fas fa-layer-group',
  },
  {
    name: 'leaf',
    icon: 'fas fa-leaf',
  },
  {
    name: 'leanpub',
    icon: 'fab fa-leanpub',
  },
  {
    name: 'lemon',
    icon: 'fas fa-lemon',
  },
  {
    name: 'lemon',
    icon: 'far fa-lemon',
  },
  {
    name: 'less',
    icon: 'fab fa-less',
  },
  {
    name: 'less-than',
    icon: 'fas fa-less-than',
  },
  {
    name: 'less-than-equal',
    icon: 'fas fa-less-than-equal',
  },
  {
    name: 'level-down-alt',
    icon: 'fas fa-level-down-alt',
  },
  {
    name: 'level-up-alt',
    icon: 'fas fa-level-up-alt',
  },
  {
    name: 'life-ring',
    icon: 'fas fa-life-ring',
  },
  {
    name: 'life-ring',
    icon: 'far fa-life-ring',
  },
  {
    name: 'lightbulb',
    icon: 'fas fa-lightbulb',
  },
  {
    name: 'lightbulb',
    icon: 'far fa-lightbulb',
  },
  {
    name: 'line',
    icon: 'fab fa-line',
  },
  {
    name: 'link',
    icon: 'fas fa-link',
  },
  {
    name: 'linkedin',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'linkedin-in',
    icon: 'fab fa-linkedin-in',
  },
  {
    name: 'linode',
    icon: 'fab fa-linode',
  },
  {
    name: 'linux',
    icon: 'fab fa-linux',
  },
  {
    name: 'lira-sign',
    icon: 'fas fa-lira-sign',
  },
  {
    name: 'list',
    icon: 'fas fa-list',
  },
  {
    name: 'list-alt',
    icon: 'fas fa-list-alt',
  },
  {
    name: 'list-alt',
    icon: 'far fa-list-alt',
  },
  {
    name: 'list-ol',
    icon: 'fas fa-list-ol',
  },
  {
    name: 'list-ul',
    icon: 'fas fa-list-ul',
  },
  {
    name: 'location-arrow',
    icon: 'fas fa-location-arrow',
  },
  {
    name: 'lock',
    icon: 'fas fa-lock',
  },
  {
    name: 'lock-open',
    icon: 'fas fa-lock-open',
  },
  {
    name: 'long-arrow-alt-down',
    icon: 'fas fa-long-arrow-alt-down',
  },
  {
    name: 'long-arrow-alt-left',
    icon: 'fas fa-long-arrow-alt-left',
  },
  {
    name: 'long-arrow-alt-right',
    icon: 'fas fa-long-arrow-alt-right',
  },
  {
    name: 'long-arrow-alt-up',
    icon: 'fas fa-long-arrow-alt-up',
  },
  {
    name: 'low-vision',
    icon: 'fas fa-low-vision',
  },
  {
    name: 'luggage-cart',
    icon: 'fas fa-luggage-cart',
  },
  {
    name: 'lungs',
    icon: 'fas fa-lungs',
  },
  {
    name: 'lungs-virus',
    icon: 'fas fa-lungs-virus',
  },
  {
    name: 'lyft',
    icon: 'fab fa-lyft',
  },
  {
    name: 'magento',
    icon: 'fab fa-magento',
  },
  {
    name: 'magic',
    icon: 'fas fa-magic',
  },
  {
    name: 'magnet',
    icon: 'fas fa-magnet',
  },
  {
    name: 'mail-bulk',
    icon: 'fas fa-mail-bulk',
  },
  {
    name: 'mailchimp',
    icon: 'fab fa-mailchimp',
  },
  {
    name: 'male',
    icon: 'fas fa-male',
  },
  {
    name: 'mandalorian',
    icon: 'fab fa-mandalorian',
  },
  {
    name: 'map',
    icon: 'fas fa-map',
  },
  {
    name: 'map',
    icon: 'far fa-map',
  },
  {
    name: 'map-marked',
    icon: 'fas fa-map-marked',
  },
  {
    name: 'map-marked-alt',
    icon: 'fas fa-map-marked-alt',
  },
  {
    name: 'map-marker',
    icon: 'fas fa-map-marker',
  },
  {
    name: 'map-marker-alt',
    icon: 'fas fa-map-marker-alt',
  },
  {
    name: 'map-pin',
    icon: 'fas fa-map-pin',
  },
  {
    name: 'map-signs',
    icon: 'fas fa-map-signs',
  },
  {
    name: 'markdown',
    icon: 'fab fa-markdown',
  },
  {
    name: 'marker',
    icon: 'fas fa-marker',
  },
  {
    name: 'mars',
    icon: 'fas fa-mars',
  },
  {
    name: 'mars-double',
    icon: 'fas fa-mars-double',
  },
  {
    name: 'mars-stroke',
    icon: 'fas fa-mars-stroke',
  },
  {
    name: 'mars-stroke-h',
    icon: 'fas fa-mars-stroke-h',
  },
  {
    name: 'mars-stroke-v',
    icon: 'fas fa-mars-stroke-v',
  },
  {
    name: 'mask',
    icon: 'fas fa-mask',
  },
  {
    name: 'mastodon',
    icon: 'fab fa-mastodon',
  },
  {
    name: 'maxcdn',
    icon: 'fab fa-maxcdn',
  },
  {
    name: 'mdb',
    icon: 'fab fa-mdb',
  },
  {
    name: 'medal',
    icon: 'fas fa-medal',
  },
  {
    name: 'medapps',
    icon: 'fab fa-medapps',
  },
  {
    name: 'medium',
    icon: 'fab fa-medium',
  },
  {
    name: 'medium-m',
    icon: 'fab fa-medium-m',
  },
  {
    name: 'medkit',
    icon: 'fas fa-medkit',
  },
  {
    name: 'medrt',
    icon: 'fab fa-medrt',
  },
  {
    name: 'meetup',
    icon: 'fab fa-meetup',
  },
  {
    name: 'megaport',
    icon: 'fab fa-megaport',
  },
  {
    name: 'meh',
    icon: 'fas fa-meh',
  },
  {
    name: 'meh',
    icon: 'far fa-meh',
  },
  {
    name: 'meh-blank',
    icon: 'fas fa-meh-blank',
  },
  {
    name: 'meh-blank',
    icon: 'far fa-meh-blank',
  },
  {
    name: 'meh-rolling-eyes',
    icon: 'fas fa-meh-rolling-eyes',
  },
  {
    name: 'meh-rolling-eyes',
    icon: 'far fa-meh-rolling-eyes',
  },
  {
    name: 'memory',
    icon: 'fas fa-memory',
  },
  {
    name: 'mendeley',
    icon: 'fab fa-mendeley',
  },
  {
    name: 'menorah',
    icon: 'fas fa-menorah',
  },
  {
    name: 'mercury',
    icon: 'fas fa-mercury',
  },
  {
    name: 'meteor',
    icon: 'fas fa-meteor',
  },
  {
    name: 'microblog',
    icon: 'fab fa-microblog',
  },
  {
    name: 'microchip',
    icon: 'fas fa-microchip',
  },
  {
    name: 'microphone',
    icon: 'fas fa-microphone',
  },
  {
    name: 'microphone-alt',
    icon: 'fas fa-microphone-alt',
  },
  {
    name: 'microphone-alt-slash',
    icon: 'fas fa-microphone-alt-slash',
  },
  {
    name: 'microphone-slash',
    icon: 'fas fa-microphone-slash',
  },
  {
    name: 'microscope',
    icon: 'fas fa-microscope',
  },
  {
    name: 'microsoft',
    icon: 'fab fa-microsoft',
  },
  {
    name: 'minus',
    icon: 'fas fa-minus',
  },
  {
    name: 'minus-circle',
    icon: 'fas fa-minus-circle',
  },
  {
    name: 'minus-square',
    icon: 'fas fa-minus-square',
  },
  {
    name: 'minus-square',
    icon: 'far fa-minus-square',
  },
  {
    name: 'mitten',
    icon: 'fas fa-mitten',
  },
  {
    name: 'mix',
    icon: 'fab fa-mix',
  },
  {
    name: 'mixcloud',
    icon: 'fab fa-mixcloud',
  },
  {
    name: 'mixer',
    icon: 'fab fa-mixer',
  },
  {
    name: 'mizuni',
    icon: 'fab fa-mizuni',
  },
  {
    name: 'mobile',
    icon: 'fas fa-mobile',
  },
  {
    name: 'mobile-alt',
    icon: 'fas fa-mobile-alt',
  },
  {
    name: 'modx',
    icon: 'fab fa-modx',
  },
  {
    name: 'monero',
    icon: 'fab fa-monero',
  },
  {
    name: 'money-bill',
    icon: 'fas fa-money-bill',
  },
  {
    name: 'money-bill-alt',
    icon: 'fas fa-money-bill-alt',
  },
  {
    name: 'money-bill-alt',
    icon: 'far fa-money-bill-alt',
  },
  {
    name: 'money-bill-wave',
    icon: 'fas fa-money-bill-wave',
  },
  {
    name: 'money-bill-wave-alt',
    icon: 'fas fa-money-bill-wave-alt',
  },
  {
    name: 'money-check',
    icon: 'fas fa-money-check',
  },
  {
    name: 'money-check-alt',
    icon: 'fas fa-money-check-alt',
  },
  {
    name: 'monument',
    icon: 'fas fa-monument',
  },
  {
    name: 'moon',
    icon: 'fas fa-moon',
  },
  {
    name: 'moon',
    icon: 'far fa-moon',
  },
  {
    name: 'mortar-pestle',
    icon: 'fas fa-mortar-pestle',
  },
  {
    name: 'mosque',
    icon: 'fas fa-mosque',
  },
  {
    name: 'motorcycle',
    icon: 'fas fa-motorcycle',
  },
  {
    name: 'mountain',
    icon: 'fas fa-mountain',
  },
  {
    name: 'mouse',
    icon: 'fas fa-mouse',
  },
  {
    name: 'mouse-pointer',
    icon: 'fas fa-mouse-pointer',
  },
  {
    name: 'mug-hot',
    icon: 'fas fa-mug-hot',
  },
  {
    name: 'music',
    icon: 'fas fa-music',
  },
  {
    name: 'napster',
    icon: 'fab fa-napster',
  },
  {
    name: 'neos',
    icon: 'fab fa-neos',
  },
  {
    name: 'network-wired',
    icon: 'fas fa-network-wired',
  },
  {
    name: 'neuter',
    icon: 'fas fa-neuter',
  },
  {
    name: 'newspaper',
    icon: 'fas fa-newspaper',
  },
  {
    name: 'newspaper',
    icon: 'far fa-newspaper',
  },
  {
    name: 'nimblr',
    icon: 'fab fa-nimblr',
  },
  {
    name: 'node',
    icon: 'fab fa-node',
  },
  {
    name: 'node-js',
    icon: 'fab fa-node-js',
  },
  {
    name: 'not-equal',
    icon: 'fas fa-not-equal',
  },
  {
    name: 'notes-medical',
    icon: 'fas fa-notes-medical',
  },
  {
    name: 'npm',
    icon: 'fab fa-npm',
  },
  {
    name: 'ns8',
    icon: 'fab fa-ns8',
  },
  {
    name: 'nutritionix',
    icon: 'fab fa-nutritionix',
  },
  {
    name: 'object-group',
    icon: 'fas fa-object-group',
  },
  {
    name: 'object-group',
    icon: 'far fa-object-group',
  },
  {
    name: 'object-ungroup',
    icon: 'fas fa-object-ungroup',
  },
  {
    name: 'object-ungroup',
    icon: 'far fa-object-ungroup',
  },
  {
    name: 'odnoklassniki',
    icon: 'fab fa-odnoklassniki',
  },
  {
    name: 'odnoklassniki-square',
    icon: 'fab fa-odnoklassniki-square',
  },
  {
    name: 'oil-can',
    icon: 'fas fa-oil-can',
  },
  {
    name: 'old-republic',
    icon: 'fab fa-old-republic',
  },
  {
    name: 'om',
    icon: 'fas fa-om',
  },
  {
    name: 'opencart',
    icon: 'fab fa-opencart',
  },
  {
    name: 'openid',
    icon: 'fab fa-openid',
  },
  {
    name: 'opera',
    icon: 'fab fa-opera',
  },
  {
    name: 'optin-monster',
    icon: 'fab fa-optin-monster',
  },
  {
    name: 'orcid',
    icon: 'fab fa-orcid',
  },
  {
    name: 'osi',
    icon: 'fab fa-osi',
  },
  {
    name: 'otter',
    icon: 'fas fa-otter',
  },
  {
    name: 'outdent',
    icon: 'fas fa-outdent',
  },
  {
    name: 'page4',
    icon: 'fab fa-page4',
  },
  {
    name: 'pagelines',
    icon: 'fab fa-pagelines',
  },
  {
    name: 'pager',
    icon: 'fas fa-pager',
  },
  {
    name: 'paint-brush',
    icon: 'fas fa-paint-brush',
  },
  {
    name: 'paint-roller',
    icon: 'fas fa-paint-roller',
  },
  {
    name: 'palette',
    icon: 'fas fa-palette',
  },
  {
    name: 'palfed',
    icon: 'fab fa-palfed',
  },
  {
    name: 'pallet',
    icon: 'fas fa-pallet',
  },
  {
    name: 'paper-plane',
    icon: 'fas fa-paper-plane',
  },
  {
    name: 'paper-plane',
    icon: 'far fa-paper-plane',
  },
  {
    name: 'paperclip',
    icon: 'fas fa-paperclip',
  },
  {
    name: 'parachute-box',
    icon: 'fas fa-parachute-box',
  },
  {
    name: 'paragraph',
    icon: 'fas fa-paragraph',
  },
  {
    name: 'parking',
    icon: 'fas fa-parking',
  },
  {
    name: 'passport',
    icon: 'fas fa-passport',
  },
  {
    name: 'pastafarianism',
    icon: 'fas fa-pastafarianism',
  },
  {
    name: 'paste',
    icon: 'fas fa-paste',
  },
  {
    name: 'patreon',
    icon: 'fab fa-patreon',
  },
  {
    name: 'pause',
    icon: 'fas fa-pause',
  },
  {
    name: 'pause-circle',
    icon: 'fas fa-pause-circle',
  },
  {
    name: 'pause-circle',
    icon: 'far fa-pause-circle',
  },
  {
    name: 'paw',
    icon: 'fas fa-paw',
  },
  {
    name: 'paypal',
    icon: 'fab fa-paypal',
  },
  {
    name: 'peace',
    icon: 'fas fa-peace',
  },
  {
    name: 'pen',
    icon: 'fas fa-pen',
  },
  {
    name: 'pen-alt',
    icon: 'fas fa-pen-alt',
  },
  {
    name: 'pen-fancy',
    icon: 'fas fa-pen-fancy',
  },
  {
    name: 'pen-nib',
    icon: 'fas fa-pen-nib',
  },
  {
    name: 'pen-square',
    icon: 'fas fa-pen-square',
  },
  {
    name: 'pencil-alt',
    icon: 'fas fa-pencil-alt',
  },
  {
    name: 'pencil-ruler',
    icon: 'fas fa-pencil-ruler',
  },
  {
    name: 'penny-arcade',
    icon: 'fab fa-penny-arcade',
  },
  {
    name: 'people-arrows',
    icon: 'fas fa-people-arrows',
  },
  {
    name: 'people-carry',
    icon: 'fas fa-people-carry',
  },
  {
    name: 'pepper-hot',
    icon: 'fas fa-pepper-hot',
  },
  {
    name: 'percent',
    icon: 'fas fa-percent',
  },
  {
    name: 'percentage',
    icon: 'fas fa-percentage',
  },
  {
    name: 'periscope',
    icon: 'fab fa-periscope',
  },
  {
    name: 'person-booth',
    icon: 'fas fa-person-booth',
  },
  {
    name: 'phabricator',
    icon: 'fab fa-phabricator',
  },
  {
    name: 'phoenix-framework',
    icon: 'fab fa-phoenix-framework',
  },
  {
    name: 'phoenix-squadron',
    icon: 'fab fa-phoenix-squadron',
  },
  {
    name: 'phone',
    icon: 'fas fa-phone',
  },
  {
    name: 'phone-alt',
    icon: 'fas fa-phone-alt',
  },
  {
    name: 'phone-slash',
    icon: 'fas fa-phone-slash',
  },
  {
    name: 'phone-square',
    icon: 'fas fa-phone-square',
  },
  {
    name: 'phone-square-alt',
    icon: 'fas fa-phone-square-alt',
  },
  {
    name: 'phone-volume',
    icon: 'fas fa-phone-volume',
  },
  {
    name: 'photo-video',
    icon: 'fas fa-photo-video',
  },
  {
    name: 'php',
    icon: 'fab fa-php',
  },
  {
    name: 'pied-piper',
    icon: 'fab fa-pied-piper',
  },
  {
    name: 'pied-piper-alt',
    icon: 'fab fa-pied-piper-alt',
  },
  {
    name: 'pied-piper-hat',
    icon: 'fab fa-pied-piper-hat',
  },
  {
    name: 'pied-piper-pp',
    icon: 'fab fa-pied-piper-pp',
  },
  {
    name: 'pied-piper-square',
    icon: 'fab fa-pied-piper-square',
  },
  {
    name: 'piggy-bank',
    icon: 'fas fa-piggy-bank',
  },
  {
    name: 'pills',
    icon: 'fas fa-pills',
  },
  {
    name: 'pinterest',
    icon: 'fab fa-pinterest',
  },
  {
    name: 'pinterest-p',
    icon: 'fab fa-pinterest-p',
  },
  {
    name: 'pinterest-square',
    icon: 'fab fa-pinterest-square',
  },
  {
    name: 'pizza-slice',
    icon: 'fas fa-pizza-slice',
  },
  {
    name: 'place-of-worship',
    icon: 'fas fa-place-of-worship',
  },
  {
    name: 'plane',
    icon: 'fas fa-plane',
  },
  {
    name: 'plane-arrival',
    icon: 'fas fa-plane-arrival',
  },
  {
    name: 'plane-departure',
    icon: 'fas fa-plane-departure',
  },
  {
    name: 'plane-slash',
    icon: 'fas fa-plane-slash',
  },
  {
    name: 'play',
    icon: 'fas fa-play',
  },
  {
    name: 'play-circle',
    icon: 'fas fa-play-circle',
  },
  {
    name: 'play-circle',
    icon: 'far fa-play-circle',
  },
  {
    name: 'playstation',
    icon: 'fab fa-playstation',
  },
  {
    name: 'plug',
    icon: 'fas fa-plug',
  },
  {
    name: 'plus',
    icon: 'fas fa-plus',
  },
  {
    name: 'plus-circle',
    icon: 'fas fa-plus-circle',
  },
  {
    name: 'plus-square',
    icon: 'fas fa-plus-square',
  },
  {
    name: 'plus-square',
    icon: 'far fa-plus-square',
  },
  {
    name: 'podcast',
    icon: 'fas fa-podcast',
  },
  {
    name: 'poll',
    icon: 'fas fa-poll',
  },
  {
    name: 'poll-h',
    icon: 'fas fa-poll-h',
  },
  {
    name: 'poo',
    icon: 'fas fa-poo',
  },
  {
    name: 'poo-storm',
    icon: 'fas fa-poo-storm',
  },
  {
    name: 'poop',
    icon: 'fas fa-poop',
  },
  {
    name: 'portrait',
    icon: 'fas fa-portrait',
  },
  {
    name: 'pound-sign',
    icon: 'fas fa-pound-sign',
  },
  {
    name: 'power-off',
    icon: 'fas fa-power-off',
  },
  {
    name: 'pray',
    icon: 'fas fa-pray',
  },
  {
    name: 'praying-hands',
    icon: 'fas fa-praying-hands',
  },
  {
    name: 'prescription',
    icon: 'fas fa-prescription',
  },
  {
    name: 'prescription-bottle',
    icon: 'fas fa-prescription-bottle',
  },
  {
    name: 'prescription-bottle-alt',
    icon: 'fas fa-prescription-bottle-alt',
  },
  {
    name: 'print',
    icon: 'fas fa-print',
  },
  {
    name: 'procedures',
    icon: 'fas fa-procedures',
  },
  {
    name: 'product-hunt',
    icon: 'fab fa-product-hunt',
  },
  {
    name: 'project-diagram',
    icon: 'fas fa-project-diagram',
  },
  {
    name: 'pump-medical',
    icon: 'fas fa-pump-medical',
  },
  {
    name: 'pump-soap',
    icon: 'fas fa-pump-soap',
  },
  {
    name: 'pushed',
    icon: 'fab fa-pushed',
  },
  {
    name: 'puzzle-piece',
    icon: 'fas fa-puzzle-piece',
  },
  {
    name: 'python',
    icon: 'fab fa-python',
  },
  {
    name: 'qq',
    icon: 'fab fa-qq',
  },
  {
    name: 'qrcode',
    icon: 'fas fa-qrcode',
  },
  {
    name: 'question',
    icon: 'fas fa-question',
  },
  {
    name: 'question-circle',
    icon: 'fas fa-question-circle',
  },
  {
    name: 'question-circle',
    icon: 'far fa-question-circle',
  },
  {
    name: 'quidditch',
    icon: 'fas fa-quidditch',
  },
  {
    name: 'quinscape',
    icon: 'fab fa-quinscape',
  },
  {
    name: 'quora',
    icon: 'fab fa-quora',
  },
  {
    name: 'quote-left',
    icon: 'fas fa-quote-left',
  },
  {
    name: 'quote-right',
    icon: 'fas fa-quote-right',
  },
  {
    name: 'quran',
    icon: 'fas fa-quran',
  },
  {
    name: 'r-project',
    icon: 'fab fa-r-project',
  },
  {
    name: 'radiation',
    icon: 'fas fa-radiation',
  },
  {
    name: 'radiation-alt',
    icon: 'fas fa-radiation-alt',
  },
  {
    name: 'rainbow',
    icon: 'fas fa-rainbow',
  },
  {
    name: 'random',
    icon: 'fas fa-random',
  },
  {
    name: 'raspberry-pi',
    icon: 'fab fa-raspberry-pi',
  },
  {
    name: 'ravelry',
    icon: 'fab fa-ravelry',
  },
  {
    name: 'react',
    icon: 'fab fa-react',
  },
  {
    name: 'reacteurope',
    icon: 'fab fa-reacteurope',
  },
  {
    name: 'readme',
    icon: 'fab fa-readme',
  },
  {
    name: 'rebel',
    icon: 'fab fa-rebel',
  },
  {
    name: 'receipt',
    icon: 'fas fa-receipt',
  },
  {
    name: 'record-vinyl',
    icon: 'fas fa-record-vinyl',
  },
  {
    name: 'recycle',
    icon: 'fas fa-recycle',
  },
  {
    name: 'red-river',
    icon: 'fab fa-red-river',
  },
  {
    name: 'reddit',
    icon: 'fab fa-reddit',
  },
  {
    name: 'reddit-alien',
    icon: 'fab fa-reddit-alien',
  },
  {
    name: 'reddit-square',
    icon: 'fab fa-reddit-square',
  },
  {
    name: 'redhat',
    icon: 'fab fa-redhat',
  },
  {
    name: 'redo',
    icon: 'fas fa-redo',
  },
  {
    name: 'redo-alt',
    icon: 'fas fa-redo-alt',
  },
  {
    name: 'registered',
    icon: 'fas fa-registered',
  },
  {
    name: 'registered',
    icon: 'far fa-registered',
  },
  {
    name: 'remove-format',
    icon: 'fas fa-remove-format',
  },
  {
    name: 'renren',
    icon: 'fab fa-renren',
  },
  {
    name: 'reply',
    icon: 'fas fa-reply',
  },
  {
    name: 'reply-all',
    icon: 'fas fa-reply-all',
  },
  {
    name: 'replyd',
    icon: 'fab fa-replyd',
  },
  {
    name: 'republican',
    icon: 'fas fa-republican',
  },
  {
    name: 'researchgate',
    icon: 'fab fa-researchgate',
  },
  {
    name: 'resolving',
    icon: 'fab fa-resolving',
  },
  {
    name: 'restroom',
    icon: 'fas fa-restroom',
  },
  {
    name: 'retweet',
    icon: 'fas fa-retweet',
  },
  {
    name: 'rev',
    icon: 'fab fa-rev',
  },
  {
    name: 'ribbon',
    icon: 'fas fa-ribbon',
  },
  {
    name: 'ring',
    icon: 'fas fa-ring',
  },
  {
    name: 'road',
    icon: 'fas fa-road',
  },
  {
    name: 'robot',
    icon: 'fas fa-robot',
  },
  {
    name: 'rocket',
    icon: 'fas fa-rocket',
  },
  {
    name: 'rocketchat',
    icon: 'fab fa-rocketchat',
  },
  {
    name: 'rockrms',
    icon: 'fab fa-rockrms',
  },
  {
    name: 'route',
    icon: 'fas fa-route',
  },
  {
    name: 'rss',
    icon: 'fas fa-rss',
  },
  {
    name: 'rss-square',
    icon: 'fas fa-rss-square',
  },
  {
    name: 'ruble-sign',
    icon: 'fas fa-ruble-sign',
  },
  {
    name: 'ruler',
    icon: 'fas fa-ruler',
  },
  {
    name: 'ruler-combined',
    icon: 'fas fa-ruler-combined',
  },
  {
    name: 'ruler-horizontal',
    icon: 'fas fa-ruler-horizontal',
  },
  {
    name: 'ruler-vertical',
    icon: 'fas fa-ruler-vertical',
  },
  {
    name: 'running',
    icon: 'fas fa-running',
  },
  {
    name: 'rupee-sign',
    icon: 'fas fa-rupee-sign',
  },
  {
    name: 'rust',
    icon: 'fab fa-rust',
  },
  {
    name: 'sad-cry',
    icon: 'fas fa-sad-cry',
  },
  {
    name: 'sad-cry',
    icon: 'far fa-sad-cry',
  },
  {
    name: 'sad-tear',
    icon: 'fas fa-sad-tear',
  },
  {
    name: 'sad-tear',
    icon: 'far fa-sad-tear',
  },
  {
    name: 'safari',
    icon: 'fab fa-safari',
  },
  {
    name: 'salesforce',
    icon: 'fab fa-salesforce',
  },
  {
    name: 'sass',
    icon: 'fab fa-sass',
  },
  {
    name: 'satellite',
    icon: 'fas fa-satellite',
  },
  {
    name: 'satellite-dish',
    icon: 'fas fa-satellite-dish',
  },
  {
    name: 'save',
    icon: 'fas fa-save',
  },
  {
    name: 'save',
    icon: 'far fa-save',
  },
  {
    name: 'schlix',
    icon: 'fab fa-schlix',
  },
  {
    name: 'school',
    icon: 'fas fa-school',
  },
  {
    name: 'screwdriver',
    icon: 'fas fa-screwdriver',
  },
  {
    name: 'scribd',
    icon: 'fab fa-scribd',
  },
  {
    name: 'scroll',
    icon: 'fas fa-scroll',
  },
  {
    name: 'sd-card',
    icon: 'fas fa-sd-card',
  },
  {
    name: 'search',
    icon: 'fas fa-search',
  },
  {
    name: 'search-dollar',
    icon: 'fas fa-search-dollar',
  },
  {
    name: 'search-location',
    icon: 'fas fa-search-location',
  },
  {
    name: 'search-minus',
    icon: 'fas fa-search-minus',
  },
  {
    name: 'search-plus',
    icon: 'fas fa-search-plus',
  },
  {
    name: 'searchengin',
    icon: 'fab fa-searchengin',
  },
  {
    name: 'seedling',
    icon: 'fas fa-seedling',
  },
  {
    name: 'sellcast',
    icon: 'fab fa-sellcast',
  },
  {
    name: 'sellsy',
    icon: 'fab fa-sellsy',
  },
  {
    name: 'server',
    icon: 'fas fa-server',
  },
  {
    name: 'servicestack',
    icon: 'fab fa-servicestack',
  },
  {
    name: 'shapes',
    icon: 'fas fa-shapes',
  },
  {
    name: 'share',
    icon: 'fas fa-share',
  },
  {
    name: 'share-alt',
    icon: 'fas fa-share-alt',
  },
  {
    name: 'share-alt-square',
    icon: 'fas fa-share-alt-square',
  },
  {
    name: 'share-square',
    icon: 'fas fa-share-square',
  },
  {
    name: 'share-square',
    icon: 'far fa-share-square',
  },
  {
    name: 'shekel-sign',
    icon: 'fas fa-shekel-sign',
  },
  {
    name: 'shield-alt',
    icon: 'fas fa-shield-alt',
  },
  {
    name: 'shield-virus',
    icon: 'fas fa-shield-virus',
  },
  {
    name: 'ship',
    icon: 'fas fa-ship',
  },
  {
    name: 'shipping-fast',
    icon: 'fas fa-shipping-fast',
  },
  {
    name: 'shirtsinbulk',
    icon: 'fab fa-shirtsinbulk',
  },
  {
    name: 'shoe-prints',
    icon: 'fas fa-shoe-prints',
  },
  {
    name: 'shopify',
    icon: 'fab fa-shopify',
  },
  {
    name: 'shopping-bag',
    icon: 'fas fa-shopping-bag',
  },
  {
    name: 'shopping-basket',
    icon: 'fas fa-shopping-basket',
  },
  {
    name: 'shopping-cart',
    icon: 'fas fa-shopping-cart',
  },
  {
    name: 'shopware',
    icon: 'fab fa-shopware',
  },
  {
    name: 'shower',
    icon: 'fas fa-shower',
  },
  {
    name: 'shuttle-van',
    icon: 'fas fa-shuttle-van',
  },
  {
    name: 'sign',
    icon: 'fas fa-sign',
  },
  {
    name: 'sign-in-alt',
    icon: 'fas fa-sign-in-alt',
  },
  {
    name: 'sign-language',
    icon: 'fas fa-sign-language',
  },
  {
    name: 'sign-out-alt',
    icon: 'fas fa-sign-out-alt',
  },
  {
    name: 'signal',
    icon: 'fas fa-signal',
  },
  {
    name: 'signature',
    icon: 'fas fa-signature',
  },
  {
    name: 'sim-card',
    icon: 'fas fa-sim-card',
  },
  {
    name: 'simplybuilt',
    icon: 'fab fa-simplybuilt',
  },
  {
    name: 'sink',
    icon: 'fas fa-sink',
  },
  {
    name: 'sistrix',
    icon: 'fab fa-sistrix',
  },
  {
    name: 'sitemap',
    icon: 'fas fa-sitemap',
  },
  {
    name: 'sith',
    icon: 'fab fa-sith',
  },
  {
    name: 'skating',
    icon: 'fas fa-skating',
  },
  {
    name: 'sketch',
    icon: 'fab fa-sketch',
  },
  {
    name: 'skiing',
    icon: 'fas fa-skiing',
  },
  {
    name: 'skiing-nordic',
    icon: 'fas fa-skiing-nordic',
  },
  {
    name: 'skull',
    icon: 'fas fa-skull',
  },
  {
    name: 'skull-crossbones',
    icon: 'fas fa-skull-crossbones',
  },
  {
    name: 'skyatlas',
    icon: 'fab fa-skyatlas',
  },
  {
    name: 'skype',
    icon: 'fab fa-skype',
  },
  {
    name: 'slack',
    icon: 'fab fa-slack',
  },
  {
    name: 'slack-hash',
    icon: 'fab fa-slack-hash',
  },
  {
    name: 'slash',
    icon: 'fas fa-slash',
  },
  {
    name: 'sleigh',
    icon: 'fas fa-sleigh',
  },
  {
    name: 'sliders-h',
    icon: 'fas fa-sliders-h',
  },
  {
    name: 'slideshare',
    icon: 'fab fa-slideshare',
  },
  {
    name: 'smile',
    icon: 'fas fa-smile',
  },
  {
    name: 'smile',
    icon: 'far fa-smile',
  },
  {
    name: 'smile-beam',
    icon: 'fas fa-smile-beam',
  },
  {
    name: 'smile-beam',
    icon: 'far fa-smile-beam',
  },
  {
    name: 'smile-wink',
    icon: 'fas fa-smile-wink',
  },
  {
    name: 'smile-wink',
    icon: 'far fa-smile-wink',
  },
  {
    name: 'smog',
    icon: 'fas fa-smog',
  },
  {
    name: 'smoking',
    icon: 'fas fa-smoking',
  },
  {
    name: 'smoking-ban',
    icon: 'fas fa-smoking-ban',
  },
  {
    name: 'sms',
    icon: 'fas fa-sms',
  },
  {
    name: 'snapchat',
    icon: 'fab fa-snapchat',
  },
  {
    name: 'snapchat-ghost',
    icon: 'fab fa-snapchat-ghost',
  },
  {
    name: 'snapchat-square',
    icon: 'fab fa-snapchat-square',
  },
  {
    name: 'snowboarding',
    icon: 'fas fa-snowboarding',
  },
  {
    name: 'snowflake',
    icon: 'fas fa-snowflake',
  },
  {
    name: 'snowflake',
    icon: 'far fa-snowflake',
  },
  {
    name: 'snowman',
    icon: 'fas fa-snowman',
  },
  {
    name: 'snowplow',
    icon: 'fas fa-snowplow',
  },
  {
    name: 'soap',
    icon: 'fas fa-soap',
  },
  {
    name: 'socks',
    icon: 'fas fa-socks',
  },
  {
    name: 'solar-panel',
    icon: 'fas fa-solar-panel',
  },
  {
    name: 'sort',
    icon: 'fas fa-sort',
  },
  {
    name: 'sort-alpha-down',
    icon: 'fas fa-sort-alpha-down',
  },
  {
    name: 'sort-alpha-down-alt',
    icon: 'fas fa-sort-alpha-down-alt',
  },
  {
    name: 'sort-alpha-up',
    icon: 'fas fa-sort-alpha-up',
  },
  {
    name: 'sort-alpha-up-alt',
    icon: 'fas fa-sort-alpha-up-alt',
  },
  {
    name: 'sort-amount-down',
    icon: 'fas fa-sort-amount-down',
  },
  {
    name: 'sort-amount-down-alt',
    icon: 'fas fa-sort-amount-down-alt',
  },
  {
    name: 'sort-amount-up',
    icon: 'fas fa-sort-amount-up',
  },
  {
    name: 'sort-amount-up-alt',
    icon: 'fas fa-sort-amount-up-alt',
  },
  {
    name: 'sort-down',
    icon: 'fas fa-sort-down',
  },
  {
    name: 'sort-numeric-down',
    icon: 'fas fa-sort-numeric-down',
  },
  {
    name: 'sort-numeric-down-alt',
    icon: 'fas fa-sort-numeric-down-alt',
  },
  {
    name: 'sort-numeric-up',
    icon: 'fas fa-sort-numeric-up',
  },
  {
    name: 'sort-numeric-up-alt',
    icon: 'fas fa-sort-numeric-up-alt',
  },
  {
    name: 'sort-up',
    icon: 'fas fa-sort-up',
  },
  {
    name: 'soundcloud',
    icon: 'fab fa-soundcloud',
  },
  {
    name: 'sourcetree',
    icon: 'fab fa-sourcetree',
  },
  {
    name: 'spa',
    icon: 'fas fa-spa',
  },
  {
    name: 'space-shuttle',
    icon: 'fas fa-space-shuttle',
  },
  {
    name: 'speakap',
    icon: 'fab fa-speakap',
  },
  {
    name: 'speaker-deck',
    icon: 'fab fa-speaker-deck',
  },
  {
    name: 'spell-check',
    icon: 'fas fa-spell-check',
  },
  {
    name: 'spider',
    icon: 'fas fa-spider',
  },
  {
    name: 'spinner',
    icon: 'fas fa-spinner',
  },
  {
    name: 'splotch',
    icon: 'fas fa-splotch',
  },
  {
    name: 'spotify',
    icon: 'fab fa-spotify',
  },
  {
    name: 'spray-can',
    icon: 'fas fa-spray-can',
  },
  {
    name: 'square',
    icon: 'fas fa-square',
  },
  {
    name: 'square-full',
    icon: 'fas fa-square-full',
  },
  {
    name: 'square-root-alt',
    icon: 'fas fa-square-root-alt',
  },
  {
    name: 'squarespace',
    icon: 'fab fa-squarespace',
  },
  {
    name: 'stack-exchange',
    icon: 'fab fa-stack-exchange',
  },
  {
    name: 'stack-overflow',
    icon: 'fab fa-stack-overflow',
  },
  {
    name: 'stackpath',
    icon: 'fab fa-stackpath',
  },
  {
    name: 'stamp',
    icon: 'fas fa-stamp',
  },
  {
    name: 'star',
    icon: 'fas fa-star',
  },
  {
    name: 'star',
    icon: 'far fa-star',
  },
  {
    name: 'star-and-crescent',
    icon: 'fas fa-star-and-crescent',
  },
  {
    name: 'star-half',
    icon: 'fas fa-star-half',
  },
  {
    name: 'star-half',
    icon: 'far fa-star-half',
  },
  {
    name: 'star-half-alt',
    icon: 'fas fa-star-half-alt',
  },
  {
    name: 'star-of-david',
    icon: 'fas fa-star-of-david',
  },
  {
    name: 'star-of-life',
    icon: 'fas fa-star-of-life',
  },
  {
    name: 'staylinked',
    icon: 'fab fa-staylinked',
  },
  {
    name: 'steam',
    icon: 'fab fa-steam',
  },
  {
    name: 'steam-square',
    icon: 'fab fa-steam-square',
  },
  {
    name: 'steam-symbol',
    icon: 'fab fa-steam-symbol',
  },
  {
    name: 'step-backward',
    icon: 'fas fa-step-backward',
  },
  {
    name: 'step-forward',
    icon: 'fas fa-step-forward',
  },
  {
    name: 'stethoscope',
    icon: 'fas fa-stethoscope',
  },
  {
    name: 'sticker-mule',
    icon: 'fab fa-sticker-mule',
  },
  {
    name: 'sticky-note',
    icon: 'fas fa-sticky-note',
  },
  {
    name: 'stop',
    icon: 'fas fa-stop',
  },
  {
    name: 'stop-circle',
    icon: 'fas fa-stop-circle',
  },
  {
    name: 'stop-circle',
    icon: 'far fa-stop-circle',
  },
  {
    name: 'stopwatch',
    icon: 'fas fa-stopwatch',
  },
  {
    name: 'stopwatch-20',
    icon: 'fas fa-stopwatch-20',
  },
  {
    name: 'store',
    icon: 'fas fa-store',
  },
  {
    name: 'store-alt',
    icon: 'fas fa-store-alt',
  },
  {
    name: 'store-alt-slash',
    icon: 'fas fa-store-alt-slash',
  },
  {
    name: 'store-slash',
    icon: 'fas fa-store-slash',
  },
  {
    name: 'strava',
    icon: 'fab fa-strava',
  },
  {
    name: 'stream',
    icon: 'fas fa-stream',
  },
  {
    name: 'street-view',
    icon: 'fas fa-street-view',
  },
  {
    name: 'strikethrough',
    icon: 'fas fa-strikethrough',
  },
  {
    name: 'stripe',
    icon: 'fab fa-stripe',
  },
  {
    name: 'stripe-s',
    icon: 'fab fa-stripe-s',
  },
  {
    name: 'stroopwafel',
    icon: 'fas fa-stroopwafel',
  },
  {
    name: 'studiovinari',
    icon: 'fab fa-studiovinari',
  },
  {
    name: 'stumbleupon',
    icon: 'fab fa-stumbleupon',
  },
  {
    name: 'stumbleupon-circle',
    icon: 'fab fa-stumbleupon-circle',
  },
  {
    name: 'subscript',
    icon: 'fas fa-subscript',
  },
  {
    name: 'subway',
    icon: 'fas fa-subway',
  },
  {
    name: 'suitcase',
    icon: 'fas fa-suitcase',
  },
  {
    name: 'suitcase-rolling',
    icon: 'fas fa-suitcase-rolling',
  },
  {
    name: 'sun',
    icon: 'fas fa-sun',
  },
  {
    name: 'sun',
    icon: 'far fa-sun',
  },
  {
    name: 'superpowers',
    icon: 'fab fa-superpowers',
  },
  {
    name: 'superscript',
    icon: 'fas fa-superscript',
  },
  {
    name: 'supple',
    icon: 'fab fa-supple',
  },
  {
    name: 'surprise',
    icon: 'fas fa-surprise',
  },
  {
    name: 'surprise',
    icon: 'far fa-surprise',
  },
  {
    name: 'suse',
    icon: 'fab fa-suse',
  },
  {
    name: 'swatchbook',
    icon: 'fas fa-swatchbook',
  },
  {
    name: 'swift',
    icon: 'fab fa-swift',
  },
  {
    name: 'swimmer',
    icon: 'fas fa-swimmer',
  },
  {
    name: 'swimming-pool',
    icon: 'fas fa-swimming-pool',
  },
  {
    name: 'symfony',
    icon: 'fab fa-symfony',
  },
  {
    name: 'synagogue',
    icon: 'fas fa-synagogue',
  },
  {
    name: 'sync',
    icon: 'fas fa-sync',
  },
  {
    name: 'sync-alt',
    icon: 'fas fa-sync-alt',
  },
  {
    name: 'syringe',
    icon: 'fas fa-syringe',
  },
  {
    name: 'table',
    icon: 'fas fa-table',
  },
  {
    name: 'table-tennis',
    icon: 'fas fa-table-tennis',
  },
  {
    name: 'tablet',
    icon: 'fas fa-tablet',
  },
  {
    name: 'tablet-alt',
    icon: 'fas fa-tablet-alt',
  },
  {
    name: 'tablets',
    icon: 'fas fa-tablets',
  },
  {
    name: 'tachometer-alt',
    icon: 'fas fa-tachometer-alt',
  },
  {
    name: 'tag',
    icon: 'fas fa-tag',
  },
  {
    name: 'tags',
    icon: 'fas fa-tags',
  },
  {
    name: 'tape',
    icon: 'fas fa-tape',
  },
  {
    name: 'tasks',
    icon: 'fas fa-tasks',
  },
  {
    name: 'taxi',
    icon: 'fas fa-taxi',
  },
  {
    name: 'teamspeak',
    icon: 'fab fa-teamspeak',
  },
  {
    name: 'teeth',
    icon: 'fas fa-teeth',
  },
  {
    name: 'teeth-open',
    icon: 'fas fa-teeth-open',
  },
  {
    name: 'telegram',
    icon: 'fab fa-telegram',
  },
  {
    name: 'telegram-plane',
    icon: 'fab fa-telegram-plane',
  },
  {
    name: 'temperature-high',
    icon: 'fas fa-temperature-high',
  },
  {
    name: 'temperature-low',
    icon: 'fas fa-temperature-low',
  },
  {
    name: 'tencent-weibo',
    icon: 'fab fa-tencent-weibo',
  },
  {
    name: 'tenge',
    icon: 'fas fa-tenge',
  },
  {
    name: 'terminal',
    icon: 'fas fa-terminal',
  },
  {
    name: 'text-height',
    icon: 'fas fa-text-height',
  },
  {
    name: 'text-width',
    icon: 'fas fa-text-width',
  },
  {
    name: 'th',
    icon: 'fas fa-th',
  },
  {
    name: 'th-large',
    icon: 'fas fa-th-large',
  },
  {
    name: 'th-list',
    icon: 'fas fa-th-list',
  },
  {
    name: 'the-red-yeti',
    icon: 'fab fa-the-red-yeti',
  },
  {
    name: 'theater-masks',
    icon: 'fas fa-theater-masks',
  },
  {
    name: 'themeco',
    icon: 'fab fa-themeco',
  },
  {
    name: 'themeisle',
    icon: 'fab fa-themeisle',
  },
  {
    name: 'thermometer',
    icon: 'fas fa-thermometer',
  },
  {
    name: 'thermometer-empty',
    icon: 'fas fa-thermometer-empty',
  },
  {
    name: 'thermometer-full',
    icon: 'fas fa-thermometer-full',
  },
  {
    name: 'thermometer-half',
    icon: 'fas fa-thermometer-half',
  },
  {
    name: 'thermometer-quarter',
    icon: 'fas fa-thermometer-quarter',
  },
  {
    name: 'thermometer-three-quarters',
    icon: 'fas fa-thermometer-three-quarters',
  },
  {
    name: 'think-peaks',
    icon: 'fab fa-think-peaks',
  },
  {
    name: 'thumbs-down',
    icon: 'fas fa-thumbs-down',
  },
  {
    name: 'thumbs-down',
    icon: 'far fa-thumbs-down',
  },
  {
    name: 'thumbs-up',
    icon: 'fas fa-thumbs-up',
  },
  {
    name: 'thumbs-up',
    icon: 'far fa-thumbs-up',
  },
  {
    name: 'thumbtack',
    icon: 'fas fa-thumbtack',
  },
  {
    name: 'ticket-alt',
    icon: 'fas fa-ticket-alt',
  },
  {
    name: 'tiktok',
    icon: 'fab fa-tiktok',
  },
  {
    name: 'times',
    icon: 'fas fa-times',
  },
  {
    name: 'times-circle',
    icon: 'fas fa-times-circle',
  },
  {
    name: 'times-circle',
    icon: 'far fa-times-circle',
  },
  {
    name: 'tint',
    icon: 'fas fa-tint',
  },
  {
    name: 'tint-slash',
    icon: 'fas fa-tint-slash',
  },
  {
    name: 'tired',
    icon: 'fas fa-tired',
  },
  {
    name: 'tired',
    icon: 'far fa-tired',
  },
  {
    name: 'toggle-off',
    icon: 'fas fa-toggle-off',
  },
  {
    name: 'toggle-on',
    icon: 'fas fa-toggle-on',
  },
  {
    name: 'toilet',
    icon: 'fas fa-toilet',
  },
  {
    name: 'toilet-paper',
    icon: 'fas fa-toilet-paper',
  },
  {
    name: 'toilet-paper-slash',
    icon: 'fas fa-toilet-paper-slash',
  },
  {
    name: 'toolbox',
    icon: 'fas fa-toolbox',
  },
  {
    name: 'tools',
    icon: 'fas fa-tools',
  },
  {
    name: 'tooth',
    icon: 'fas fa-tooth',
  },
  {
    name: 'torah',
    icon: 'fas fa-torah',
  },
  {
    name: 'torii-gate',
    icon: 'fas fa-torii-gate',
  },
  {
    name: 'tractor',
    icon: 'fas fa-tractor',
  },
  {
    name: 'trade-federation',
    icon: 'fab fa-trade-federation',
  },
  {
    name: 'trademark',
    icon: 'fas fa-trademark',
  },
  {
    name: 'traffic-light',
    icon: 'fas fa-traffic-light',
  },
  {
    name: 'trailer',
    icon: 'fas fa-trailer',
  },
  {
    name: 'train',
    icon: 'fas fa-train',
  },
  {
    name: 'tram',
    icon: 'fas fa-tram',
  },
  {
    name: 'transgender',
    icon: 'fas fa-transgender',
  },
  {
    name: 'transgender-alt',
    icon: 'fas fa-transgender-alt',
  },
  {
    name: 'trash',
    icon: 'fas fa-trash',
  },
  {
    name: 'trash-alt',
    icon: 'fas fa-trash-alt',
  },
  {
    name: 'trash-alt',
    icon: 'far fa-trash-alt',
  },
  {
    name: 'trash-restore',
    icon: 'fas fa-trash-restore',
  },
  {
    name: 'trash-restore-alt',
    icon: 'fas fa-trash-restore-alt',
  },
  {
    name: 'tree',
    icon: 'fas fa-tree',
  },
  {
    name: 'trello',
    icon: 'fab fa-trello',
  },
  {
    name: 'tripadvisor',
    icon: 'fab fa-tripadvisor',
  },
  {
    name: 'trophy',
    icon: 'fas fa-trophy',
  },
  {
    name: 'truck',
    icon: 'fas fa-truck',
  },
  {
    name: 'truck-loading',
    icon: 'fas fa-truck-loading',
  },
  {
    name: 'truck-monster',
    icon: 'fas fa-truck-monster',
  },
  {
    name: 'truck-moving',
    icon: 'fas fa-truck-moving',
  },
  {
    name: 'truck-pickup',
    icon: 'fas fa-truck-pickup',
  },
  {
    name: 'tshirt',
    icon: 'fas fa-tshirt',
  },
  {
    name: 'tty',
    icon: 'fas fa-tty',
  },
  {
    name: 'tumblr',
    icon: 'fab fa-tumblr',
  },
  {
    name: 'tumblr-square',
    icon: 'fab fa-tumblr-square',
  },
  {
    name: 'tv',
    icon: 'fas fa-tv',
  },
  {
    name: 'twitch',
    icon: 'fab fa-twitch',
  },
  {
    name: 'twitter',
    icon: 'fab fa-twitter',
  },
  {
    name: 'twitter-square',
    icon: 'fab fa-twitter-square',
  },
  {
    name: 'typo3',
    icon: 'fab fa-typo3',
  },
  {
    name: 'uber',
    icon: 'fab fa-uber',
  },
  {
    name: 'ubuntu',
    icon: 'fab fa-ubuntu',
  },
  {
    name: 'uikit',
    icon: 'fab fa-uikit',
  },
  {
    name: 'umbraco',
    icon: 'fab fa-umbraco',
  },
  {
    name: 'umbrella',
    icon: 'fas fa-umbrella',
  },
  {
    name: 'umbrella-beach',
    icon: 'fas fa-umbrella-beach',
  },
  {
    name: 'underline',
    icon: 'fas fa-underline',
  },
  {
    name: 'undo',
    icon: 'fas fa-undo',
  },
  {
    name: 'undo-alt',
    icon: 'fas fa-undo-alt',
  },
  {
    name: 'uniregistry',
    icon: 'fab fa-uniregistry',
  },
  {
    name: 'unity',
    icon: 'fab fa-unity',
  },
  {
    name: 'universal-access',
    icon: 'fas fa-universal-access',
  },
  {
    name: 'university',
    icon: 'fas fa-university',
  },
  {
    name: 'unlink',
    icon: 'fas fa-unlink',
  },
  {
    name: 'unlock',
    icon: 'fas fa-unlock',
  },
  {
    name: 'unlock-alt',
    icon: 'fas fa-unlock-alt',
  },
  {
    name: 'unsplash',
    icon: 'fab fa-unsplash',
  },
  {
    name: 'untappd',
    icon: 'fab fa-untappd',
  },
  {
    name: 'upload',
    icon: 'fas fa-upload',
  },
  {
    name: 'ups',
    icon: 'fab fa-ups',
  },
  {
    name: 'usb',
    icon: 'fab fa-usb',
  },
  {
    name: 'user',
    icon: 'fas fa-user',
  },
  {
    name: 'user',
    icon: 'far fa-user',
  },
  {
    name: 'user-alt',
    icon: 'fas fa-user-alt',
  },
  {
    name: 'user-alt-slash',
    icon: 'fas fa-user-alt-slash',
  },
  {
    name: 'user-astronaut',
    icon: 'fas fa-user-astronaut',
  },
  {
    name: 'user-check',
    icon: 'fas fa-user-check',
  },
  {
    name: 'user-circle',
    icon: 'fas fa-user-circle',
  },
  {
    name: 'user-circle',
    icon: 'far fa-user-circle',
  },
  {
    name: 'user-clock',
    icon: 'fas fa-user-clock',
  },
  {
    name: 'user-cog',
    icon: 'fas fa-user-cog',
  },
  {
    name: 'user-edit',
    icon: 'fas fa-user-edit',
  },
  {
    name: 'user-friends',
    icon: 'fas fa-user-friends',
  },
  {
    name: 'user-graduate',
    icon: 'fas fa-user-graduate',
  },
  {
    name: 'user-injured',
    icon: 'fas fa-user-injured',
  },
  {
    name: 'user-lock',
    icon: 'fas fa-user-lock',
  },
  {
    name: 'user-md',
    icon: 'fas fa-user-md',
  },
  {
    name: 'user-minus',
    icon: 'fas fa-user-minus',
  },
  {
    name: 'user-ninja',
    icon: 'fas fa-user-ninja',
  },
  {
    name: 'user-nurse',
    icon: 'fas fa-user-nurse',
  },
  {
    name: 'user-plus',
    icon: 'fas fa-user-plus',
  },
  {
    name: 'user-secret',
    icon: 'fas fa-user-secret',
  },
  {
    name: 'user-shield',
    icon: 'fas fa-user-shield',
  },
  {
    name: 'user-slash',
    icon: 'fas fa-user-slash',
  },
  {
    name: 'user-tag',
    icon: 'fas fa-user-tag',
  },
  {
    name: 'user-tie',
    icon: 'fas fa-user-tie',
  },
  {
    name: 'user-times',
    icon: 'fas fa-user-times',
  },
  {
    name: 'users',
    icon: 'fas fa-users',
  },
  {
    name: 'users-cog',
    icon: 'fas fa-users-cog',
  },
  {
    name: 'users-slash',
    icon: 'fas fa-users-slash',
  },
  {
    name: 'usps',
    icon: 'fab fa-usps',
  },
  {
    name: 'ussunnah',
    icon: 'fab fa-ussunnah',
  },
  {
    name: 'utensil-spoon',
    icon: 'fas fa-utensil-spoon',
  },
  {
    name: 'utensils',
    icon: 'fas fa-utensils',
  },
  {
    name: 'vaadin',
    icon: 'fab fa-vaadin',
  },
  {
    name: 'vector-square',
    icon: 'fas fa-vector-square',
  },
  {
    name: 'venus',
    icon: 'fas fa-venus',
  },
  {
    name: 'venus-double',
    icon: 'fas fa-venus-double',
  },
  {
    name: 'venus-mars',
    icon: 'fas fa-venus-mars',
  },
  {
    name: 'viacoin',
    icon: 'fab fa-viacoin',
  },
  {
    name: 'viadeo',
    icon: 'fab fa-viadeo',
  },
  {
    name: 'viadeo-square',
    icon: 'fab fa-viadeo-square',
  },
  {
    name: 'vial',
    icon: 'fas fa-vial',
  },
  {
    name: 'vials',
    icon: 'fas fa-vials',
  },
  {
    name: 'viber',
    icon: 'fab fa-viber',
  },
  {
    name: 'video',
    icon: 'fas fa-video',
  },
  {
    name: 'video-slash',
    icon: 'fas fa-video-slash',
  },
  {
    name: 'vihara',
    icon: 'fas fa-vihara',
  },
  {
    name: 'vimeo',
    icon: 'fab fa-vimeo',
  },
  {
    name: 'vimeo-square',
    icon: 'fab fa-vimeo-square',
  },
  {
    name: 'vimeo-v',
    icon: 'fab fa-vimeo-v',
  },
  {
    name: 'vine',
    icon: 'fab fa-vine',
  },
  {
    name: 'virus',
    icon: 'fas fa-virus',
  },
  {
    name: 'virus-slash',
    icon: 'fas fa-virus-slash',
  },
  {
    name: 'viruses',
    icon: 'fas fa-viruses',
  },
  {
    name: 'vk',
    icon: 'fab fa-vk',
  },
  {
    name: 'vnv',
    icon: 'fab fa-vnv',
  },
  {
    name: 'voicemail',
    icon: 'fas fa-voicemail',
  },
  {
    name: 'volleyball-ball',
    icon: 'fas fa-volleyball-ball',
  },
  {
    name: 'volume-down',
    icon: 'fas fa-volume-down',
  },
  {
    name: 'volume-mute',
    icon: 'fas fa-volume-mute',
  },
  {
    name: 'volume-off',
    icon: 'fas fa-volume-off',
  },
  {
    name: 'volume-up',
    icon: 'fas fa-volume-up',
  },
  {
    name: 'vote-yea',
    icon: 'fas fa-vote-yea',
  },
  {
    name: 'vr-cardboard',
    icon: 'fas fa-vr-cardboard',
  },
  {
    name: 'vuejs',
    icon: 'fab fa-vuejs',
  },
  {
    name: 'walking',
    icon: 'fas fa-walking',
  },
  {
    name: 'wallet',
    icon: 'fas fa-wallet',
  },
  {
    name: 'warehouse',
    icon: 'fas fa-warehouse',
  },
  {
    name: 'water',
    icon: 'fas fa-water',
  },
  {
    name: 'wave-square',
    icon: 'fas fa-wave-square',
  },
  {
    name: 'waze',
    icon: 'fab fa-waze',
  },
  {
    name: 'weebly',
    icon: 'fab fa-weebly',
  },
  {
    name: 'weibo',
    icon: 'fab fa-weibo',
  },
  {
    name: 'weight',
    icon: 'fas fa-weight',
  },
  {
    name: 'weight-hanging',
    icon: 'fas fa-weight-hanging',
  },
  {
    name: 'weixin',
    icon: 'fab fa-weixin',
  },
  {
    name: 'whatsapp',
    icon: 'fab fa-whatsapp',
  },
  {
    name: 'whatsapp-square',
    icon: 'fab fa-whatsapp-square',
  },
  {
    name: 'wheelchair',
    icon: 'fas fa-wheelchair',
  },
  {
    name: 'whmcs',
    icon: 'fab fa-whmcs',
  },
  {
    name: 'wifi',
    icon: 'fas fa-wifi',
  },
  {
    name: 'wikipedia-w',
    icon: 'fab fa-wikipedia-w',
  },
  {
    name: 'wind',
    icon: 'fas fa-wind',
  },
  {
    name: 'window-close',
    icon: 'fas fa-window-close',
  },
  {
    name: 'window-close',
    icon: 'far fa-window-close',
  },
  {
    name: 'window-maximize',
    icon: 'fas fa-window-maximize',
  },
  {
    name: 'window-maximize',
    icon: 'far fa-window-maximize',
  },
  {
    name: 'window-minimize',
    icon: 'fas fa-window-minimize',
  },
  {
    name: 'window-minimize',
    icon: 'far fa-window-minimize',
  },
  {
    name: 'window-restore',
    icon: 'fas fa-window-restore',
  },
  {
    name: 'window-restore',
    icon: 'far fa-window-restore',
  },
  {
    name: 'windows',
    icon: 'fab fa-windows',
  },
  {
    name: 'wine-bottle',
    icon: 'fas fa-wine-bottle',
  },
  {
    name: 'wine-glass',
    icon: 'fas fa-wine-glass',
  },
  {
    name: 'wine-glass-alt',
    icon: 'fas fa-wine-glass-alt',
  },
  {
    name: 'wix',
    icon: 'fab fa-wix',
  },
  {
    name: 'wizards-of-the-coast',
    icon: 'fab fa-wizards-of-the-coast',
  },
  {
    name: 'wolf-pack-battalion',
    icon: 'fab fa-wolf-pack-battalion',
  },
  {
    name: 'won-sign',
    icon: 'fas fa-won-sign',
  },
  {
    name: 'wordpress',
    icon: 'fab fa-wordpress',
  },
  {
    name: 'wordpress-simple',
    icon: 'fab fa-wordpress-simple',
  },
  {
    name: 'wpbeginner',
    icon: 'fab fa-wpbeginner',
  },
  {
    name: 'wpexplorer',
    icon: 'fab fa-wpexplorer',
  },
  {
    name: 'wpforms',
    icon: 'fab fa-wpforms',
  },
  {
    name: 'wpressr',
    icon: 'fab fa-wpressr',
  },
  {
    name: 'wrench',
    icon: 'fas fa-wrench',
  },
  {
    name: 'x-ray',
    icon: 'fas fa-x-ray',
  },
  {
    name: 'xbox',
    icon: 'fab fa-xbox',
  },
  {
    name: 'xing',
    icon: 'fab fa-xing',
  },
  {
    name: 'xing-square',
    icon: 'fab fa-xing-square',
  },
  {
    name: 'y-combinator',
    icon: 'fab fa-y-combinator',
  },
  {
    name: 'yahoo',
    icon: 'fab fa-yahoo',
  },
  {
    name: 'yammer',
    icon: 'fab fa-yammer',
  },
  {
    name: 'yandex',
    icon: 'fab fa-yandex',
  },
  {
    name: 'yandex-international',
    icon: 'fab fa-yandex-international',
  },
  {
    name: 'yarn',
    icon: 'fab fa-yarn',
  },
  {
    name: 'yelp',
    icon: 'fab fa-yelp',
  },
  {
    name: 'yen-sign',
    icon: 'fas fa-yen-sign',
  },
  {
    name: 'yin-yang',
    icon: 'fas fa-yin-yang',
  },
  {
    name: 'yoast',
    icon: 'fab fa-yoast',
  },
  {
    name: 'youtube',
    icon: 'fab fa-youtube',
  },
  {
    name: 'youtube-square',
    icon: 'fab fa-youtube-square',
  },
  {
    name: 'zhihu',
    icon: 'fab fa-zhihu',
  },
];

export default icons;
