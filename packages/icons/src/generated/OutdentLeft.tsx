import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOutdentLeft = (
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
    <path d="M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm7 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm0 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm-7 4a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17ZM8 9.5v6a.5.5 0 0 1-.8.4l-4-3a.5.5 0 0 1 0-.8l4-3a.5.5 0 0 1 .8.4Zm-3.667 3L7 14.5v-4l-2.667 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgOutdentLeft);
const Memo = memo(ForwardRef);
export default Memo;
