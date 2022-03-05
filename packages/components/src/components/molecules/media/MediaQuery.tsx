import React, { FC, memo, useCallback, useEffect, useRef } from "react";

import { ResponsiveDevices, breakpointMap as bm } from "../../../theme";

export type ResponseiveProps = {
  atOrLessThan?: Exclude<ResponsiveDevices, "mobile">;
  atOrGreaterThan?: Exclude<ResponsiveDevices, "mobile">;
  only?: ResponsiveDevices;
};

export const MediaQuery: FC<ResponseiveProps> = memo(function MediaQuery({
  atOrLessThan,
  atOrGreaterThan,
  only,
  children
}) {
  const childRef = useRef<HTMLElement | null>(null);
  const hide = useCallback(() => {
    if (childRef.current) childRef.current.style.setProperty("display", "none");
  }, []);

  const show = useCallback(() => {
    if (childRef.current) childRef.current.style.removeProperty("display");
  }, []);

  useEffect(() => {
    function handleResize() {
      if (typeof document !== "undefined" && childRef.current) {
        const { innerWidth: vw } = window;

        if (only) {
          if (only === "mobile" && vw <= bm.tablet) {
            return show();
          }
          if (only === "tablet" && vw >= bm.tablet && vw < bm.desktop) {
            return show();
          }
          if (only === "desktop" && vw >= bm.desktop) {
            return show();
          }
          hide();
        }

        if (atOrGreaterThan && atOrLessThan) {
          throw new Error(
            "Cannot use atOrGreaterThan AND atOrLessThan at the same time. Please pick one."
          );
        }

        // only atOrLessThan
        if (atOrLessThan && !atOrGreaterThan && vw <= bm[atOrLessThan]) {
          return show();
        }

        // only atOrGreaterThan
        if (atOrGreaterThan && !atOrLessThan && vw >= bm[atOrGreaterThan]) {
          return show();
        }

        hide();
      }
    }

    if (typeof document !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof document !== "undefined") {
        return window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (
    !React.Children.only(children) ||
    !children ||
    typeof children === "string" ||
    typeof children === "number" ||
    typeof children === "boolean"
  ) {
    throw new Error(
      "You must only have 1 element as a child of this component."
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return React.cloneElement(children, {
    ref: childRef,
    style: { display: "none" }
  });
});
