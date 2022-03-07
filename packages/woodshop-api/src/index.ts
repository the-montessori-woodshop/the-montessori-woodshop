import { handleRequest } from "./handlers";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
