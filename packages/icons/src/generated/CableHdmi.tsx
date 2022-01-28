import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableHdmi = (
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
    <path d="M17 6h.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.243.429l-2.341 1.405-.442 1.324A.5.5 0 0 1 14.5 16H14v5.5a.5.5 0 1 1-1 0V16h-2v5.5a.5.5 0 1 1-1 0V16h-.5a.5.5 0 0 1-.474-.342l-.442-1.324-2.341-1.405A.5.5 0 0 1 6 12.5v-6a.5.5 0 0 1 .5-.5H7V2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V6Zm-1 0V3H8v3h8Zm-1.86 9 .386-1.158a.5.5 0 0 1 .217-.27L17 12.216V7H7v5.217l2.257 1.354a.5.5 0 0 1 .217.27L9.86 15h4.28ZM9 4h1v1H9V4Zm5 0h1v1h-1V4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableHdmi);
const Memo = memo(ForwardRef);
export default Memo;
