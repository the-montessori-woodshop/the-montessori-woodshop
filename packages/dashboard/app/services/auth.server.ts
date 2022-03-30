// Create an instance of the authenticator, pass a generic with what your

import {
  POST_CreateOrUpdateUserApiRequest,
  POST_CreateOrUpdateUserApiResponse,
} from "@woodshop/api/client";
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";

import { api } from "./api.server";
import { woodshopSessionStorage } from "./session.server";

const AUTH0_CALLBACK_URL = "http://localhost:8788/auth/callback";
const AUTH0_CLIENT_ID = "KoyIXQsk00tD8DItGhElqQpoURfKmB7J";
const AUTH0_CLIENT_SECRET =
  "Bfj3XCSDMsYqVTEgKqhvYqV9lR4VU1PNTYjh5W7CF5Y1LjXEOhRpUVngqzSQXTOm";
const AUTH0_DOMAIN = "dev-3afbf-wy.us.auth0.com";
const AUTH0_AUDIENCE = "https://api.woodshop.themontessoriwoodshop.com";

// strategies will return and will be stored in the session
export const authenticator = new Authenticator(woodshopSessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    audience: AUTH0_AUDIENCE,
    domain: AUTH0_DOMAIN,
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
      console.error(error);
      throw new Error(error as string);
    }
  }
);

authenticator.use(auth0Strategy);
