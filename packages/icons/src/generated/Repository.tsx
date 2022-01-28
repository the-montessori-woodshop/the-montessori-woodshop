import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRepository = (
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
    <path d="M18.5 3A2.5 2.5 0 0 1 21 5.5v13.007a2.5 2.5 0 0 1-2.5 2.5l-13.007.001a2.5 2.5 0 0 1-2.5-2.5L3 5.5A2.5 2.5 0 0 1 5.467 3L18.5 3ZM5.53 4C4.671 4 4 4.672 4 5.5l-.007 13.007c0 .83.671 1.501 1.5 1.501H18.5a1.5 1.5 0 0 0 1.5-1.5V5.5A1.5 1.5 0 0 0 18.5 4H5.53Zm4.36 10.188a.5.5 0 1 1-.78.624l-2-2.5a.5.5 0 0 1 0-.624l2-2.5a.5.5 0 1 1 .78.624L8.14 12l1.75 2.188Zm4.22-4.376a.5.5 0 1 1 .78-.624l2 2.5a.5.5 0 0 1 0 .624l-2 2.5a.5.5 0 1 1-.78-.624L15.86 12l-1.75-2.188Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRepository);
const Memo = memo(ForwardRef);
export default Memo;
