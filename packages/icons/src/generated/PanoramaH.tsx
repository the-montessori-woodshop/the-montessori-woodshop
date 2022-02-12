import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPanoramaH = (
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
    <path d="M3 6.258v11.494a24.457 24.457 0 0 1 18 0V6.258a23.78 23.78 0 0 1-18 0Zm-.296-1.214a22.78 22.78 0 0 0 18.592 0A.5.5 0 0 1 22 5.5v13a.5.5 0 0 1-.698.459 23.457 23.457 0 0 0-18.604 0A.5.5 0 0 1 2 18.5v-13a.5.5 0 0 1 .704-.456Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPanoramaH);
const Memo = memo(ForwardRef);
export default Memo;
