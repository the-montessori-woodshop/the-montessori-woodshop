// @ts-ignore
import stylesUrl from "@woodshop/components/css";
import fontBitterUrl from "@woodshop/components/fonts/bitter.css";
import fontOpenSansUrl from "@woodshop/components/fonts/open-sans.css";
import { FC } from "react";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  NavLink,
  NavLinkProps,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

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
