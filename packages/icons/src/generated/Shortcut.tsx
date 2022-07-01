import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShortcut = (
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
    <path d="M19.293 4H16.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V4.707l-5.146 5.147a.5.5 0 0 1-.708-.708L19.293 4ZM20 11.5a.5.5 0 1 1 1 0v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h7a.5.5 0 1 1 0 1h-7A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShortcut);
const Memo = memo(ForwardRef);
export default Memo;
