import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrototype = (
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
    <path d="M5 9v3h4V9H5ZM3 6h14V4.5A1.5 1.5 0 0 0 15.5 3h-11A1.5 1.5 0 0 0 3 4.5V6Zm10.5 1H3v9.5A1.5 1.5 0 0 0 4.5 18H13v-1h-1.5a.5.5 0 1 1 0-1H13v-1h-1.5a.5.5 0 1 1 0-1H13v-1h-1.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1.55c.075-.37.231-.71.45-1ZM18 6h1.5A2.5 2.5 0 0 1 22 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5V19H4.5A2.5 2.5 0 0 1 2 16.5v-12A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5V6Zm-5 6V9h-1v3h1ZM4.5 8h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm9.5.5v11a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 7h-4A1.5 1.5 0 0 0 14 8.5ZM4.5 15a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm11-8h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Zm.5 1v1h3v-1h-3Zm-.5 4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3ZM4 4h1v1H4V4Zm2 0h1v1H6V4Zm2 0h1v1H8V4Zm8.5 16a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrototype);
const Memo = memo(ForwardRef);
export default Memo;
