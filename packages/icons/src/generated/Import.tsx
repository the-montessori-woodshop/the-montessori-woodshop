import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImport = (
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
    <path d="m13 14.293 2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L12 14.293V3.5a.5.5 0 1 1 1 0v10.793ZM18.5 6a.5.5 0 1 1 0-1h1A2.5 2.5 0 0 1 22 7.5v10a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 3 17.5v-10A2.5 2.5 0 0 1 5.5 5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 4 7.5v10A1.5 1.5 0 0 0 5.5 19h14a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 19.5 6h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgImport);
const Memo = memo(ForwardRef);
export default Memo;
