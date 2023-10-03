/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://karas.store/',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
