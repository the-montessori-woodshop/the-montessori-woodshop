import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSnow = (
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
    <path d="M11 17h.5a.5.5 0 1 1 0 1H11v.5a.5.5 0 1 1-1 0V18h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm3-2h.5a.5.5 0 1 1 0 1H14v.5a.5.5 0 1 1-1 0V16h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm-4-2h.5a.5.5 0 1 1 0 1H10v.5a.5.5 0 1 1-1 0V14h-.5a.5.5 0 1 1 0-1H9v-.5a.5.5 0 1 1 1 0v.5Zm5.744-6h.756a4.5 4.5 0 1 1 0 9 .5.5 0 1 1 0-1 3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 11.5 5H11a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5 .5.5 0 1 1 0 1A3.5 3.5 0 0 1 6 9.035C6 6.24 8.239 4 11 4h.5a4.502 4.502 0 0 1 4.244 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSnow);
const Memo = memo(ForwardRef);
export default Memo;
