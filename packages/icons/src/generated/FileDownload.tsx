import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileDownload = (
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
    <path d="M20 6.528V19.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h8.972a.49.49 0 0 1 .382.146l4 4a.49.49 0 0 1 .146.382ZM15 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7h-3.5a.5.5 0 0 1-.5-.5V3Zm1 .707V6h2.293L16 3.707Zm-4 12.586 2.146-2.147a.5.5 0 0 1 .708.708l-2.934 2.933a.5.5 0 0 1-.84 0l-2.934-2.933a.5.5 0 0 1 .708-.708L11 16.293V9.5a.5.5 0 1 1 1 0v6.793Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileDownload);
const Memo = memo(ForwardRef);
export default Memo;
