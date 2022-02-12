import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIndentRight = (
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
    <path d="M20 14.5v-4l-2.667 2 2.667 2Zm-3.8-2.4 4-3a.5.5 0 0 1 .8.4v6a.5.5 0 0 1-.8.4l-4-3a.5.5 0 0 1 0-.8ZM20.5 6a.5.5 0 1 1 0 1h-17a.5.5 0 0 1 0-1h17Zm-17 5a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm0 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm0 4a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIndentRight);
const Memo = memo(ForwardRef);
export default Memo;
