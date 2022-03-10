import client from "~/api";
import { ChipDraft } from "~/components/ChipDraft";
import { ChipPublished } from "~/components/ChipPublished";
import { PostCard } from "~/components/PostCard";
import { PostCardBody } from "~/components/PostCardBody";
import { PostCardHeader } from "~/components/PostCardHeader";
import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) {
    throw new Response("Not Found", { status: 404 });
  }

  const data = await client.post.getPostById(params.id);
  return data;
};

export default function PostSlug() {
  const { data } =
    useLoaderData<Awaited<ReturnType<typeof client.post.getPostById>>>();
  return (
    <PostCard>
      <PostCardHeader>
        {data?.published ? (
          <ChipPublished>Published</ChipPublished>
        ) : (
          <ChipDraft>Draft</ChipDraft>
        )}
      </PostCardHeader>
      <PostCardBody>{data?.content}</PostCardBody>
    </PostCard>
  );
}
