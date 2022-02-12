import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeSphere = (
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
    <path d="M3.217 13.972a9.003 9.003 0 0 0 17.566 0C19.085 15.22 15.782 16 12 16c-3.782 0-7.085-.78-8.783-2.028Zm0-3.944C4.915 8.78 8.218 8 12 8c3.782 0 7.085.78 8.783 2.028a9.003 9.003 0 0 0-17.566 0ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-7c4.985 0 9-1.48 9-3s-4.015-3-9-3-9 1.48-9 3 4.015 3 9 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeSphere);
const Memo = memo(ForwardRef);
export default Memo;
