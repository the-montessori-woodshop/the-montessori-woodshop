import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableUsb = (
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
    <path d="M15 17v.5a1.5 1.5 0 0 1-1 1.415V21.5a.5.5 0 1 1-1 0V19h-2v2.5a.5.5 0 1 1-1 0v-2.585A1.5 1.5 0 0 1 9 17.5V17H7.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H8V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V8h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H15Zm-1 0h-4v.5a.5.5 0 0 0 .406.491.503.503 0 0 1 .227.009h2.734a.5.5 0 0 1 .227-.009A.5.5 0 0 0 14 17.5V17ZM9 8h6V3H9v5Zm2-1.5a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0v1Zm3 0a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0v1ZM8 9v7h8V9H8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableUsb);
const Memo = memo(ForwardRef);
export default Memo;
