import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPauseAlt = (
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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 7a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm6-1a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPauseAlt);
const Memo = memo(ForwardRef);
export default Memo;
