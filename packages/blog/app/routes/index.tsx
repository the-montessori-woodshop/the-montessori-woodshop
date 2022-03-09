import { Outlet } from "react-router";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import client from "../api";

export const loader: LoaderFunction = async () => {
  const data = await client.post.getPosts();
  return data;
};

export default function Index() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Index Page
      <Outlet />
    </div>
  );
}
