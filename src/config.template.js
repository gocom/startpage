import Site from './model/Site';
import SearchProvider from './model/SearchProvider';

const config = {
  sites: [
    new Site({
      url: 'https://mail.google.com/mail/u/0/#inbox',
      name: 'Gmail',
      fa: 'fas fa-at',
      backgroundColor: '#d44638',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://calendar.google.com/calendar/r',
      name: 'Calendar',
      fa: 'fas fa-calendar-alt',
      backgroundColor: '#625bdc',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://youtube.com/',
      name: 'YouTube',
      fa: 'fab fa-youtube',
      backgroundColor: '#ff0000',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://reddit.com/',
      name: 'Reddit',
      fa: 'fab fa-reddit',
      backgroundColor: '#ff4500',
      textColor: '#1a1a1a',
    }),
    new Site({
      url: 'https://github.com/',
      name: 'GitHub',
      fa: 'fab fa-github',
      backgroundColor: '#333',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://open.spotify.com/',
      name: 'Spotify',
      fa: 'fab fa-spotify',
      backgroundColor: '#1db954',
      textColor: '#191414',
    }),
    new Site({
      url: 'https://twitter.com/',
      name: 'Twitter',
      fa: 'fab fa-twitter',
      backgroundColor: '#1da1f2',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://web.whatsapp.com/',
      name: 'WhatsApp',
      fa: 'fab fa-whatsapp',
      backgroundColor: '#25d366',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://messages.google.com/web/conversations',
      name: 'Messages',
      fa: 'far fa-comment-alt',
      backgroundColor: '#3774e4',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://twitch.tv',
      name: 'Twitch',
      fa: 'fab fa-twitch',
      backgroundColor: '#6441a4',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://news.ycombinator.com/',
      name: 'Hacker News',
      fa: 'fab fa-hacker-news-square',
      backgroundColor: '#ff4000',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://bitbucket.org/',
      name: 'Bitbucket',
      fa: 'fab fa-bitbucket',
      backgroundColor: '#172b4d',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://www.deviantart.com/',
      name: 'DeviantArt',
      fa: 'fab fa-deviantart',
      backgroundColor: '#3d4e42',
      textColor: '#dbe3d6',
    }),
    new Site({
      url: 'https://atlassian.net/',
      name: 'Jira',
      fa: 'fab fa-jira',
      backgroundColor: '#0052cc',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://dribbble.com/',
      name: 'Dribbble',
      fa: 'fab fa-dribbble',
      backgroundColor: '#ea4c89',
      textColor: '#fff',
    }),
    new Site({
      url: 'https://codepen.io/',
      name: 'Codepen',
      fa: 'fab fa-codepen',
      backgroundColor: '#0ebeff',
      textColor: '#76daff',
    }),
    new Site({
      url: 'https://colorhunt.co/',
      name: 'Colorhunt',
      fa: 'fas fa-tint',
      backgroundColor: '#fc4f56',
      textColor: '#fcec26',
    }),
    new Site({
      url: 'https://store.steampowered.com/',
      name: 'Steam',
      fa: 'fab fa-steam',
      backgroundColor: '#171a21',
      textColor: '#c7d5e0',
    }),
  ],
  search: {
    provider: new SearchProvider({
      url: 'https://www.google.com/search?q=%s&hl=en&pws=0',
      name: 'Google',
    }),
  },
};

export default config;
