import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWideAngle = (
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
    <path d="M3 6.829v10.343a23.017 23.017 0 0 0 18 0V6.829a23.067 23.067 0 0 0-18 0Zm-.702-.787a24.067 24.067 0 0 1 19.404 0A.5.5 0 0 1 22 6.5v11a.5.5 0 0 1-.298.457 24.017 24.017 0 0 1-19.404 0A.5.5 0 0 1 2 17.5v-11a.5.5 0 0 1 .298-.458Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWideAngle);
const Memo = memo(ForwardRef);
export default Memo;
