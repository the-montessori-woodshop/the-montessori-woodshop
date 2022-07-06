import { Post as PrismaPost } from "@prisma/client/edge";

export type Post = PrismaPost;

export type GET_PostByIdApiParams = { id: string };
export type GET_PostByIdApiResponse = Post | null;

export type GET_PostsApiResponse = Post[] | null;
export type GET_PostsApiSearchParams = {
  published: boolean;
};

export type POST_NewPostByIdApiRequest = {
  post: Omit<Post, "id" | "authorId">;
  userId?: string;
};
export type POST_NewPostByIdApiResponse = Post;

export type PATCH_UpdatePostByIdApiResponse = Post;
export type PATCH_UpdatePostByIdApiParams = { id: string };
export type PATCH_UpdatePostByIdApiRequest = Omit<Post, "id" | "authorId">;
