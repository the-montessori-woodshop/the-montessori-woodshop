import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMinusCircle = (
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
    <path d="M12.5 23C6.701 23 2 18.299 2 12.5S6.701 2 12.5 2 23 6.701 23 12.5 18.299 23 12.5 23Zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Zm-4-9a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMinusCircle);
const Memo = memo(ForwardRef);
export default Memo;
