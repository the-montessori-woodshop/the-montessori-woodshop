import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGroup = (
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
    <path d="M10 10V6h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V4h6v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H20v6h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14h-4v4h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V20H6v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H4v-6h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5h4Zm0 1H6v.5a.5.5 0 0 1-.5.5H5v6h.5a.5.5 0 0 1 .5.5v.5h6v-.5a.5.5 0 0 1 .5-.5h.5v-4h-1v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.5v-1Zm1-5v6h.5a.5.5 0 0 1 .5.5v.5h6v-.5a.5.5 0 0 1 .5-.5h.5V6h-.5a.5.5 0 0 1-.5-.5V5h-6v.5a.5.5 0 0 1-.5.5H11Zm-1-2v1h1V4h-1Zm9 0v1h1V4h-1Zm0 9v1h1v-1h-1Zm-9 0v1h1v-1h-1Zm-6-3v1h1v-1H4Zm0 9v1h1v-1H4Zm9 0v1h1v-1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGroup);
const Memo = memo(ForwardRef);
export default Memo;
