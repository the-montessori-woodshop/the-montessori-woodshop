import Medusa from "@medusajs/medusa-js";

export const medusaClient = new Medusa({
  // @ts-ignore
  baseUrl: MEDUSA_URL || "http://localhost:9000",
  maxRetries: 3,
});
