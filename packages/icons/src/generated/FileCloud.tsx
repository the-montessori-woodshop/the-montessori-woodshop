import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileCloud = (
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
    <path d="M20 6.528V19.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h8.972a.49.49 0 0 1 .382.146l4 4a.49.49 0 0 1 .146.382ZM15 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7h-3.5a.5.5 0 0 1-.5-.5V3Zm1 .707V6h2.293L16 3.707ZM8 13a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.45 2h.564a2.5 2.5 0 0 1 0 5H9a2 2 0 0 1-2-2v-.5a1.5 1.5 0 0 1 1-1.415V13Zm1 .5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a1 1 0 0 0 1 1h5.514a1.5 1.5 0 0 0 0-3H13.5a.5.5 0 0 1-.5-.5 1.5 1.5 0 0 0-1.5-1.5H11a2 2 0 0 0-2 2v.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileCloud);
const Memo = memo(ForwardRef);
export default Memo;
