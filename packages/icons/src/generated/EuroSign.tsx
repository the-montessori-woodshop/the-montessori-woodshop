import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEuroSign = (
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
    <path d="M8 11v2h4.5a.5.5 0 1 1 0 1H8.027a4.5 4.5 0 0 0 4.473 4h2c1.825 0 2.98-.577 3.553-1.724a.5.5 0 0 1 .894.448C18.187 18.244 16.675 19 14.5 19h-2a5.5 5.5 0 0 1-5.478-5H5.5a.5.5 0 1 1 0-1H7v-2H5.5a.5.5 0 1 1 0-1h1.522A5.5 5.5 0 0 1 12.5 5h2c2.175 0 3.687.756 4.447 2.276a.5.5 0 0 1-.894.448C17.48 6.577 16.325 6 14.5 6h-2a4.5 4.5 0 0 0-4.473 4H13.5a.5.5 0 1 1 0 1H8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEuroSign);
const Memo = memo(ForwardRef);
export default Memo;
