import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// @ts-ignore
import fontBitterUrl from "@woodshop/components/font/bitter";
// @ts-ignore
import fontOpenSansUrl from "@woodshop/components/font/open-sans";
// @ts-ignore
import stylesUrl from "@woodshop/components/styles";

import rootUrl from "./root.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dashboard | The Montessory Woodshop",
  viewport: "width=device-width,initial-scale=1",
});

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
