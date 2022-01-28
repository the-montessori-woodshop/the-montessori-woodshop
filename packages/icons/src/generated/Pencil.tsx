import * as React from "react";
import { Ref, SVGProps, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPencil = (
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
    <path d="M15.5 6.207 4 17.707V20h2.293l11.5-11.5L15.5 6.207Zm.707-.707L18.5 7.793 19.793 6.5 17.5 4.207 16.207 5.5ZM3 20.5v-3a.5.5 0 0 1 .146-.354l14-14a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-14 14A.5.5 0 0 1 6.5 21h-3a.5.5 0 0 1-.5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPencil);
const Memo = memo(ForwardRef);
export default Memo;
