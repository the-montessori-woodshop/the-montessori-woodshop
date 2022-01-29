import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGameboy = (
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
    <path d="M8 15v-1.5a.5.5 0 1 1 1 0V15h1.5a.5.5 0 1 1 0 1H9v1.5a.5.5 0 1 1-1 0V16H6.5a.5.5 0 1 1 0-1H8ZM4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15Zm1 0v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 3h-11A1.5 1.5 0 0 0 5 4.5ZM15.5 13h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-2 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-7-12h11a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5ZM7 5v5h10V5H7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGameboy);
const Memo = memo(ForwardRef);
export default Memo;
