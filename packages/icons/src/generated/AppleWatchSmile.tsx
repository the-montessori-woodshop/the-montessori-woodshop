import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAppleWatchSmile = (
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
    <path d="M16 6.048A2.5 2.5 0 0 1 18.011 8.5v7A2.5 2.5 0 0 1 16 17.952V20.5a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 20.5v-2.55a2.5 2.5 0 0 1-2-2.45v-7a2.5 2.5 0 0 1 2-2.45V3.5A2.5 2.5 0 0 1 10.5 1h3A2.5 2.5 0 0 1 16 3.5v2.548ZM15 6V3.5A1.5 1.5 0 0 0 13.5 2h-3A1.5 1.5 0 0 0 9 3.5V6h6Zm0 12H9v2.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V18ZM8.5 7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7.011a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H8.5Zm.646 6.854a.5.5 0 0 1 .708-.708c.57.572 1.276.854 2.146.854.87 0 1.575-.282 2.146-.854a.5.5 0 0 1 .708.708C14.092 14.616 13.13 15 12 15c-1.13 0-2.092-.384-2.854-1.146ZM9.5 9h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm4 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAppleWatchSmile);
const Memo = memo(ForwardRef);
export default Memo;
