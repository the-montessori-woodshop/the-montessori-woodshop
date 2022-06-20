import { User } from "@prisma/client";

export type POST_CreateOrUpdateUserApiRequest = Pick<
  User,
  "username" | "email"
>;

export type POST_CreateOrUpdateUserApiResponse = User;
