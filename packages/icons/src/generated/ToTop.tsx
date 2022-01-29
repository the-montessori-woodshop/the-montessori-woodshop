import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgToTop = (
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
    <path d="M4 7v11.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V7H4Zm0-1h16v-.5A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5V6Zm17 12.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13ZM9.812 11.89a.5.5 0 1 1-.624-.78l2.5-2a.5.5 0 0 1 .624 0l2.5 2a.5.5 0 1 1-.624.78L12 10.14l-2.188 1.75Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgToTop);
const Memo = memo(ForwardRef);
export default Memo;
