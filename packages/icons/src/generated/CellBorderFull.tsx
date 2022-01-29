import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellBorderFull = (
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
    <path d="M13 12h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5ZM3 5.5A2.5 2.5 0 0 1 5.5 3h14A2.5 2.5 0 0 1 22 5.5v14.007a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5V5.5Zm1 0v14.007a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V5.5A1.5 1.5 0 0 0 19.5 4h-14A1.5 1.5 0 0 0 4 5.5ZM15.5 13a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-13 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1ZM12 5.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 10a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0-3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellBorderFull);
const Memo = memo(ForwardRef);
export default Memo;
