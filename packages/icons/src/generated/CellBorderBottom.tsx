import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellBorderBottom = (
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
    <path d="M13 19h6.5a.5.5 0 1 1 0 1h-14a.5.5 0 1 1 0-1H12v-.5a.5.5 0 1 1 1 0v.5Zm0-7h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm2.5 1a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-13 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1ZM12 5.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 7a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3Zm11 1a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm12 0a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 5.5v.062a.5.5 0 1 1-1 0V5.5A1.5 1.5 0 0 0 19.5 4ZM21 7.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-18-9a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm18 3a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 3 19.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 5.5 21h14a1.5 1.5 0 0 0 1.5-1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellBorderBottom);
const Memo = memo(ForwardRef);
export default Memo;
