import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMoneyStack = (
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
    <path d="M6 5v.5A2.5 2.5 0 0 1 3.5 8H3v4h.541a2.5 2.5 0 0 1 2.5 2.5v.5H18v-.5a2.5 2.5 0 0 1 2.5-2.5h.5V8h-.5A2.5 2.5 0 0 1 18 5.5V5H6ZM5 5h-.5A1.5 1.5 0 0 0 3 6.5V7h.5A1.5 1.5 0 0 0 5 5.5V5Zm.041 10v-.5a1.5 1.5 0 0 0-1.5-1.5H3v.5A1.5 1.5 0 0 0 4.5 15h.541Zm.684 1a.499.499 0 0 1-.367 0H4.5A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v7a2.5 2.5 0 0 1-2.5 2.5H5.725ZM19 15h.5a1.5 1.5 0 0 0 1.5-1.5V13h-.5a1.5 1.5 0 0 0-1.5 1.5v.5Zm0-10v.5A1.5 1.5 0 0 0 20.5 7h.5v-.5A1.5 1.5 0 0 0 19.5 5H19Zm-7 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-9.5 5a.5.5 0 1 1 0-1h19a.5.5 0 1 1 0 1h-19Zm0 2a.5.5 0 1 1 0-1h19a.5.5 0 1 1 0 1h-19Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMoneyStack);
const Memo = memo(ForwardRef);
export default Memo;
