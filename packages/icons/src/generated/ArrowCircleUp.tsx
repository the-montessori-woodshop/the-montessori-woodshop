import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowCircleUp = (
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
    <path d="M13 8.707V17.5a.5.5 0 1 1-1 0V8.707l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L13 8.707Zm9 3.793a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Zm-1 0a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowCircleUp);
const Memo = memo(ForwardRef);
export default Memo;
