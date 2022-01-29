import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowToTop = (
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
    <path d="M13 5.707V16.5a.5.5 0 1 1-1 0V5.707L8.854 8.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L13 5.707ZM4.5 20a.5.5 0 1 1 0-1h16a.5.5 0 1 1 0 1h-16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowToTop);
const Memo = memo(ForwardRef);
export default Memo;
