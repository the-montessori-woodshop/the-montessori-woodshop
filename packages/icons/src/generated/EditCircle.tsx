import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditCircle = (
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
    <path d="m12.5 10.207-4.5 4.5V16h1.293l4.5-4.5-1.293-1.293Zm.707-.707 1.293 1.293L15.793 9.5 14.5 8.207 13.207 9.5ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.854-13.854 2 2a.5.5 0 0 1 0 .708l-7 7A.5.5 0 0 1 9.5 17h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354l7-7a.5.5 0 0 1 .708 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEditCircle);
const Memo = memo(ForwardRef);
export default Memo;
