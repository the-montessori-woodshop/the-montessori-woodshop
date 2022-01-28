import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBroadcast = (
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
    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.165 2.13a.5.5 0 0 1-.67.74 6.569 6.569 0 0 1 0-9.74.5.5 0 0 1 .67.74 5.569 5.569 0 0 0 0 8.26ZM6.176 5.118a.5.5 0 1 1 .648.762 8.028 8.028 0 0 0 0 12.238.5.5 0 0 1-.648.762 9.028 9.028 0 0 1 0-13.762Zm8.99 2.753a.5.5 0 0 1 .668-.744 6.549 6.549 0 0 1 0 9.744.5.5 0 0 1-.668-.744 5.549 5.549 0 0 0 0-8.256Zm2.01-1.991a.5.5 0 1 1 .648-.762 9.032 9.032 0 0 1 0 13.762.5.5 0 1 1-.648-.762 8.032 8.032 0 0 0 0-12.238Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBroadcast);
const Memo = memo(ForwardRef);
export default Memo;
