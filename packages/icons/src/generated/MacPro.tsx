import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMacPro = (
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
    <path d="M18 19V5H6v14h12Zm0 1H6v.5A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5V20Zm0-16v-.5A1.5 1.5 0 0 0 16.5 2h-9A1.5 1.5 0 0 0 6 3.5V4h12ZM7.5 1h9A2.5 2.5 0 0 1 19 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 20.5v-17A2.5 2.5 0 0 1 7.5 1Zm0 6a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9Zm0 2a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9Zm0 9a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm0-2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm.5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMacPro);
const Memo = memo(ForwardRef);
export default Memo;
