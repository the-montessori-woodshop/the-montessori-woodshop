import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFontSize = (
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
    <path d="M17 12v5h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h.5v-5h-2v.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0V12h-2Zm-7-6v11h1.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1H9V6H5v1.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0V6h-4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFontSize);
const Memo = memo(ForwardRef);
export default Memo;
