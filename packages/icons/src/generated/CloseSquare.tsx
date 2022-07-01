import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloseSquare = (
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
    <path d="m12.707 12 2.147 2.146a.5.5 0 0 1-.708.708L12 12.707l-2.146 2.147a.5.5 0 0 1-.708-.708L11.293 12 9.146 9.854a.5.5 0 1 1 .708-.708L12 11.293l2.146-2.147a.5.5 0 0 1 .708.708L12.707 12ZM3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm1 0v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCloseSquare);
const Memo = memo(ForwardRef);
export default Memo;
