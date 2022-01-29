import "./Icon.scss";

import React, { forwardRef, memo, useMemo } from "react";

import { createColorMap } from "../../styles";
import { ColorScheme, makeClass } from "../../theme";

export type IconProps = Omit<JSX.IntrinsicElements["div"], "title"> & {
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

const constructAccesibilityProps = (
  type: IconProps["accessibility"],
  title: string | undefined
): Record<string, unknown> => {
  if (type === "decorative" || "actionable") {
    return {
      "aria-hidden": "true"
    };
  }
  if (type === "standalone") {
    if (typeof title === "undefined") {
      console.warn(
        "You have indicated that this is a 'standalone' icon. In order to meet accessibility standards, you should also provide the icon a 'title' and 'titleId' prop."
      );
    }
    return {
      role: "img"
    };
  }
  return {};
};

export const IconFC = forwardRef<HTMLDivElement, IconProps>(function IconFC(
  {
    cxColor = "inherit",
    cxSize = 24,
    accessibility = "decorative",
    children,
    cxTitle,
    cxTitleId,
    className,
    svgProps,
    style,
    ...restProps
  },
  ref
) {
  const IconComponent = useMemo(() => {
    const enhancedProps = {
      title: cxTitle,
      titleId: cxTitleId,
      preserveAspectRatio: "xMidYMid meet",
      ...constructAccesibilityProps(accessibility, cxTitle),
      ...svgProps
    };

    if (children) {
      return React.Children.only(React.cloneElement(children, enhancedProps));
    }
    throw new Error(
      "You must provide an Icon or a child component. Please defer to use the child component. Icon is deprecated and will be removed at another point."
    );
  }, [cxTitle, cxTitleId, accessibility, svgProps, children]);

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      height: `${cxSize / 16}rem`,
      width: `${cxSize / 16}rem`,
      fontSize: `${cxSize / 16}rem`,
      ...style
    }),
    [cxSize]
  );

  return (
    <div
      {...restProps}
      ref={ref}
      style={containerStyle}
      className={makeClass(className, "TmuIxd", {
        ...createColorMap(cxColor)
      })}
    >
      {IconComponent}
    </div>
  );
});

export const Icon = memo(IconFC);
