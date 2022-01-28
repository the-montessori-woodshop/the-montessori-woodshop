import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChevronDoubleLeft = (
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
    <path d="M15.88 15.175a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .76.65L13.159 12l2.72 3.175Zm-4 0a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .76.65L9.159 12l2.72 3.175Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDoubleLeft);
const Memo = memo(ForwardRef);
export default Memo;
