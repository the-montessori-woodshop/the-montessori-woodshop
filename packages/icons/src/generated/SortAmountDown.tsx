import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortAmountDown = (
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
    <path d="M6.904 19.803a.5.5 0 0 1-.808 0l-2.95-2.95a.5.5 0 0 1 .708-.707L6 18.293V4.5a.5.5 0 0 1 1 0v13.793l2.146-2.147a.5.5 0 0 1 .708.708l-2.95 2.95ZM12.5 6a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 4a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm0 4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm0 4a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortAmountDown);
const Memo = memo(ForwardRef);
export default Memo;
