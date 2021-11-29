const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
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
    redis_url: `redis://${process.env.MEDUSA_REDIS_HOST}:${process.env.MEDUSA_REDIS_PORT}`,
    database_url: process.env.MEDUSA_DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.MEDUSA_STORE_CORS,
    admin_cors: process.env.MEDUSA_ADMIN_CORS,
  },
  plugins,
};
