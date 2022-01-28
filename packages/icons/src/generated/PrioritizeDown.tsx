import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrioritizeDown = (
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
    <path d="M9.293 18H5.5A2.5 2.5 0 0 1 3 15.5v-6A2.5 2.5 0 0 1 5.5 7h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 0 4 9.5v6A1.5 1.5 0 0 0 5.5 17h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L9.293 18ZM13.5 8a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 5a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 5a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrioritizeDown);
const Memo = memo(ForwardRef);
export default Memo;
