import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellFull = (
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
    <path d="M22 12.584V19.5a2.5 2.5 0 0 1-2.5 2.5h-6.916a.503.503 0 0 1-.168 0H5.5A2.5 2.5 0 0 1 3 19.5v-14A2.5 2.5 0 0 1 5.5 3h14A2.5 2.5 0 0 1 22 5.5v6.916a.503.503 0 0 1 0 .168ZM4 12h8V4H5.5A1.5 1.5 0 0 0 4 5.5V12Zm0 1v6.5A1.5 1.5 0 0 0 5.5 21H12v-8H4Zm17-1V5.5A1.5 1.5 0 0 0 19.5 4H13v8h8Zm0 1h-8v8h6.5a1.5 1.5 0 0 0 1.5-1.5V13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellFull);
const Memo = memo(ForwardRef);
export default Memo;
