import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHistory = (
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
    <path d="M3 12.293V12a9 9 0 1 1 1.36 4.759.5.5 0 0 1 .848-.53 8.044 8.044 0 0 0 1.604 1.86A8 8 0 1 0 4 12v.294l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 12.293Zm12.697.747a.5.5 0 0 1-.394.92l-3.5-1.5a.5.5 0 0 1-.277-.302l-1.5-4.5a.5.5 0 1 1 .948-.316l1.43 4.287 3.293 1.411Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHistory);
const Memo = memo(ForwardRef);
export default Memo;
