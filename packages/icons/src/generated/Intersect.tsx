import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIntersect = (
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
    <path d="M8 8V4.5A2.5 2.5 0 0 1 10.5 2h9A2.5 2.5 0 0 1 22 4.5v9a2.5 2.5 0 0 1-2.5 2.5H16v3.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 19.5v-9A2.5 2.5 0 0 1 4.5 8H8Zm1 .5a.5.5 0 0 1-.5.5h-4A1.5 1.5 0 0 0 3 10.5v9A1.5 1.5 0 0 0 4.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-4a.5.5 0 0 1 .5-.5h4a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19.5 3h-9A1.5 1.5 0 0 0 9 4.5v4Zm4.5.5a.5.5 0 1 1 0-1 2.5 2.5 0 0 1 2.5 2.5.5.5 0 1 1-1 0A1.5 1.5 0 0 0 13.5 9ZM8 13.5a.5.5 0 1 1 1 0 1.5 1.5 0 0 0 1.5 1.5.5.5 0 1 1 0 1A2.5 2.5 0 0 1 8 13.5Zm4.5 2.5a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-2-7a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1ZM8 10.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm7 2a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIntersect);
const Memo = memo(ForwardRef);
export default Memo;
