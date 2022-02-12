import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBarCodeScan = (
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
    <path d="M3 8.5a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 4h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 3 6.5v2ZM17.5 5a.5.5 0 1 1 0-1h2A2.5 2.5 0 0 1 22 6.5v2a.5.5 0 1 1-1 0v-2A1.5 1.5 0 0 0 19.5 5h-2Zm-11 14a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 2 17.5v-2a.5.5 0 1 1 1 0v2A1.5 1.5 0 0 0 4.5 19h2ZM21 15.5a.5.5 0 1 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 1 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5v-2Zm-16-8a.5.5 0 0 1 1 0v9a.5.5 0 1 1-1 0v-9Zm3 0a.5.5 0 0 1 1 0v9a.5.5 0 1 1-1 0v-9Zm2 0a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9Zm2 0a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9Zm4 0a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9Zm2 0a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBarCodeScan);
const Memo = memo(ForwardRef);
export default Memo;
