import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUnderline = (
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
    <path d="M8 6v6a4 4 0 1 0 8 0V6h-.5a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1H17v6a5 5 0 0 1-10 0V6h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H8Zm-.5 13a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUnderline);
const Memo = memo(ForwardRef);
export default Memo;
