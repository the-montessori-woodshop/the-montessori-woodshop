import { styled } from "@linaria/react";
import { Close } from "@woodshop/icons";
import React, { forwardRef, useMemo } from "react";

import { makeRem } from "../../../theme/theme.utils";
import { Button } from "../../atoms/buttons/Button";
import { Icon } from "../../atoms/icons-illustrations/Icon";
import { TypographyHeading } from "../../atoms/typography/TypographyHeading";
import { useDialogContext } from "./Dialog";

export type DrawerHeaderProps = JSX.IntrinsicElements["header"] & {
  title: string;
};

const SDrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 ${makeRem(32)};

  @include respond("tablet") {
    padding: 0 ${makeRem(60)};
  }

  h2 {
    margin-top: ${makeRem(32)} !important;
  }

  & > div:last-child {
    position: absolute;
    right: ${makeRem(24)};
    top: ${makeRem(24)};
    height: ${makeRem(24)};
    width: ${makeRem(24)};
  }
`;

export const DrawerHeader = forwardRef<HTMLHeadElement, DrawerHeaderProps>(
  function DrawerHeader({ children, title, ...restProps }, ref) {
    const { close } = useDialogContext();

    return (
      <SDrawerHeader {...restProps} ref={ref}>
        <div>
          <TypographyHeading cxVariant="h2" cxNode="h2">
            <strong>{title}</strong>
          </TypographyHeading>
          {children}
        </div>
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
      </SDrawerHeader>
    );
  }
);
