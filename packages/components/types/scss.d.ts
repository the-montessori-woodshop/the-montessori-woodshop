declare module "*.scss" {
  const content: Record<string, string>;
  export = content;
}
declare module "*.scss" {
  const content: Record<string, Record<string, string>>;
  export = content;
}
