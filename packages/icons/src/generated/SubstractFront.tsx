import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSubstractFront = (
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
    <path d="M15 16h-4.51a2.5 2.5 0 0 1-2.5-2.5V9H7.5a.5.5 0 0 1 0-1h.49V4.5a2.5 2.5 0 0 1 2.5-2.5h9.01A2.5 2.5 0 0 1 22 4.5v9a2.5 2.5 0 0 1-2.5 2.5H16v.5a.5.5 0 1 1-1 0V16Zm4.5-1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19.5 3h-9.01a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9.01Zm-6 7a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5Zm-9-1a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 2 19.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 4.5 21ZM3 10.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 1 4.5 8a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 3 10.5Zm-1 3a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3ZM7.5 22a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSubstractFront);
const Memo = memo(ForwardRef);
export default Memo;
