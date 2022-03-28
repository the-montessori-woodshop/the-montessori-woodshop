import api from "~/api/index";
import { ActionFunction, redirect } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id") as string;
  if (id) {
    try {
      await api.image.delete(id);
      return redirect("/images");
    } catch (error) {
      console.error(error);
    }
  }
  return null;
};
