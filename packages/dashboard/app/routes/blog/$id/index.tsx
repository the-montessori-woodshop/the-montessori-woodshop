import { PageContainer } from "~/components/PageContainer";
import { PageContent } from "~/components/PageContent";
import { PageTitle } from "~/components/PageTitle";
import { json, useLoaderData } from "remix";

// export async function loader() {
//   // const res = await fetch("https://api.github.com/gists");
//   // return json(await res.json());
// }

export default function BlogIndexPage() {
  // const { data } = useLoaderData();

  return (
    <PageContainer>
      <PageTitle>title of the blog post</PageTitle>
      <PageContent>h</PageContent>
    </PageContainer>
  );
}
