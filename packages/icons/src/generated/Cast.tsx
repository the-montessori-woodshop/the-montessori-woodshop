import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCast = (
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
    <path d="M5.5 18a.5.5 0 1 1 0 1h-1A2.5 2.5 0 0 1 2 16.5v-11A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v11a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 1 1 0-1h1a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 4h-15A1.5 1.5 0 0 0 3 5.5v11A1.5 1.5 0 0 0 4.5 18h1Zm11.375 2.169A.5.5 0 0 1 16.5 21h-9a.5.5 0 0 1-.375-.831l4.5-5.096a.5.5 0 0 1 .75 0l4.5 5.096ZM12 16.159 8.609 20h6.782L12 16.16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCast);
const Memo = memo(ForwardRef);
export default Memo;
