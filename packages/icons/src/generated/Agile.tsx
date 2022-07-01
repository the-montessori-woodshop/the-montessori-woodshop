import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAgile = (
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
    <path d="M15.317 20H20.5a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1H11.999a5 5 0 1 0-3-9H10.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v2.028a5.996 5.996 0 0 1 5.23-1.401A3.137 3.137 0 0 1 13 8a3 3 0 0 1 3-3h.293l-.147-.146a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708L16.293 6H16a2 2 0 0 0-2 2c0 .561.33 1.273.752 1.666A6 6 0 0 1 15.317 20Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAgile);
const Memo = memo(ForwardRef);
export default Memo;
