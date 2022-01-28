import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOutdentRight = (
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
    <path d="M3.5 7a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm0 4a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10Zm0 4a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17ZM16 15.5v-6a.5.5 0 0 1 .8-.4l4 3a.5.5 0 0 1 0 .8l-4 3a.5.5 0 0 1-.8-.4Zm3.667-3L17 10.5v4l2.667-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgOutdentRight);
const Memo = memo(ForwardRef);
export default Memo;
