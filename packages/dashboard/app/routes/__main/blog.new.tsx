import {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse,
} from "@woodshop/api";
import { api } from "~/services/api.server";
import { ActionFunction, LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async () => redirect("/blog");

export const action: ActionFunction = async ({ request }) => {
  try {
    const data = await api.post<
      POST_NewPostByIdApiResponse,
      POST_NewPostByIdApiRequest
    >({
      url: "/post",
      headers: request.headers,
      body: {
        content: "",
        published: false,
        title: "New post",
      },
    });
    return redirect(`/blog/editor/${data.id}`);
  } catch (error) {
    console.error(error);
    return null;
  }
};
