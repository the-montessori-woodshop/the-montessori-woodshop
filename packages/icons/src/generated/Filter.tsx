import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFilter = (
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
    <path d="M15 12.707V18.5a.5.5 0 0 1-.314.464l-5 2A.5.5 0 0 1 9 20.5v-7.793L3.146 6.854A.5.5 0 0 1 3 6.5v-3a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.146.354L15 12.707ZM14 13h-4v6.761l4-1.6V13ZM4 4v2.293L9.707 12h4.586L20 6.293V4H4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFilter);
const Memo = memo(ForwardRef);
export default Memo;
