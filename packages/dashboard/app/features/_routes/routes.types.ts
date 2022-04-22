import type { LinksFunction } from "@remix-run/cloudflare";

export type RemixFeatureRoute<T = Record<string, unknown>> = React.FC<T> & {
  links: LinksFunction;
};
