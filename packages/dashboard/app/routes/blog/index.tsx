import client from "~/api";
import { useLoaderData, type LoaderFunction } from "remix";
import { TypographyHeading } from "@woodshop/components";

export const loader: LoaderFunction = async () => {
  const data = await client.post.getPosts();
  return data;
};

type LoaderData = Awaited<ReturnType<typeof client.post.getPosts>>;

export default function BlogPage() {
  const { data } = useLoaderData<LoaderData>();

  console.log(data);

  return (
    <TypographyHeading
      cxVariant="h3"
      cxNode="h2"
      style={{
        marginTop: 0,
      }}
    >
      All Articles
    </TypographyHeading>
  );
}
