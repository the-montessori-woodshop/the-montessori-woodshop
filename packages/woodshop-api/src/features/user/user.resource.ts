import // GET_PostByIdApiResponse,
// GET_PostsApiResponse,
// POST_NewPostByIdApiRequest,
// POST_NewPostByIdApiResponse
"./user.model";

import BaseResource from "../../client/Base.resource";
import { WoodshopClientRequestConfig } from "../../client/Client.resource";
import { ClientPOSTRequest } from "../../types/index";
import {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse
} from "./user.model";

export class UserResource extends BaseResource {
  /**
   * Get's a Blog Post by ID
   */
  // getUserById(id: string | number) {
  //   const url = `/api/user/${id}`;
  //   return this.client.request<GET_PostByIdApiResponse>({
  //     method: "GET",
  //     url
  //   });
  // }

  // /**
  //  * Get's a list of blog users
  //  */
  // getUsers() {
  //   const url = "/api/user";
  //   return this.client.request<GET_PostsApiResponse>({
  //     method: "GET",
  //     url
  //   });
  // }

  // /**
  //  * Creates a new blog user
  //  */
  // createNewUser(data: POST_NewPostByIdApiRequest) {
  //   const url = "/api/user";
  //   return this.client.request<
  //     POST_NewPostByIdApiResponse,
  //     POST_NewPostByIdApiRequest
  //   >({
  //     method: "POST",
  //     body: data,
  //     url
  //   });
  // }

  // /**
  //  * Creates a new blog user
  //  */
  // updateExistingUser(id: string | number, data: POST_NewPostByIdApiRequest) {
  //   const url = `/api/user/${id}`;
  //   return this.client.request<
  //     POST_NewPostByIdApiResponse,
  //     POST_NewPostByIdApiRequest
  //   >({
  //     method: "POST",
  //     body: data,
  //     url
  //   });
  // }

  /**
   * Creates a new blog user
   */
  createOrUpdateUser(
    request: ClientPOSTRequest<POST_CreateOrUpdateUserApiRequest>
  ) {
    const url = `/api/user/upsert`;
    const headers = request.headers || new Headers();
    headers.append("Content-Type", "application/json");
    return this.client.request<
      POST_CreateOrUpdateUserApiResponse,
      POST_CreateOrUpdateUserApiRequest
    >({
      ...request,
      headers,
      body: JSON.stringify(request.body),
      method: "POST",
      url
    });
  }
}
