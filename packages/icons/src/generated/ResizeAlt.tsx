import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgResizeAlt = (
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
    <path d="M4 14.5v4A1.5 1.5 0 0 0 5.5 20h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 9.5 13h-4A1.5 1.5 0 0 0 4 14.5ZM16.293 16l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L16.293 17H13.5a.5.5 0 1 1 0-1h2.793ZM8 7.707V10.5a.5.5 0 1 1-1 0V7.707L5.854 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8 7.707ZM3 14.5A2.5 2.5 0 0 1 5.5 12h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 9.5 21h-4A2.5 2.5 0 0 1 3 18.5v-4Zm1-9a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5ZM8.5 4a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm5 0a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm5 0a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 21 5.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 18.5 4ZM20 8.5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5ZM15.5 20a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h2ZM3 8.5a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0v-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgResizeAlt);
const Memo = memo(ForwardRef);
export default Memo;
