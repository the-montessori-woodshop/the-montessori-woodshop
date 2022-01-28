import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSliderCircleH = (
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
    <path d="M12.95 17a2.5 2.5 0 0 1-4.9 0H3.5a.5.5 0 1 1 0-1h4.55a2.5 2.5 0 0 1 4.9 0h7.55a.5.5 0 1 1 0 1h-7.55Zm6-5a2.5 2.5 0 0 1-4.9 0H3.5a.5.5 0 1 1 0-1h10.55a2.5 2.5 0 0 1 4.9 0h1.55a.5.5 0 1 1 0 1h-1.55Zm-9-5a2.5 2.5 0 0 1-4.9 0H3.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0H20.5a.5.5 0 1 1 0 1H9.95ZM7.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSliderCircleH);
const Memo = memo(ForwardRef);
export default Memo;
