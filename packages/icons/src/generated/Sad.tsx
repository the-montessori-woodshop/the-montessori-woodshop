import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSad = (
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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3-4.5a.5.5 0 1 1-1 0 3.5 3.5 0 0 1 3.5-3.5h1.018a3.5 3.5 0 0 1 3.5 3.5.5.5 0 1 1-1 0 2.5 2.5 0 0 0-2.5-2.5H11.5A2.5 2.5 0 0 0 9 16.5ZM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSad);
const Memo = memo(ForwardRef);
export default Memo;
