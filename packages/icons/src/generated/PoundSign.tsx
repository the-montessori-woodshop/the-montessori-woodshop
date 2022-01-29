import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPoundSign = (
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
    <path d="M9 15.5V12H6.5a.5.5 0 1 1 0-1H9V9a4 4 0 0 1 4-4h.5A3.5 3.5 0 0 1 17 8.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 0 13.5 6H13a3 3 0 0 0-3 3v2h2.5a.5.5 0 1 1 0 1H10v3a3 3 0 0 0 3 3h.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 1 1 1 0 3.5 3.5 0 0 1-3.5 3.5H13a3.997 3.997 0 0 1-3.395-1.884A3.5 3.5 0 0 1 6.5 19a.5.5 0 1 1 0-1A2.5 2.5 0 0 0 9 15.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPoundSign);
const Memo = memo(ForwardRef);
export default Memo;
