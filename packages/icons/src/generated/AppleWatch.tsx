import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAppleWatch = (
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
    <path d="M8.5 7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7.011a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H8.5ZM16 17.952V20.5a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 20.5v-2.55a2.5 2.5 0 0 1-2-2.45v-7a2.5 2.5 0 0 1 2-2.45V3.5A2.5 2.5 0 0 1 10.5 1h3A2.5 2.5 0 0 1 16 3.5v2.548A2.5 2.5 0 0 1 18.011 8.5v7A2.5 2.5 0 0 1 16 17.952ZM15 18H9v2.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V18ZM9 6h6V3.5A1.5 1.5 0 0 0 13.5 2h-3A1.5 1.5 0 0 0 9 3.5V6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAppleWatch);
const Memo = memo(ForwardRef);
export default Memo;
