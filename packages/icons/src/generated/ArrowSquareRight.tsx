import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowSquareRight = (
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
    <path d="m16.293 12-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L16.293 13H7.5a.5.5 0 1 1 0-1h8.793Zm3.207 9a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 19.5 4H5.493a1.5 1.5 0 0 0-1.5 1.5L4 19.5A1.5 1.5 0 0 0 5.5 21h14ZM3 19.5l-.007-14a2.5 2.5 0 0 1 2.5-2.5H19.5A2.5 2.5 0 0 1 22 5.5v14a2.5 2.5 0 0 1-2.5 2.5h-14A2.508 2.508 0 0 1 3 19.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowSquareRight);
const Memo = memo(ForwardRef);
export default Memo;
