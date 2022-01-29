import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPriceTag = (
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
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h6a.5.5 0 0 1 .354.146l8.302 8.303a2.9 2.9 0 0 1 0 4.102l-4.605 4.605a2.9 2.9 0 0 1-4.102 0l-8.303-8.302A.5.5 0 0 1 3 11.5v-6ZM11.293 4H5.5A1.5 1.5 0 0 0 4 5.5v5.793l8.156 8.156a1.9 1.9 0 0 0 2.688 0l4.605-4.605a1.9 1.9 0 0 0 0-2.688L11.293 4ZM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPriceTag);
const Memo = memo(ForwardRef);
export default Memo;
