import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSliderRectangleV = (
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
    <path d="M18 16v4.5a.5.5 0 1 1-1 0V16h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1V3.5a.5.5 0 1 1 1 0V12h1.031a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H18Zm-5-6v10.5a.5.5 0 1 1-1 0V10h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5a.5.5 0 1 1 1 0V6h1.031a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H13Zm-5 9v1.5a.5.5 0 1 1-1 0V19H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1V3.5a.5.5 0 0 1 1 0V15h1.031a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8Zm-2-1h3.031v-2H6v2Zm5-9h3.031V7H11v2Zm5 6h3.031v-2H16v2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSliderRectangleV);
const Memo = memo(ForwardRef);
export default Memo;
