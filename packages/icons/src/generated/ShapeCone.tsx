import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeCone = (
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
    <path d="M3.292 17.182a.505.505 0 0 1 .027-.051L11.57 3.245a.5.5 0 0 1 .86-.002l8.377 14c.04.068.063.142.069.216.082.173.124.354.124.541 0 1.82-4.01 3-9 3s-9-1.18-9-3c0-.29.102-.563.292-.818Zm1.875-1.204C6.814 15.356 9.26 15 12 15c2.778 0 5.252.365 6.9 1.003L12.001 4.476 5.167 15.978ZM4.07 17.77A.45.45 0 0 0 4 18c0 .94 3.602 2 8 2s8-1.06 8-2-3.602-2-8-2c-3.788 0-6.986.786-7.8 1.605l-.022.037a.5.5 0 0 1-.109.128Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeCone);
const Memo = memo(ForwardRef);
export default Memo;
