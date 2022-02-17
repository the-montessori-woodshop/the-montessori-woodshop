import { Button, TypographyHeading } from "@woodshop/components";
import {
  type LoaderFunction,
  useLoaderData,
  Outlet,
  MetaFunction,
} from "remix";
import { medusaClient } from "~/clients/medusa-client";
import { getPageTitle } from "~/utils/getPageTitle";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Mission") };
};

// export let loader: LoaderFunction = async () => {
//   try {
//     const { response, ...data } = await medusaClient.products.list();
//     return data;
//   } catch (error) {
//     console.log("ERROR", error);
//     throw new Error(error as string);
//   }
// };

export default function Index() {
  // const data = useLoaderData();
  const data = {};

  console.log(data);

  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <TypographyHeading cxNode="h1" cxVariant="h2">
          Welcome to Remix
        </TypographyHeading>
        <pre>{JSON.stringify(data, null, 4)}</pre>
        <Button cxVariant="contained" cxColor="primary">
          hello
        </Button>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
