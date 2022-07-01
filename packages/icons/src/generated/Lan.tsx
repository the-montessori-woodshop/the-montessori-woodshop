import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLan = (
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
    <path d="M9 3.5v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Zm4 8.5h3.511a1.5 1.5 0 0 1 1.5 1.5v.5H20.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h-1a1.5 1.5 0 0 1-1.5-1.5v-4a1.5 1.5 0 0 1 1.5-1.5h2.511v-.5a.5.5 0 0 0-.5-.5H8.5a.5.5 0 0 0-.5.5v.5h2.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h-1A1.5 1.5 0 0 1 3 19.5v-4A1.5 1.5 0 0 1 4.5 14H7v-.5A1.5 1.5 0 0 1 8.5 12H12v-2h-1.5a.5.5 0 1 1 0-1h-1A1.5 1.5 0 0 1 8 7.5v-4A1.5 1.5 0 0 1 9.5 2h6A1.5 1.5 0 0 1 17 3.5v4A1.5 1.5 0 0 1 15.5 9h-1a.5.5 0 1 1 0 1H13v2Zm4.503 3H14.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-2.98a.51.51 0 0 1-.017 0ZM4 15.5v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLan);
const Memo = memo(ForwardRef);
export default Memo;
