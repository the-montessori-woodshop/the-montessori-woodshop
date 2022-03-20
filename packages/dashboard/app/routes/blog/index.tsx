import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async () => {
  return redirect("/blog/posts");
};

export default function BlogIndexPage() {
  return <div>index page</div>;
}
