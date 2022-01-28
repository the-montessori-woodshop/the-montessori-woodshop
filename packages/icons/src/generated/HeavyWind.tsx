import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHeavyWind = (
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
    <path d="M17.744 9h.756a4.5 4.5 0 1 1 0 9H8a1 1 0 0 0 0 2h.5a.5.5 0 1 1 0 1H8a2 2 0 1 1 0-4h10.5a3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 13.5 7H13a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.501 2.501 0 0 0-2.357 1.665.5.5 0 1 1-.943-.334A3.502 3.502 0 0 1 8 11.036V11a5 5 0 0 1 5-5h.5a4.502 4.502 0 0 1 4.244 3ZM12.5 15a.5.5 0 1 1 0 1H3a2 2 0 1 1 0-4h.5a.5.5 0 1 1 0 1H3a1 1 0 0 0 0 2h9.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHeavyWind);
const Memo = memo(ForwardRef);
export default Memo;
