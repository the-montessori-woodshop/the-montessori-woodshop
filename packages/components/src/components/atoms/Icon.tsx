import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { forwardRef, memo } from "react";

import { ColorScheme, cxColor } from "../../theme";
import { useTransformIconProps } from "./icon.useTransformIconProps";

const SIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  path {
    fill: inherit;
  }

  &${cxColor["black"]} {
    fill: var(--color-black);
  }
  &${cxColor["white"]} {
    fill: var(--color-white);
  }
  &${cxColor["primary"]} {
    fill: var(--color-primary);
  }
  &${cxColor["secondary"]} {
    fill: var(--color-secondary);
  }
  &${cxColor["grey1"]} {
    fill: var(--color-grey1);
  }
  &${cxColor["grey2"]} {
    fill: var(--color-grey2);
  }
  &${cxColor["grey3"]} {
    fill: var(--color-grey3);
  }
  &${cxColor["grey4"]} {
    fill: var(--color-grey4);
  }
  &${cxColor["grey5"]} {
    fill: var(--color-grey5);
  }
  &${cxColor["success"]} {
    fill: var(--color-success);
  }
  &${cxColor["warning"]} {
    fill: var(--color-warning);
  }
  &${cxColor["danger"]} {
    fill: var(--color-danger);
  }
`;

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
    <SIcon
      {...iconContainerProps}
      ref={ref}
      style={iconContainerStyle}
      className={clsx(className, cxColor)}
    >
      {IconComponent}
    </SIcon>
  );
});

export const Icon = memo(IconFC);
