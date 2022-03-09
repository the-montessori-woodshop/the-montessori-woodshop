import { handleRequest } from "./routes";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
