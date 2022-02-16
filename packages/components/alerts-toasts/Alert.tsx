import {
  AlertCircle,
  CheckmarkCircle,
  Close,
  Alert as IconAlert,
  SVGIconComponent
} from "@machineq/icons";
import React, { memo, useMemo } from "react";
import { forwardRef } from "react";
import styled from "styled-components";

import { Icon } from "../../icons/Icon";
import { MQColorPalette } from "../../theme/theme.colors";
import { makeRem } from "../../theme/theme.utils";
import { Typography } from "../../typography/Typography";

export type AlertVariant = "success" | "info" | "warning" | "error";

export type AlertProps = JSX.IntrinsicElements["div"] & {
  onClose?: () => void;
  variant?: AlertVariant;
};

const AlertIconMap: { [key in AlertVariant]: SVGIconComponent } = {
  error: AlertCircle,
  info: AlertCircle,
  success: CheckmarkCircle,
  warning: IconAlert
};

const AlertIconColorMap: { [key in AlertVariant]: MQColorPalette } = {
  error: "danger",
  info: "grey-4",
  success: "success",
  warning: "warning"
};

const AlertIconBgColorMap: { [key in AlertVariant]: string } = {
  error: "#fcebec",
  warning: "#fff9eb",
  success: "#ecf8f2",
  info: "#f7f7f7"
};

const StyledAlert = styled.div<Required<Pick<AlertProps, "variant">>>`
  padding: ${makeRem(16)};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: ${makeRem(4)};
  border: 1px solid
    ${({ theme, variant }) =>
      theme.palette.mq.color[AlertIconColorMap[variant]].value};
  background-color: ${({ variant }) => AlertIconBgColorMap[variant]};
`;

const StyledAlertMain = styled.div`
  display: flex;
  align-items: inherit;

  & > *:first-child {
    margin-right: ${makeRem(12)};
  }

  & > *:last-child {
    padding-right: ${makeRem(16)};
  }
`;

const AlertFC = forwardRef<HTMLDivElement, AlertProps>(function AlertFC(
  { onClose, variant = "info", children, ...restProps },
  ref
) {
  const IconComponent = useMemo(() => AlertIconMap[variant], []);
  const CloseButton = useMemo(
    () =>
      typeof onClose !== "undefined" ? (
        <button onClick={onClose}>
          <Icon>
            <Close />
          </Icon>
        </button>
      ) : null,
    []
  );

  return (
    <StyledAlert variant={variant} {...restProps} ref={ref}>
      <StyledAlertMain>
        <div>
          <Icon color={AlertIconColorMap[variant]} size={24}>
            <IconComponent />
          </Icon>
        </div>
        {useMemo(() => {
          if (typeof children === "string") {
            return <Typography variant="body2">{children}</Typography>;
          }
          return children;
        }, [])}
      </StyledAlertMain>
      {CloseButton}
    </StyledAlert>
  );
});

export const Alert = memo(AlertFC);
