import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScreenFlow = (
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
    <path d="m17.293 11-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L17.293 12H6.5a.5.5 0 1 1 0-1h10.793Zm-7.282 6.5a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5H4.5A2.5 2.5 0 0 1 2 17.5v-10A2.5 2.5 0 0 1 4.5 5h4.011a2.5 2.5 0 0 1 2.5 2.5.5.5 0 0 1-1 0 1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 7.5v10A1.5 1.5 0 0 0 4.5 19h4.011a1.5 1.5 0 0 0 1.5-1.5ZM5.5 18a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2ZM14 7.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 1 15.5 5h4.011a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H15.5a2.5 2.5 0 0 1-2.5-2.5.5.5 0 1 1 1 0 1.5 1.5 0 0 0 1.5 1.5h4.011a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-1.5-1.5H15.5A1.5 1.5 0 0 0 14 7.5ZM16.5 18a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgScreenFlow);
const Memo = memo(ForwardRef);
export default Memo;
