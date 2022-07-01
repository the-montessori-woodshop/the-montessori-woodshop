import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRubelSign = (
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
    <path d="M9 14h7.5a.5.5 0 1 1 0 1H9v3.5a.5.5 0 1 1-1 0V15H6.5a.5.5 0 1 1 0-1H8v-2H6.5a.5.5 0 1 1 0-1H8V5.5a.5.5 0 0 1 .5-.5h6a3.5 3.5 0 0 1 0 7H9v2Zm0-3h5.5a2.5 2.5 0 1 0 0-5H9v5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRubelSign);
const Memo = memo(ForwardRef);
export default Memo;
