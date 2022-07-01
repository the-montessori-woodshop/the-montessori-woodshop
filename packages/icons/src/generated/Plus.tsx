import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlus = (
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
    <path d="M13 12h5.5a.5.5 0 1 1 0 1H13v5.5a.5.5 0 1 1-1 0V13H6.5a.5.5 0 1 1 0-1H12V6.5a.5.5 0 1 1 1 0V12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPlus);
const Memo = memo(ForwardRef);
export default Memo;
