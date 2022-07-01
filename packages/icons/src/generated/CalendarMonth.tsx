import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCalendarMonth = (
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
    <path d="M19 10.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5v-7a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5ZM18 17H6v.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V17Zm0-1v-1H6v1h12ZM6 14h12v-1H6v1Zm12-2v-1H6v1h12Zm-2-8H8v.5a.5.5 0 0 1-1 0V4H5.5A1.5 1.5 0 0 0 4 5.5V8h16V5.5A1.5 1.5 0 0 0 18.5 4H17v.5a.5.5 0 1 1-1 0V4Zm1-1h1.5A2.5 2.5 0 0 1 21 5.5v13.007a2.5 2.5 0 0 1-2.5 2.5h-13a2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 5.5 3H7v-.5a.5.5 0 0 1 1 0V3h8v-.5a.5.5 0 1 1 1 0V3Zm3 6H4v9.507a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCalendarMonth);
const Memo = memo(ForwardRef);
export default Memo;
