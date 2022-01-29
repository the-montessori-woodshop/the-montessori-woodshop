import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActivity = (
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
    <path d="M6.217 12H2.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .429.243l2.51 4.183 4.606-10.133a.5.5 0 0 1 .902-.017L17.81 11H21.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.447-.276L14.52 6.66 9.955 16.707a.5.5 0 0 1-.884.05L6.217 12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgActivity);
const Memo = memo(ForwardRef);
export default Memo;
