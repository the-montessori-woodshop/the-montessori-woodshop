import Medusa from "@medusajs/medusa-js";

export const medusaClient = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 2,
});
