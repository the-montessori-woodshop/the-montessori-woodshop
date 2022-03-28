import { ImageResource } from "../features/image/Image.resource";
import { PostResource } from "../features/post/Post.resource";
import { UserResource } from "../features/user/user.resource";

export * from "../features/post/post.model";
export * from "../features/image/image.model";
export * from "../features/user/user.model";

import { Client, type ClientConfig } from "./Client.resource";

export class WoodshopClient {
  private client: Client;
  public post: PostResource;
  public image: ImageResource;
  public user: UserResource;

  constructor(config: ClientConfig) {
    this.client = new Client(config);

    this.post = new PostResource(this.client);
    this.image = new ImageResource(this.client);
    this.user = new UserResource(this.client);
  }
}
