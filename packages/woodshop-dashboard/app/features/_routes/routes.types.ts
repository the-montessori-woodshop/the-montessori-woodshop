import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";

export type RemixFeatureRoute<T = Record<string, unknown>> = React.FC<T> & {
  links: LinksFunction;
  loader?: LoaderFunction;
};
