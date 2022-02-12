import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGitMerge = (
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
    <path d="M9.965 6A3.502 3.502 0 0 1 7 8.965v6.07a3.5 3.5 0 1 1-1 0v-6.07A3.5 3.5 0 1 1 9.965 5H14.5A4.5 4.5 0 0 1 19 9.5v.535a3.5 3.5 0 1 1-1 0V9.5A3.5 3.5 0 0 0 14.5 6H9.965ZM4 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm0 13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM18.5 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgGitMerge);
const Memo = memo(ForwardRef);
export default Memo;
