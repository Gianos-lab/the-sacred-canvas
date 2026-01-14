/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'The Sacred Canvas',
  author: 'Gianmarco Fiorilla',
  headerTitle: 'The Sacred Canvas',
  description: 'A worldbuilding blog documenting the creation of a fantasy universe. Public workshop style - showing process and outcomes together.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://the-sacred-canvas.vercel.app',
  siteRepo: 'https://github.com/Gianos-lab/the-sacred-canvas',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'gianmarco@thesacredcanvas.com', // Update with your real email
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    provider: 'buttondown',
  },
  // comments disabled - engagement via social media instead
  comments: {},
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
