import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowSquareUp = (
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
    <path d="M13 8.707V17.5a.5.5 0 1 1-1 0V8.707l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L13 8.707ZM21 5.5A1.5 1.5 0 0 0 19.5 4h-14A1.5 1.5 0 0 0 4 5.5v14.007a1.5 1.5 0 0 0 1.5 1.5l14-.007a1.5 1.5 0 0 0 1.5-1.5v-14ZM19.5 22l-14 .007a2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 5.5 3h14A2.5 2.5 0 0 1 22 5.5v14a2.508 2.508 0 0 1-2.5 2.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSquareUp);
const Memo = memo(ForwardRef);
export default Memo;
