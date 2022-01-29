import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWallet = (
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
    <path d="M21 8.5a2.488 2.488 0 0 0-1.5-.5h-.55a2.502 2.502 0 0 0-2.45-2h-9a2.502 2.502 0 0 0-2.45 2H4.5A1.5 1.5 0 0 1 3 6.5v-1A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v3ZM6.085 8A1.5 1.5 0 0 1 7.5 7h9a1.5 1.5 0 0 1 1.415 1H6.085ZM21 12h-3.5a2.5 2.5 0 1 0 0 5H21v1.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-10c.418.314.937.5 1.5.5h15a1.5 1.5 0 0 1 1.5 1.5V12Zm0 4h-3.5a1.5 1.5 0 1 1 0-3H21v3ZM19.5 3h-15A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWallet);
const Memo = memo(ForwardRef);
export default Memo;
