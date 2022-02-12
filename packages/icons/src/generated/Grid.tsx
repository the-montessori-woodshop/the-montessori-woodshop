import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGrid = (
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
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h3A2.5 2.5 0 0 1 11 5.5v3A2.5 2.5 0 0 1 8.5 11h-3A2.5 2.5 0 0 1 3 8.5v-3Zm1 0v3A1.5 1.5 0 0 0 5.5 10h3A1.5 1.5 0 0 0 10 8.5v-3A1.5 1.5 0 0 0 8.5 4h-3A1.5 1.5 0 0 0 4 5.5Zm9 0A2.5 2.5 0 0 1 15.5 3h3A2.5 2.5 0 0 1 21 5.5v3a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 13 8.5v-3Zm1 0v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 20 8.5v-3A1.5 1.5 0 0 0 18.5 4h-3A1.5 1.5 0 0 0 14 5.5Zm-11 10A2.5 2.5 0 0 1 5.5 13h3a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 21h-3A2.5 2.5 0 0 1 3 18.5v-3Zm1 0v3A1.5 1.5 0 0 0 5.5 20h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 8.5 14h-3A1.5 1.5 0 0 0 4 15.5Zm9 0a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3Zm1 0v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGrid);
const Memo = memo(ForwardRef);
export default Memo;
