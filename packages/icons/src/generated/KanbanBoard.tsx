import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKanbanBoard = (
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
    <path d="M9 3v18h6V3H9ZM8 3H3.5A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21H8V3Zm8 0v18h4.5a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3H16ZM1 4.5A2.5 2.5 0 0 1 3.5 2h17A2.5 2.5 0 0 1 23 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 19.5v-15ZM4 6h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Zm7-4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm7 0h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Zm0 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1ZM4 7v1h2V7H4Zm0 4v1h2v-1H4Zm7-4v1h2V7h-2Zm7 0v1h2V7h-2Zm0 4v1h2v-1h-2Zm0 4v1h2v-1h-2ZM3.5 5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm7 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm7 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgKanbanBoard);
const Memo = memo(ForwardRef);
export default Memo;
