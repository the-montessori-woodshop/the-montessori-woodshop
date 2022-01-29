import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgItalic = (
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
    <path d="M13.49 5h2.01a.5.5 0 1 1 0 1h-1.602l-2.77 12H12.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h1.602l2.77-12H11.5a.5.5 0 1 1 0-1h1.99Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgItalic);
const Memo = memo(ForwardRef);
export default Memo;
