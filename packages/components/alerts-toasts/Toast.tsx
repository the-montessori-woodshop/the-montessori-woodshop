import React, { memo, useCallback, useEffect, useRef } from "react";

import { makeRem } from "../../theme/theme.utils";
import { Alert, AlertVariant } from "./Alert";

export type ToastProps = {
  id: string;
  message: string;
  variant: AlertVariant;
  /**
   * The amount of time in seconds it should
   * take for the toast to appear. If "dismissType"
   * is manual, then this will have no effect.
   * @default 5 // seconds
   */
  timeout?: number;
  /**
   * The way that the toast should be cleared.
   */
  dismissType?: "auto" | "manual";
  dismiss: (id: string) => void;
};

function ToastFC({
  id,
  message,
  variant,
  dismissType = "auto",
  timeout = 5,
  dismiss
}: ToastProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleDismiss = useCallback(() => {
    dismiss(id);
  }, []);

  useEffect(() => {
    if (dismissType === "auto" && typeof window !== "undefined") {
      timeoutRef.current = setTimeout(handleDismiss, timeout * 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Alert
      variant={variant}
      style={{ marginBottom: makeRem(16) }}
      onClose={handleDismiss}
    >
      {message}
    </Alert>
  );
}

export const Toast = memo(ToastFC);
