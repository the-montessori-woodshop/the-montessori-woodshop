import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRedo = (
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
    <path d="M19 6.5a.5.5 0 1 1 1 0v5a.5.5 0 0 1-.5.5h-5a.5.5 0 1 1 0-1H19V6.5ZM4 17.501a.5.5 0 0 1-1-.002c.003-1.236.007-1.881.014-2C3.274 10.743 7.216 7 12 7h.283a9.01 9.01 0 0 1 7.641 4.235.5.5 0 0 1-.848.53A8.01 8.01 0 0 0 12.283 8H12a8 8 0 0 0-7.988 7.554c-.005.09-.01.76-.012 1.947Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRedo);
const Memo = memo(ForwardRef);
export default Memo;
