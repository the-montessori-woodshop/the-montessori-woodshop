import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";

import { IconProps } from "./Icon";
import { useTransformIconProps } from "./icon.useTransformIconProps";

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type IllustrationProps = Omit<IconProps, "cxColor">;

export const IllustrationFC = forwardRef<HTMLDivElement, IllustrationProps>(
  function IllustrationFC({ className, ...restProps }, ref) {
    const { IconComponent, iconContainerProps, iconContainerStyle } =
      useTransformIconProps(restProps);

    return (
      <SDiv
        {...iconContainerProps}
        ref={ref}
        style={iconContainerStyle}
        className={clsx(className)}
      >
        {IconComponent}
      </SDiv>
    );
  }
);

export const Illustration = memo(IllustrationFC);
