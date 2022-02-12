import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLiraSign = (
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
    <path d="M8 10.654V9.68l-1.392.31a.5.5 0 0 1-.216-.977L8 8.654V5.5a.5.5 0 0 1 1 0v2.932l6.392-1.42a.5.5 0 1 1 .216.976L9 9.457v.975l6.392-1.42a.5.5 0 1 1 .216.976L9 11.457V18h2.5a5.5 5.5 0 0 0 5.5-5.5.5.5 0 1 1 1 0 6.5 6.5 0 0 1-6.5 6.5h-3a.5.5 0 0 1-.5-.5v-6.821l-1.392.31a.5.5 0 0 1-.216-.977L8 10.654Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLiraSign);
const Memo = memo(ForwardRef);
export default Memo;
