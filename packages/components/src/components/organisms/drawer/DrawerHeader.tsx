import "./DrawerHeader.scss";

import { Close } from "@woodshop/icons";
import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { DialogRef } from "./Dialog";

export type DrawerHeaderProps = JSX.IntrinsicElements["header"] & {
  onClose: DialogRef["close"];
};

export const DrawerHeader = forwardRef<HTMLHeadElement, DrawerHeaderProps>(
  function DrawerHeader({ children, className, onClose, ...restProps }, ref) {
    return (
      <header
        {...restProps}
        className={makeClass(className, "mh4nj")}
        ref={ref}
      >
        {children}
        <div>
          <Button onClick={onClose}>
            <Icon cxTitle="close-drawer" cxSize={44}>
              <Close />
            </Icon>
          </Button>
        </div>
      </header>
    );
  }
);
