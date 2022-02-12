import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAt = (
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
    <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.145 2.127a.5.5 0 1 1 .643.765A9 9 0 1 1 21 12v2.5a2.5 2.5 0 1 1-5 0v-6a.5.5 0 1 1 1 0v6a1.5 1.5 0 0 0 3 0V12a8 8 0 1 0-2.855 6.127Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAt);
const Memo = memo(ForwardRef);
export default Memo;
