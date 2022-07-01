import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShoppingBag = (
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
    <path d="M9 7H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 16.5 7H15v2.5a.5.5 0 1 1-1 0V7h-4v2.5a.5.5 0 0 1-1 0V7Zm0-1V5a3 3 0 0 1 6 0v1h1.5A2.5 2.5 0 0 1 19 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H9Zm5 0V5a2 2 0 1 0-4 0v1h4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShoppingBag);
const Memo = memo(ForwardRef);
export default Memo;
