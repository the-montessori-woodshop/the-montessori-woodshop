import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateAxisX = (
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
    <path d="m14.987 12.72-1.133 1.134a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708l-1.158-1.158C15.817 17.866 13.741 22 11 22c-2.863 0-5-4.51-5-10S8.137 2 11 2c1.502 0 2.826 1.239 3.743 3.307a.5.5 0 0 1-.914.406C13.055 3.966 12.022 3 11 3c-2.107 0-4 3.996-4 9s1.893 9 4 9c2.005 0 3.816-3.618 3.987-8.28Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateAxisX);
const Memo = memo(ForwardRef);
export default Memo;
