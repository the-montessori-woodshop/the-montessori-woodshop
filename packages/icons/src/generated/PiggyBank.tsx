import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPiggyBank = (
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
    <path d="M3.086 13.966A2.5 2.5 0 0 1 1 11.5v-1a.5.5 0 1 1 1 0v1a1.5 1.5 0 0 0 1.006 1.417A13.31 13.31 0 0 1 3 12.5C3 8.983 6.611 6 12.5 6c1.384 0 2.61.133 3.676.4A3.502 3.502 0 0 1 19.5 4a.5.5 0 0 1 .5.5v4.135c.338.41.616.865.836 1.365H22.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1.545c-.172.949-.834 1.862-1.955 2.746V21.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V20h-5v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2.7c-1.663-.943-2.633-2.57-2.914-4.834ZM17.032 7.1a.5.5 0 0 1-.64.398C15.312 7.168 14.015 7 12.5 7 7.126 7 4 9.582 4 12.5c0 2.825.91 4.646 2.724 5.553A.5.5 0 0 1 7 18.5V21h2v-1.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V21h2v-3.5a.5.5 0 0 1 .2-.4c1.22-.915 1.8-1.785 1.8-2.6a.5.5 0 0 1 .5-.5H22v-3h-1.5a.5.5 0 0 1-.468-.324 4.844 4.844 0 0 0-.907-1.525.5.5 0 0 1-.125-.332V5.05a2.501 2.501 0 0 0-1.968 2.05ZM10 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 11.5 2h.025a2.5 2.5 0 0 1 2.5 2.5.5.5 0 1 1-1 0 1.5 1.5 0 0 0-1.5-1.5H11.5A1.5 1.5 0 0 0 10 4.5Zm7 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPiggyBank);
const Memo = memo(ForwardRef);
export default Memo;
