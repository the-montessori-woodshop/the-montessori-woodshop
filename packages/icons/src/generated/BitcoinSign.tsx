import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBitcoinSign = (
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
    <path d="M8 17v-5H6.5a.5.5 0 1 1 0-1H8V7H6.5a.5.5 0 0 1 0-1H8V4.5a.5.5 0 0 1 1 0V6h2V4.5a.5.5 0 1 1 1 0V6h1.014a3 3 0 0 1 2.176 5.065A3.501 3.501 0 0 1 14.518 18H12v1.5a.5.5 0 1 1-1 0V18H9v1.508a.5.5 0 1 1-1 0V18H6.5a.5.5 0 1 1 0-1H8Zm1 0h5.518a2.5 2.5 0 0 0 0-5H9v5Zm4.014-6a2 2 0 1 0 0-4H9v4h4.014Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBitcoinSign);
const Memo = memo(ForwardRef);
export default Memo;
