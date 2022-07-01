import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeCylinder = (
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
    <path d="M5 19.5v-15C5 2.96 8.122 2 12 2s7 .96 7 2.5v15c0 1.54-3.122 2.5-7 2.5s-7-.96-7-2.5Zm1-1.36C7.223 17.416 9.448 17 12 17s4.777.416 6 1.14V5.86C16.777 6.584 14.552 7 12 7s-4.777-.416-6-1.14v12.28ZM12 6c3.302 0 6-.83 6-1.5S15.302 3 12 3s-6 .83-6 1.5S8.698 6 12 6Zm0 15c3.302 0 6-.83 6-1.5S15.302 18 12 18s-6 .83-6 1.5S8.698 21 12 21Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeCylinder);
const Memo = memo(ForwardRef);
export default Memo;
