import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBell = (
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
    <path d="M14.83 19a3.001 3.001 0 0 1-5.66 0H7.579a2.5 2.5 0 0 1-2.285-3.515L6 13.894V11a6.002 6.002 0 0 1 4-5.659V5a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v2.894l.707 1.59A2.5 2.5 0 0 1 16.422 19H14.83Zm-1.097 0h-3.466a2.002 2.002 0 0 0 3.466 0ZM13 5.083V5a1 1 0 0 0-2 0v.083a6.04 6.04 0 0 1 2 0ZM12 6a5 5 0 0 0-5 5v3l-.043.203-.75 1.688A1.5 1.5 0 0 0 7.577 18h8.845a1.5 1.5 0 0 0 1.371-2.11l-.75-1.687L17 14v-3a5 5 0 0 0-5-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBell);
const Memo = memo(ForwardRef);
export default Memo;
