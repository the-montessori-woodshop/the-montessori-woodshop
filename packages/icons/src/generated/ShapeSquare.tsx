import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeSquare = (
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
    <path d="M18 20H6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm0-1a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1H6a1 1 0 0 1-1 1v12a1 1 0 0 1 1 1h12ZM4 4v1h1V4H4Zm0 15v1h1v-1H4ZM19 4v1h1V4h-1Zm0 15v1h1v-1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeSquare);
const Memo = memo(ForwardRef);
export default Memo;
