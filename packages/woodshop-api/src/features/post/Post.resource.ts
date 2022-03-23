import BaseResource from "../../client/Base.resource";
import {
  GET_PostByIdApiResponse,
  GET_PostsApiResponse,
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse
} from "./post.model";

export class PostResource extends BaseResource {
  /**
   * Get's a Blog Post by ID
   */
  getPostById(id: string | number) {
    const url = `/api/post/${id}`;
    return this.client.request<GET_PostByIdApiResponse>({
      method: "GET",
      url
    });
  }

  /**
   * Get's a list of blog posts
   */
  getPosts() {
    const url = "/api/post";
    return this.client.request<GET_PostsApiResponse>({
      method: "GET",
      url
    });
  }

  /**
   * Creates a new blog post
   */
  createNewPost(data: POST_NewPostByIdApiRequest) {
    const url = "/api/post";
    return this.client.request<
      POST_NewPostByIdApiResponse,
      POST_NewPostByIdApiRequest
    >({
      method: "POST",
      body: data,
      url
    });
  }
}
