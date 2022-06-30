const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

module.exports = {
  projectConfig: {
    // redis_url: `redis://${process.env.MEDUSA_REDIS_HOST}:${process.env.MEDUSA_REDIS_PORT}`,
    database_url: process.env.MEDUSA_DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.MEDUSA_STORE_CORS,
    admin_cors: process.env.MEDUSA_ADMIN_CORS,
  },
  plugins: [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    {
      resolve: `medusa-file-cloudflare-images`,
      options: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        apiToken: process.env.CLOUDFLARE_IMAGE_API_TOKEN,
        // automatically served over HTTPs. No other option to
        // write it as you would see it in the websites tab of your cloudflare dashboard
        accountHash: process.env.CLOUDFLARE_IMAGE_ACCOUNT_HASH,
        serveFromCloudflareDomain: "themontessoriwoodshop.com",
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
  ],
};
