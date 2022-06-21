import { HandlePOSTRequest } from "../../types/index";
import { prisma } from "../../utils/getPrisma";
import { handleRoute } from "../../utils/handleRoute";
import {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse
} from "./post.model";

export const postNewPost: HandlePOSTRequest<
  POST_NewPostByIdApiResponse
> = async (request) => {
  if (!request.user) {
    throw new Error("Not Authorized.");
  }

  try {
    const data = await request.json<POST_NewPostByIdApiRequest>();

    const post = await prisma.post.create({
      data: {
        ...data,
        authorId: request.user.id
      }
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const handlePostNewPost = handleRoute(postNewPost);
