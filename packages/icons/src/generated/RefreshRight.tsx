import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRefreshRight = (
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
    <path d="M19 6.342V3.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h2.746a8 8 0 1 0 1.74 5.492.5.5 0 0 1 .997.061C20.696 17.287 16.765 21 12 21a9 9 0 1 1 7-14.658Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRefreshRight);
const Memo = memo(ForwardRef);
export default Memo;
