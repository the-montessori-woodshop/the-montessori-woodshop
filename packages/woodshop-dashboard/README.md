# Package | `@woodshop/dashboard`

## Overview

This is the dashboard to manage all of the backend tasks that aren't associated with the actual storefront; things such as blog posting, comment approval, image management, etc...

This is a **Cloudflare Workers Site** that is developed and deployed using Wrangler on the Cloudflare Network.

## Why Cloudflare Workers instead of Cloudflare Pages?

There are a few reasons for this; one is more tactical and the other is more practical.

### 1. Environment Variables in the global scope

The Remix Auth package requires the global configuration of an authorization strategy, in this case Auth0. In order to do that we need environment variables located on the global scope. In node, it is as simple as including the variable as `process.env.ENV_VAR_NAME` but with Cloudflare it's a little different.

Remix + CF Pages allows the user to include environment variables into their application by destructing the `env` key out of the context when running a loader or action function in any route. This is good, but doesn't allow for the global configuration since the values would only be available to those functions at run time.

```ts
export const loader: LoaderFunction = ({ request, context: { env } }) => {
  // getEndpointUrl can be just some helper function to create a full url to hit an endpoint
  const requestUrl = getEndpointUrl({
    base: env.BASE_API_URL,
    route: "/posts",
  });
  const res = await fetch(requestUrl, request.clone());
  const data = await res.json();
  return json(data);
};
```

Remix + Workers on the other hand allows the user to access bound environment variables on the global scope, _when using the service worker_ syntax, which is what Remix creates with their Cloudflare starters. Although the below is super contrived it still is a great example of using modules with variables that are globally available.

For a more advanced example you can view the configuration of the Auth0 RemixAuth Authentication strategy I wrote here:

```ts
// ~/utils/getRequestUrl.ts
type ApiRoutes = "/posts" | "/images";
export const getRequestUrl = ({
  route,
  queryParams,
}: {
  route: ApiRoutes;
  queryParams: Record<string, unknown>;
}) => {
  const searchParams = new URLSearchParams(queryParams);
  const url = new URL(`${BASE_API_URL}/${route}`);
  url.search = searchParams;
  return url.href;
};
```

```ts
// some random route loader
import { getRequestUrl } from "~/utils/getRequestUrl";

export const loader: LoaderFunction = ({ request, params }) => {
  const requestUrl = getRequestURl({
    route: "/posts",
    queryParams: { id: params.id },
  });
  const res = await fetch(requestUrl, request.clone());
  const data = await res.json();
  return json(data);
};
```

### 2. Cloudflare [Service Bindings](https://developers.cloudflare.com/workers/platform/bindings/about-service-bindings/) on the global scope

With the introduction of service bindings, or basically the ability for one Worker to call another Worker on the same account, it makes it far more performant to have some sort of site solution (pages, worker sites) to work with another worker... or in this case a worker API. Instead of having to route traffic through the internet, the request for a worker never has to leave the CF network, which inevitable saves time on the request.

However, at the current moment of July 5th 2022, CF Pages doesn't support service bindings... but CF Workers does and it supports it much in the same way that it does with environment variables. Since Remix, like above, supports the service worker syntax, [we can access the service binding on the global scope](https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#bindings). (To be honest, this small bit of the documentation was hard to come by).

So let's say we have an `API_GATEWAY` service binding [(you can see more on how to configure service bindings here)](https://developers.cloudflare.com/workers/wrangler/configuration/)... they're pretty straight forward. Our code for fetching posts in a Remix loader would now look like the above.

```ts
// some random route loader
import { getRequestUrl } from "~/utils/getRequestUrl";

export const loader: LoaderFunction = ({ request, params }) => {
  const requestUrl = getRequestURl({
    route: "/posts",
    queryParams: { id: params.id },
  });

  // a fetcher exists on the service binding of API_GATEWAY
  // API_GATEWAY.fetch("https://worker-name-environment.worker-subdomain.workers.dev/posts?id=1", request.clone())
  const res = await API_GATEWAY.fetch(requestUrl, request.clone());
  const data = await res.json();
  return json(data);
};
```
