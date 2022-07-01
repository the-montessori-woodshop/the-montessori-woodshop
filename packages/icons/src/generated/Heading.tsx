import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHeading = (
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
    <path d="M17 11V6h-1.5a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1H18v12h1.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1H17v-6H7v6h1.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1H6V6H4.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H7v5h10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHeading);
const Memo = memo(ForwardRef);
export default Memo;
