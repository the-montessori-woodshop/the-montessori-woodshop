- tried co-locating scss and css files in the routes (didnt' work)
- tried standard components that exported their own styles, but found that it was still difficult to manage since those components mostly had relevance to the routes that they we're being input into

- Created a /features directory
- inside of the features directory there are 2 main files
  - the route style
  - the route itself

they follow the conventions:

```
  /routes
    /_auth
    /_app
      /dashboard
        /invoices.tsx

  /features
    /app
      /index.ts
      /App.route.tsx
      /App.scss

```

Since features can have nested features, i very much like the idea of the flat routing structure... but i don't like the idea of overriding the conventions. So why not emvrace those conventions inside of a directory of my choosing, not remixss..

So to nest a route under `app`, I add the same notation to the folder structure.

```
  /features
    /app
      /index.ts
      /App.route.tsx
      /App.scss
    /app.index
      /index.ts
      /AppIndex.route.tsx
      /AppIndex.scss
    /app.dashboard
      /index.ts
      /AppDashboard.route.tsx
      /AppDashboard.scss
    /app.dashboard.invoices
      /index.ts
      /AppDashboardInvoices.route.tsx
      /AppDashboardInvoices.scss

```

Here's kind of what results from this architecture

- Each of the directories are ordered by your editor in form of nesting... You can easily see, like the `remix-flat-routes` where your levels of routing take place
- You can co-locate all of the things you need here (styles, utilities, components, etc...).. you get kind of the below

```
/routes
  /__app
    /index.tsx
    /dashboard
      /index
      /invoices
  /auth (nothing but loaders in this directory)
  /login
  /services
  /services.new
    /index.tsx
    /$id.tsx

/features
  /app
  /app.index
  /app.dashboard
  /app.dashboard.invoices
  /services
  /services.index
  /services.new
  /services/$id
```

- You can type the route component with a custom type that will force you to also add `links` to it. That way if you want to add other components that have their own style but only make sense in the context, you can just import them using the styles convention's that remix has provided.
  - it's also important to note that some of their (remix's) future plans include incorporating css modules, and this pattern won't actually break that in the future... it will only require less boilerplate.

So here are some basic rules:

1. Each route in the routes directory get's it's own directory in the features directory.
2. If there is nesting in the routes, the features directories should be added in a flat manner as described above
3. Each feature should be typed with RemixRouteComponent.
4. Features can rely on other features, especially features with style. They just need to import their links.
