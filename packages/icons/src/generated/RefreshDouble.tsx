import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRefreshDouble = (
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
    <path d="M17 18.246a8 8 0 0 0-4.505-14.23.5.5 0 1 1 .061-1C17.29 3.307 21 7.237 21 12a8.986 8.986 0 0 1-3.342 7H20.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.746ZM7 5.754a8 8 0 0 0 4.54 14.233.5.5 0 0 1-.056.998C6.734 20.717 3 16.778 3 12a8.986 8.986 0 0 1 3.342-7H3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V5.754Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRefreshDouble);
const Memo = memo(ForwardRef);
export default Memo;
