# Feature Based Remix Architecture

Here's my take on how to organize Remix projects... that scale.

This is recent as of April 22nd, 2022. I'm probably going to change my mind at some point, but hey... that's showbiz baby.

## Preamble

One of the things that I love about Remix is that they have their opinions on routing, but they (meaning the overlords of the framework), give you the ability to extend it or overwrite it or change it or whatever you wanna do with it. This is important because as things scale, you want to make sure you're adapting the project and the organization of it's files to accommodate that scale. Nobody wants like 40 nested component directories or component names that make no sens like `LargeButtonCustom` and are strewn everywhere.

In my nearly 2 decades of scaling front-end projects for small startups to large enterprises, I've found (like Kent C Dodds... one of the Remix overlords) that **co-location is the name of the game**; co-locate as much as you possibly can with things that make sense together... in my case, this has centered around the concepts of `features`.

Features, to me, are just a collection of files, that may or may not have framework page conventions in them, but are merely nothing but groups of files that make sense together... For instance, `Blog` and `BlogNav` make sense together.... `PeanutButter` and `Mustard` do not belong together... and if you think they do then I think you have other things at play that need addressing outside of UI architecture. These features can be utilities shared in the feature like `getBlog` or `formatBlogDate`.

## The Conclusion

After working with Remix for almost 3 months now, I've started to formulate some opinions around directory structure. Anybody who's ever worked with me before knows that I'm a huge fan of enforcing a consistent directory structure that can accommodate scale. One of the main things I don't like (and NextJs kind of had this same issue) is putting my entire app inside of the `/pages`, `/routes`, `/whatever` folder that contains the opinionated routing mechanisms. You can't scale that... especially with nested directory routing conventions.

It's easy to do and yes, it can be done... but you're gonna create a mess of an app that's organized really poorly.

I wanted to co-locate all my stuff and the challenge was with trying to reconcile how Remix want's the CSS files imported up the routing structure. At the end of the day... what was my goal?

> The main goal that I had... I wanted a way to co-locate my styles with my routes; plain and simple.

### What I tried doing first...

I think it's worth mentioning what I did first before I show you what I arrived at... after all it's these trials that allowed me to come to the conclusions that I did.

#### 1. CSS-in-JS

It just goes against what remix is trying to accomplish. That's okay... I've changed before and sometimes its been good so I threw in the towel on that one pretty early.

#### 2. Co-locating `.scss` files in the `/routes` directory

Tried co-locating scss and css files in the routes (didn't work)... the routes directory got too big and it was messy to find and edit routes.

#### 3. Centralized components

Tried standard components that exported their own styles, but found that it was still difficult to manage since those components mostly had relevance to the routes that they we're being input into

### What I settled on

- Created a /features directory
- Each route receives a folder named after it (follows the conventions of `remix-flat-routes`)
- Inside of each feature there are 2 files.
  1. `Feature.scss` (the style associated with the route and it's sub components)
  2. `Feature.route.tsx` (the route component) with a special type

they follow the conventions:

```
  /routes
    /__auth
    /__app
      /dashboard
        /invoices.tsx

  /features
    /app
      /index.ts
      /App.route.tsx
      /App.scss

```

Since features can have nested features, i very much like the idea of the flat directory structure... but i don't like the idea of overriding the conventions inside of the `/routes` directory. So why not embrace those conventions inside of a directory of my choosing, not remix's... and I choose the `/features` directory.

So to nest a route under `app`, I add the same notation to the folder structure.

```
  /routes
    /__auth
    /__app
      /dashboard
        /invoices.tsx

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
5. If a component is used in more than one feature that are outside their own hierarchy, like, `PageTitle` is used in `app/blog`, `app/images`, etc... then it should be in the `/components` directory. If a component is used is in multiple features inside of it's own hierarchy, like `ImageGridContent` is in `app/images/new` and `/app/images/$id`, then it should be housed in it the feature of the parent that shares those components.... in this case it would be `/app/images`.
