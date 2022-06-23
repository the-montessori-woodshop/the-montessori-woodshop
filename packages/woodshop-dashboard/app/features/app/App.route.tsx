import { Outlet } from "@remix-run/react";

import { Navbar } from "../../components/nav-bar";
import { NavHeader } from "../../components/nav-header";
import type { RemixFeatureRoute } from "../_routes/routes.types";

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
