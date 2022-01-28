import "./InputText.scss";

import { SVGIconComponent } from "@woodshop/icons";
import React, { forwardRef, memo, useMemo } from "react";

import { makeClass } from "../theme";
import { Icon } from "./Icon";

export type InputTextProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
  cxSize?: "default" | "small";
  cxAlignment?: "left" | "center";
  cxError?: boolean;
  type?: "text" | "number" | "search";
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
          <Icon
            cxTitle="start-icon"
            accessibility="decorative"
            className={makeClass(undefined, "cOwWyv", {
              start: true
            })}
          >
            <StartIcon />
          </Icon>
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
            className={makeClass(undefined, "cOwWyv", {
              end: true
            })}
          >
            <EndIcon />
          </Icon>
        );
      }
      return null;
    }, []);

    return (
      <div
        style={{ position: "relative", display: "inline-block", width: "100%" }}
      >
        {StartIconComponent}
        <input
          {...props}
          ref={ref}
          type={type}
          className={makeClass(className, "UOD95", {
            "s-lg": cxSize === "default",
            "s-sm": cxSize === "small",
            "a-center": cxAlignment === "center",
            "i-start": !!StartIcon,
            "i-end": !!EndIcon,
            error: cxError
          })}
        />
        {EndIconComponent}
      </div>
    );
  }
);

export const InputText = memo(InputTextFC);
