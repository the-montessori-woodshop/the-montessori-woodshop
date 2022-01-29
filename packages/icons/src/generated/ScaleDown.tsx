import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScaleDown = (
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
    <path d="M13.707 11H16.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.793l4.146-4.147a.5.5 0 0 1 .708.708L13.707 11ZM4.5 13a.5.5 0 1 1 0 1 .5.5 0 0 0-.5.5.5.5 0 1 1-1 0A1.5 1.5 0 0 1 4.5 13Zm5 1a.5.5 0 1 1 0-1 1.5 1.5 0 0 1 1.5 1.5.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5Zm.5 5.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 1 9.5 21a.5.5 0 1 1 0-1 .5.5 0 0 0 .5-.5Zm-7 0a.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5.5.5 0 1 1 0 1A1.5 1.5 0 0 1 3 19.5Zm0-3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm8 .5v.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 18.5 4h-9A1.5 1.5 0 0 0 8 5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 1 1 0-1H7V5.5A2.5 2.5 0 0 1 9.5 3h9A2.5 2.5 0 0 1 21 5.5v9a2.5 2.5 0 0 1-2.5 2.5H11Zm-4.5 4a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgScaleDown);
const Memo = memo(ForwardRef);
export default Memo;
