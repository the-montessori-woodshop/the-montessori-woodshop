import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRefreshLeft = (
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
    <path d="M5 6.342A9 9 0 1 1 12 21c-4.765 0-8.696-3.713-8.983-8.447a.5.5 0 0 1 .998-.06A8 8 0 1 0 5.755 7H8.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.842Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRefreshLeft);
const Memo = memo(ForwardRef);
export default Memo;
