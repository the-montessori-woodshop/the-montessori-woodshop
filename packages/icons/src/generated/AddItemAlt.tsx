import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAddItemAlt = (
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
    <path d="M18 6h2.5a.5.5 0 1 1 0 1H18v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 1 1 0-1H17V3.5a.5.5 0 1 1 1 0V6Zm2 5.5a.5.5 0 1 1 1 0v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h7a.5.5 0 1 1 0 1h-7A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAddItemAlt);
const Memo = memo(ForwardRef);
export default Memo;
