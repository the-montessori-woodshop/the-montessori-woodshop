import "./Illustration.scss";

import React, { forwardRef, memo } from "react";

import { makeClass } from "../../theme";
import { IconProps } from "./Icon";
import { useTransformIconProps } from "./icon.useTransformIconProps";

export type IllustrationProps = Omit<IconProps, "cxColor">;

export const IllustrationFC = forwardRef<HTMLDivElement, IllustrationProps>(
  function IllustrationFC({ className, ...restProps }, ref) {
    const { IconComponent, iconContainerProps, iconContainerStyle } =
      useTransformIconProps(restProps);

    return (
      <div
        {...iconContainerProps}
        ref={ref}
        style={iconContainerStyle}
        className={makeClass(className, "wzecl1")}
      >
        {IconComponent}
      </div>
    );
  }
);

export const Illustration = memo(IllustrationFC);
