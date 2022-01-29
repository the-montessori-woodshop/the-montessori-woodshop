import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScale = (
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
    <path d="M20 19.293V16.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h2.793l-3.147-3.146a.5.5 0 0 1 .708-.708L20 19.293ZM4 4.707V7.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H4.707l3.147 3.146a.5.5 0 1 1-.708.708L4 4.707ZM4.707 20H7.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.793l3.146-3.147a.5.5 0 0 1 .708.708L4.707 20ZM19.293 4H16.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5v4.031a.5.5 0 1 1-1 0V4.707l-3.146 3.147a.5.5 0 0 1-.708-.708L19.293 4ZM8 10.495a2.5 2.5 0 0 1 2.494-2.5l3-.008a2.501 2.501 0 0 1 2.506 2.5V13.5a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 13.5v-3.005Zm1 0V13.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3.013a1.5 1.5 0 0 0-1.5-1.5l-3.004.008A1.5 1.5 0 0 0 9 10.495Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgScale);
const Memo = memo(ForwardRef);
export default Memo;
