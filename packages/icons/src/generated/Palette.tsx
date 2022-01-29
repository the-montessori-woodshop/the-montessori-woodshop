import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPalette = (
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
    <path d="M12 3a9 9 0 1 0 0 18h.5a.78.78 0 0 0 .757-.591 1.545 1.545 0 0 0-.301-1.38l-1.84-2.209a.5.5 0 0 1 .286-.81l6.078-1.216A4.38 4.38 0 0 0 21 10.5 7.5 7.5 0 0 0 13.5 3H12Zm.422 13.825 1.302 1.563c.517.62.707 1.45.511 2.233A1.79 1.79 0 0 1 12.5 22H12C6.477 22 2 17.523 2 12S6.477 2 12 2h1.5a8.5 8.5 0 0 1 8.5 8.5 5.38 5.38 0 0 1-4.324 5.275l-5.254 1.05ZM18 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPalette);
const Memo = memo(ForwardRef);
export default Memo;
