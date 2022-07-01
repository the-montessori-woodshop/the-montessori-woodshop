import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCollapseRight = (
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
    <path d="m15.293 12-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L15.293 13H4.5a.5.5 0 1 1 0-1h10.793ZM19 5.5a.5.5 0 1 1 1 0v14a.5.5 0 1 1-1 0v-14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCollapseRight);
const Memo = memo(ForwardRef);
export default Memo;
