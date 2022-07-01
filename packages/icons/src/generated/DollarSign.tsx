import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDollarSign = (
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
    <path d="M14 6h1.5A2.5 2.5 0 0 1 18 8.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 15.5 7h-7A1.5 1.5 0 0 0 7 8.5v1.174a1.5 1.5 0 0 0 1.364 1.493l7.362.67A2.5 2.5 0 0 1 18 14.327V15.5a2.5 2.5 0 0 1-2.5 2.5H14v1.5a.5.5 0 1 1-1 0V18h-2v1.5a.5.5 0 1 1-1 0V18H8.5A2.5 2.5 0 0 1 6 15.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 8.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-1.174a1.5 1.5 0 0 0-1.364-1.493l-7.362-.67A2.5 2.5 0 0 1 6 9.673V8.5A2.5 2.5 0 0 1 8.5 6H10V4.5a.5.5 0 1 1 1 0V6h2V4.5a.5.5 0 1 1 1 0V6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDollarSign);
const Memo = memo(ForwardRef);
export default Memo;
