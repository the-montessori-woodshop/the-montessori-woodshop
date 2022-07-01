import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGitCommit = (
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
    <path d="M15.975 13.01a3.5 3.5 0 0 1-6.93 0H3.49a.5.5 0 1 1 0-1h5.556a3.5 3.5 0 0 1 6.93 0h5.535a.5.5 0 1 1 0 1h-5.535Zm-5.965-.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGitCommit);
const Memo = memo(ForwardRef);
export default Memo;
