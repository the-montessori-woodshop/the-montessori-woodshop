const siteName = "The Montessori Woodshop";

export const getPageTitle = (pageName?: string) =>
  pageName ? `${pageName} | ${siteName}` : siteName;
