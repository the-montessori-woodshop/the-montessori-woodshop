import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditSquare = (
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
    <path d="M20 11.5a.5.5 0 1 1 1 0v7a2.5 2.5 0 0 1-2.5 2.5H5.486a2.5 2.5 0 0 1-2.5-2.5v-13a2.5 2.5 0 0 1 2.5-2.5H12.5a.5.5 0 1 1 0 1H5.486a1.5 1.5 0 0 0-1.5 1.5v13a1.5 1.5 0 0 0 1.5 1.5H18.5a1.5 1.5 0 0 0 1.5-1.5v-7Zm-1.146-8.354 2 2a.5.5 0 0 1 0 .708l-8 8A.5.5 0 0 1 12.5 14h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354l8-8a.5.5 0 0 1 .708 0ZM18.5 4.207l-7.5 7.5V13h1.293l7.5-7.5L18.5 4.207Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEditSquare);
const Memo = memo(ForwardRef);
export default Memo;
