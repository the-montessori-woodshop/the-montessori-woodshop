type EnvVars =
  | "CLOUDFLARE_ACCOUNT_ID"
  | "CLOUDFLARE_IMAGE_API_TOKEN"
  | "WOODSHOP_AUTH0_AUDIENCE";

export const envVar = (envVar: EnvVars): string => {
  // @ts-ignore
  return process?.env?.[envVar] || env?.[envVar] || envVar || "";
};
