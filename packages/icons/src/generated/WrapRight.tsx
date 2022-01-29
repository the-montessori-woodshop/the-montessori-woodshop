import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWrapRight = (
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
    <path d="M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 12a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0-4a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0-4a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm10.5.5A2.5 2.5 0 0 1 16.5 9h2a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm1 0v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWrapRight);
const Memo = memo(ForwardRef);
export default Memo;
