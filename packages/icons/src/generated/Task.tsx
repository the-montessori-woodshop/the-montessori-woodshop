import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTask = (
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
    <g fill="#000" fillRule="nonzero">
      <path d="M10 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM6.5 4a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 5 6.5v12A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 17.5 5a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 20 6.5v12a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-12A2.5 2.5 0 0 1 6.5 4Z" />
      <path d="M15.146 9.146a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 4.646-4.647Z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgTask);
const Memo = memo(ForwardRef);
export default Memo;
