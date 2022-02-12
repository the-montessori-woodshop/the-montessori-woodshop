import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateAxisY = (
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
    <path d="m11.28 14.987-1.134-1.133a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708l1.158-1.158C6.134 15.817 2 13.741 2 11c0-2.863 4.51-5 10-5s10 2.137 10 5c0 1.502-1.239 2.826-3.307 3.743a.5.5 0 0 1-.406-.914C20.034 13.055 21 12.022 21 11c0-2.107-3.996-4-9-4s-9 1.893-9 4c0 2.005 3.618 3.816 8.28 3.987Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateAxisY);
const Memo = memo(ForwardRef);
export default Memo;
