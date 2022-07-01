import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStorm = (
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
    <path d="M15.744 7h.756a4.5 4.5 0 1 1 0 9 .5.5 0 1 1 0-1 3.5 3.5 0 0 0 0-7h-.527c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 11.5 5H11a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5 .5.5 0 1 1 0 1A3.5 3.5 0 0 1 6 9.035C6 6.24 8.239 4 11 4h.5a4.502 4.502 0 0 1 4.244 3Zm-2.884 9H10.5a.5.5 0 0 1-.485-.621l1-4a.5.5 0 0 1 .97.242L11.14 15h2.36a.5.5 0 0 1 .485.621l-1 4a.5.5 0 0 1-.97-.242L12.86 16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgStorm);
const Memo = memo(ForwardRef);
export default Memo;
