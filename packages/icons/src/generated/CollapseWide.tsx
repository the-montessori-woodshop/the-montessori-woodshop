import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCollapseWide = (
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
    <path d="M6 4.5a.5.5 0 0 1 1 0v2A2.5 2.5 0 0 1 4.5 9h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 0 6 6.5v-2ZM2.5 16a.5.5 0 1 1 0-1h2A2.5 2.5 0 0 1 7 17.5v2a.5.5 0 1 1-1 0v-2A1.5 1.5 0 0 0 4.5 16h-2Zm19-8a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 17 6.5v-2a.5.5 0 1 1 1 0v2A1.5 1.5 0 0 0 19.5 8h2ZM18 19.5a.5.5 0 1 1-1 0v-2a2.5 2.5 0 0 1 2.5-2.5h2a.5.5 0 1 1 0 1h-2a1.5 1.5 0 0 0-1.5 1.5v2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCollapseWide);
const Memo = memo(ForwardRef);
export default Memo;
