import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDisk = (
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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDisk);
const Memo = memo(ForwardRef);
export default Memo;
