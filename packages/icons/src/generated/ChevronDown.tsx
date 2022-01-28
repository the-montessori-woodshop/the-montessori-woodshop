import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChevronDown = (
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
    <path d="M15.175 10.12a.5.5 0 0 1 .65.76l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 0 1 .65-.76L12 12.841l3.175-2.72Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDown);
const Memo = memo(ForwardRef);
export default Memo;
