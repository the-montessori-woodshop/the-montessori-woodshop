import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGitPull = (
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
    <path d="M13.707 5h.793A4.5 4.5 0 0 1 19 9.5v.535a3.5 3.5 0 1 1-1 0V9.5A3.5 3.5 0 0 0 14.5 6h-.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 5ZM6 15.035v-6.07a3.5 3.5 0 1 1 1 0v6.07a3.5 3.5 0 1 1-1 0ZM4 18.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm0-13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM18.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGitPull);
const Memo = memo(ForwardRef);
export default Memo;
