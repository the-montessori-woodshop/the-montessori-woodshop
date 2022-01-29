import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellBorderLeft = (
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
    <path d="M13 13v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5h.5a.5.5 0 1 1 0 1H13Zm-7-1h.5a.5.5 0 1 1 0 1H6v6.5a.5.5 0 1 1-1 0v-14a.5.5 0 0 1 1 0V12Zm16-6.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 19.5 4a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 5.5Zm-1 14a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5h-.062a.5.5 0 1 1 0-1h.062a1.5 1.5 0 0 0 1.5-1.5ZM5.5 21a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 19.5v-14A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5v14A1.5 1.5 0 0 0 5.5 21Zm2 1a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-9-18a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1ZM12 5.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm9 2a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-9-8a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 7a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM8.5 13a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm7 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellBorderLeft);
const Memo = memo(ForwardRef);
export default Memo;
