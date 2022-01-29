import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRulerH = (
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
    <path d="M20 9.085V12.5a.5.5 0 1 1-1 0V9h-2v2.5a.5.5 0 1 1-1 0V9h-2v3.5a.5.5 0 1 1-1 0V9h-2v2.5a.5.5 0 1 1-1 0V9H8v3.5a.5.5 0 1 1-1 0V9H5v2.5a.5.5 0 1 1-1 0V9.085A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15h15a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1-1.415ZM2 10.5A2.5 2.5 0 0 1 4.5 8h15a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 13.5v-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRulerH);
const Memo = memo(ForwardRef);
export default Memo;
