import { Button } from "@woodshop/components";
import { medusaClient } from "../../clients/medusa-client";
import { type LoaderFunction, useLoaderData } from "remix";

export let loader: LoaderFunction = async () => {
  const { response, ...data } = await medusaClient.products.list();
  return data;
};

export default function Index() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Button cxVariant="text" cxColor="secondary">
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
    </div>
  );
}
