import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserFlow = (
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
    <path d="M14.49 8.63 17 10.5a2.5 2.5 0 0 1 .986 1.74A8.521 8.521 0 0 1 20 12h.293l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L20.293 13H20a7.5 7.5 0 0 0-7.5 7.5.5.5 0 1 1-1 0A7.5 7.5 0 0 0 4 13h-.293l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 12H4c.694 0 1.368.083 2.014.24A2.5 2.5 0 0 1 7 10.5l2.504-1.874a4 4 0 1 1 4.986.004Zm-.93.554A3.987 3.987 0 0 1 12 9.5a3.987 3.987 0 0 1-1.568-.319L7.6 11.3a1.5 1.5 0 0 0-.6 1.2c0 .015 0 .03-.002.044A8.525 8.525 0 0 1 12 17.62a8.525 8.525 0 0 1 5.002-5.077A.507.507 0 0 1 17 12.5a1.5 1.5 0 0 0-.599-1.2l-2.84-2.116ZM12 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserFlow);
const Memo = memo(ForwardRef);
export default Memo;
