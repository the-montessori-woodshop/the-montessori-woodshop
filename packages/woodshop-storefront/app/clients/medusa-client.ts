import Medusa from "@medusajs/medusa-js";

export const medusaClient = new Medusa({
  baseUrl:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:9000"
      : "https://store.themontessoriwoodshop.com",
  maxRetries: 2,
});
