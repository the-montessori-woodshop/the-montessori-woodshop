import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBatteryV = (
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
    <path d="M9 5.05V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5v.55a2.5 2.5 0 0 1 2 2.45v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 18.5v-11a2.5 2.5 0 0 1 2-2.45ZM14 5v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V5h4ZM9.5 6A1.5 1.5 0 0 0 8 7.5v11A1.5 1.5 0 0 0 9.5 20h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 14.5 6h-5Zm1 7a.5.5 0 0 1-.416-.777l2-3a.5.5 0 1 1 .832.554L11.434 12H13.5a.5.5 0 0 1 .416.777l-2 3a.5.5 0 1 1-.832-.554L12.566 13H10.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBatteryV);
const Memo = memo(ForwardRef);
export default Memo;
