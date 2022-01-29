import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAirplay = (
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
    <path d="M2.5 11a.5.5 0 1 1 0-1h1C9.299 10 14 14.701 14 20.5a.5.5 0 1 1-1 0A9.5 9.5 0 0 0 3.5 11h-1Zm0 3a.5.5 0 1 1 0-1h1.016a7.5 7.5 0 0 1 7.5 7.5.5.5 0 0 1-1 0 6.5 6.5 0 0 0-6.5-6.5H2.5Zm0 3a.5.5 0 1 1 0-1h.969A4.531 4.531 0 0 1 8 20.531a.5.5 0 0 1-1 0C7 18.581 5.42 17 3.469 17H2.5ZM3 7.5a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 3h15.007a2.5 2.5 0 0 1 2.5 2.5v13.008a2.5 2.5 0 0 1-2.5 2.5H16.5a.5.5 0 1 1 0-1h3.007a1.5 1.5 0 0 0 1.5-1.5V5.5a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 5.5v2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAirplay);
const Memo = memo(ForwardRef);
export default Memo;
