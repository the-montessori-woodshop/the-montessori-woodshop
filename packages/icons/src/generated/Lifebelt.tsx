import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLifebelt = (
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
    <path d="M21.987 13h-3.006A6.501 6.501 0 0 1 13 18.981v3.006A9.5 9.5 0 0 0 21.987 13Zm0-1A9.5 9.5 0 0 0 13 3.013v3.006A6.501 6.501 0 0 1 18.981 12h3.006ZM3.013 13A9.5 9.5 0 0 0 12 21.987v-3.006A6.501 6.501 0 0 1 6.019 13H3.013Zm0-1h3.006A6.501 6.501 0 0 1 12 6.019V3.013A9.5 9.5 0 0 0 3.013 12ZM12.5 23C6.701 23 2 18.299 2 12.5S6.701 2 12.5 2 23 6.701 23 12.5 18.299 23 12.5 23Zm0-5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLifebelt);
const Memo = memo(ForwardRef);
export default Memo;
