import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScript = (
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
    <path d="M18 18V4.5A1.5 1.5 0 0 0 16.5 3H5.732c.17.294.268.636.268 1v16a1 1 0 0 0 2 0v-1.5a.5.5 0 0 1 .5-.5H18Zm1 0h2.5a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5H7a2 2 0 0 1-2-2V6H4a2 2 0 1 1 0-4h12.5A2.5 2.5 0 0 1 19 4.5V18ZM9 19v1c0 .364-.097.706-.268 1H19.5a1.5 1.5 0 0 0 1.5-1.5V19H9ZM5 5V4a1 1 0 1 0-1 1h1Zm3.5 2a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgScript);
const Memo = memo(ForwardRef);
export default Memo;
