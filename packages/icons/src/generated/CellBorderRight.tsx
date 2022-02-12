import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellBorderRight = (
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
    <path d="M19 13h-.5a.5.5 0 1 1 0-1h.5V5.5a.5.5 0 1 1 1 0v14a.5.5 0 1 1-1 0V13Zm-6-1h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5ZM3 19.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 5.5 21a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 19.5Zm1-14a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3h.062a.5.5 0 1 1 0 1H5.5A1.5 1.5 0 0 0 4 5.5ZM19.5 4a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 5.5v14a2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 19.5 4Zm-2 17a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm9-18a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM12 5.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-9-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm9-1a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm3.5-5.5a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-7 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellBorderRight);
const Memo = memo(ForwardRef);
export default Memo;
