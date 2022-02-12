import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMouse = (
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
    <path d="m5.646 10.646 5.012-5.01a5.45 5.45 0 0 1 7.707 7.706l-5.011 5.012a5.45 5.45 0 0 1-7.708-7.708Zm.708.708a4.45 4.45 0 1 0 6.292 6.292l5.012-5.01a4.45 4.45 0 0 0-6.293-6.294l-5.011 5.012Zm8.792-3.208a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708l1-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMouse);
const Memo = memo(ForwardRef);
export default Memo;
