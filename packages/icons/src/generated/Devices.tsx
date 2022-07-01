import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDevices = (
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
    <path d="M14 18H4.5A2.5 2.5 0 0 1 2 15.5a.5.5 0 0 1 .5-.5H4V6.489a2.5 2.5 0 0 1 2.5-2.5h11.009a2.5 2.5 0 0 1 2.5 2.5V8h.491A1.5 1.5 0 0 1 22 9.5v10.01a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5V18Zm0-1v-1H3.085A1.5 1.5 0 0 0 4.5 17H14Zm0-2v-1H6.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8h1.009V6.489a1.5 1.5 0 0 0-1.5-1.5H6.5a1.5 1.5 0 0 0-1.5 1.5V15h9Zm0-2V9.5A1.5 1.5 0 0 1 15.5 8H17V7H7v6h7Zm1.5-4a.5.5 0 0 0-.5.5v10.01a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V9.5a.5.5 0 0 0-.5-.5h-5Zm2 10a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDevices);
const Memo = memo(ForwardRef);
export default Memo;
