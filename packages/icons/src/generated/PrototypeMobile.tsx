import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrototypeMobile = (
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
    <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7.011a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H8.5A2.5 2.5 0 0 1 6 19.5v-15Zm1 0v15A1.5 1.5 0 0 0 8.5 21h7.011a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5H8.5A1.5 1.5 0 0 0 7 4.5ZM11 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM8 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5ZM9 7v4h6V7H9Zm-.5 7a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrototypeMobile);
const Memo = memo(ForwardRef);
export default Memo;
