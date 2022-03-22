import BaseResource from "../../client/Base.resource";
import {
  GET_ImageByIdApiResponse,
  GET_ImagesApiResponse,
  PATCH_ImagesApiRequest,
  PATCH_ImagesApiResponse,
  POST_NewImageApiRequest,
  POST_NewImageApiResponse
} from "./image.model";

export class ImageResource extends BaseResource {
  /**
   * Get's a Image by ID
   */
  getImageById(id: string | number) {
    const url = `/api/image/${id}`;
    return this.client.request<GET_ImageByIdApiResponse>({
      method: "GET",
      url
    });
  }

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
  createNewImage(request: Request) {
    const url = "/api/image";
    return this.client.request<POST_NewImageApiResponse>({
      // POST_NewImageApiRequest
      ...request,
      method: "POST",
      // body: request.body,
      url
    });
  }

  /**
   * Creates a new image
   */
  updateImage(id: string, body: PATCH_ImagesApiRequest) {
    const url = `/api/image/${id}`;
    return this.client.request<PATCH_ImagesApiResponse, PATCH_ImagesApiRequest>(
      {
        method: "PATCH",
        body,
        url
      }
    );
  }
}
