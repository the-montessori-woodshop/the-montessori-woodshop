import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellSplitH = (
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
    <path d="M4 13v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 1 1 1 0V12h8v-.5a.5.5 0 1 1 1 0v.5h8v-1.5a.5.5 0 1 1 1 0v1.916a.503.503 0 0 1 0 .168V14.5a.5.5 0 1 1-1 0V13h-8v.507a.5.5 0 1 1-1 0V13H4Zm15.5 9a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5Zm-14-1a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 19.5v-.062a.5.5 0 1 1 1 0v.062A1.5 1.5 0 0 0 5.5 21ZM4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5ZM7.5 4a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm6 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 5.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 19.5 4ZM12 5.5a.5.5 0 1 1 1 0v1.007a.5.5 0 1 1-1 0V5.5Zm0 3a.5.5 0 1 1 1 0v1.007a.5.5 0 1 1-1 0V8.5Zm0 7a.5.5 0 1 1 1 0v1.007a.5.5 0 1 1-1 0V15.5Zm0 3a.5.5 0 1 1 1 0v1.007a.5.5 0 1 1-1 0V18.5Zm9-11a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 9a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-18-9a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 9a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM7.5 22a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm6 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellSplitH);
const Memo = memo(ForwardRef);
export default Memo;
