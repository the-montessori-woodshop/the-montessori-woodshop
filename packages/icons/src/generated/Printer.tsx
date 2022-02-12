import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrinter = (
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
    <path d="M19 18.016v2.509a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V18H3.5A1.5 1.5 0 0 1 2 16.5v-5A2.5 2.5 0 0 1 4.5 9H5V3.5a.5.5 0 0 1 .5-.5l13-.012a.5.5 0 0 1 .5.5V9h.5a2.5 2.5 0 0 1 2.5 2.5v5.016a1.5 1.5 0 0 1-1.5 1.5H19Zm0-1h1.5a.5.5 0 0 0 .5-.5V11.5a1.5 1.5 0 0 0-1.5-1.5H19v3.512a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V10h-.5A1.5 1.5 0 0 0 3 11.5v5a.5.5 0 0 0 .5.5H5v-1.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.516Zm-1-7.518v-5.51L6 4v9.012h12V9.498ZM8.5 7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5ZM6 16v4.025h12V16H6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrinter);
const Memo = memo(ForwardRef);
export default Memo;
