import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgResize = (
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
    <path d="M19.5 21a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-8a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h8ZM5 20.293l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 20.293V7.5a.5.5 0 0 1 1 0v12.793ZM20.293 4l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L20.293 5H7.5a.5.5 0 0 1 0-1h12.793ZM19.5 22h-8A2.5 2.5 0 0 1 9 19.5v-8A2.5 2.5 0 0 1 11.5 9h8a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgResize);
const Memo = memo(ForwardRef);
export default Memo;
