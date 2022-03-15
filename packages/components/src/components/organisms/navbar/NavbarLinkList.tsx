import { styled } from "@linaria/react";
import { Close, HamburgerMenu } from "@woodshop/icons";
import clsx from "clsx";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import { makeRem, makeResponsiveMedia } from "../../../theme/theme.utils";
import { Icon } from "../../atoms/icons-illustrations/Icon";
import { NavbarAction } from "./NavbarAction";

export type NavbarLinkListProps = JSX.IntrinsicElements["ul"];

const SNavbarLinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: none;

  &.active {
    ${makeResponsiveMedia("mobile")} {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      opacity: 0.93;
      background: var(--color-white);
      padding-top: ${makeRem(48)};
      padding-bottom: ${makeRem(48)};

      & > li {
        height: ${makeRem(44)};
        margin-left: 0 !important;
      }
    }
  }

  ${makeResponsiveMedia("desktop")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const SMenuButton = styled.button`
  // display: none;
  margin: 0 0 0 auto;
  padding: 0;
  background: none;
  border: none;
  height: ${makeRem(44)};
  cursor: pointer;

  ${makeResponsiveMedia("desktop")} {
    display: none;
  }
`;

const SCloseButton = styled.button`
  display: none;

  &.active {
    background: none;
    border: 0;
    display: flex;
    height: ${makeRem(44)};
    width: ${makeRem(44)};
    justify-content: center;
    align-items: center;
    position: fixed;
    right: ${makeRem(24)};
    top: ${makeRem(24)};
    cursor: pointer;
  }
`;

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
        <SMenuButton onClick={handleToggle}>
          <NavbarAction>
            <Icon cxTitle="open-the-menu">
              <HamburgerMenu />
            </Icon>
          </NavbarAction>
        </SMenuButton>

        <SNavbarLinkList
          className={clsx(className, { active: isOpen })}
          {...props}
          ref={ref}
        >
          {children}
        </SNavbarLinkList>
        <SCloseButton className={clsx({ active: isOpen })}>
          <Icon cxTitle="close-menu" cxSize={48} onClick={handleToggle}>
            <Close />
          </Icon>
        </SCloseButton>
      </>
    );
  }
);
