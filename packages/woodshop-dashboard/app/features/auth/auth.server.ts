// Create an instance of the authenticator, pass a generic with what your

import { LoaderFunction } from "@remix-run/server-runtime";
import type {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse,
} from "@woodshop/api";
import { api } from "~/features/api/api.server";
import { woodshopSessionStorage } from "~/features/session/session.server";
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";

import { envVarFromContext } from "../../utils/envVar";

// strategies will return and will be stored in the session
export const authenticator = new Authenticator(woodshopSessionStorage);

export const setAuth0Strategy = (context: Record<string, string>) => {
  return new Auth0Strategy(
    {
      callbackURL: envVarFromContext("WOODSHOP_AUTH0_CALLBACK_URL", context),
      clientID: envVarFromContext(
        "WOODSHOP_AUTH0_DASHBOARD_CLIENT_ID",
        context
      ),
      clientSecret: envVarFromContext(
        "WOODSHOP_AUTH0_DASHBOARD_CLIENT_SECRET",
        context
      ),
      audience: envVarFromContext("WOODSHOP_AUTH0_AUDIENCE", context),
      domain: envVarFromContext("WOODSHOP_AUTH0_DOMAIN", context),
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      try {
        const headers = new Headers();
        headers.append(`Authorization`, `Bearer ${accessToken}`);

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
        console.log("Dashboard Error", error);
        throw new Error(error as string);
      }
    }
  );
};
