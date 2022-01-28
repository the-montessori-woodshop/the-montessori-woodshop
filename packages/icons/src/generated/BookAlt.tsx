import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBookAlt = (
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
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2h13a.5.5 0 1 1 0 1h-13a1.5 1.5 0 0 0 0 3h11A2.5 2.5 0 0 1 20 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A4.5 4.5 0 0 1 4 17.5v-13Zm1 13A3.5 3.5 0 0 0 8.5 21h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 17.5 7h-11A2.489 2.489 0 0 1 5 6.5v11ZM6.5 5a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13ZM8 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3ZM9 13h6v-2H9v2Zm-.5 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBookAlt);
const Memo = memo(ForwardRef);
export default Memo;
