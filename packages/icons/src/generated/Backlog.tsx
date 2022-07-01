import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBacklog = (
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
    <path d="M5 5h14v-.5A1.5 1.5 0 0 0 17.5 3h-11A1.5 1.5 0 0 0 5 4.5V5Zm-1 .5v-1A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Zm0 5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Zm1-.5h14V8H5v2Zm1 5.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Zm1-.5h14v-2H7v2Zm-3 3.5v-1a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5Zm1-.5v.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V18H5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBacklog);
const Memo = memo(ForwardRef);
export default Memo;
