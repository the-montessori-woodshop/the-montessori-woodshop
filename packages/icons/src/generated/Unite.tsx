import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUnite = (
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
    <path d="M9 8.5a.5.5 0 0 1-.5.5l-3.997-.006A1.5 1.5 0 0 0 3 10.494V19.5A1.5 1.5 0 0 0 4.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-4a.5.5 0 0 1 .5-.5h4.01a1.5 1.5 0 0 0 1.5-1.5V4.48a1.5 1.5 0 0 0-1.5-1.5H10.5A1.5 1.5 0 0 0 9 4.48V8.5ZM8 8V4.48a2.5 2.5 0 0 1 2.5-2.5h9.01a2.5 2.5 0 0 1 2.5 2.5v9.02a2.5 2.5 0 0 1-2.5 2.5H16v3.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 19.5v-9.006a2.5 2.5 0 0 1 2.5-2.5l3.5.005Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUnite);
const Memo = memo(ForwardRef);
export default Memo;
