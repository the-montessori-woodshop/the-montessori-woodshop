import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBellSlash = (
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
    <path d="M14.83 19a3.001 3.001 0 0 1-5.66 0H8.5a.5.5 0 1 1 0-1h7.922a1.5 1.5 0 0 0 1.371-2.11l-.75-1.687L17 14v-3c0-.458-.061-.907-.181-1.339a.5.5 0 1 1 .964-.267c.143.519.217 1.058.217 1.606v2.894l.707 1.59A2.5 2.5 0 0 1 16.422 19H14.83Zm-1.097 0h-3.466a2.002 2.002 0 0 0 3.466 0ZM10 5.341V5a2 2 0 1 1 4 0v.342c.247.087.488.19.722.31a.5.5 0 0 1-.454.89A5 5 0 0 0 7 11v3.001l-.043.203-.671 1.51a.5.5 0 0 1-.914-.406L6 13.894V11a6.002 6.002 0 0 1 4-5.659Zm3-.258V5a1 1 0 0 0-2 0v.083a6.04 6.04 0 0 1 2 0Zm7.146-1.937a.5.5 0 0 1 .708.708l-17 17a.5.5 0 0 1-.708-.708l17-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBellSlash);
const Memo = memo(ForwardRef);
export default Memo;
