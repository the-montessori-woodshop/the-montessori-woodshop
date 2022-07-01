import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInterview = (
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
    <path d="M15.357 15A2.5 2.5 0 0 1 16 16.674V18.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 18.5v-1.826A2.5 2.5 0 0 1 2.643 15H2.5a.5.5 0 1 1 0-1h1.662l2.042-1.14a4 4 0 1 1 6.788-2.607l.537-.55a3 3 0 1 1 4.942-.002l.005.004 1.815 1.864A2.5 2.5 0 0 1 21 13.313V14h.5a.5.5 0 1 1 0 1h-6.143Zm-1.518-1H20v-.687a1.5 1.5 0 0 0-.425-1.047l-1.8-1.847A2.987 2.987 0 0 1 16 11a2.987 2.987 0 0 1-1.773-.58l-1.801 1.846c-.21.216-.238.246-.294.316a.548.548 0 0 0-.132.392L13.84 14Zm-.596.813-2.328-1.3A3.982 3.982 0 0 1 9 14a3.982 3.982 0 0 1-1.914-.487l-3.317 1.851A1.5 1.5 0 0 0 3 16.674V18.5A1.5 1.5 0 0 0 4.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-1.826a1.5 1.5 0 0 0-.769-1.31l-.659-.368a.5.5 0 0 1-.329-.183ZM9 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgInterview);
const Memo = memo(ForwardRef);
export default Memo;
