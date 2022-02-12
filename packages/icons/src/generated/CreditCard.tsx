import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCreditCard = (
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
    <path d="M21 10V9H3v1h18Zm0 1H3v5.5A1.5 1.5 0 0 0 4.5 18h15a1.5 1.5 0 0 0 1.5-1.5V11Zm0-3v-.5A1.5 1.5 0 0 0 19.5 6h-15A1.5 1.5 0 0 0 3 7.5V8h18Zm-4 8.733a2.001 2.001 0 1 1 0-3.465 2 2 0 1 1 0 3.465Zm-.75-.764A1.991 1.991 0 0 1 16 15c0-.351.09-.682.25-.969a1.001 1.001 0 1 0 0 1.938ZM2 7.5A2.5 2.5 0 0 1 4.5 5h15A2.5 2.5 0 0 1 22 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5v-9ZM18 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCreditCard);
const Memo = memo(ForwardRef);
export default Memo;
