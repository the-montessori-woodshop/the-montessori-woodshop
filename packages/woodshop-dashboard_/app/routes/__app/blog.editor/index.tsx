import type { LoaderFunction } from "@remix-run/cloudflare/dist";
import { redirect } from "@remix-run/cloudflare/dist";

export const loader: LoaderFunction = () => redirect("/blog");
