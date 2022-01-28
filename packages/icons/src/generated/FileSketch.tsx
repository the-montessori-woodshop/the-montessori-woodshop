import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileSketch = (
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
    <path d="M20 6.529v12.972a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-15a2.5 2.5 0 0 1 2.5-2.5h8.972a.49.49 0 0 1 .382.146l4 4A.49.49 0 0 1 20 6.53Zm-5-3.528H6.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-12.5h-3.5a.5.5 0 0 1-.5-.5v-3.5Zm1 .707v2.293h2.293L16 3.708ZM9.5 9h5a.5.5 0 0 1 .416.223l2 3a.5.5 0 0 1-.044.611l-4.5 5a.5.5 0 0 1-.744 0l-4.5-5a.5.5 0 0 1-.044-.611l2-3A.5.5 0 0 1 9.5 9Zm.268 1L8.13 12.454 12 16.753l3.869-4.299L14.232 10H9.768Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileSketch);
const Memo = memo(ForwardRef);
export default Memo;
