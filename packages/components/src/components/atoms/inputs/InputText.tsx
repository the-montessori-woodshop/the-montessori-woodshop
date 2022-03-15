import { styled } from "@linaria/react";
import { SVGIconComponent } from "@woodshop/icons";
import clsx from "clsx";
import React, { forwardRef, memo, useMemo } from "react";

import { makeClass, makeRem } from "../../../theme/theme.utils";
import { Icon } from "../icons-illustrations/Icon";

type CXSize = "default" | "small";
type CXAlignment = "left" | "center";

const cxSize = makeClass<CXSize>(["default", "small"]);
const cxAlignment = makeClass<CXAlignment>(["left", "center"]);
enum IconEnum {
  start = "i-start",
  end = "i-end"
}

const SInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;
const SInput = styled.input`
  width: 100%;
  padding-left: ${makeRem(12)};
  padding-right: ${makeRem(12)};
  border: ${makeRem(1)} solid var(--color-grey3);
  border-radius: ${makeRem(2)};
  background-color: var(--color-grey2);
  max-width: 100%;
  font-size: ${makeRem(16)};
  font-family: var(--font-family);

  &:focus,
  &:active {
    border-color: var(--color-primary);
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey4);
  }

  &${cxSize["default"]} {
    height: ${makeRem(44)};
  }

  &${cxSize["small"]} {
    height: ${makeRem(36)};
    font-size: ${makeRem(14)};
  }

  &.error {
    color: var(--color-danger);
    border-color: var(--color-danger);

    &:focus {
      border-color: var(--color-danger);
    }
  }

  &${cxAlignment["center"]} {
    text-align: center;
  }

  &${cxAlignment["left"]} {
    text-align: left;
  }

  &.${IconEnum["start"]} {
    padding-left: ${makeRem(6 + 24 + 6)};
  }

  &.${IconEnum["end"]} {
    padding-right: ${makeRem(6 + 24 + 8)};
  }
`;

const SIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  margin-top: ${makeRem(-12)};

  &.${IconEnum.start} {
    left: ${makeRem(8)};
  }

  &.${IconEnum.end} {
    right: ${makeRem(8)};
  }

  &${cxSize["default"]} {
    margin-top: ${makeRem(-12)};
  }

  &${cxSize["small"]} {
    margin-top: ${makeRem(-9)};
  }
`;

export type InputTextProps = Omit<
  JSX.IntrinsicElements["input"],
  "type" | "css"
> & {
  cxSize?: CXSize;
  cxAlignment?: CXAlignment;
  cxError?: boolean;
  type?: "text" | "number" | "search" | "email" | "password";
  StartIcon?: SVGIconComponent;
  EndIcon?: SVGIconComponent;
};

const InputTextFC = forwardRef<HTMLInputElement, InputTextProps>(
  function InputTextFC(
    {
      className,
      type = "text",
      cxSize = "default",
      cxAlignment = "left",
      cxError,
      StartIcon,
      EndIcon,
      ...props
    },
    ref
  ) {
    const StartIconComponent = useMemo(() => {
      if (StartIcon) {
        return (
          <SIcon
            cxTitle="start-icon"
            accessibility="decorative"
            className={clsx(IconEnum.start, cxSize)}
            cxColor="grey4"
            cxSize={cxSize === "default" ? 24 : 18}
          >
            <StartIcon />
          </SIcon>
        );
      }
      return null;
    }, []);

    const EndIconComponent = useMemo(() => {
      if (EndIcon) {
        return (
          <Icon
            cxTitle="end-icon"
            accessibility="decorative"
            className={clsx(IconEnum.start, cxSize)}
            cxColor="grey4"
            cxSize={cxSize === "default" ? 24 : 18}
          >
            <EndIcon />
          </Icon>
        );
      }
      return null;
    }, []);

    return (
      <SInputContainer>
        {StartIconComponent}
        <SInput
          {...props}
          ref={ref}
          type={type}
          className={clsx(className, cxSize, cxAlignment, {
            [IconEnum.start]: !!StartIcon,
            [IconEnum.end]: !!EndIcon,
            error: cxError
          })}
        />
        {EndIconComponent}
      </SInputContainer>
    );
  }
);

export const InputText = memo(InputTextFC);
