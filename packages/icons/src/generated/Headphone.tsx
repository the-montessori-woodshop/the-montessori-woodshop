import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHeadphone = (
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
    <path d="M6 17v-6H4.5A1.5 1.5 0 0 0 3 12.5v3A1.5 1.5 0 0 0 4.5 17H6Zm7.915 3h2.143a1.5 1.5 0 0 0 1.424-1.026l.227-.683a1.89 1.89 0 0 1 .125-.291H17.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.5V8.984a6 6 0 1 0-12 0V10h.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2A2.5 2.5 0 0 1 2 15.5v-3A2.5 2.5 0 0 1 4.5 10H5V8.984a7 7 0 1 1 14 0V10h.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5.887.887 0 0 0-.842.607l-.228.684A2.5 2.5 0 0 1 16.058 21h-2.143a1.5 1.5 0 0 1-1.415 1h-1a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 1.415 1ZM18 11v6h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H18Zm-7 9.5a.5.5 0 0 0 .5.5h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHeadphone);
const Memo = memo(ForwardRef);
export default Memo;
