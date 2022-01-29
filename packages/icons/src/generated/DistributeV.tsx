import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDistributeV = (
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
    <path d="M5 11.5v1A1.5 1.5 0 0 0 6.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 5 11.5Zm-1 0A2.5 2.5 0 0 1 6.5 9h11a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 12.5v-1ZM3.5 4a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 17a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDistributeV);
const Memo = memo(ForwardRef);
export default Memo;
