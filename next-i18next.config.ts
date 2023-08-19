const { initReactI18next } = require('react-i18next');
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vn'],
  },
  localePath: path.resolve('./public/locales'),
};