import {
  Icon,
  Navbar,
  NavbarAction,
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
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

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
            <Link to="/">
              <NavbarLogo src="/logo.png" alt="logo" />
            </Link>
          </NavbarSection>
          <NavbarSection cxMain>
            {/* <NavbarLinks>
          <NavbarLinkItem>
            <NavbarLinkText>Home</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Mission</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Shop</NavbarLinkText>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavbarLinkText>Blog</NavbarLinkText>
          </NavbarLinkItem>
        </NavbarLinks> */}
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
