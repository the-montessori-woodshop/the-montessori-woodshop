import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDistributeH = (
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
    <path d="M10 6.5v11a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 5h-1A1.5 1.5 0 0 0 10 6.5Zm-1 0A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-1A2.5 2.5 0 0 1 9 17.5v-11Zm-6-3a.5.5 0 0 1 1 0v17a.5.5 0 1 1-1 0v-17Zm17 0a.5.5 0 1 1 1 0v17a.5.5 0 1 1-1 0v-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDistributeH);
const Memo = memo(ForwardRef);
export default Memo;
