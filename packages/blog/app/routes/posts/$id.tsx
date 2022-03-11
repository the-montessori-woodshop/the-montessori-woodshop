import { Button, Icon } from "@woodshop/components";
import { Pencil, Send } from "@woodshop/icons";
import client from "~/api";
import { PostCard } from "~/components/PostCard";
import { PostCardBody } from "~/components/PostCardBody";
import { PostCardChip } from "~/components/PostCardChip";
import { PostCardHeader } from "~/components/PostCardHeader";
import { LoaderFunction, useLoaderData } from "remix";
import styled from "styled-components";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) {
    throw new Response("Not Found", { status: 404 });
  }

  const data = await client.post.getPostById(params.id);
  return data;
};

const SDiv = styled.div`
  display: flex;
`;

export default function PostSlug() {
  const { data } =
    useLoaderData<Awaited<ReturnType<typeof client.post.getPostById>>>();
  return (
    <PostCard>
      <PostCardHeader>
        <PostCardChip published={data?.published} />
        <SDiv>
          <Button>
            <Icon cxTitle="icon">
              <Send />
            </Icon>
          </Button>
          <Button>
            <Icon cxTitle="icon">
              <Pencil />
            </Icon>
          </Button>
        </SDiv>
      </PostCardHeader>
      <PostCardBody>{data?.content}</PostCardBody>
    </PostCard>
  );
}
