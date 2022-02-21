import "./BackgroundFeature.scss";

import React from "react";
import { forwardRef } from "react";

import { makeClass } from "../../../theme";

export type BackgroundFeatureProps = JSX.IntrinsicElements["div"];

export const BackgroundFeature = forwardRef<
  HTMLDivElement,
  BackgroundFeatureProps
>(function BackgroundFeature({ children, className, ...props }, ref) {
  return (
    <div {...props} className={makeClass(className, "zfkrQD5")} ref={ref}>
      {children}
    </div>
  );
});
