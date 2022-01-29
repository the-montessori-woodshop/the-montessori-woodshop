import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBatteryMid = (
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
    <path d="M19 10v4h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H19Zm-.05 5a2.5 2.5 0 0 1-2.45 2h-11A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7h11a2.5 2.5 0 0 1 2.45 2h.55a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-.55ZM18 9.5A1.5 1.5 0 0 0 16.5 8h-11A1.5 1.5 0 0 0 4 9.5v5A1.5 1.5 0 0 0 5.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-5Zm-13 1A1.5 1.5 0 0 1 6.5 9h5.234a1.5 1.5 0 0 1 1.286 2.272l-1.8 3A1.5 1.5 0 0 1 9.934 15H6.5A1.5 1.5 0 0 1 5 13.5v-3Zm1 0v3a.5.5 0 0 0 .5.5h3.434a.5.5 0 0 0 .429-.243l1.8-3a.5.5 0 0 0-.43-.757H6.5a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBatteryMid);
const Memo = memo(ForwardRef);
export default Memo;
