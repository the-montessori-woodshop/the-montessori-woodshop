import type {
  DELETE_ImageApiParams,
  DELETE_ImageApiResponse,
} from "@woodshop/api";
import { api } from "~/services/api.server";
import type { ActionFunction} from "remix";
import { redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  try {
    const data = await api.delete<
      DELETE_ImageApiResponse,
      DELETE_ImageApiParams
    >({
      url: "/image/:id",
      headers: request.headers,
      params: {
        id: formData.get("id") as string,
      },
    });

    if (data) {
      return redirect("/images");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
