import { withEmotionCache } from "@emotion/react";
import styled from "@emotion/styled";
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
  useCatch,
  type MetaFunction,
} from "remix";

import ClientStyleContext from "./emotion/context.client";
import ServerStyleContext from "./emotion/context.server";

import rootUrl from "./root.css";
import { useContext, useEffect } from "react";

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

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const SImg = styled("img")`
  height: ${makeRem(44)};
  width: ${makeRem(44)};
  margin-right: ${makeRem(16)};
`;

const SMain = styled("main")`
  flex: 1;
`;

const SDiv = styled("div")`
  display: flex;
  align-items: center;
`;

const Container = styled("div")`
  background-color: #ff0000;
  padding: 1em;
`;

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;

      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });

      // reset cache to re-apply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
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
          <SMain>{children}</SMain>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Container>
        <p>
          [CatchBoundary]: {caught.status} {caught.statusText}
        </p>
      </Container>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <Container>
        <p>[ErrorBoundary]: There was an error: {error.message}</p>
      </Container>
    </Document>
  );
}
