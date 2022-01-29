import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBrush = (
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
    <path d="M5 12h14V5.5A1.5 1.5 0 0 0 17.5 4H16v2.5a.5.5 0 1 1-1 0V4h-5v1.5a.5.5 0 0 1-1 0V4H8v3.5a.5.5 0 0 1-1 0V4h-.5A1.5 1.5 0 0 0 5 5.5V12Zm0 1v.5A1.5 1.5 0 0 0 6.5 15h4a.5.5 0 0 1 .5.5V19a1 1 0 0 0 2 0v-3.5a.5.5 0 0 1 .5-.5h4a1.5 1.5 0 0 0 1.5-1.5V13H5Zm1.5 3A2.5 2.5 0 0 1 4 13.5v-8A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H14v3a2 2 0 1 1-4 0v-3H6.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBrush);
const Memo = memo(ForwardRef);
export default Memo;
