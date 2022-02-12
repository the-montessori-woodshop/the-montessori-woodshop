import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIphoneXH = (
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
    <path d="M21 8.5A1.5 1.5 0 0 0 19.5 7h-15A1.5 1.5 0 0 0 3 8.5v7.011a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V15.5a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 20.5 9a.5.5 0 0 0 .5-.5Zm0 1.415a1.498 1.498 0 0 1-.5.085.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5c.175 0 .344.03.5.085v-4.17ZM19.5 6A2.5 2.5 0 0 1 22 8.5v7.011a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V8.5A2.5 2.5 0 0 1 4.5 6h15Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIphoneXH);
const Memo = memo(ForwardRef);
export default Memo;
