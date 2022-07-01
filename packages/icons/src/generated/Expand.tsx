import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpand = (
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
    <path d="M4 7.5a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 5.5 3h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 4 5.5v2ZM16.5 4a.5.5 0 1 1 0-1h2A2.5 2.5 0 0 1 21 5.5v2a.5.5 0 1 1-1 0v-2A1.5 1.5 0 0 0 18.5 4h-2ZM20 16.5a.5.5 0 1 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 1 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5v-2ZM7.5 20a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 3 18.5v-2a.5.5 0 1 1 1 0v2A1.5 1.5 0 0 0 5.5 20h2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpand);
const Memo = memo(ForwardRef);
export default Memo;
