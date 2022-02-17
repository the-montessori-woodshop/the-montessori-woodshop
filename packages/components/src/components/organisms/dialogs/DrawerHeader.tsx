import "./DrawerHeader.scss";

import { Close } from "@woodshop/icons";
import React, { forwardRef, useMemo } from "react";

import { makeClass } from "../../../theme";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { useDialogContext } from "./Dialog";

export type DrawerHeaderProps = JSX.IntrinsicElements["header"];

export const DrawerHeader = forwardRef<HTMLHeadElement, DrawerHeaderProps>(
  function DrawerHeader({ children, className, ...restProps }, ref) {
    const { close } = useDialogContext();

    return (
      <header
        {...restProps}
        className={makeClass(className, "mh4nj")}
        ref={ref}
      >
        {children}
        {useMemo(
          () => (
            <div>
              <Button onClick={close}>
                <Icon cxTitle="close-drawer" cxSize={44}>
                  <Close />
                </Icon>
              </Button>
            </div>
          ),
          []
        )}
      </header>
    );
  }
);
