import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTextAlignJustify = (
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
    <path d="M4.5 7a.5.5 0 0 1 0-1h15a.5.5 0 1 1 0 1h-15Zm0 4a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1h-15Zm0 4a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1h-15Zm0 4a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTextAlignJustify);
const Memo = memo(ForwardRef);
export default Memo;
