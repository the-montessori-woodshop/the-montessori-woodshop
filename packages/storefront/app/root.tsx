import {
  Icon,
  Navbar,
  NavbarAction,
  NavbarLinkList,
  NavbarLinkListItem,
  NavbarLinkListItemText,
  NavbarLogo,
  NavbarSection,
} from "@woodshop/components";
import fontBitterUrl from "@woodshop/components/css/bitter.css";
import stylesUrl from "@woodshop/components/css/styles.css";
import themeUrl from "@woodshop/components/css/theme.css";
import { ShoppingCart, UserCircle } from "@woodshop/icons";
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import { NavbarLink } from "./components/NavbarLink";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: themeUrl },
    { rel: "stylesheet", href: fontBitterUrl },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar>
          <NavbarSection>
            <NavbarLogo src="/logo.png" alt="logo" />
          </NavbarSection>
          <NavbarSection cxMain>
            <NavbarLinkList>
              <NavbarLinkListItem>
                <NavbarLink to="/">Home</NavbarLink>
              </NavbarLinkListItem>
              <NavbarLinkListItem>
                <NavbarLink to="/mission">Mission</NavbarLink>
              </NavbarLinkListItem>
              <NavbarLinkListItem>
                <NavbarLink to="/shop">Shop</NavbarLink>
              </NavbarLinkListItem>
              <NavbarLinkListItem>
                <NavbarLink to="/blog">Blog</NavbarLink>
              </NavbarLinkListItem>
            </NavbarLinkList>
          </NavbarSection>
          <NavbarSection>
            <NavbarAction>
              <Icon cxTitle="shopping-cart">
                <ShoppingCart />
              </Icon>
            </NavbarAction>
            <NavbarAction>
              <Icon cxTitle="account">
                <UserCircle />
              </Icon>
            </NavbarAction>
          </NavbarSection>
        </Navbar>
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
