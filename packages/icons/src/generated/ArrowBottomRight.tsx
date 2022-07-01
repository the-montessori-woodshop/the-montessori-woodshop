import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowBottomRight = (
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
    <path d="M17 16.293V11.5a.5.5 0 1 1 1 0v6a.5.5 0 0 1-.5.5h-6a.5.5 0 1 1 0-1h4.793L6.146 6.854a.5.5 0 1 1 .708-.708L17 16.293Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowBottomRight);
const Memo = memo(ForwardRef);
export default Memo;
