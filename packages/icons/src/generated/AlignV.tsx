import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlignV = (
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
    <path d="M7 8.5A1.5 1.5 0 0 0 8.5 10h8A1.5 1.5 0 0 0 18 8.5v-1A1.5 1.5 0 0 0 16.5 6h-8A1.5 1.5 0 0 0 7 7.5v1ZM13 19v1.5a.5.5 0 1 1-1 0V19H6.5A2.5 2.5 0 0 1 4 16.5v-1A2.5 2.5 0 0 1 6.5 13H12v-2H8.5A2.5 2.5 0 0 1 6 8.5v-1A2.5 2.5 0 0 1 8.5 5H12V3.5a.5.5 0 1 1 1 0V5h3.5A2.5 2.5 0 0 1 19 7.5v1a2.5 2.5 0 0 1-2.5 2.5H13v2h5.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H13Zm-8-2.5A1.5 1.5 0 0 0 6.5 18h12a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-12A1.5 1.5 0 0 0 5 15.5v1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAlignV);
const Memo = memo(ForwardRef);
export default Memo;
