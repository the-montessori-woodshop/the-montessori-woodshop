import { medusaClient } from "~/medusa";
import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const { data } = await medusaClient.products.list();
  return data;
};

export default function () {
  let data = useLoaderData();

  return (
    <div>
      Medusa response:
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}
