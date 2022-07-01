import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindow = (
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
    <path d="M21.007 18.508a2.5 2.5 0 0 1-2.5 2.5H5.5a2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 5.5 3h13.007a2.5 2.5 0 0 1 2.5 2.5v13.008ZM20.007 7V5.5a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 0 4 5.5V7h16.007Zm0 1H4v10.508a1.5 1.5 0 0 0 1.5 1.5h13.007a1.5 1.5 0 0 0 1.5-1.5V8ZM5 5h1v1H5V5Zm2 0h1v1H7V5Zm2 0h1v1H9V5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindow);
const Memo = memo(ForwardRef);
export default Memo;
