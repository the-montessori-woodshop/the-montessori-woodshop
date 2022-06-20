import React from "react";
import { useMemo } from "react";

import { IconProps } from "./Icon";

export const useTransformIconProps = ({
  cxSize = 24,
  accessibility = "decorative",
  children,
  cxTitle,
  cxTitleId,
  svgProps,
  style,
  ...restProps
}: Omit<IconProps, "cxColor" | "className">) => {
  const accessibilityProps = useMemo(
    () =>
      (
        type: IconProps["accessibility"],
        title: string | undefined
      ): Record<string, unknown> => {
        if (type === "decorative" || type === "actionable") {
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
      },
    []
  );

  const IconComponent = useMemo(() => {
    const enhancedProps = {
      title: cxTitle,
      titleId: cxTitleId,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        height: "inherit",
        width: "inherit",
        fontSize: "inherit"
      },
      ...accessibilityProps,
      ...svgProps
    };

    if (children) {
      return React.Children.only(React.cloneElement(children, enhancedProps));
    }
    throw new Error(
      "You must provide an Icon or a child component. Please defer to use the child component. Icon is deprecated and will be removed at another point."
    );
  }, [cxTitle, cxTitleId, accessibility, svgProps, children]);

  const iconContainerStyle = useMemo<React.CSSProperties>(
    () => ({
      height: `${cxSize / 16}rem`,
      width: `${cxSize / 16}rem`,
      fontSize: `${cxSize / 16}rem`,
      ...style
    }),
    [cxSize]
  );

  return {
    IconComponent,
    iconContainerStyle,
    iconContainerProps: restProps
  };
};
