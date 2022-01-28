import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClose = (
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
    <path d="m12 11.293 4.146-4.147a.5.5 0 0 1 .708.708L12.707 12l4.147 4.146a.5.5 0 0 1-.708.708L12 12.707l-4.146 4.147a.5.5 0 0 1-.708-.708L11.293 12 7.146 7.854a.5.5 0 1 1 .708-.708L12 11.293Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgClose);
const Memo = memo(ForwardRef);
export default Memo;
