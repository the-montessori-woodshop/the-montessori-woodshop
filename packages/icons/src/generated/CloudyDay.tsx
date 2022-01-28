import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloudyDay = (
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
    <path d="M14.744 11h.756a4.5 4.5 0 1 1 0 9h-10a3.5 3.5 0 0 1-.5-6.965C5 10.24 7.239 8 10 8h.5a4.502 4.502 0 0 1 4.244 3Zm.229 1c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 10.5 9H10a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5h10a3.5 3.5 0 0 0 0-7h-.527Zm5.885-.504a.5.5 0 1 1-.746-.666 3.5 3.5 0 1 0-6.002-3.203.5.5 0 1 1-.969-.249A4.501 4.501 0 0 1 22 8.5c0 1.12-.411 2.177-1.142 2.996Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCloudyDay);
const Memo = memo(ForwardRef);
export default Memo;
