import { useEffect, useRef, useState } from "react";

export const useScrollbarWidth = () => {
  const [width, setWidth] = useState(0);
  const scrollbarRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    if (typeof document !== "undefined") {
      // thanks too https://davidwalsh.name/detect-scrollbar-width
      scrollbarRef.current = document.createElement("div");
      scrollbarRef.current.setAttribute(
        "style",
        "width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;"
      );
      document.body.appendChild(scrollbarRef.current);
      const scrollbarWidth =
        scrollbarRef.current.offsetWidth - scrollbarRef.current.clientWidth;
      setWidth(scrollbarWidth);
    }
    return () => {
      if (scrollbarRef.current) document.body.removeChild(scrollbarRef.current);
    };
  }, []);

  return width;
};
