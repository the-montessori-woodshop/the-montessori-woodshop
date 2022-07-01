import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAddToList = (
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
    <path d="M18 7h2.5a.5.5 0 1 1 0 1H18v2.5a.5.5 0 1 1-1 0V8h-2.5a.5.5 0 1 1 0-1H17V4.5a.5.5 0 1 1 1 0V7Zm-6.5 0a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1h8Zm3 5a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1h11Zm6 5a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1h17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAddToList);
const Memo = memo(ForwardRef);
export default Memo;
