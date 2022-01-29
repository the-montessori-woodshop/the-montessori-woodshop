import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSliderRectangleH = (
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
    <path d="M8 17H3.5a.5.5 0 1 1 0-1H8v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h8.5a.5.5 0 1 1 0 1H12v1.031a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V17Zm6-5H3.5a.5.5 0 1 1 0-1H14v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h2.5a.5.5 0 1 1 0 1H18v1.031a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V12ZM5 7H3.5a.5.5 0 0 1 0-1H5V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h11.5a.5.5 0 1 1 0 1H9v1.031a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm1-2v3.031h2V5H6Zm9 5v3.031h2V10h-2Zm-6 5v3.031h2V15H9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSliderRectangleH);
const Memo = memo(ForwardRef);
export default Memo;
