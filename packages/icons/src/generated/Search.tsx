import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSearch = (
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
    <path d="m17 16.292 3.854 3.854a.5.5 0 0 1-.708.708l-3.854-3.855a8 8 0 1 1 .707-.707ZM11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSearch);
const Memo = memo(ForwardRef);
export default Memo;
