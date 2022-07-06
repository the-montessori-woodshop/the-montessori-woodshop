import { TypographyCopy, TypographyHeading } from "@woodshop/components";
import type { RemixFeatureUIRoute } from "~/types/routes.types";
import clsx from "clsx";

export const ImagesRouteIndex: RemixFeatureUIRoute = () => {
  return (
    <div className={clsx("YPRm2Dbg4mD", "container")}>
      <div>
        <TypographyHeading cxVariant="h5" cxNode="div">
          Nothing Selected
        </TypographyHeading>
        <TypographyCopy cxVariant="body1" cxColor="textSecondary">
          Click on an image to view it's details
        </TypographyCopy>
      </div>
    </div>
  );
};
