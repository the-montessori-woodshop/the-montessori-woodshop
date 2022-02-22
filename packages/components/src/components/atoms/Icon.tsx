import "./Icon.scss";

import React, { forwardRef, memo } from "react";

import { createColorMap } from "../../styles";
import { ColorScheme, makeClass } from "../../theme";
import { useTransformIconProps } from "./icon.useTransformIconProps";

export type IconProps = Omit<JSX.IntrinsicElements["div"], "title" | "css"> & {
  cxSize?: number;
  cxColor?: ColorScheme;
  cxTitle: string;
  cxTitleId?: string;
  /**
   *
   * ## `decortaive`
   * The icon is just sitting there looking pretty but it
   * doesn’t matter if it entirely went away. There’s no need
   * to announce the icon because the label next to it already
   * does the job. So, instead of reading it, we hide it from
   * screen readers. That way, the label does what it’s supposed
   * to do without the SVG stepping on its toes.
   *
   * ## `standalone`
   * The icon is unaccompanied by a visible text label, and is a
   * meaningful action trigger on its own. The SVG is inside
   * of a button
   *
   * ## `actionable`
   * The surrounding element should have good text associated
   * with it. Link elements should include:
   * ```tsx
   * <a aria-label="this is the icon label">
   *  <Icon />
   * </a>
   * ```
   *
   */
  accessibility?: "decorative" | "standalone" | "actionable";
  children: JSX.Element;
  svgProps?: JSX.IntrinsicElements["svg"];
};

export const IconFC = forwardRef<HTMLDivElement, IconProps>(function IconFC(
  { cxColor = "inherit", className, ...restProps },
  ref
) {
  const { IconComponent, iconContainerProps, iconContainerStyle } =
    useTransformIconProps(restProps);

  return (
    <div
      {...iconContainerProps}
      ref={ref}
      style={iconContainerStyle}
      className={makeClass(className, "TmuIxd", {
        ...createColorMap(cxColor)
      })}
    >
      {IconComponent}
    </div>
  );
});

export const Icon = memo(IconFC);
