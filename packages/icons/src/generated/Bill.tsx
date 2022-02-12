import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBill = (
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
    <path d="M12 7h.5A1.5 1.5 0 0 1 14 8.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H12v.5a.5.5 0 1 1-1 0V14h-1v.5a.5.5 0 1 1-1 0V14h-.5A1.5 1.5 0 0 1 7 12.5a.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4A1.5 1.5 0 0 1 7 9.5v-1A1.5 1.5 0 0 1 8.5 7H9v-.5a.5.5 0 0 1 1 0V7h1v-.5a.5.5 0 1 1 1 0V7Zm5 10V5.5A1.5 1.5 0 0 0 15.5 4h-10A1.5 1.5 0 0 0 4 5.5V19a1 1 0 0 0 2 0v-1.5a.5.5 0 0 1 .5-.5H17Zm1 0h2.5a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5H5a2 2 0 0 1-2-2V5.5A2.5 2.5 0 0 1 5.5 3h10A2.5 2.5 0 0 1 18 5.5V17Zm.5 3a1.5 1.5 0 0 0 1.5-1.5V18H7v1c0 .364-.097.706-.268 1H18.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBill);
const Memo = memo(ForwardRef);
export default Memo;
