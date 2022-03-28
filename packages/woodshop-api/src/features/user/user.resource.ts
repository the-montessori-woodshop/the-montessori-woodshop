import // GET_PostByIdApiResponse,
// GET_PostsApiResponse,
// POST_NewPostByIdApiRequest,
// POST_NewPostByIdApiResponse
"./user.model";

import BaseResource from "../../client/Base.resource";
import { ClientPOSTRequest } from "../../types/index";
import {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse
} from "./user.model";

export class UserResource extends BaseResource {
  /**
   * Creates or updates the user entry in the DB
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
