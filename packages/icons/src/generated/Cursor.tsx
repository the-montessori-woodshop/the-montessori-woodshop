import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCursor = (
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
    <path d="M8.854 19.854a.5.5 0 0 1-.831-.205l-5-16a.5.5 0 0 1 .626-.626l16 5a.5.5 0 0 1 .205.83L16.207 12.5l4.647 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0L12.5 16.207l-3.646 3.647ZM4.262 4.262l4.469 14.3 3.415-3.416a.5.5 0 0 1 .708 0l4.646 4.647 2.293-2.293-4.647-4.646a.5.5 0 0 1 0-.708l3.416-3.415-14.3-4.469Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCursor);
const Memo = memo(ForwardRef);
export default Memo;
