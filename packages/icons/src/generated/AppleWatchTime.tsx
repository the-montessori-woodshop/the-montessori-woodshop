import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAppleWatchTime = (
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
    <path d="M9 6h6V3.5A1.5 1.5 0 0 0 13.5 2h-3A1.5 1.5 0 0 0 9 3.5V6Zm7 .048A2.5 2.5 0 0 1 18.011 8.5v7a2.5 2.5 0 0 1-2.5 2.5H8.5A2.5 2.5 0 0 1 6 15.5v-7a2.5 2.5 0 0 1 2-2.45V3.5A2.5 2.5 0 0 1 10.5 1h3A2.5 2.5 0 0 1 16 3.5v2.548ZM15 17.5a.5.5 0 1 1 1 0v3a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 20.5v-3a.5.5 0 1 1 1 0v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3ZM8.5 7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7.011a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H8.5Zm3.5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1.658-2.974a.5.5 0 1 1-.316.948l-1.5-.5a.5.5 0 0 1-.316-.316l-.5-1.5a.5.5 0 1 1 .948-.316l.421 1.263 1.263.42Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAppleWatchTime);
const Memo = memo(ForwardRef);
export default Memo;
