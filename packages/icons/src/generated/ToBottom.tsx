import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgToBottom = (
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
    <path d="M20 17V5.5A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5V17h16Zm0 1H4v.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V18ZM3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm9 8.36 2.188-1.75a.5.5 0 1 1 .624.78l-2.5 2a.5.5 0 0 1-.624 0l-2.5-2a.5.5 0 1 1 .624-.78L12 13.86Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgToBottom);
const Memo = memo(ForwardRef);
export default Memo;
