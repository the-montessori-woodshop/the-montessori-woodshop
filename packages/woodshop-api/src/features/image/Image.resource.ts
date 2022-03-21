import BaseResource from "../../client/Base.resource";
import {
  GET_ImagesApiResponse,
  POST_NewImageApiRequest,
  POST_NewImageApiResponse
} from "./image.model";

export class ImageResource extends BaseResource {
  /**
   * Get's a list of blog posts
   */
  getImages() {
    const url = "/api/image";
    return this.client.request<GET_ImagesApiResponse>({
      method: "GET",
      url
    });
  }

  /**
   * Creates a new image
   */
  createNewImage(data: POST_NewImageApiRequest) {
    const url = "/api/image";
    return this.client.request<
      POST_NewImageApiResponse,
      POST_NewImageApiRequest
    >({
      method: "POST",
      data,
      url
    });
  }
}
