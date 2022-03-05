import "./DrawerHeader.scss";

import { Close } from "@woodshop/icons";
import React, { forwardRef } from "react";

import { makeClass } from "../../../theme";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { TypographyHeading } from "../../atoms/TypographyHeading";
import { useDialogContext } from "./Dialog";

export type DrawerHeaderProps = JSX.IntrinsicElements["header"] & {
  title: string;
};

export const DrawerHeader = forwardRef<HTMLHeadElement, DrawerHeaderProps>(
  function DrawerHeader({ children, title, className, ...restProps }, ref) {
    const { close } = useDialogContext();

    return (
      <header
        {...restProps}
        className={makeClass(className, "mh4nj")}
        ref={ref}
      >
        <div>
          <TypographyHeading
            cxVariant="h3"
            cxNode="h2"
            style={{
              marginTop: 0,
              marginBottom: 0
            }}
          >
            {title}
          </TypographyHeading>
          {children}
        </div>
        <Button onClick={close}>
          <Icon cxTitle="close-drawer" cxSize={44}>
            <Close />
          </Icon>
        </Button>
      </header>
    );
  }
);
