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

const icons = [
  {
    name: 'eitaa',
    icon: 'socicon-eitaa',
  },
  {
    name: 'soroush',
    icon: 'socicon-soroush',
  },
  {
    name: 'bale',
    icon: 'socicon-bale',
  },
  {
    name: 'zazzle',
    icon: 'socicon-zazzle',
  },
  {
    name: 'society6',
    icon: 'socicon-society6',
  },
  {
    name: 'redbubble',
    icon: 'socicon-redbubble',
  },
  {
    name: 'avvo',
    icon: 'socicon-avvo',
  },
  {
    name: 'stitcher',
    icon: 'socicon-stitcher',
  },
  {
    name: 'googlehangouts',
    icon: 'socicon-googlehangouts',
  },
  {
    name: 'dlive',
    icon: 'socicon-dlive',
  },
  {
    name: 'vsco',
    icon: 'socicon-vsco',
  },
  {
    name: 'flipboard',
    icon: 'socicon-flipboard',
  },
  {
    name: 'ubuntu',
    icon: 'socicon-ubuntu',
  },
  {
    name: 'artstation',
    icon: 'socicon-artstation',
  },
  {
    name: 'invision',
    icon: 'socicon-invision',
  },
  {
    name: 'torial',
    icon: 'socicon-torial',
  },
  {
    name: 'collectorz',
    icon: 'socicon-collectorz',
  },
  {
    name: 'seenthis',
    icon: 'socicon-seenthis',
  },
  {
    name: 'googleplaymusic',
    icon: 'socicon-googleplaymusic',
  },
  {
    name: 'debian',
    icon: 'socicon-debian',
  },
  {
    name: 'filmfreeway',
    icon: 'socicon-filmfreeway',
  },
  {
    name: 'gnome',
    icon: 'socicon-gnome',
  },
  {
    name: 'itchio',
    icon: 'socicon-itchio',
  },
  {
    name: 'jamendo',
    icon: 'socicon-jamendo',
  },
  {
    name: 'mix',
    icon: 'socicon-mix',
  },
  {
    name: 'sharepoint',
    icon: 'socicon-sharepoint',
  },
  {
    name: 'tinder',
    icon: 'socicon-tinder',
  },
  {
    name: 'windguru',
    icon: 'socicon-windguru',
  },
  {
    name: 'cdbaby',
    icon: 'socicon-cdbaby',
  },
  {
    name: 'elementaryos',
    icon: 'socicon-elementaryos',
  },
  {
    name: 'stage32',
    icon: 'socicon-stage32',
  },
  {
    name: 'tiktok',
    icon: 'socicon-tiktok',
  },
  {
    name: 'gitter',
    icon: 'socicon-gitter',
  },
  {
    name: 'letterboxd',
    icon: 'socicon-letterboxd',
  },
  {
    name: 'threema',
    icon: 'socicon-threema',
  },
  {
    name: 'splice',
    icon: 'socicon-splice',
  },
  {
    name: 'metapop',
    icon: 'socicon-metapop',
  },
  {
    name: 'naver',
    icon: 'socicon-naver',
  },
  {
    name: 'remote',
    icon: 'socicon-remote',
  },
  {
    name: 'internet',
    icon: 'socicon-internet',
  },
  {
    name: 'moddb',
    icon: 'socicon-moddb',
  },
  {
    name: 'indiedb',
    icon: 'socicon-indiedb',
  },
  {
    name: 'traxsource',
    icon: 'socicon-traxsource',
  },
  {
    name: 'gamefor',
    icon: 'socicon-gamefor',
  },
  {
    name: 'pixiv',
    icon: 'socicon-pixiv',
  },
  {
    name: 'myanimelist',
    icon: 'socicon-myanimelist',
  },
  {
    name: 'blackberry',
    icon: 'socicon-blackberry',
  },
  {
    name: 'wickr',
    icon: 'socicon-wickr',
  },
  {
    name: 'spip',
    icon: 'socicon-spip',
  },
  {
    name: 'napster',
    icon: 'socicon-napster',
  },
  {
    name: 'beatport',
    icon: 'socicon-beatport',
  },
  {
    name: 'hackerone',
    icon: 'socicon-hackerone',
  },
  {
    name: 'hackernews',
    icon: 'socicon-hackernews',
  },
  {
    name: 'smashwords',
    icon: 'socicon-smashwords',
  },
  {
    name: 'kobo',
    icon: 'socicon-kobo',
  },
  {
    name: 'bookbub',
    icon: 'socicon-bookbub',
  },
  {
    name: 'mailru',
    icon: 'socicon-mailru',
  },
  {
    name: 'gitlab',
    icon: 'socicon-gitlab',
  },
  {
    name: 'instructables',
    icon: 'socicon-instructables',
  },
  {
    name: 'portfolio',
    icon: 'socicon-portfolio',
  },
  {
    name: 'codered',
    icon: 'socicon-codered',
  },
  {
    name: 'origin',
    icon: 'socicon-origin',
  },
  {
    name: 'nextdoor',
    icon: 'socicon-nextdoor',
  },
  {
    name: 'udemy',
    icon: 'socicon-udemy',
  },
  {
    name: 'livemaster',
    icon: 'socicon-livemaster',
  },
  {
    name: 'crunchbase',
    icon: 'socicon-crunchbase',
  },
  {
    name: 'homefy',
    icon: 'socicon-homefy',
  },
  {
    name: 'calendly',
    icon: 'socicon-calendly',
  },
  {
    name: 'realtor',
    icon: 'socicon-realtor',
  },
  {
    name: 'tidal',
    icon: 'socicon-tidal',
  },
  {
    name: 'qobuz',
    icon: 'socicon-qobuz',
  },
  {
    name: 'natgeo',
    icon: 'socicon-natgeo',
  },
  {
    name: 'mastodon',
    icon: 'socicon-mastodon',
  },
  {
    name: 'unsplash',
    icon: 'socicon-unsplash',
  },
  {
    name: 'homeadvisor',
    icon: 'socicon-homeadvisor',
  },
  {
    name: 'angieslist',
    icon: 'socicon-angieslist',
  },
  {
    name: 'codepen',
    icon: 'socicon-codepen',
  },
  {
    name: 'slack',
    icon: 'socicon-slack',
  },
  {
    name: 'openaigym',
    icon: 'socicon-openaigym',
  },
  {
    name: 'logmein',
    icon: 'socicon-logmein',
  },
  {
    name: 'fiverr',
    icon: 'socicon-fiverr',
  },
  {
    name: 'gotomeeting',
    icon: 'socicon-gotomeeting',
  },
  {
    name: 'aliexpress',
    icon: 'socicon-aliexpress',
  },
  {
    name: 'guru',
    icon: 'socicon-guru',
  },
  {
    name: 'appstore',
    icon: 'socicon-appstore',
  },
  {
    name: 'homes',
    icon: 'socicon-homes',
  },
  {
    name: 'zoom',
    icon: 'socicon-zoom',
  },
  {
    name: 'alibaba',
    icon: 'socicon-alibaba',
  },
  {
    name: 'craigslist',
    icon: 'socicon-craigslist',
  },
  {
    name: 'wix',
    icon: 'socicon-wix',
  },
  {
    name: 'redfin',
    icon: 'socicon-redfin',
  },
  {
    name: 'googlecalendar',
    icon: 'socicon-googlecalendar',
  },
  {
    name: 'shopify',
    icon: 'socicon-shopify',
  },
  {
    name: 'freelancer',
    icon: 'socicon-freelancer',
  },
  {
    name: 'seedrs',
    icon: 'socicon-seedrs',
  },
  {
    name: 'bing',
    icon: 'socicon-bing',
  },
  {
    name: 'doodle',
    icon: 'socicon-doodle',
  },
  {
    name: 'bonanza',
    icon: 'socicon-bonanza',
  },
  {
    name: 'squarespace',
    icon: 'socicon-squarespace',
  },
  {
    name: 'toptal',
    icon: 'socicon-toptal',
  },
  {
    name: 'gust',
    icon: 'socicon-gust',
  },
  {
    name: 'ask',
    icon: 'socicon-ask',
  },
  {
    name: 'trulia',
    icon: 'socicon-trulia',
  },
  {
    name: 'loomly',
    icon: 'socicon-loomly',
  },
  {
    name: 'ghost',
    icon: 'socicon-ghost',
  },
  {
    name: 'upwork',
    icon: 'socicon-upwork',
  },
  {
    name: 'fundable',
    icon: 'socicon-fundable',
  },
  {
    name: 'booking',
    icon: 'socicon-booking',
  },
  {
    name: 'googlemaps',
    icon: 'socicon-googlemaps',
  },
  {
    name: 'zillow',
    icon: 'socicon-zillow',
  },
  {
    name: 'niconico',
    icon: 'socicon-niconico',
  },
  {
    name: 'toneden',
    icon: 'socicon-toneden',
  },
  {
    name: 'augment',
    icon: 'socicon-augment',
  },
  {
    name: 'bitbucket',
    icon: 'socicon-bitbucket',
  },
  {
    name: 'fyuse',
    icon: 'socicon-fyuse',
  },
  {
    name: 'yt-gaming',
    icon: 'socicon-yt-gaming',
  },
  {
    name: 'sketchfab',
    icon: 'socicon-sketchfab',
  },
  {
    name: 'mobcrush',
    icon: 'socicon-mobcrush',
  },
  {
    name: 'microsoft',
    icon: 'socicon-microsoft',
  },
  {
    name: 'pandora',
    icon: 'socicon-pandora',
  },
  {
    name: 'messenger',
    icon: 'socicon-messenger',
  },
  {
    name: 'gamewisp',
    icon: 'socicon-gamewisp',
  },
  {
    name: 'bloglovin',
    icon: 'socicon-bloglovin',
  },
  {
    name: 'tunein',
    icon: 'socicon-tunein',
  },
  {
    name: 'gamejolt',
    icon: 'socicon-gamejolt',
  },
  {
    name: 'trello',
    icon: 'socicon-trello',
  },
  {
    name: 'spreadshirt',
    icon: 'socicon-spreadshirt',
  },
  {
    name: '500px',
    icon: 'socicon-500px',
  },
  {
    name: '8tracks',
    icon: 'socicon-8tracks',
  },
  {
    name: 'airbnb',
    icon: 'socicon-airbnb',
  },
  {
    name: 'alliance',
    icon: 'socicon-alliance',
  },
  {
    name: 'amazon',
    icon: 'socicon-amazon',
  },
  {
    name: 'amplement',
    icon: 'socicon-amplement',
  },
  {
    name: 'android',
    icon: 'socicon-android',
  },
  {
    name: 'angellist',
    icon: 'socicon-angellist',
  },
  {
    name: 'apple',
    icon: 'socicon-apple',
  },
  {
    name: 'appnet',
    icon: 'socicon-appnet',
  },
  {
    name: 'baidu',
    icon: 'socicon-baidu',
  },
  {
    name: 'bandcamp',
    icon: 'socicon-bandcamp',
  },
  {
    name: 'battlenet',
    icon: 'socicon-battlenet',
  },
  {
    name: 'mixer',
    icon: 'socicon-mixer',
  },
  {
    name: 'bebee',
    icon: 'socicon-bebee',
  },
  {
    name: 'bebo',
    icon: 'socicon-bebo',
  },
  {
    name: 'behance',
    icon: 'socicon-behance',
  },
  {
    name: 'blizzard',
    icon: 'socicon-blizzard',
  },
  {
    name: 'blogger',
    icon: 'socicon-blogger',
  },
  {
    name: 'buffer',
    icon: 'socicon-buffer',
  },
  {
    name: 'chrome',
    icon: 'socicon-chrome',
  },
  {
    name: 'coderwall',
    icon: 'socicon-coderwall',
  },
  {
    name: 'curse',
    icon: 'socicon-curse',
  },
  {
    name: 'dailymotion',
    icon: 'socicon-dailymotion',
  },
  {
    name: 'deezer',
    icon: 'socicon-deezer',
  },
  {
    name: 'delicious',
    icon: 'socicon-delicious',
  },
  {
    name: 'deviantart',
    icon: 'socicon-deviantart',
  },
  {
    name: 'diablo',
    icon: 'socicon-diablo',
  },
  {
    name: 'digg',
    icon: 'socicon-digg',
  },
  {
    name: 'discord',
    icon: 'socicon-discord',
  },
  {
    name: 'disqus',
    icon: 'socicon-disqus',
  },
  {
    name: 'douban',
    icon: 'socicon-douban',
  },
  {
    name: 'draugiem',
    icon: 'socicon-draugiem',
  },
  {
    name: 'dribbble',
    icon: 'socicon-dribbble',
  },
  {
    name: 'drupal',
    icon: 'socicon-drupal',
  },
  {
    name: 'ebay',
    icon: 'socicon-ebay',
  },
  {
    name: 'ello',
    icon: 'socicon-ello',
  },
  {
    name: 'endomodo',
    icon: 'socicon-endomodo',
  },
  {
    name: 'envato',
    icon: 'socicon-envato',
  },
  {
    name: 'etsy',
    icon: 'socicon-etsy',
  },
  {
    name: 'facebook',
    icon: 'socicon-facebook',
  },
  {
    name: 'feedburner',
    icon: 'socicon-feedburner',
  },
  {
    name: 'filmweb',
    icon: 'socicon-filmweb',
  },
  {
    name: 'firefox',
    icon: 'socicon-firefox',
  },
  {
    name: 'flattr',
    icon: 'socicon-flattr',
  },
  {
    name: 'flickr',
    icon: 'socicon-flickr',
  },
  {
    name: 'formulr',
    icon: 'socicon-formulr',
  },
  {
    name: 'forrst',
    icon: 'socicon-forrst',
  },
  {
    name: 'foursquare',
    icon: 'socicon-foursquare',
  },
  {
    name: 'friendfeed',
    icon: 'socicon-friendfeed',
  },
  {
    name: 'github',
    icon: 'socicon-github',
  },
  {
    name: 'goodreads',
    icon: 'socicon-goodreads',
  },
  {
    name: 'google',
    icon: 'socicon-google',
  },
  {
    name: 'googlescholar',
    icon: 'socicon-googlescholar',
  },
  {
    name: 'googlegroups',
    icon: 'socicon-googlegroups',
  },
  {
    name: 'googlephotos',
    icon: 'socicon-googlephotos',
  },
  {
    name: 'googleplus',
    icon: 'socicon-googleplus',
  },
  {
    name: 'grooveshark',
    icon: 'socicon-grooveshark',
  },
  {
    name: 'hackerrank',
    icon: 'socicon-hackerrank',
  },
  {
    name: 'hearthstone',
    icon: 'socicon-hearthstone',
  },
  {
    name: 'hellocoton',
    icon: 'socicon-hellocoton',
  },
  {
    name: 'heroes',
    icon: 'socicon-heroes',
  },
  {
    name: 'smashcast',
    icon: 'socicon-smashcast',
  },
  {
    name: 'horde',
    icon: 'socicon-horde',
  },
  {
    name: 'houzz',
    icon: 'socicon-houzz',
  },
  {
    name: 'icq',
    icon: 'socicon-icq',
  },
  {
    name: 'identica',
    icon: 'socicon-identica',
  },
  {
    name: 'imdb',
    icon: 'socicon-imdb',
  },
  {
    name: 'instagram',
    icon: 'socicon-instagram',
  },
  {
    name: 'issuu',
    icon: 'socicon-issuu',
  },
  {
    name: 'istock',
    icon: 'socicon-istock',
  },
  {
    name: 'itunes',
    icon: 'socicon-itunes',
  },
  {
    name: 'keybase',
    icon: 'socicon-keybase',
  },
  {
    name: 'lanyrd',
    icon: 'socicon-lanyrd',
  },
  {
    name: 'lastfm',
    icon: 'socicon-lastfm',
  },
  {
    name: 'line',
    icon: 'socicon-line',
  },
  {
    name: 'linkedin',
    icon: 'socicon-linkedin',
  },
  {
    name: 'livejournal',
    icon: 'socicon-livejournal',
  },
  {
    name: 'lyft',
    icon: 'socicon-lyft',
  },
  {
    name: 'macos',
    icon: 'socicon-macos',
  },
  {
    name: 'mail',
    icon: 'socicon-mail',
  },
  {
    name: 'medium',
    icon: 'socicon-medium',
  },
  {
    name: 'meetup',
    icon: 'socicon-meetup',
  },
  {
    name: 'mixcloud',
    icon: 'socicon-mixcloud',
  },
  {
    name: 'modelmayhem',
    icon: 'socicon-modelmayhem',
  },
  {
    name: 'mumble',
    icon: 'socicon-mumble',
  },
  {
    name: 'myspace',
    icon: 'socicon-myspace',
  },
  {
    name: 'newsvine',
    icon: 'socicon-newsvine',
  },
  {
    name: 'nintendo',
    icon: 'socicon-nintendo',
  },
  {
    name: 'npm',
    icon: 'socicon-npm',
  },
  {
    name: 'odnoklassniki',
    icon: 'socicon-odnoklassniki',
  },
  {
    name: 'openid',
    icon: 'socicon-openid',
  },
  {
    name: 'opera',
    icon: 'socicon-opera',
  },
  {
    name: 'outlook',
    icon: 'socicon-outlook',
  },
  {
    name: 'overwatch',
    icon: 'socicon-overwatch',
  },
  {
    name: 'patreon',
    icon: 'socicon-patreon',
  },
  {
    name: 'paypal',
    icon: 'socicon-paypal',
  },
  {
    name: 'periscope',
    icon: 'socicon-periscope',
  },
  {
    name: 'persona',
    icon: 'socicon-persona',
  },
  {
    name: 'pinterest',
    icon: 'socicon-pinterest',
  },
  {
    name: 'play',
    icon: 'socicon-play',
  },
  {
    name: 'player',
    icon: 'socicon-player',
  },
  {
    name: 'playstation',
    icon: 'socicon-playstation',
  },
  {
    name: 'pocket',
    icon: 'socicon-pocket',
  },
  {
    name: 'qq',
    icon: 'socicon-qq',
  },
  {
    name: 'quora',
    icon: 'socicon-quora',
  },
  {
    name: 'raidcall',
    icon: 'socicon-raidcall',
  },
  {
    name: 'ravelry',
    icon: 'socicon-ravelry',
  },
  {
    name: 'reddit',
    icon: 'socicon-reddit',
  },
  {
    name: 'renren',
    icon: 'socicon-renren',
  },
  {
    name: 'researchgate',
    icon: 'socicon-researchgate',
  },
  {
    name: 'residentadvisor',
    icon: 'socicon-residentadvisor',
  },
  {
    name: 'reverbnation',
    icon: 'socicon-reverbnation',
  },
  {
    name: 'rss',
    icon: 'socicon-rss',
  },
  {
    name: 'sharethis',
    icon: 'socicon-sharethis',
  },
  {
    name: 'skype',
    icon: 'socicon-skype',
  },
  {
    name: 'slideshare',
    icon: 'socicon-slideshare',
  },
  {
    name: 'smugmug',
    icon: 'socicon-smugmug',
  },
  {
    name: 'snapchat',
    icon: 'socicon-snapchat',
  },
  {
    name: 'songkick',
    icon: 'socicon-songkick',
  },
  {
    name: 'soundcloud',
    icon: 'socicon-soundcloud',
  },
  {
    name: 'spotify',
    icon: 'socicon-spotify',
  },
  {
    name: 'stackexchange',
    icon: 'socicon-stackexchange',
  },
  {
    name: 'stackoverflow',
    icon: 'socicon-stackoverflow',
  },
  {
    name: 'starcraft',
    icon: 'socicon-starcraft',
  },
  {
    name: 'stayfriends',
    icon: 'socicon-stayfriends',
  },
  {
    name: 'steam',
    icon: 'socicon-steam',
  },
  {
    name: 'storehouse',
    icon: 'socicon-storehouse',
  },
  {
    name: 'strava',
    icon: 'socicon-strava',
  },
  {
    name: 'streamjar',
    icon: 'socicon-streamjar',
  },
  {
    name: 'stumbleupon',
    icon: 'socicon-stumbleupon',
  },
  {
    name: 'swarm',
    icon: 'socicon-swarm',
  },
  {
    name: 'teamspeak',
    icon: 'socicon-teamspeak',
  },
  {
    name: 'teamviewer',
    icon: 'socicon-teamviewer',
  },
  {
    name: 'technorati',
    icon: 'socicon-technorati',
  },
  {
    name: 'telegram',
    icon: 'socicon-telegram',
  },
  {
    name: 'tripadvisor',
    icon: 'socicon-tripadvisor',
  },
  {
    name: 'tripit',
    icon: 'socicon-tripit',
  },
  {
    name: 'triplej',
    icon: 'socicon-triplej',
  },
  {
    name: 'tumblr',
    icon: 'socicon-tumblr',
  },
  {
    name: 'twitch',
    icon: 'socicon-twitch',
  },
  {
    name: 'twitter',
    icon: 'socicon-twitter',
  },
  {
    name: 'uber',
    icon: 'socicon-uber',
  },
  {
    name: 'ventrilo',
    icon: 'socicon-ventrilo',
  },
  {
    name: 'viadeo',
    icon: 'socicon-viadeo',
  },
  {
    name: 'viber',
    icon: 'socicon-viber',
  },
  {
    name: 'viewbug',
    icon: 'socicon-viewbug',
  },
  {
    name: 'vimeo',
    icon: 'socicon-vimeo',
  },
  {
    name: 'vine',
    icon: 'socicon-vine',
  },
  {
    name: 'vkontakte',
    icon: 'socicon-vkontakte',
  },
  {
    name: 'warcraft',
    icon: 'socicon-warcraft',
  },
  {
    name: 'wechat',
    icon: 'socicon-wechat',
  },
  {
    name: 'weibo',
    icon: 'socicon-weibo',
  },
  {
    name: 'whatsapp',
    icon: 'socicon-whatsapp',
  },
  {
    name: 'wikipedia',
    icon: 'socicon-wikipedia',
  },
  {
    name: 'windows',
    icon: 'socicon-windows',
  },
  {
    name: 'wordpress',
    icon: 'socicon-wordpress',
  },
  {
    name: 'wykop',
    icon: 'socicon-wykop',
  },
  {
    name: 'xbox',
    icon: 'socicon-xbox',
  },
  {
    name: 'xing',
    icon: 'socicon-xing',
  },
  {
    name: 'yahoo',
    icon: 'socicon-yahoo',
  },
  {
    name: 'yammer',
    icon: 'socicon-yammer',
  },
  {
    name: 'yandex',
    icon: 'socicon-yandex',
  },
  {
    name: 'yelp',
    icon: 'socicon-yelp',
  },
  {
    name: 'younow',
    icon: 'socicon-younow',
  },
  {
    name: 'youtube',
    icon: 'socicon-youtube',
  },
  {
    name: 'zapier',
    icon: 'socicon-zapier',
  },
  {
    name: 'zerply',
    icon: 'socicon-zerply',
  },
  {
    name: 'zomato',
    icon: 'socicon-zomato',
  },
  {
    name: 'zynga',
    icon: 'socicon-zynga',
  },
];

export default icons;
