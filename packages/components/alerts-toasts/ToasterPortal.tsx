import { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { makeRem } from "../../theme/theme.utils";

const containerId = "toaster";
export const ToasterPortal: FC = ({ children }) => {
  const toasterRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    toasterRef.current = document.getElementById(containerId);

    if (!toasterRef.current) {
      const container = document.createElement("div");
      container.id = containerId;
      container.style.position = "fixed";
      container.style.bottom = `${makeRem(16)}`;
      container.style.width = "100%";
      container.style.right = "0";
      container.style.left = "0";
      container.style.zIndex = "100000";
      document.body.appendChild(container);
      toasterRef.current = container;
    }

    return () => {
      if (toasterRef.current) {
        document.body.removeChild(toasterRef.current);
        toasterRef.current = null;
      }
    };
  }, []);

  if (!toasterRef.current) {
    return null;
  }

  return ReactDOM.createPortal(children, toasterRef.current);
};
