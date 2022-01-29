import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandH = (
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
    <path d="M17.293 12H6.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L6.707 11h10.586l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L17.293 12ZM20 3.5a.5.5 0 1 1 1 0v16a.5.5 0 1 1-1 0v-16Zm-17 0a.5.5 0 0 1 1 0v16a.5.5 0 1 1-1 0v-16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpandH);
const Memo = memo(ForwardRef);
export default Memo;
