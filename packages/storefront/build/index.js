var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../node_modules/@remix-run/dev/compiler/shims/react.ts
import * as React from "react";

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";

// ../../node_modules/remix/esm/index.js
import { createCloudflareKVSessionStorage } from "@remix-run/cloudflare-pages";
import { createCookie, createCookieSessionStorage, createMemorySessionStorage, createSession, createSessionStorage, isCookie, isSession, json, redirect } from "@remix-run/server-runtime";
import { Form, Link, Links, LiveReload, Meta, NavLink, Outlet, PrefetchPageLinks, RemixBrowser, RemixServer, Scripts, ScrollRestoration, useActionData, useBeforeUnload, useCatch, useFetcher, useFetchers, useFormAction, useHref, useLoaderData, useLocation, useMatches, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useSearchParams, useSubmit, useTransition } from "@remix-run/react";

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = renderToString(/* @__PURE__ */ React.createElement(RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// ../components/css/bitter.css
var bitter_default = "/build/_assets/bitter-H5P3FPS7.css";

// ../components/css/open-sans.css
var open_sans_default = "/build/_assets/open-sans-EMWSOUU3.css";

// ../components/css/styles.css
var styles_default = "/build/_assets/styles-HIGHOICF.css";

// ../components/css/theme.css
var theme_default = "/build/_assets/theme-ED2TUTYN.css";

// app/features/Footer.tsx
import {
  Footer as FooterEl,
  FooterSection,
  FooterSectionContent,
  FooterSectionContentText,
  FooterSectionTitle
} from "@woodshop/components";
import { memo } from "react";
var Footer = memo(function Footer2() {
  return /* @__PURE__ */ React.createElement(FooterEl, null, /* @__PURE__ */ React.createElement(FooterSection, null, /* @__PURE__ */ React.createElement(FooterSectionTitle, null, "The Montessori Woodshop, LLC"), /* @__PURE__ */ React.createElement(FooterSectionContent, null, /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet"))), /* @__PURE__ */ React.createElement(FooterSection, null, /* @__PURE__ */ React.createElement(FooterSectionTitle, null, "About Us"), /* @__PURE__ */ React.createElement(FooterSectionContent, null, /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Our Story"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Mission"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Craftsmanship"))), /* @__PURE__ */ React.createElement(FooterSection, null, /* @__PURE__ */ React.createElement(FooterSectionTitle, null, "Privacy & Security"), /* @__PURE__ */ React.createElement(FooterSectionContent, null, /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Shipping & Returns"))), /* @__PURE__ */ React.createElement(FooterSection, null, /* @__PURE__ */ React.createElement(FooterSectionTitle, null, "Support"), /* @__PURE__ */ React.createElement(FooterSectionContent, null, /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Shipping & Returns"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "FAQs"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Warranty"), /* @__PURE__ */ React.createElement(FooterSectionContentText, null, "Contact Us"))));
});

// app/features/Header.tsx
import {
  Icon as Icon2,
  Navbar,
  NavbarAction as NavbarAction2,
  NavbarLinkList,
  NavbarLinkListItem,
  NavbarLogo,
  NavbarSection
} from "@woodshop/components";
import { UserCircle } from "@woodshop/icons";

// app/components/NavbarLink.tsx
import { NavbarLinkListItemText } from "@woodshop/components";
import { forwardRef } from "react";
var NavbarLink = forwardRef(function NavbarLink2(_a, ref) {
  var _b = _a, { children } = _b, restProps = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement(NavLink, __spreadProps(__spreadValues({}, restProps), {
    ref
  }), ({ isActive }) => /* @__PURE__ */ React.createElement(NavbarLinkListItemText, {
    active: isActive
  }, children));
});

// app/features/Header.tsx
import { memo as memo3 } from "react";

// app/features/HeaderCart.tsx
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Icon,
  NavbarAction,
  TypographyHeading,
  useDialogRef
} from "@woodshop/components";
import { ShoppingCart } from "@woodshop/icons";
import { memo as memo2 } from "react";
var HeaderCart = memo2(function HeaderCart2() {
  const { dialogRef, handleOpen } = useDialogRef();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavbarAction, {
    onClick: handleOpen
  }, /* @__PURE__ */ React.createElement(Icon, {
    cxTitle: "shopping-cart"
  }, /* @__PURE__ */ React.createElement(ShoppingCart, null))), /* @__PURE__ */ React.createElement(Drawer, {
    ref: dialogRef,
    openWidth: 520
  }, /* @__PURE__ */ React.createElement(DrawerHeader, null, /* @__PURE__ */ React.createElement(TypographyHeading, {
    cxVariant: "h2",
    cxNode: "h2"
  }, "Cart")), /* @__PURE__ */ React.createElement(DrawerBody, null, "this be the body")));
});

// app/features/Header.tsx
var Header = memo3(function Header2() {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement(Navbar, null, /* @__PURE__ */ React.createElement(NavbarSection, null, /* @__PURE__ */ React.createElement(NavbarLogo, {
    src: "/logo.png",
    alt: "logo"
  })), /* @__PURE__ */ React.createElement(NavbarSection, {
    cxMain: true
  }, /* @__PURE__ */ React.createElement(NavbarLinkList, null, /* @__PURE__ */ React.createElement(NavbarLinkListItem, null, /* @__PURE__ */ React.createElement(NavbarLink, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement(NavbarLinkListItem, null, /* @__PURE__ */ React.createElement(NavbarLink, {
    to: "/mission"
  }, "Mission")), /* @__PURE__ */ React.createElement(NavbarLinkListItem, null, /* @__PURE__ */ React.createElement(NavbarLink, {
    to: "/shop"
  }, "Shop")), /* @__PURE__ */ React.createElement(NavbarLinkListItem, null, /* @__PURE__ */ React.createElement(NavbarLink, {
    to: "/blog"
  }, "Blog")))), /* @__PURE__ */ React.createElement(NavbarSection, null, /* @__PURE__ */ React.createElement(HeaderCart, null), /* @__PURE__ */ React.createElement(NavbarAction2, null, /* @__PURE__ */ React.createElement(Icon2, {
    cxTitle: "account"
  }, /* @__PURE__ */ React.createElement(UserCircle, null))))));
});

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: theme_default },
    { rel: "stylesheet", href: bitter_default },
    { rel: "stylesheet", href: open_sans_default }
  ];
};
var meta = () => {
  return { title: "The Montessori Woodshop" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => CheckoutRoute,
  meta: () => meta2
});

// app/utils/getPageTitle.ts
var siteName = "The Montessori Woodshop";
var getPageTitle = (pageName) => pageName ? `${pageName} | ${siteName}` : siteName;

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/checkout.tsx
var meta2 = () => {
  return { title: getPageTitle("Checkout") };
};
function CheckoutRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "CheckoutRoute", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/checkout/index.tsx
var checkout_exports2 = {};
__export(checkout_exports2, {
  default: () => CheckoutIndex
});
function CheckoutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, "CheckoutIndex", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/mission.tsx
var mission_exports = {};
__export(mission_exports, {
  default: () => MissionRoute,
  meta: () => meta3
});
var meta3 = () => {
  return { title: getPageTitle("Mission") };
};
function MissionRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "MissionRoute", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/mission/index.tsx
var mission_exports2 = {};
__export(mission_exports2, {
  default: () => MissionIndex
});
function MissionIndex() {
  return /* @__PURE__ */ React.createElement("div", null, "MissionIndex", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta4
});
import { Button, TypographyHeading as TypographyHeading2 } from "@woodshop/components";

// app/clients/medusa-client.ts
import Medusa from "@medusajs/medusa-js";
var medusaClient = new Medusa({
  baseUrl: true ? "http://localhost:9000" : "https://store.themontessoriwoodshop.com",
  maxRetries: 2
});

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/index.tsx
var meta4 = () => {
  return { title: getPageTitle("Mission") };
};
var loader = async () => {
  try {
    const _a = await medusaClient.products.list(), { response } = _a, data = __objRest(_a, ["response"]);
    return data;
  } catch (error) {
    console.log("ERROR", error);
    throw new Error(error);
  }
};
function Index() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(TypographyHeading2, {
    cxNode: "h1",
    cxVariant: "h2"
  }, "Welcome to Remix"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(data, null, 4)), /* @__PURE__ */ React.createElement(Button, {
    cxVariant: "contained",
    cxColor: "primary"
  }, "hello"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))), /* @__PURE__ */ React.createElement(Outlet, null)));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogRoute,
  meta: () => meta5
});
var meta5 = () => {
  return { title: getPageTitle("Blog") };
};
function BlogRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "BlogRoute", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => BlogIndex
});
function BlogIndex() {
  return /* @__PURE__ */ React.createElement("div", null, "BlogIndex", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/shop.tsx
var shop_exports = {};
__export(shop_exports, {
  default: () => ShopRoute,
  meta: () => meta6
});
var meta6 = () => {
  return { title: getPageTitle("Shop") };
};
function ShopRoute() {
  return /* @__PURE__ */ React.createElement("div", null, "ShopRoute", /* @__PURE__ */ React.createElement(Outlet, null));
}

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/shop/$productId.tsx
var productId_exports = {};
__markAsModule(productId_exports);

// route:/Users/drewdecarme/git/the-montessori-woodshop/the-montessori-woodshop/packages/storefront/app/routes/shop/index.tsx
var shop_exports2 = {};
__export(shop_exports2, {
  default: () => ShopIndex
});
function ShopIndex() {
  return /* @__PURE__ */ React.createElement("div", null, "ShopIndex", /* @__PURE__ */ React.createElement(Outlet, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "365c6b41", "entry": { "module": "/build/entry.client-W4BMCWGA.js", "imports": ["/build/_shared/chunk-6PIIPIOA.js", "/build/_shared/chunk-SGQYU57U.js", "/build/_shared/chunk-T5JMMHKF.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VDUHWZSD.js", "imports": ["/build/_shared/chunk-2SNJRAGK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-7FEZOBJV.js", "imports": ["/build/_shared/chunk-43CAW35I.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-34N5OFUY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/checkout": { "id": "routes/checkout", "parentId": "root", "path": "checkout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/checkout-FTQOAK6R.js", "imports": ["/build/_shared/chunk-43CAW35I.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/checkout/index": { "id": "routes/checkout/index", "parentId": "routes/checkout", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/checkout/index-ZK463HXD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZGXG5C5H.js", "imports": ["/build/_shared/chunk-43CAW35I.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mission": { "id": "routes/mission", "parentId": "root", "path": "mission", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/mission-JQ7TUMVS.js", "imports": ["/build/_shared/chunk-43CAW35I.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mission/index": { "id": "routes/mission/index", "parentId": "routes/mission", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/mission/index-PM2K2TG3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shop": { "id": "routes/shop", "parentId": "root", "path": "shop", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shop-VAE7XWQV.js", "imports": ["/build/_shared/chunk-43CAW35I.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shop/$productId": { "id": "routes/shop/$productId", "parentId": "routes/shop", "path": ":productId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shop/$productId-F6RJLKQB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shop/index": { "id": "routes/shop/index", "parentId": "routes/shop", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shop/index-D2TSEYIE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-365C6B41.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/checkout/index": {
    id: "routes/checkout/index",
    parentId: "routes/checkout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: checkout_exports2
  },
  "routes/mission": {
    id: "routes/mission",
    parentId: "root",
    path: "mission",
    index: void 0,
    caseSensitive: void 0,
    module: mission_exports
  },
  "routes/mission/index": {
    id: "routes/mission/index",
    parentId: "routes/mission",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: mission_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  },
  "routes/shop": {
    id: "routes/shop",
    parentId: "root",
    path: "shop",
    index: void 0,
    caseSensitive: void 0,
    module: shop_exports
  },
  "routes/shop/$productId": {
    id: "routes/shop/$productId",
    parentId: "routes/shop",
    path: ":productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/shop/index": {
    id: "routes/shop/index",
    parentId: "routes/shop",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: shop_exports2
  }
};
export {
  assets_manifest_default as assets,
  entry,
  routes
};
/**
 * @remix-run/cloudflare-pages v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vaW5kZXguanMiLCAicm91dGU6L1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb290LnRzeCIsICIuLi9hcHAvZmVhdHVyZXMvRm9vdGVyLnRzeCIsICIuLi9hcHAvZmVhdHVyZXMvSGVhZGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXJMaW5rLnRzeCIsICIuLi9hcHAvZmVhdHVyZXMvSGVhZGVyQ2FydC50c3giLCAicm91dGU6L1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvY2hlY2tvdXQudHN4IiwgIi4uL2FwcC91dGlscy9nZXRQYWdlVGl0bGUudHMiLCAicm91dGU6L1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvY2hlY2tvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL21pc3Npb24udHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL21pc3Npb24vaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY2xpZW50cy9tZWR1c2EtY2xpZW50LnRzIiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2Jsb2cudHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL3Nob3AudHN4IiwgInJvdXRlOi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL3Nob3AvJHByb2R1Y3RJZC50c3giLCAicm91dGU6L1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvc2hvcC9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9jbG91ZGZsYXJlLXBhZ2VzIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5leHBvcnQgeyBjcmVhdGVDbG91ZGZsYXJlS1ZTZXNzaW9uU3RvcmFnZSB9IGZyb20gJ0ByZW1peC1ydW4vY2xvdWRmbGFyZS1wYWdlcyc7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZXhwb3J0IHsgY3JlYXRlQ29va2llLCBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UsIGNyZWF0ZVNlc3Npb24sIGNyZWF0ZVNlc3Npb25TdG9yYWdlLCBpc0Nvb2tpZSwgaXNTZXNzaW9uLCBqc29uLCByZWRpcmVjdCB9IGZyb20gJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmV4cG9ydCB7IEZvcm0sIExpbmssIExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBOYXZMaW5rLCBPdXRsZXQsIFByZWZldGNoUGFnZUxpbmtzLCBSZW1peEJyb3dzZXIsIFJlbWl4U2VydmVyLCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlQWN0aW9uRGF0YSwgdXNlQmVmb3JlVW5sb2FkLCB1c2VDYXRjaCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUhyZWYsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbiIsICJpbXBvcnQgZm9udEJpdHRlclVybCBmcm9tIFwiQHdvb2RzaG9wL2NvbXBvbmVudHMvY3NzL2JpdHRlci5jc3NcIjtcbmltcG9ydCBmb250T3BlblNhbnNVcmwgZnJvbSBcIkB3b29kc2hvcC9jb21wb25lbnRzL2Nzcy9vcGVuLXNhbnMuY3NzXCI7XG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJAd29vZHNob3AvY29tcG9uZW50cy9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHRoZW1lVXJsIGZyb20gXCJAd29vZHNob3AvY29tcG9uZW50cy9jc3MvdGhlbWUuY3NzXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwifi9mZWF0dXJlcy9Gb290ZXJcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJ+L2ZlYXR1cmVzL0hlYWRlclwiO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0aGVtZVVybCB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZm9udEJpdHRlclVybCB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZm9udE9wZW5TYW5zVXJsIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJUaGUgTW9udGVzc29yaSBXb29kc2hvcFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEZvb3RlciBhcyBGb290ZXJFbCxcbiAgRm9vdGVyU2VjdGlvbixcbiAgRm9vdGVyU2VjdGlvbkNvbnRlbnQsXG4gIEZvb3RlclNlY3Rpb25Db250ZW50VGV4dCxcbiAgRm9vdGVyU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiQHdvb2RzaG9wL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZDLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGb290ZXI6IEZDID0gbWVtbyhmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEZvb3RlckVsPlxuICAgICAgPEZvb3RlclNlY3Rpb24+XG4gICAgICAgIDxGb290ZXJTZWN0aW9uVGl0bGU+VGhlIE1vbnRlc3NvcmkgV29vZHNob3AsIExMQzwvRm9vdGVyU2VjdGlvblRpdGxlPlxuICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICAgIEFlbmVhbiBldSBsZW8gcXVhbS4gUGVsbGVudGVzcXVlIG9ybmFyZSBzZW0gbGFjaW5pYSBxdWFtIHZlbmVuYXRpc1xuICAgICAgICAgICAgdmVzdGlidWx1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0XG4gICAgICAgICAgICBxdWFtLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsXG4gICAgICAgICAgICBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0XG4gICAgICAgICAgPC9Gb290ZXJTZWN0aW9uQ29udGVudFRleHQ+XG4gICAgICAgICAgPEZvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICAgIEFlbmVhbiBldSBsZW8gcXVhbS4gUGVsbGVudGVzcXVlIG9ybmFyZSBzZW0gbGFjaW5pYSBxdWFtIHZlbmVuYXRpc1xuICAgICAgICAgICAgdmVzdGlidWx1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0XG4gICAgICAgICAgICBxdWFtLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsXG4gICAgICAgICAgICBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0XG4gICAgICAgICAgPC9Gb290ZXJTZWN0aW9uQ29udGVudFRleHQ+XG4gICAgICAgIDwvRm9vdGVyU2VjdGlvbkNvbnRlbnQ+XG4gICAgICA8L0Zvb3RlclNlY3Rpb24+XG4gICAgICA8Rm9vdGVyU2VjdGlvbj5cbiAgICAgICAgPEZvb3RlclNlY3Rpb25UaXRsZT5BYm91dCBVczwvRm9vdGVyU2VjdGlvblRpdGxlPlxuICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlclNlY3Rpb25Db250ZW50VGV4dD5PdXIgU3Rvcnk8L0Zvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0Pk1pc3Npb248L0Zvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0PkNyYWZ0c21hbnNoaXA8L0Zvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgPC9Gb290ZXJTZWN0aW9uQ29udGVudD5cbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cbiAgICAgIDxGb290ZXJTZWN0aW9uPlxuICAgICAgICA8Rm9vdGVyU2VjdGlvblRpdGxlPlByaXZhY3kgJiBTZWN1cml0eTwvRm9vdGVyU2VjdGlvblRpdGxlPlxuICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICAgIFNoaXBwaW5nICYgUmV0dXJuc1xuICAgICAgICAgIDwvRm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0PlxuICAgICAgICA8L0Zvb3RlclNlY3Rpb25Db250ZW50PlxuICAgICAgPC9Gb290ZXJTZWN0aW9uPlxuICAgICAgPEZvb3RlclNlY3Rpb24+XG4gICAgICAgIDxGb290ZXJTZWN0aW9uVGl0bGU+U3VwcG9ydDwvRm9vdGVyU2VjdGlvblRpdGxlPlxuICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnQ+XG4gICAgICAgICAgPEZvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICAgIFNoaXBwaW5nICYgUmV0dXJuc1xuICAgICAgICAgIDwvRm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0PlxuICAgICAgICAgIDxGb290ZXJTZWN0aW9uQ29udGVudFRleHQ+RkFRczwvRm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0PlxuICAgICAgICAgIDxGb290ZXJTZWN0aW9uQ29udGVudFRleHQ+V2FycmFudHk8L0Zvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgICA8Rm9vdGVyU2VjdGlvbkNvbnRlbnRUZXh0PkNvbnRhY3QgVXM8L0Zvb3RlclNlY3Rpb25Db250ZW50VGV4dD5cbiAgICAgICAgPC9Gb290ZXJTZWN0aW9uQ29udGVudD5cbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cbiAgICA8L0Zvb3RlckVsPlxuICApO1xufSk7XG4iLCAiaW1wb3J0IHtcbiAgSWNvbixcbiAgTmF2YmFyLFxuICBOYXZiYXJBY3Rpb24sXG4gIE5hdmJhckxpbmtMaXN0LFxuICBOYXZiYXJMaW5rTGlzdEl0ZW0sXG4gIE5hdmJhckxvZ28sXG4gIE5hdmJhclNlY3Rpb24sXG59IGZyb20gXCJAd29vZHNob3AvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0LCBVc2VyQ2lyY2xlIH0gZnJvbSBcIkB3b29kc2hvcC9pY29uc1wiO1xuaW1wb3J0IHsgTmF2YmFyTGluayB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTmF2YmFyTGlua1wiO1xuaW1wb3J0IHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSGVhZGVyQ2FydCB9IGZyb20gXCIuL0hlYWRlckNhcnRcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogRkMgPSBtZW1vKGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPE5hdmJhcj5cbiAgICAgICAgPE5hdmJhclNlY3Rpb24+XG4gICAgICAgICAgPE5hdmJhckxvZ28gc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+XG4gICAgICAgIDwvTmF2YmFyU2VjdGlvbj5cbiAgICAgICAgPE5hdmJhclNlY3Rpb24gY3hNYWluPlxuICAgICAgICAgIDxOYXZiYXJMaW5rTGlzdD5cbiAgICAgICAgICAgIDxOYXZiYXJMaW5rTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZiYXJMaW5rIHRvPVwiL1wiPkhvbWU8L05hdmJhckxpbms+XG4gICAgICAgICAgICA8L05hdmJhckxpbmtMaXN0SXRlbT5cbiAgICAgICAgICAgIDxOYXZiYXJMaW5rTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZiYXJMaW5rIHRvPVwiL21pc3Npb25cIj5NaXNzaW9uPC9OYXZiYXJMaW5rPlxuICAgICAgICAgICAgPC9OYXZiYXJMaW5rTGlzdEl0ZW0+XG4gICAgICAgICAgICA8TmF2YmFyTGlua0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TmF2YmFyTGluayB0bz1cIi9zaG9wXCI+U2hvcDwvTmF2YmFyTGluaz5cbiAgICAgICAgICAgIDwvTmF2YmFyTGlua0xpc3RJdGVtPlxuICAgICAgICAgICAgPE5hdmJhckxpbmtMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPE5hdmJhckxpbmsgdG89XCIvYmxvZ1wiPkJsb2c8L05hdmJhckxpbms+XG4gICAgICAgICAgICA8L05hdmJhckxpbmtMaXN0SXRlbT5cbiAgICAgICAgICA8L05hdmJhckxpbmtMaXN0PlxuICAgICAgICA8L05hdmJhclNlY3Rpb24+XG4gICAgICAgIDxOYXZiYXJTZWN0aW9uPlxuICAgICAgICAgIDxIZWFkZXJDYXJ0IC8+XG4gICAgICAgICAgPE5hdmJhckFjdGlvbj5cbiAgICAgICAgICAgIDxJY29uIGN4VGl0bGU9XCJhY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxVc2VyQ2lyY2xlIC8+XG4gICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgPC9OYXZiYXJBY3Rpb24+XG4gICAgICAgIDwvTmF2YmFyU2VjdGlvbj5cbiAgICAgIDwvTmF2YmFyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufSk7XG4iLCAiaW1wb3J0IHsgUmVtaXhOYXZMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBOYXZiYXJMaW5rTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIkB3b29kc2hvcC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJMaW5rID0gZm9yd2FyZFJlZjxIVE1MQW5jaG9yRWxlbWVudCwgUmVtaXhOYXZMaW5rUHJvcHM+KFxuICBmdW5jdGlvbiBOYXZiYXJMaW5rKHsgY2hpbGRyZW4sIC4uLnJlc3RQcm9wcyB9LCByZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkxpbmsgey4uLnJlc3RQcm9wc30gcmVmPXtyZWZ9PlxuICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgIDxOYXZiYXJMaW5rTGlzdEl0ZW1UZXh0IGFjdGl2ZT17aXNBY3RpdmV9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvTmF2YmFyTGlua0xpc3RJdGVtVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvTmF2TGluaz5cbiAgICApO1xuICB9XG4pO1xuIiwgImltcG9ydCB7XG4gIERyYXdlcixcbiAgRHJhd2VyQm9keSxcbiAgRHJhd2VySGVhZGVyLFxuICBJY29uLFxuICBOYXZiYXJBY3Rpb24sXG4gIFR5cG9ncmFwaHlIZWFkaW5nLFxuICB1c2VEaWFsb2dSZWYsXG59IGZyb20gXCJAd29vZHNob3AvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkB3b29kc2hvcC9pY29uc1wiO1xuaW1wb3J0IHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNhcnQ6IEZDID0gbWVtbyhmdW5jdGlvbiBIZWFkZXJDYXJ0KCkge1xuICBjb25zdCB7IGRpYWxvZ1JlZiwgaGFuZGxlT3BlbiB9ID0gdXNlRGlhbG9nUmVmKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhckFjdGlvbiBvbkNsaWNrPXtoYW5kbGVPcGVufT5cbiAgICAgICAgPEljb24gY3hUaXRsZT1cInNob3BwaW5nLWNhcnRcIj5cbiAgICAgICAgICA8U2hvcHBpbmdDYXJ0IC8+XG4gICAgICAgIDwvSWNvbj5cbiAgICAgIDwvTmF2YmFyQWN0aW9uPlxuICAgICAgPERyYXdlciByZWY9e2RpYWxvZ1JlZn0gb3BlbldpZHRoPXs1MjB9PlxuICAgICAgICA8RHJhd2VySGVhZGVyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5SGVhZGluZyBjeFZhcmlhbnQ9XCJoMlwiIGN4Tm9kZT1cImgyXCI+XG4gICAgICAgICAgICBDYXJ0XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5SGVhZGluZz5cbiAgICAgICAgPC9EcmF3ZXJIZWFkZXI+XG4gICAgICAgIDxEcmF3ZXJCb2R5PnRoaXMgYmUgdGhlIGJvZHk8L0RyYXdlckJvZHk+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuIiwgImltcG9ydCB7IGdldFBhZ2VUaXRsZSB9IGZyb20gXCJ+L3V0aWxzL2dldFBhZ2VUaXRsZVwiO1xuaW1wb3J0IHsgTWV0YUZ1bmN0aW9uLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IGdldFBhZ2VUaXRsZShcIkNoZWNrb3V0XCIpIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dFJvdXRlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDaGVja291dFJvdXRlXG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiY29uc3Qgc2l0ZU5hbWUgPSBcIlRoZSBNb250ZXNzb3JpIFdvb2RzaG9wXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlVGl0bGUgPSAocGFnZU5hbWU/OiBzdHJpbmcpID0+XG4gIHBhZ2VOYW1lID8gYCR7cGFnZU5hbWV9IHwgJHtzaXRlTmFtZX1gIDogc2l0ZU5hbWU7XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIENoZWNrb3V0SW5kZXhcbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBnZXRQYWdlVGl0bGUgfSBmcm9tIFwifi91dGlscy9nZXRQYWdlVGl0bGVcIjtcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBnZXRQYWdlVGl0bGUoXCJNaXNzaW9uXCIpIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaXNzaW9uUm91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIE1pc3Npb25Sb3V0ZVxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaXNzaW9uSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIE1pc3Npb25JbmRleFxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeUhlYWRpbmcgfSBmcm9tIFwiQHdvb2RzaG9wL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIHR5cGUgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIE91dGxldCxcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IG1lZHVzYUNsaWVudCB9IGZyb20gXCJ+L2NsaWVudHMvbWVkdXNhLWNsaWVudFwiO1xuaW1wb3J0IHsgZ2V0UGFnZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvZ2V0UGFnZVRpdGxlXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBnZXRQYWdlVGl0bGUoXCJNaXNzaW9uXCIpIH07XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyByZXNwb25zZSwgLi4uZGF0YSB9ID0gYXdhaXQgbWVkdXNhQ2xpZW50LnByb2R1Y3RzLmxpc3QoKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IgYXMgc3RyaW5nKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuICAgICAgICA8VHlwb2dyYXBoeUhlYWRpbmcgY3hOb2RlPVwiaDFcIiBjeFZhcmlhbnQ9XCJoMlwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gUmVtaXhcbiAgICAgICAgPC9UeXBvZ3JhcGh5SGVhZGluZz5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgNCl9PC9wcmU+XG4gICAgICAgIDxCdXR0b24gY3hWYXJpYW50PVwiY29udGFpbmVkXCIgY3hDb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICBoZWxsb1xuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2RvY3NcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFJlbWl4IERvY3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgTWVkdXNhIGZyb20gXCJAbWVkdXNhanMvbWVkdXNhLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBtZWR1c2FDbGllbnQgPSBuZXcgTWVkdXNhKHtcbiAgYmFzZVVybDpcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjkwMDBcIlxuICAgICAgOiBcImh0dHBzOi8vc3RvcmUudGhlbW9udGVzc29yaXdvb2RzaG9wLmNvbVwiLFxuICBtYXhSZXRyaWVzOiAyLFxufSk7XG4iLCAiaW1wb3J0IHsgZ2V0UGFnZVRpdGxlIH0gZnJvbSBcIn4vdXRpbHMvZ2V0UGFnZVRpdGxlXCI7XG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogZ2V0UGFnZVRpdGxlKFwiQmxvZ1wiKSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1JvdXRlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBCbG9nUm91dGVcbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0luZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBCbG9nSW5kZXhcbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBnZXRQYWdlVGl0bGUgfSBmcm9tIFwifi91dGlscy9nZXRQYWdlVGl0bGVcIjtcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBnZXRQYWdlVGl0bGUoXCJTaG9wXCIpIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9wUm91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFNob3BSb3V0ZVxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB7fSIsICJpbXBvcnQgeyBnZXRQYWdlVGl0bGUgfSBmcm9tIFwifi91dGlscy9nZXRQYWdlVGl0bGVcIjtcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3BJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgU2hvcEluZGV4XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMzY1YzZiNDEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVc0Qk1DV0dBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay02UElJUElPQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNHUVlVNTdVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVDVKTU1IS0YuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVZEVUhXWlNELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yU05KUkFHSy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZyc6eydpZCc6J3JvdXRlcy9ibG9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy03RkVaT0JKVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDNDQVczNUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jsb2cvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYmxvZy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Jsb2cnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9pbmRleC0zNE41T0ZVWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NoZWNrb3V0Jzp7J2lkJzoncm91dGVzL2NoZWNrb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoZWNrb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoZWNrb3V0LUZUUU9BSzZSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00M0NBVzM1SS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hlY2tvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2hlY2tvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jaGVja291dCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jaGVja291dC9pbmRleC1aSzQ2M0hYRC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVpHWEc1QzVILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00M0NBVzM1SS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9taXNzaW9uJzp7J2lkJzoncm91dGVzL21pc3Npb24nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWlzc2lvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9taXNzaW9uLUpRN1RVTVZTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00M0NBVzM1SS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWlzc2lvbi9pbmRleCc6eydpZCc6J3JvdXRlcy9taXNzaW9uL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvbWlzc2lvbicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9taXNzaW9uL2luZGV4LVBNMksyVEczLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hvcCc6eydpZCc6J3JvdXRlcy9zaG9wJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Nob3AnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hvcC1WQUU3WFdRVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDNDQVczNUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Nob3AvJHByb2R1Y3RJZCc6eydpZCc6J3JvdXRlcy9zaG9wLyRwcm9kdWN0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaG9wJywncGF0aCc6Jzpwcm9kdWN0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hvcC8kcHJvZHVjdElkLUY2UkpMS1FCLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hvcC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaG9wL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvc2hvcCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaG9wL2luZGV4LUQyVFNFWUlFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTM2NUM2QjQxLmpzJ307IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZHJld2RlY2FybWUvZ2l0L3RoZS1tb250ZXNzb3JpLXdvb2RzaG9wL3RoZS1tb250ZXNzb3JpLXdvb2RzaG9wL3BhY2thZ2VzL3N0b3JlZnJvbnQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2NoZWNrb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZHJld2RlY2FybWUvZ2l0L3RoZS1tb250ZXNzb3JpLXdvb2RzaG9wL3RoZS1tb250ZXNzb3JpLXdvb2RzaG9wL3BhY2thZ2VzL3N0b3JlZnJvbnQvYXBwL3JvdXRlcy9jaGVja291dC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvbWlzc2lvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvbWlzc2lvbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2RyZXdkZWNhcm1lL2dpdC90aGUtbW9udGVzc29yaS13b29kc2hvcC90aGUtbW9udGVzc29yaS13b29kc2hvcC9wYWNrYWdlcy9zdG9yZWZyb250L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2Jsb2cudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL3Nob3AudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL3Nob3AvJHByb2R1Y3RJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9Vc2Vycy9kcmV3ZGVjYXJtZS9naXQvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvdGhlLW1vbnRlc3Nvcmktd29vZHNob3AvcGFja2FnZXMvc3RvcmVmcm9udC9hcHAvcm91dGVzL3Nob3AvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jaGVja291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hlY2tvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2hlY2tvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2NoZWNrb3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGVja291dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NoZWNrb3V0XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWlzc2lvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWlzc2lvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtaXNzaW9uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9taXNzaW9uL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9taXNzaW9uL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWlzc2lvblwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zaG9wXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaG9wXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNob3BcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3Nob3AvJHByb2R1Y3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hvcC8kcHJvZHVjdElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hvcFwiLFxuICAgICAgcGF0aDogXCI6cHJvZHVjdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9zaG9wL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaG9wL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hvcFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9XG4gIH07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ1VBO0FBWUE7QUFZQTtBQWxDQSxBQVlBLEFBWUE7O0FEcEJlLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxlQUNiLG9DQUFDLGFBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFB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QSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosd0JBQXdCO0FBQUEsSUFDcEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZUFBZTtBQUFBLElBQ1gsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosMEJBQTBCO0FBQUEsSUFDdEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
