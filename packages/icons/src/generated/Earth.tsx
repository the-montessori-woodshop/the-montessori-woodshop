import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEarth = (
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
    <path d="M11 20.945v-1.238l-1.854-1.853A.5.5 0 0 1 9 17.5v-2.793l-.854-.853A.5.5 0 0 1 8 13.5v-1a.5.5 0 0 1 .5-.5h5a1.5 1.5 0 0 1 1.5 1.5v1a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 1.5 1.5.5.5 0 0 0 .5.5h1.984A9.004 9.004 0 0 0 15 3.512V4.5A2.5 2.5 0 0 1 12.5 7h-1a.5.5 0 0 0-.5.5v1A1.5 1.5 0 0 1 9.5 10H8v.5a.5.5 0 0 1-.146.354l-1 1a.5.5 0 0 1-.708 0l-2.69-2.69A9.001 9.001 0 0 0 11 20.945ZM12 21a8.978 8.978 0 0 0 6.708-3H17.5a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1-1.5-1.5v-1a.5.5 0 0 0-.5-.5H9v.293l.854.853A.5.5 0 0 1 10 14.5v2.793l1.854 1.853A.5.5 0 0 1 12 19.5V21Zm-.41.992a.503.503 0 0 1-.231-.012C6.135 21.65 2 17.307 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-.137 0-.273-.003-.41-.008ZM3.86 8.154l2.64 2.639.5-.5V9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-1A1.5 1.5 0 0 1 11.5 6h1A1.5 1.5 0 0 0 14 4.5V3.223a9.001 9.001 0 0 0-10.14 4.93Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEarth);
const Memo = memo(ForwardRef);
export default Memo;
