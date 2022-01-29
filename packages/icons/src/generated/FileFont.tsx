import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileFont = (
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
    <path d="M20 6.529v12.972a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-15a2.5 2.5 0 0 1 2.5-2.5h8.972a.49.49 0 0 1 .382.146l4 4A.49.49 0 0 1 20 6.53Zm-5-3.528H6.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-12.5h-3.5a.5.5 0 0 1-.5-.5v-3.5Zm1 .707v2.293h2.293L16 3.708ZM11 11v6h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h.5v-6H8v.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0V11h-2Zm4 3v3.5a.5.5 0 1 1-1 0V14h-1.5a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1H15Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileFont);
const Memo = memo(ForwardRef);
export default Memo;
