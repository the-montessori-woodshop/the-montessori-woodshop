import { Client } from "./Client.resource";

export default class BaseResource {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }
}
