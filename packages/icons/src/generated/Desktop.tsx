import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDesktop = (
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
    <path d="M11 19h2v-2h-2v2Zm-1 0v-2H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v8a2.5 2.5 0 0 1-2.5 2.5H14v2h1.5a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1H10ZM4.5 5A1.5 1.5 0 0 0 3 6.5v8A1.5 1.5 0 0 0 4.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19.5 5h-15Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDesktop);
const Memo = memo(ForwardRef);
export default Memo;
