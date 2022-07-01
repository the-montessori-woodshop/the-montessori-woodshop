import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStamp = (
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
    <path d="M10.14 14h3.72l-.787-3.146a4.004 4.004 0 0 1-2.146 0L10.14 14Zm-1.03 0 .884-3.538a4 4 0 1 1 4.012 0L14.89 14h3.61a2.5 2.5 0 0 1 2.5 2.5v2a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-2A2.5 2.5 0 0 1 5.5 14h3.61ZM12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 8v-1.5a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 4 16.5V18h16ZM3.5 21a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgStamp);
const Memo = memo(ForwardRef);
export default Memo;
