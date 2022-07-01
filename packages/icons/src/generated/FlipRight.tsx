import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlipRight = (
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
    <path d="M16.053 12.724C15.135 10.887 13.803 10 12 10c-1.804 0-3.135.887-4.053 2.724a.5.5 0 0 1-.894-.448C8.135 10.113 9.803 9 12 9c2.196 0 3.865 1.113 4.947 3.276a.5.5 0 0 1-.894.448ZM16 12V9.5a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1H16Zm2.5-9A2.5 2.5 0 0 1 21 5.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 18.5 4a.5.5 0 1 1 0-1Zm-2 1h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1ZM21 8.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0Zm0 5v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0Zm0 5a2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0ZM16.5 21h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1ZM12 2.5v4a.5.5 0 1 1-1 0v-4a.5.5 0 1 1 1 0Zm0 12v7a.5.5 0 1 1-1 0v-7a.5.5 0 1 1 1 0ZM8.5 4h-3A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h3a.5.5 0 1 1 0 1h-3A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h3a.5.5 0 0 1 0 1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlipRight);
const Memo = memo(ForwardRef);
export default Memo;
