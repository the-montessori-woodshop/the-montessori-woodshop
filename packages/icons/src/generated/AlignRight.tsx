import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAlignRight = (
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
    <path d="M4 15.5v1A1.5 1.5 0 0 0 5.5 18h10a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-10A1.5 1.5 0 0 0 4 15.5Zm-1 0A2.5 2.5 0 0 1 5.5 13h10a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 3 16.5v-1Zm3-8A2.5 2.5 0 0 1 8.5 5h7A2.5 2.5 0 0 1 18 7.5v1a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 8.5v-1Zm1 0v1A1.5 1.5 0 0 0 8.5 10h7A1.5 1.5 0 0 0 17 8.5v-1A1.5 1.5 0 0 0 15.5 6h-7A1.5 1.5 0 0 0 7 7.5Zm13-4a.5.5 0 1 1 1 0v17a.5.5 0 1 1-1 0v-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAlignRight);
const Memo = memo(ForwardRef);
export default Memo;
