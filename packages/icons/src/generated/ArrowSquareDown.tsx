import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowSquareDown = (
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
    <path d="m5.5 3 14-.007a2.5 2.5 0 0 1 2.5 2.5V19.5a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 3 19.5v-14A2.508 2.508 0 0 1 5.5 3ZM4 19.5A1.5 1.5 0 0 0 5.5 21h14a1.5 1.5 0 0 0 1.5-1.5V5.493a1.5 1.5 0 0 0-1.5-1.5L5.5 4A1.5 1.5 0 0 0 4 5.5v14Zm9-3.207 3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L12 16.293V7.5a.5.5 0 1 1 1 0v8.793Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSquareDown);
const Memo = memo(ForwardRef);
export default Memo;
