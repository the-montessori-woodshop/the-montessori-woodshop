import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLaugh = (
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
    <path d="M10 17.973c.164.018.331.027.5.027h3c.177 0 .352-.01.524-.03a1 1 0 0 0-1-.97H11a1 1 0 0 0-1 .973Zm-.984-.224A2 2 0 0 1 11 16h2.025a2 2 0 0 1 1.983 1.741A4.504 4.504 0 0 0 17.973 14H6.027a4.504 4.504 0 0 0 2.989 3.75ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-9.5 2h13a.5.5 0 0 1 .5.5 5.5 5.5 0 0 1-5.5 5.5h-3A5.5 5.5 0 0 1 5 13.5a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLaugh);
const Memo = memo(ForwardRef);
export default Memo;
