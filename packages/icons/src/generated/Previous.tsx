import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrevious = (
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
    <path d="m10 8.342 7.424-5.037A1.65 1.65 0 0 1 20 4.67v14.66a1.65 1.65 0 0 1-2.576 1.365L10 15.658V18.5A2.5 2.5 0 0 1 7.5 21h-1A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3h1A2.5 2.5 0 0 1 10 5.5v2.842Zm0 6.107 7.985 5.419A.65.65 0 0 0 19 19.33V4.67a.65.65 0 0 0-1.015-.538L10 9.551v4.898ZM7.5 4h-1A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20h1A1.5 1.5 0 0 0 9 18.5v-13A1.5 1.5 0 0 0 7.5 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrevious);
const Memo = memo(ForwardRef);
export default Memo;
