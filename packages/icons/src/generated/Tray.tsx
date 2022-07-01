import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTray = (
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
    <path d="M20 15V5.5A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5V15h5.5a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5H20Zm0 1h-5.05a2.5 2.5 0 0 1-2.45 2h-1a2.5 2.5 0 0 1-2.45-2H4v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16ZM5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Zm2 5a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9Zm0 4a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTray);
const Memo = memo(ForwardRef);
export default Memo;
