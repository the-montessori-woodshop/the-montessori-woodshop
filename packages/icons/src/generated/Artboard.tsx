import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArtboard = (
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
    <path d="M15.5 7h-7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 7Zm0-1A2.5 2.5 0 0 1 18 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 15.5v-7A2.5 2.5 0 0 1 8.5 6h7ZM5 2.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H5V2.5ZM19 5h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0V5ZM5 19H2.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V19Zm14 0v2.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1H19Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArtboard);
const Memo = memo(ForwardRef);
export default Memo;
