import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSnowDay = (
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
    <path d="M10 19h.5a.5.5 0 1 1 0 1H10v.5a.5.5 0 1 1-1 0V20h-.5a.5.5 0 1 1 0-1H9v-.5a.5.5 0 1 1 1 0v.5Zm3-2h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V18h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm-4-2h.5a.5.5 0 1 1 0 1H9v.5a.5.5 0 1 1-1 0V16h-.5a.5.5 0 1 1 0-1H8v-.5a.5.5 0 1 1 1 0v.5Zm5.744-6h.756a4.5 4.5 0 1 1 0 9 .5.5 0 1 1 0-1 3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 10.5 7H10a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5 .5.5 0 1 1 0 1 3.5 3.5 0 0 1-.5-6.965C5 8.24 7.239 6 10 6h.5a4.502 4.502 0 0 1 4.244 3Zm6.114.496a.5.5 0 1 1-.746-.666 3.5 3.5 0 1 0-6.002-3.203.5.5 0 1 1-.969-.249A4.501 4.501 0 0 1 22 6.5c0 1.12-.411 2.177-1.142 2.996Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSnowDay);
const Memo = memo(ForwardRef);
export default Memo;
