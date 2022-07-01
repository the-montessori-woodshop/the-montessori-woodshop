import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIphoneH = (
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
    <path d="M4.5 7A1.5 1.5 0 0 0 3 8.5v7.011a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V8.5A1.5 1.5 0 0 0 19.5 7h-15Zm0-1h15A2.5 2.5 0 0 1 22 8.5v7.011a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V8.5A2.5 2.5 0 0 1 4.5 6ZM19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIphoneH);
const Memo = memo(ForwardRef);
export default Memo;
