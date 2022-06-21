import { Button } from "@woodshop/components";
import type { FC } from "react";
import { useFetcher } from "@remix-run/react";

export const BlogNewPostButton: FC = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/blog/new">
      <Button
        cxVariant="contained"
        cxColor="primary"
        cxSize="small"
        type="submit"
      >
        New Post
      </Button>
    </fetcher.Form>
  );
};
