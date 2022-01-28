import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlipLeft = (
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
    <path d="M7.947 12.724a.5.5 0 0 1-.894-.448C8.135 10.113 9.803 9 12 9c2.196 0 3.865 1.113 4.947 3.276a.5.5 0 0 1-.894.448C15.135 10.887 13.803 10 12 10c-1.804 0-3.135.887-4.053 2.724ZM8 12h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0V12ZM5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3Zm2 1a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2ZM3 8.5a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 5.5 20a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 18.5ZM7.5 21a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2ZM12 2.5a.5.5 0 1 1 1 0v4a.5.5 0 1 1-1 0v-4Zm0 12a.5.5 0 1 1 1 0v7a.5.5 0 1 1-1 0v-7ZM15.5 4a.5.5 0 1 1 0-1h3A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-3a.5.5 0 1 1 0-1h3a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlipLeft);
const Memo = memo(ForwardRef);
export default Memo;
