import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindCloudy = (
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
    <path d="M16.744 7h.756a4.5 4.5 0 1 1 0 9h-6a.5.5 0 1 1 0-1h6a3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 12.5 5H12a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.501 2.501 0 0 0-2.357 1.665.5.5 0 1 1-.943-.334A3.502 3.502 0 0 1 7 9.036V9a5 5 0 0 1 5-5h.5a4.502 4.502 0 0 1 4.244 3ZM11.5 11a.5.5 0 1 1 0-1h.5a2 2 0 1 1 0 4H2.5a.5.5 0 1 1 0-1H12a1 1 0 0 0 0-2h-.5Zm-7 6a.5.5 0 1 1 0-1H9a2 2 0 1 1 0 4H7.5a.5.5 0 1 1 0-1H9a1 1 0 0 0 0-2H4.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindCloudy);
const Memo = memo(ForwardRef);
export default Memo;
