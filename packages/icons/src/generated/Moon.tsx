import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMoon = (
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
    <path d="M12 4a8 8 0 1 0 7.943 7.043 5 5 0 0 1-6.986-6.986A8.088 8.088 0 0 0 12 4Zm2.263.083a4 4 0 1 0 5.654 5.654.5.5 0 0 1 .852.23 9 9 0 1 1-6.735-6.735.5.5 0 0 1 .23.85Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMoon);
const Memo = memo(ForwardRef);
export default Memo;
