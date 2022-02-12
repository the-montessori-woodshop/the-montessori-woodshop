import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowTopRight = (
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
    <path d="M16.293 7H11.5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 .5.5v6a.5.5 0 1 1-1 0V7.707L6.854 17.854a.5.5 0 0 1-.708-.708L16.293 7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowTopRight);
const Memo = memo(ForwardRef);
export default Memo;
