import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWrapLeft = (
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
    <path d="M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 12a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Zm9-4a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0-4a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm-9.5.5A2.5 2.5 0 0 1 5.5 9h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 7.5 16h-2A2.5 2.5 0 0 1 3 13.5v-2Zm1 0v2A1.5 1.5 0 0 0 5.5 15h2A1.5 1.5 0 0 0 9 13.5v-2A1.5 1.5 0 0 0 7.5 10h-2A1.5 1.5 0 0 0 4 11.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWrapLeft);
const Memo = memo(ForwardRef);
export default Memo;
