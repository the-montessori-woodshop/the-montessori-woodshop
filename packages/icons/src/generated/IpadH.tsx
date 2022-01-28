import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIpadH = (
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
    <path d="M4.5 19h15a1.5 1.5 0 0 0 1.5-1.5V6.489a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5V17.5A1.5 1.5 0 0 0 4.5 19Zm0 1A2.5 2.5 0 0 1 2 17.5V6.489a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15ZM19 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-14 .5a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIpadH);
const Memo = memo(ForwardRef);
export default Memo;
