import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClock = (
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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.79-6.907a.5.5 0 1 1-.58.814l-3.5-2.5a.5.5 0 0 1-.192-.275l-1.5-5.5a.5.5 0 1 1 .964-.264l1.454 5.329 3.355 2.396Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgClock);
const Memo = memo(ForwardRef);
export default Memo;
