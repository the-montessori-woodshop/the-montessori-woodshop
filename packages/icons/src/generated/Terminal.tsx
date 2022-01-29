import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTerminal = (
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
    <path d="M13 8V3h-1v5h1Zm1 0h1V4.5a1.5 1.5 0 0 0-1-1.415V8Zm-3 0V3h-.5A1.5 1.5 0 0 0 9 4.5V8h2Zm5-2h.5A2.5 2.5 0 0 1 19 8.5v11.008a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5V8.5A2.5 2.5 0 0 1 7.5 6H8V4.5A2.5 2.5 0 0 1 10.5 2h3A2.5 2.5 0 0 1 16 4.5V6ZM8 7h-.5A1.5 1.5 0 0 0 6 8.5v11.008a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V8.5A1.5 1.5 0 0 0 16.5 7H16v1h.5a.5.5 0 1 1 0 1h-9a.5.5 0 0 1 0-1H8V7Zm-.5 3h9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm.5 1v2h8v-2H8Zm.5 5a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-6 2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-6 2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTerminal);
const Memo = memo(ForwardRef);
export default Memo;
