import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowSquareLeft = (
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
    <path d="m8.707 13 3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L8.707 12H17.5a.5.5 0 1 1 0 1H8.707ZM5.5 4A1.5 1.5 0 0 0 4 5.5v14A1.5 1.5 0 0 0 5.5 21h14.007a1.5 1.5 0 0 0 1.5-1.5L21 5.5A1.5 1.5 0 0 0 19.5 4h-14ZM22 5.5l.007 14a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 19.5v-14A2.5 2.5 0 0 1 5.5 3h14A2.508 2.508 0 0 1 22 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSquareLeft);
const Memo = memo(ForwardRef);
export default Memo;
