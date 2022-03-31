import { Post as PrismaPost } from "@prisma/client";

export type Post = PrismaPost;

export type GET_PostByIdApiParams = { id: string };
export type GET_PostByIdApiResponse = Post | null;

export type GET_PostsApiResponse = Post[] | null;
export type GET_PostsApiSearchParams = {
  published: boolean;
};

export type POST_NewPostByIdApiRequest = Omit<Post, "id" | "authorId">;
export type POST_NewPostByIdApiResponse = Post;
