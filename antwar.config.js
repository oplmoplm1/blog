'use strict';

var rssPlugin = require('antwar-rss-plugin');

module.exports = {
  output: 'build',
  name: 'blog',
  author: {
    name: 'swirling',
    email: 'oplmoplm2@gmail.com'
  },
  deploy: {
    branch: 'ph-pages',
  },
  plugins: [
    rssPlugin(),
  ],
  theme: {
    name: 'antwar-default-theme',
    navigation: [
      {title: 'Home', url: '/'},
      {title: 'Blog', url: '/blog'}
    ],
    analyticsId: 'UA-XXXXXX-1',
    customStyles: 'specific.scss'
  },
  paths: {
    '/': {
      path: function() {
        return require.context('./pages');
      }
    },
    blog: {
      title: 'Blog posts',
      layout: 'blog',
      path: function() {
        return require.context('./posts', true, /^\.\/.*\.md$/);
      },
      draft: function() {
        return require.context('./drafts', true, /^\.\/.*\.md$/);
      },
    }
  },
};
