import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMapMarker = (
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
    <path d="M12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.34 7.867a.5.5 0 0 1-.68 0C7.236 16.782 5 13.172 5 10a7 7 0 1 1 14 0c0 3.172-2.235 6.782-6.66 10.867ZM18 10a6 6 0 1 0-12 0c0 2.752 1.987 6.035 6 9.816 4.013-3.78 6-7.064 6-9.816Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMapMarker);
const Memo = memo(ForwardRef);
export default Memo;
