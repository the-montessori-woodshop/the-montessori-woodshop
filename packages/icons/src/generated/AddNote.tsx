import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAddNote = (
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
    <path d="M13.5 20a1.5 1.5 0 0 0 1.5-1.5 2.5 2.5 0 0 1 2.5-2.5 1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 1 1 1 0v3a6.5 6.5 0 0 1-6.5 6.5h-7A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3h6a.5.5 0 1 1 0 1h-6A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20h7Zm2.291-.499a5.521 5.521 0 0 0 2.71-2.71A2.492 2.492 0 0 1 17.5 17a1.5 1.5 0 0 0-1.5 1.5c0 .356-.074.695-.209 1.001ZM18 6h2.5a.5.5 0 1 1 0 1H18v2.5a.5.5 0 1 1-1 0V7h-2.5a.5.5 0 1 1 0-1H17V3.5a.5.5 0 1 1 1 0V6ZM8.5 9a.5.5 0 0 1 0-1h4a.5.5 0 1 1 0 1h-4Zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAddNote);
const Memo = memo(ForwardRef);
export default Memo;
