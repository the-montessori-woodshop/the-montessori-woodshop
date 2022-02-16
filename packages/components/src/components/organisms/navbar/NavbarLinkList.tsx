import "./NavbarLinkList.scss";

import { Close, HamburgerMenu } from "@woodshop/icons";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import { makeClass } from "../../../theme";
import { Icon } from "../../atoms/Icon";
import { NavbarAction } from "./NavbarAction";

export type NavbarLinkListProps = JSX.IntrinsicElements["ul"];

export const NavbarLinkList = forwardRef<HTMLUListElement, NavbarLinkListProps>(
  function NavbarLinkList({ children, className, ...props }, ref) {
    const bodyRef = useRef<HTMLBodyElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (!bodyRef.current && typeof window !== "undefined") {
        const bodyElement = document.getElementsByTagName("body");
        bodyRef.current = bodyElement[0];
      }

      if (bodyRef.current && isOpen) {
        // bodyRef.current.style.setProperty("pointer-events", "none");
      }

      return () => {
        bodyRef.current = null;
      };
    }, [isOpen]);

    const handleToggle = useCallback(() => {
      setIsOpen((prevState) => !prevState);
    }, []);

    return (
      <>
        <button
          className={makeClass(className, "uZG8o")}
          onClick={handleToggle}
        >
          <NavbarAction>
            <Icon cxTitle="open-the-menu">
              <HamburgerMenu />
            </Icon>
          </NavbarAction>
        </button>

        <ul
          className={makeClass(className, "aRmDRS2", {
            active: isOpen
          })}
          {...props}
          ref={ref}
        >
          {children}
        </ul>
        <button
          className={makeClass(className, "K3kfD", {
            active: isOpen
          })}
        >
          <Icon cxTitle="close-menu" cxSize={48} onClick={handleToggle}>
            <Close />
          </Icon>
        </button>
      </>
    );
  }
);
