import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlug = (
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
    <path d="M11 16v4.5a.5.5 0 1 1-1 0V16h-.5A2.5 2.5 0 0 1 7 13.5V11h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H9V3.5a.5.5 0 0 1 1 0V8h4V3.5a.5.5 0 1 1 1 0V8h2.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H17v2.5a2.5 2.5 0 0 1-2.5 2.5H14v4.5a.5.5 0 1 1-1 0V16h-2ZM7 9v1h.5a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 9.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h.5V9H7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPlug);
const Memo = memo(ForwardRef);
export default Memo;
