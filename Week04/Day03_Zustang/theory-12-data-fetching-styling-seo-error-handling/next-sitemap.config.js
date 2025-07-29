/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://your-domain.com", // replace your domain
  generateRobotsTxt: true, // create robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*"], // if need
};
