import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBellSnooze = (
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
    <path d="M14.83 19a3.001 3.001 0 0 1-5.66 0H7.579a2.5 2.5 0 0 1-2.285-3.515L6 13.894V11a6.002 6.002 0 0 1 4-5.659V5a2 2 0 1 1 4 0v.342c.24.085.476.185.704.3a.5.5 0 0 1-.45.893A5 5 0 0 0 7 11l-.001 3-.043.203-.75 1.688A1.5 1.5 0 0 0 7.577 18h8.845a1.5 1.5 0 0 0 1.371-2.11l-.75-1.687L17 14v-3a.5.5 0 1 1 1 0v2.894l.707 1.59A2.5 2.5 0 0 1 16.422 19H14.83Zm-1.097 0h-3.466a2.002 2.002 0 0 0 3.466 0ZM13 5.083V5a1 1 0 0 0-2 0v.083a6.04 6.04 0 0 1 2 0ZM12.5 10a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .416.777L13.434 12H14.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.416-.777L13.566 10H12.5Zm4-5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .4.8L17.5 8h2a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.4-.8L18.5 5h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBellSnooze);
const Memo = memo(ForwardRef);
export default Memo;
