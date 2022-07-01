import { useEffect, useState } from "react";

export function useDevice() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setDevice((prevDevice) => {
          if (window.innerWidth < 577 && prevDevice !== "mobile") {
            return "mobile";
          }
          if (
            window.innerWidth >= 578 &&
            window.innerWidth < 992 &&
            prevDevice !== "tablet"
          ) {
            return "tablet";
          }
          if (window.innerWidth >= 992 && prevDevice !== "desktop") {
            return "desktop";
          }
          return prevDevice;
        });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
