import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPause = (
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
    <path d="M7.5 4A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 8.5 4h-1Zm0-1h1A2.5 2.5 0 0 1 11 5.5v13A2.5 2.5 0 0 1 8.5 21h-1A2.5 2.5 0 0 1 5 18.5v-13A2.5 2.5 0 0 1 7.5 3Zm8 0h1A2.5 2.5 0 0 1 19 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-13A2.5 2.5 0 0 1 15.5 3Zm0 1A1.5 1.5 0 0 0 14 5.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 4h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPause);
const Memo = memo(ForwardRef);
export default Memo;
