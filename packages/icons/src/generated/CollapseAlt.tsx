import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCollapseAlt = (
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
    <path d="M8.293 15H3.5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 .5.5v6a.5.5 0 1 1-1 0v-4.793l-5.146 5.147a.5.5 0 0 1-.708-.708L8.293 15ZM9 8.293V3.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L3.146 3.854a.5.5 0 1 1 .708-.708L9 8.293ZM15.707 9H20.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 1 1 1 0v4.793l5.146-5.147a.5.5 0 0 1 .708.708L15.707 9Zm0 6 5.147 5.146a.5.5 0 0 1-.708.708L15 15.707v4.814a.5.5 0 1 1-1 0V14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-4.793Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCollapseAlt);
const Memo = memo(ForwardRef);
export default Memo;
