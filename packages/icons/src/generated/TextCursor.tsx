import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTextCursor = (
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
    <path d="M12 13h-1.5a.5.5 0 1 1 0-1H12V5.5A1.5 1.5 0 0 0 10.5 4h-1a.5.5 0 0 1 0-1h1c.818 0 1.544.393 2 1 .456-.607 1.182-1 2-1h1a.5.5 0 1 1 0 1h-1A1.5 1.5 0 0 0 13 5.5V12h1.5a.5.5 0 1 1 0 1H13v6.5a1.5 1.5 0 0 0 1.5 1.5h1a.5.5 0 1 1 0 1h-1a2.496 2.496 0 0 1-2-1c-.456.607-1.182 1-2 1h-1a.5.5 0 1 1 0-1h1a1.5 1.5 0 0 0 1.5-1.5V13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTextCursor);
const Memo = memo(ForwardRef);
export default Memo;
