import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDesignStudio = (
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
    <path d="M17 6v10.28l1.5 1.51 1.5-1.51V6h-3Zm0-1h3V3.015h-3V5Zm4 2v9.485a.5.5 0 0 1-.145.353l-2 2.014a.5.5 0 0 1-.71 0l-2-2.014a.5.5 0 0 1-.145-.353V14h-.5a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 15.5 8h.5V7H6v7.5a.5.5 0 0 1-.5.5H5a3 3 0 0 0 0 6h17V7h-1Zm0-1h1.5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H5a4 4 0 0 1-4-4V6.5A4.5 4.5 0 0 1 5.5 2a.5.5 0 0 1 .5.5V6h10V2.515a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V6Zm-5 3h-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h.5V9ZM2 15.354A3.99 3.99 0 0 1 5 14V3.035A3.5 3.5 0 0 0 2 6.5v8.854ZM8.5 8h3A1.5 1.5 0 0 1 13 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 12.5v-3A1.5 1.5 0 0 1 8.5 8Zm0 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm-1 8a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDesignStudio);
const Memo = memo(ForwardRef);
export default Memo;
