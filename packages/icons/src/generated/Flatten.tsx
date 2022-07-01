import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlatten = (
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
    <path d="M9.71 13.582A6.979 6.979 0 0 1 8 9.076a6 6 0 0 0-3.574 9.79l5.285-5.284Zm.708-.707 2.465-2.465A5.98 5.98 0 0 0 9 8.992a5.98 5.98 0 0 0 1.418 3.883Zm3.173-3.173 5.284-5.284a6 6 0 0 0-9.79 3.574 6.979 6.979 0 0 1 4.506 1.71Zm5.99-4.577L5.135 19.573a6 6 0 0 0 9.844-3.98.504.504 0 0 1 .148-.476.499.499 0 0 1 .475-.147 5.973 5.973 0 0 0 3.96-2.072 6 6 0 0 0 .02-7.773ZM8.065 8.055a7 7 0 1 1 7.881 7.881 6.971 6.971 0 0 1-2.388 4.377A7 7 0 1 1 8.064 8.055Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlatten);
const Memo = memo(ForwardRef);
export default Memo;
