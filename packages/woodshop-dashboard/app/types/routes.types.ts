import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/cloudflare";

export type RemixFeatureUIRoute<T = Record<string, unknown>> = React.FC<T> & {
  links?: LinksFunction;
  loader?: LoaderFunction;
  action?: ActionFunction;
  handle?: Record<string, any>;
};

export type RemixFeatureResourceRoute = {
  links?: LinksFunction;
  loader?: LoaderFunction;
  action?: ActionFunction;
  handle?: Record<string, any>;
};
