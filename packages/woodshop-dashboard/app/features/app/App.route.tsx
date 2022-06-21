import { Outlet } from "@remix-run/react";

import { Navbar } from "../../components/nav-bar";
import { NavHeader } from "../../components/nav-header";
import { createRouteLinkStyles } from "../_routes/routes.createRouteLinkStyles";
import type { RemixFeatureRoute } from "../_routes/routes.types";
import AppRouteStyles from "./App.route.css";

export const AppRoute: RemixFeatureRoute = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <NavHeader />
        <Outlet />
      </div>
    </>
  );
};

AppRoute.links = () => [createRouteLinkStyles(AppRouteStyles)];
