import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileExport = (
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
    <path d="M19.5 9a.5.5 0 0 1-.5-.5V7h-3.5a.5.5 0 0 1-.5-.5V3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 1 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h8.972a.49.49 0 0 1 .382.146l4 4a.49.49 0 0 1 .146.382V8.5a.5.5 0 0 1-.5.5Zm-1.207 4h-7.807a.5.5 0 1 1 0-1h7.807l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L18.293 13ZM16 3.707V6h2.293L16 3.707Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileExport);
const Memo = memo(ForwardRef);
export default Memo;
