import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFontWidth = (
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
    <path d="M13 13h1.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1H12V5H5v1.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0V5h-7v8Zm-7.293 5h13.586l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L19.293 19H5.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L5.707 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFontWidth);
const Memo = memo(ForwardRef);
export default Memo;
