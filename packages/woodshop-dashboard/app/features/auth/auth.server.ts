// Create an instance of the authenticator, pass a generic with what your

import type {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse,
} from "@woodshop/api";
import { api } from "~/features/api/api.server";
import { woodshopSessionStorage } from "~/features/session/session.server";
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";

export const authenticator = new Authenticator(woodshopSessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: WOODSHOP_AUTH0_DASHBOARD_CALLBACK_URL,
    clientID: WOODSHOP_AUTH0_DASHBOARD_CLIENT_ID,
    clientSecret: WOODSHOP_AUTH0_DASHBOARD_CLIENT_SECRET,
    audience: WOODSHOP_AUTH0_AUDIENCE,
    domain: WOODSHOP_AUTH0_DASHBOARD_DOMAIN,
  },
  async ({ accessToken, refreshToken, extraParams, profile, ...rest }) => {
    console.log(rest);
    try {
      const headers = new Headers();
      headers.append(`authorization`, `Bearer ${accessToken}`);

      const user = await api.post<
        POST_CreateOrUpdateUserApiResponse,
        POST_CreateOrUpdateUserApiRequest
      >({
        url: "/user/upsert",
        headers,
        body: {
          username: profile.id,
          email: profile.emails[0].value,
        },
      });

      return {
        ...user,
        accessToken,
      };
    } catch (error) {
      throw new Error(error as string);
    }
  }
);

authenticator.use(auth0Strategy);
