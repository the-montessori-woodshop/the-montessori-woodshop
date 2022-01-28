import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGitBranch = (
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
    <path d="M9.965 19A3.5 3.5 0 1 1 6 15.035v-6.07a3.5 3.5 0 1 1 1 0v6.07A3.502 3.502 0 0 1 9.965 18H14.5a3.5 3.5 0 0 0 3.5-3.5v-.535a3.5 3.5 0 1 1 1 0v.535a4.5 4.5 0 0 1-4.5 4.5H9.965ZM4 18.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm0-13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM18.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGitBranch);
const Memo = memo(ForwardRef);
export default Memo;
