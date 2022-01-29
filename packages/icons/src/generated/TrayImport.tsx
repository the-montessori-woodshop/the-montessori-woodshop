import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTrayImport = (
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
    <path d="m16 9.293 1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L15 9.293V3.5a.5.5 0 1 1 1 0v5.793ZM4 15h5.5a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5H20V8.5a.5.5 0 1 1 1 0v10a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h5a.5.5 0 1 1 0 1h-5A1.5 1.5 0 0 0 4 5.5V15Zm0 1v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16h-5.05a2.5 2.5 0 0 1-2.45 2h-1a2.5 2.5 0 0 1-2.45-2H4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTrayImport);
const Memo = memo(ForwardRef);
export default Memo;
