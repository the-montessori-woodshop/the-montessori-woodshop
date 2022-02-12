import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHamburgerMenu = (
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
    <path d="M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 5a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 5a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHamburgerMenu);
const Memo = memo(ForwardRef);
export default Memo;
