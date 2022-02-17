import { RefObject, useEffect } from "react";

type UseDetectOutsideClickParams = {
  ref: RefObject<HTMLElement>;
  onOutsideClick: () => void;
};
type UseDetectOutsideClickReturn = void;

/**
 * Set's a document listener to determine if a click event has
 * happened above the provided ref in the tree
 * and runs a function once it does detect it
 */
export const useDetectOutsideClick = ({
  ref,
  onOutsideClick
}: UseDetectOutsideClickParams): UseDetectOutsideClickReturn => {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (ref.current && !ref.current?.contains(e.target)) {
        onOutsideClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
