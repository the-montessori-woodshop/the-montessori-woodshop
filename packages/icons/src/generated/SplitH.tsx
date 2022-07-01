import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSplitH = (
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
    <path d="M11 19.293V14H3.5a.5.5 0 1 1 0-1h16a.5.5 0 1 1 0 1H12v5.293l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L11 19.293Zm1-14.586V10h7.5a.5.5 0 1 1 0 1h-16a.5.5 0 1 1 0-1H11V4.707L7.854 7.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L12 4.707Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSplitH);
const Memo = memo(ForwardRef);
export default Memo;
