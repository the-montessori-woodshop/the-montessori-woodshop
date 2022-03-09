import { PostResource } from "../features/post/Post.resource";

import { Client, type ClientConfig } from "./Client.resource";

export class WoodshopClient {
  private client: Client;
  public post: PostResource;

  constructor(config: ClientConfig) {
    this.client = new Client(config);

    this.post = new PostResource(this.client);
  }
}
