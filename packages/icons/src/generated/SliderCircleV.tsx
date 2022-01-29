import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSliderCircleV = (
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
    <path d="M18 11.05a2.5 2.5 0 0 1 0 4.9v4.55a.5.5 0 1 1-1 0v-4.55a2.5 2.5 0 0 1 0-4.9V3.5a.5.5 0 1 1 1 0v7.55Zm-5-6a2.5 2.5 0 0 1 0 4.9V20.5a.5.5 0 1 1-1 0V9.95a2.5 2.5 0 0 1 0-4.9V3.5a.5.5 0 1 1 1 0v1.55Zm-5 9a2.5 2.5 0 0 1 0 4.9v1.55a.5.5 0 1 1-1 0v-1.55a2.5 2.5 0 0 1 0-4.9V3.5a.5.5 0 0 1 1 0v10.55Zm1 2.45a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm5-9a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSliderCircleV);
const Memo = memo(ForwardRef);
export default Memo;
