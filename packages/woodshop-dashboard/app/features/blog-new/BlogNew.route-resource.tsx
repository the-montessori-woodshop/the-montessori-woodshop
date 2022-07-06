import { redirect } from "@remix-run/cloudflare";
import type {
  POST_NewPostByIdApiRequest,
  POST_NewPostByIdApiResponse,
} from "@woodshop/api";
import { api } from "~/features/api";
import type { RemixFeatureResourceRoute } from "~/types/routes.types";

export const BlogNewRouteResource: RemixFeatureResourceRoute = {
  // if the UI hit's this route, just go back to the blog list page
  loader: async () => redirect("/blog"),
  // if an action POSTS, to this, create another post
  action: async ({ request }) => {
    try {
      const data = await api.post<
        POST_NewPostByIdApiResponse,
        POST_NewPostByIdApiRequest
      >({
        url: "/post",
        headers: request.headers,
        body: {
          post: {
            title: "New post",
            content: "",
            banner_img_alt: "",
            banner_img_url: "",
            thumbnail_img_url: null,
            prompt: null,
            date_published: null,
            published: false,
            og_type: null,
            og_title: null,
            og_img_url: null,
            og_image: null,
            og_description: null,
            og_article_author: null,
            og_article_section: null,
            og_article_tag: [],
            ld_url: null,
            ld_headline: null,
            ld_image_url: null,
            ld_date_published: null,
            ld_date_modified: null,
            ld_author_name: null,
            ld_publisher: null,
            ld_logo_url: null,
            twitter_title: null,
            twitter_site: null,
            twitter_description: null,
            twitter_image_url: null,
            twitter_image_alt: null,
          },
        },
      });
      return redirect(`/blog/editor/${data.id}`);
    } catch (error) {
      console.error("Error!!!!", error);
      return null;
    }
  },
};
