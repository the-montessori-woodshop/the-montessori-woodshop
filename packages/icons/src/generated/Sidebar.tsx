import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSidebar = (
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
    <path d="M11 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H11V4Zm1 0v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4H12ZM3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM5.5 7a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Zm0 2a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm0 2a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSidebar);
const Memo = memo(ForwardRef);
export default Memo;
