import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowCircleRight = (
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
    <path d="m16.293 12-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L16.293 13H7.5a.5.5 0 1 1 0-1h8.793ZM12.5 22a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19Zm0-1a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowCircleRight);
const Memo = memo(ForwardRef);
export default Memo;
