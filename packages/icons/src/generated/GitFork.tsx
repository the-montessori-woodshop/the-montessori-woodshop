import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGitFork = (
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
    <path d="M7 12h7.5a3.5 3.5 0 0 0 3.47-3.04 3.5 3.5 0 1 1 1.006.008A4.5 4.5 0 0 1 14.5 13H7v2.035a3.5 3.5 0 1 1-1 0v-6.07a3.5 3.5 0 1 1 1 0V12Zm-3 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm0-13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM18.5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGitFork);
const Memo = memo(ForwardRef);
export default Memo;
