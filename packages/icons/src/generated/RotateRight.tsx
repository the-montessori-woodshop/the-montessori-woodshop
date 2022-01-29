import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateRight = (
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
    <path d="M6.342 5H3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V5.754a8 8 0 1 0 5.467-1.741.5.5 0 1 1 .058-.998C17.27 3.288 21 7.225 21 12A9 9 0 1 1 6.342 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateRight);
const Memo = memo(ForwardRef);
export default Memo;
