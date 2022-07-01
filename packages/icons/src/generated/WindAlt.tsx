import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindAlt = (
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
    <path d="M10.5 7a.5.5 0 1 1 0-1H12a2 2 0 1 1 0 4H5.5a.5.5 0 0 1 0-1H12a1 1 0 0 0 0-2h-1.5Zm6 0a.5.5 0 1 1 0-1h1a3.5 3.5 0 0 1 0 7h-14a.5.5 0 1 1 0-1h14a2.5 2.5 0 1 0 0-5h-1Zm-9 9a.5.5 0 1 1 0-1H15a2 2 0 1 1 0 4h-1.5a.5.5 0 1 1 0-1H15a1 1 0 0 0 0-2H7.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindAlt);
const Memo = memo(ForwardRef);
export default Memo;
