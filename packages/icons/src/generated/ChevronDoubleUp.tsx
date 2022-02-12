import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChevronDoubleUp = (
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
    <path d="M8.825 11.88a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 0 1-.65.76L12 9.159l-3.175 2.72Zm0 4a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 0 1-.65.76L12 13.159l-3.175 2.72Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDoubleUp);
const Memo = memo(ForwardRef);
export default Memo;
