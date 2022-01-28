import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindCloudyDay = (
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
    <path d="M15.744 9h.756a4.5 4.5 0 1 1 0 9h-6a.5.5 0 1 1 0-1h6a3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 11.5 7H11a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.501 2.501 0 0 0-2.357 1.665.5.5 0 1 1-.943-.334A3.502 3.502 0 0 1 6 11.036V11a5 5 0 0 1 5-5h.5a4.502 4.502 0 0 1 4.244 3Zm6.114.496a.5.5 0 1 1-.746-.666 3.5 3.5 0 1 0-6.002-3.203.5.5 0 1 1-.969-.249A4.501 4.501 0 0 1 23 6.5c0 1.12-.411 2.177-1.142 2.996ZM10.5 13a.5.5 0 1 1 0-1h.5a2 2 0 1 1 0 4H1.5a.5.5 0 1 1 0-1H11a1 1 0 0 0 0-2h-.5Zm-7 6a.5.5 0 1 1 0-1H8a2 2 0 1 1 0 4H6.5a.5.5 0 1 1 0-1H8a1 1 0 0 0 0-2H3.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindCloudyDay);
const Memo = memo(ForwardRef);
export default Memo;
