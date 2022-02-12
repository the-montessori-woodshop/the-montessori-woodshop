import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandDown = (
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
    <path d="m13 18.293 3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L12 18.293V7.5a.5.5 0 1 1 1 0v10.793ZM4.5 5a.5.5 0 0 1 0-1h16a.5.5 0 1 1 0 1h-16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpandDown);
const Memo = memo(ForwardRef);
export default Memo;
