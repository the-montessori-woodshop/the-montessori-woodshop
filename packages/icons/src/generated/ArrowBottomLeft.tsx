import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowBottomLeft = (
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
    <path d="M6.707 18H11.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 1 1 1 0v4.793L17.146 6.146a.5.5 0 0 1 .708.708L6.707 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowBottomLeft);
const Memo = memo(ForwardRef);
export default Memo;
