const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `medusa-file-cloudflare-images`,
    options: {
      accountId: process.env.CF_ACCOUNT_ID,
      apiToken: process.env.CF_IMAGE_API_TOKEN,
    },
  },
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  // {
  //   resolve: `medusa-payment-stripe`,
  //   options: {
  //     api_key: process.env.STRIPE_API_KEY,
  //     webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  //   },
  // },
];

module.exports = {
  projectConfig: {
    redis_url: process.env.MEDUSA_REDIS_URL,
    database_url: process.env.MEDUSA_DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.MEDUSA_STORE_CORS,
    admin_cors: process.env.MEDUSA_ADMIN_CORS,
  },
  plugins,
};
