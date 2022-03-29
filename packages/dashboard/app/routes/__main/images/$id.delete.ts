import {
  DELETE_ImageApiParams,
  DELETE_ImageApiResponse,
} from "@woodshop/api/client";
import { api } from "~/services/api.server";
import { ActionFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  try {
    const response = await api.delete<
      DELETE_ImageApiResponse,
      DELETE_ImageApiParams
    >({
      url: "/image/:id",
      headers: request.headers,
      params: {
        id: formData.get("id") as string,
      },
    });

    if (response.response.statusText === "OK") {
      return redirect("/images");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
