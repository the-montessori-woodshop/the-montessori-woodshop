import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBold = (
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
    <path d="M7 7a1 1 0 1 1 0-2h6.5a4 4 0 0 1 2.875 6.781A4 4 0 0 1 14 19H7a1 1 0 0 1 0-2V7Zm2 0v4h4.5a2 2 0 1 0 0-4H9Zm0 6v4h5a2 2 0 1 0 0-4c-.057 0-.112-.005-.166-.014-.11.01-.222.014-.334.014H9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBold);
const Memo = memo(ForwardRef);
export default Memo;
