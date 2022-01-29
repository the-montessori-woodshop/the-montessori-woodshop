import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNext = (
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
    <path d="M14 9.55 6.015 4.133A.65.65 0 0 0 5 4.67v14.66a.65.65 0 0 0 1.015.538L14 14.449V9.551Zm0 6.108-7.424 5.037A1.65 1.65 0 0 1 4 19.33V4.67a1.65 1.65 0 0 1 2.576-1.365L14 8.342V5.5A2.5 2.5 0 0 1 16.5 3h1A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-2.842ZM16.5 4A1.5 1.5 0 0 0 15 5.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 17.5 4h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgNext);
const Memo = memo(ForwardRef);
export default Memo;
