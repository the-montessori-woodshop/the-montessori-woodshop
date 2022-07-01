import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBatteryLow = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7h11A2.5 2.5 0 0 1 19 9.5Zm-1 0A1.5 1.5 0 0 0 16.5 8h-11A1.5 1.5 0 0 0 4 9.5v5A1.5 1.5 0 0 0 5.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-5Zm-13 1A1.5 1.5 0 0 1 6.5 9h2.234a1.5 1.5 0 0 1 1.286 2.272l-1.8 3A1.5 1.5 0 0 1 6.934 15H6.5A1.5 1.5 0 0 1 5 13.5v-3Zm1 0v3a.5.5 0 0 0 .5.5h.434a.5.5 0 0 0 .429-.243l1.8-3a.5.5 0 0 0-.43-.757H6.5a.5.5 0 0 0-.5.5Zm12.5-.5a.5.5 0 1 1 0-1h1a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0-1h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBatteryLow);
const Memo = memo(ForwardRef);
export default Memo;
