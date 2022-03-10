import { TypographyHeading, makeRem } from "@woodshop/components";
import fontBitterUrl from "@woodshop/components/css/bitter.css";
import fontOpenSansUrl from "@woodshop/components/css/open-sans.css";
import stylesUrl from "@woodshop/components/css/styles.css";
import themeUrl from "@woodshop/components/css/theme.css";
import { AppHeader } from "~/components/AppHeader";
import { AppHeaderItem } from "~/components/AppHeaderItem";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styled from "styled-components";

import rootUrl from "./root.css";

export const meta: MetaFunction = () => {
  return { title: "Blog | The Montessory Woodshop" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: themeUrl },
    { rel: "stylesheet", href: rootUrl },
    { rel: "stylesheet", href: fontBitterUrl },
    { rel: "stylesheet", href: fontOpenSansUrl },
  ];
};

const SImg = styled.img`
  height: ${makeRem(44)};
  width: ${makeRem(44)};
  margin-right: ${makeRem(16)};
`;

const SMain = styled.main`
  flex: 1;
`;

const SDiv = styled.div`
  display: flex;
  align-items: center;
`;

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
        <AppHeader>
          <AppHeaderItem>
            <SDiv>
              <SImg src="/logo-512x512-transparent.png" alt="tmw-logo" />
              <TypographyHeading
                cxVariant="h5"
                cxNode="h1"
                style={{
                  fontSize: makeRem(18),
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                Blog
              </TypographyHeading>
            </SDiv>
          </AppHeaderItem>
        </AppHeader>
        <SMain>
          <Outlet />
        </SMain>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
