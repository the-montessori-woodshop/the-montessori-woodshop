import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSubstractBack = (
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
    <path d="M4.5 9A1.5 1.5 0 0 0 3 10.5v9A1.5 1.5 0 0 0 4.5 21h9.01a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5H4.5ZM9 8h4.51a2.5 2.5 0 0 1 2.5 2.5V15h.49a.5.5 0 1 1 0 1h-.49v3.5a2.5 2.5 0 0 1-2.5 2.5H4.5A2.5 2.5 0 0 1 2 19.5v-9A2.5 2.5 0 0 1 4.5 8H8v-.5a.5.5 0 0 1 1 0V8Zm1.5-6a.5.5 0 1 1 0 1A1.5 1.5 0 0 0 9 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 10.5 2Zm9 1a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 4.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 19.5 3ZM21 7.5a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3Zm0 6a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5ZM16.5 2a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1h3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSubstractBack);
const Memo = memo(ForwardRef);
export default Memo;
