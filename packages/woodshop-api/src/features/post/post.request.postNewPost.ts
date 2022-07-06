import { prisma } from "../../utils/getPrisma";
import { HandlePOSTRequest } from "../../utils/handle.model";
import {
  InternalServerError,
  PayloadValidationError
} from "../../utils/handleError";
import { handleRoute } from "../../utils/handleRoute";
import { log } from "../../utils/logger";
import {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse
} from "./post.model";

export const postNewPost: HandlePOSTRequest<
  POST_NewPostByIdApiResponse
> = async (request) => {
  const reqData = await request.json<POST_NewPostByIdApiRequest>();
  if (!reqData.userId && !request.user) {
    throw new PayloadValidationError({
      userId: "User ID is required"
    });
  }

  try {
    const post = await prisma.post.create({
      data: {
        ...reqData.post,
        author: {
          connect: {
            id: request.user?.id || reqData.userId
          }
        },
        banner_img_alt: "",
        banner_img_url: ""
      }
    });
    return post;
  } catch (error) {
    log.error("Error when creating the post in the DB", error);
    throw new InternalServerError("Unable to create new post.", { error });
  }
};

export const handlePostNewPost = handleRoute(postNewPost);
