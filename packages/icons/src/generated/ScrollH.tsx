import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScrollH = (
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
    <path d="M9.293 7H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6h5.586L8.146 4.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L9.293 7ZM14 9.5v2.547a1.415 1.415 0 0 1-2.32 1.087l-.924-.77A1.572 1.572 0 0 0 9.75 12a.693.693 0 0 0-.625.393l-.035.074a.797.797 0 0 0 .104.854l4.414 5.32A3.758 3.758 0 0 0 16.5 20a4.5 4.5 0 0 0 4.5-4.5v-4a.5.5 0 1 0-1 0v1a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-3a.5.5 0 1 0-1 0v3a.5.5 0 1 1-1 0v-7a.5.5 0 1 0-1 0v4Zm-1 0v-4a1.5 1.5 0 0 1 3 0v2.585a1.5 1.5 0 0 1 1.947 1.02 1.5 1.5 0 0 1 2 1A1.5 1.5 0 0 1 22 11.5v4a5.5 5.5 0 0 1-5.5 5.5 4.758 4.758 0 0 1-3.662-1.72l-4.413-5.32a1.797 1.797 0 0 1-.236-1.927l.035-.074A1.693 1.693 0 0 1 9.75 11c.602 0 1.184.21 1.646.596l.924.77a.415.415 0 0 0 .68-.319V9.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgScrollH);
const Memo = memo(ForwardRef);
export default Memo;