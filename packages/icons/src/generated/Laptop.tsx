import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLaptop = (
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
    <path d="M5 13h14V6.5A1.5 1.5 0 0 0 17.5 5h-11A1.5 1.5 0 0 0 5 6.5V13Zm15 .4 1.885 4.523A1.5 1.5 0 0 1 20.5 20h-17a1.5 1.5 0 0 1-1.385-2.077L4 13.4V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6.9ZM4.833 14l-1.795 4.308A.5.5 0 0 0 3.5 19h17a.5.5 0 0 0 .462-.692L19.167 14H4.833ZM6.5 16a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-1 2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm6 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-8-2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLaptop);
const Memo = memo(ForwardRef);
export default Memo;
