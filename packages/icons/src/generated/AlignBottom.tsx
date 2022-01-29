import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlignBottom = (
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
    <path d="M3.5 21a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17ZM5 5.5A2.5 2.5 0 0 1 7.5 3h1A2.5 2.5 0 0 1 11 5.5v10A2.5 2.5 0 0 1 8.5 18h-1A2.5 2.5 0 0 1 5 15.5v-10Zm1 0v10A1.5 1.5 0 0 0 7.5 17h1a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 8.5 4h-1A1.5 1.5 0 0 0 6 5.5Zm7 3A2.5 2.5 0 0 1 15.5 6h1A2.5 2.5 0 0 1 19 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-7Zm1 0v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16.5 7h-1A1.5 1.5 0 0 0 14 8.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAlignBottom);
const Memo = memo(ForwardRef);
export default Memo;
