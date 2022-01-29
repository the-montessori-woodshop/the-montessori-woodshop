import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBookmark = (
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
    <path d="M17 6.5A1.5 1.5 0 0 0 15.5 5h-7A1.5 1.5 0 0 0 7 6.5v12.165l4.76-2.604a.5.5 0 0 1 .48 0L17 18.665V6.5ZM6.74 19.947a.5.5 0 0 1-.74-.439V6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5v13.008a.5.5 0 0 1-.74.439L12 17.07l-5.26 2.877Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBookmark);
const Memo = memo(ForwardRef);
export default Memo;
