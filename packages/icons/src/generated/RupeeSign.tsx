import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRupeeSign = (
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
    <path d="M12.95 6a3.491 3.491 0 0 1 1.015 2H17.5a.5.5 0 1 1 0 1h-3.535a3.5 3.5 0 0 1-3.465 3H7.707l6.147 6.146a.5.5 0 0 1-.708.708l-7-7A.5.5 0 0 1 6.5 11h4a2.5 2.5 0 0 0 2.45-2H6.5a.5.5 0 0 1 0-1h6.45a2.5 2.5 0 0 0-2.45-2h-4a.5.5 0 0 1 0-1h11a.5.5 0 1 1 0 1h-4.55Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRupeeSign);
const Memo = memo(ForwardRef);
export default Memo;
