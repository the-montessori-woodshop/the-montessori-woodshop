import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlusSquare = (
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
    <path d="M13 12h3.5a.5.5 0 1 1 0 1H13v3.5a.5.5 0 1 1-1 0V13H8.5a.5.5 0 1 1 0-1H12V8.5a.5.5 0 1 1 1 0V12ZM3 5.5A2.5 2.5 0 0 1 5.5 3h14A2.5 2.5 0 0 1 22 5.5v14a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 3 19.5v-14Zm1 0v14A1.5 1.5 0 0 0 5.5 21h14a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 19.5 4h-14A1.5 1.5 0 0 0 4 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPlusSquare);
const Memo = memo(ForwardRef);
export default Memo;
