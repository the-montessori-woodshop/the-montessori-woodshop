import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMoneyBill = (
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
    <path d="M5 6v.5A2.5 2.5 0 0 1 2.5 9H2v6h.541a2.5 2.5 0 0 1 2.5 2.5v.5H19v-.5a2.5 2.5 0 0 1 2.5-2.5h.5V9h-.5A2.5 2.5 0 0 1 19 6.5V6H5ZM4 6h-.5A1.5 1.5 0 0 0 2 7.5V8h.5A1.5 1.5 0 0 0 4 6.5V6Zm.041 12v-.5a1.5 1.5 0 0 0-1.5-1.5H2v.5A1.5 1.5 0 0 0 3.5 18h.541Zm.684 1a.499.499 0 0 1-.367 0H3.5A2.5 2.5 0 0 1 1 16.5v-9A2.5 2.5 0 0 1 3.5 5h17A2.5 2.5 0 0 1 23 7.5v9a2.5 2.5 0 0 1-2.5 2.5H4.725ZM20 18h.5a1.5 1.5 0 0 0 1.5-1.5V16h-.5a1.5 1.5 0 0 0-1.5 1.5v.5Zm0-12v.5A1.5 1.5 0 0 0 21.5 8h.5v-.5A1.5 1.5 0 0 0 20.5 6H20Zm-8 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMoneyBill);
const Memo = memo(ForwardRef);
export default Memo;
