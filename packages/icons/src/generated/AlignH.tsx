import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlignH = (
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
    <path d="M11 12h2V8.5A2.5 2.5 0 0 1 15.5 6h1A2.5 2.5 0 0 1 19 8.5V12h1.5a.5.5 0 1 1 0 1H19v3.5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5V13h-2v5.5A2.5 2.5 0 0 1 8.5 21h-1A2.5 2.5 0 0 1 5 18.5V13H3.5a.5.5 0 1 1 0-1H5V6.5A2.5 2.5 0 0 1 7.5 4h1A2.5 2.5 0 0 1 11 6.5V12Zm4.5-5A1.5 1.5 0 0 0 14 8.5v8a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 7h-1Zm-8-2A1.5 1.5 0 0 0 6 6.5v12A1.5 1.5 0 0 0 7.5 20h1a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 8.5 5h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAlignH);
const Memo = memo(ForwardRef);
export default Memo;
