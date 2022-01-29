import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTransformLeft = (
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
    <path d="M20.906 17.792A.494.494 0 0 1 20.5 18h-11a.5.5 0 0 1-.444-.27L3.061 6.74A.5.5 0 0 1 3.5 6h11a.5.5 0 0 1 .439.26L20 15.54v-.04a.5.5 0 1 1 1 0v1.973a.497.497 0 0 1-.094.32ZM9 15.54V15.5a.5.5 0 1 1 1 0V17h9.658L14.203 7H10v.5a.5.5 0 0 1-1 0V7H4.342L9 15.54ZM19.5 7a.5.5 0 1 1 0-1A1.5 1.5 0 0 1 21 7.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5Zm.5 2.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM17.5 6a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1ZM9 9.5a.5.5 0 0 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTransformLeft);
const Memo = memo(ForwardRef);
export default Memo;
