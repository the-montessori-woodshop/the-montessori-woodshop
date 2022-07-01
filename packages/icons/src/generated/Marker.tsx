import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMarker = (
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
    <path d="m7.779 18.486-2.265-2.265a6.329 6.329 0 0 0-1.505 3.77 6.329 6.329 0 0 0 3.77-1.505ZM6.207 15.5 8.5 17.793 19.798 6.495a.7.7 0 0 0 0-.99l-1.303-1.303a.7.7 0 0 0-.99 0L6.207 15.5Zm8.585-10a1.9 1.9 0 0 0-2.636.05L8.854 8.855a.5.5 0 1 1-.708-.708l3.303-3.302a2.9 2.9 0 0 1 4.05-.05l1.299-1.299a1.7 1.7 0 0 1 2.404 0l1.303 1.303a1.7 1.7 0 0 1 0 2.404L8.854 18.854A7.328 7.328 0 0 1 3.672 21H3.5a.5.5 0 0 1-.5-.5v-.172c0-1.943.772-3.807 2.146-5.182l9.646-9.645Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMarker);
const Memo = memo(ForwardRef);
export default Memo;
