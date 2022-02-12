import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSelect = (
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
    <path d="M5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3Zm3 1a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm5 0a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm-5 17a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm5 0a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2ZM3 8.5a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 5.5 20a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 18.5ZM18.5 21a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5Zm2.5-5.5a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0v2Zm0-5a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0v2Zm0-5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 18.5 4a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 21 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSelect);
const Memo = memo(ForwardRef);
export default Memo;
