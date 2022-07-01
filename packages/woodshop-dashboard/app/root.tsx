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
import themeUrl from "@woodshop/components/css";
import fontBitterUrl from "@woodshop/components/fonts/bitter.css";
import fontOpenSansUrl from "@woodshop/components/fonts/open-sans.css";

import appStylesUrl from "./styles.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dashboard | The Montessory Woodshop",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: themeUrl },
    { rel: "stylesheet", href: appStylesUrl },
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
