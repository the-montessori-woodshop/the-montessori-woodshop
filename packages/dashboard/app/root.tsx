// @ts-ignore
import fontBitterUrl from "@woodshop/components/font/bitter";
// @ts-ignore
import fontOpenSansUrl from "@woodshop/components/font/open-sans";
// @ts-ignore
import stylesUrl from "@woodshop/components/styles";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import rootUrl from "./root.css";

export const meta: MetaFunction = () => {
  return { title: "Dashboard | The Montessory Woodshop" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: rootUrl },
    { rel: "stylesheet", href: fontBitterUrl },
    { rel: "stylesheet", href: fontOpenSansUrl },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
