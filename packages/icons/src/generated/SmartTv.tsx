import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSmartTv = (
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
    <path d="M3 5v12.01h18V5H3Zm1.686 13.01H2.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v13.01a.5.5 0 0 1-.5.5h-2.186l.495.99H21.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h1.191l-.495-.99H5.804L5.31 19H6.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h1.691l.495-.99Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSmartTv);
const Memo = memo(ForwardRef);
export default Memo;
