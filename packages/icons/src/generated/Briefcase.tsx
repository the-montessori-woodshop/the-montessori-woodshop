import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBriefcase = (
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
    <path d="M16 6H8v12.01h8V6Zm1 0v12.01h1.5a1.5 1.5 0 0 0 1.5-1.5V7.5A1.5 1.5 0 0 0 18.5 6H17ZM7 6H5.5A1.5 1.5 0 0 0 4 7.5v9.01a1.5 1.5 0 0 0 1.5 1.5H7V6Zm2-1v-.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V5h3.5A2.5 2.5 0 0 1 21 7.5v9.01a2.5 2.5 0 0 1-2.5 2.5h-13a2.5 2.5 0 0 1-2.5-2.5V7.5A2.5 2.5 0 0 1 5.5 5H9Zm5 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V5h4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBriefcase);
const Memo = memo(ForwardRef);
export default Memo;
