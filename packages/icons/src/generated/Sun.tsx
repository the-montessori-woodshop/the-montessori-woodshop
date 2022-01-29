import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSun = (
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
    <path d="M12.5 18a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 5.5a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3Zm0 17a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3Zm4.803-14.596a.5.5 0 0 1-.707-.707l2.05-2.05a.5.5 0 0 1 .708.707l-2.05 2.05Zm-11.95 11.95a.5.5 0 0 1-.707-.708l2.05-2.05a.5.5 0 1 1 .708.707l-2.05 2.05ZM19.5 13a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm-17 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm14.596 4.803a.5.5 0 1 1 .707-.707l2.05 2.05a.5.5 0 0 1-.707.708l-2.05-2.05ZM5.146 5.853a.5.5 0 1 1 .708-.707l2.05 2.05a.5.5 0 1 1-.707.708l-2.05-2.05Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSun);
const Memo = memo(ForwardRef);
export default Memo;
