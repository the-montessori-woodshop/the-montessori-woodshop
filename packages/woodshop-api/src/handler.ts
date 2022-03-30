import { handleRequest } from "./routes/index";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
