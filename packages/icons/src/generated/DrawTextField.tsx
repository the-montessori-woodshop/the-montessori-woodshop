import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDrawTextField = (
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
    <path d="M7 7v5h1.5a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1H6V7H4v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V7H7Zm5.5 0a.5.5 0 1 1 0-1h6A2.5 2.5 0 0 1 21 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 4 16.5v-1a.5.5 0 1 1 1 0v1A1.5 1.5 0 0 0 6.5 18h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 18.5 7h-6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDrawTextField);
const Memo = memo(ForwardRef);
export default Memo;
