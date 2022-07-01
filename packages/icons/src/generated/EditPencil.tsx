import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditPencil = (
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
    <path d="m7.293 18 11.5-11.5L16.5 4.207 5 15.707V18h2.293ZM4 18.5v-3a.5.5 0 0 1 .146-.354l12-12a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-12 12A.5.5 0 0 1 7.5 19h-3a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 1 1 0-1h10.007a.5.5 0 1 1 0 1H4.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEditPencil);
const Memo = memo(ForwardRef);
export default Memo;
