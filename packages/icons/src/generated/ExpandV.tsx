import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandV = (
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
    <path d="M12 6.707 8.854 9.854a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L13 6.707v10.586l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L12 17.293V6.707ZM5.5 21a.5.5 0 1 1 0-1h14a.5.5 0 1 1 0 1h-14Zm0-17a.5.5 0 0 1 0-1h14a.5.5 0 1 1 0 1h-14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpandV);
const Memo = memo(ForwardRef);
export default Memo;
