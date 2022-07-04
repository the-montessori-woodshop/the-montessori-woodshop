import type {
  ActionFunction,
  LoaderFunction,
} from "@remix-run/cloudflare/dist";
import { redirect } from "@remix-run/cloudflare/dist";
import type {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse,
} from "@woodshop/api";
import { api } from "~/features/api/api.server";

export const loader: LoaderFunction = async () => redirect("/blog");

export const action: ActionFunction = async ({ request }) => {
  try {
    const data = await api.post<
      POST_NewPostByIdApiResponse,
      POST_NewPostByIdApiRequest
    >({
      url: "/post",
      headers: request.headers,
      // @ts-ignore
      body: {
        title: "New post",
      },
    });
    return redirect(`/blog/editor/${data.id}`);
  } catch (error) {
    console.error(error);
    return null;
  }
};
