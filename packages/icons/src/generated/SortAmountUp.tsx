import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortAmountUp = (
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
    <path d="M8 5.707v13.801a.5.5 0 1 1-1 0v-13.8L4.854 7.853a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707ZM12.5 6a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 4a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm0 4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm0 4a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortAmountUp);
const Memo = memo(ForwardRef);
export default Memo;
