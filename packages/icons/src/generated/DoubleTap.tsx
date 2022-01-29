import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDoubleTap = (
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
    <path d="M11 11.5v2.547a1.415 1.415 0 0 1-2.32 1.087l-.924-.77A1.572 1.572 0 0 0 6.75 14a.693.693 0 0 0-.625.393l-.035.074a.797.797 0 0 0 .104.854l4.414 5.32A3.758 3.758 0 0 0 13.5 22a4.5 4.5 0 0 0 4.5-4.5v-4a.5.5 0 1 0-1 0v1a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-3a.5.5 0 1 0-1 0v3a.5.5 0 1 1-1 0v-8a.5.5 0 1 0-1 0v5Zm-1 0v-5a1.5 1.5 0 0 1 3 0v3.585a1.5 1.5 0 0 1 1.947 1.02 1.5 1.5 0 0 1 2 1A1.5 1.5 0 0 1 19 13.5v4a5.5 5.5 0 0 1-5.5 5.5 4.758 4.758 0 0 1-3.662-1.72l-4.413-5.32a1.797 1.797 0 0 1-.236-1.927l.035-.074A1.693 1.693 0 0 1 6.75 13c.602 0 1.184.21 1.646.596l.924.77a.415.415 0 0 0 .68-.319V11.5Zm5-5a.5.5 0 1 1-1 0 2.5 2.5 0 1 0-5 0 .5.5 0 0 1-1 0 3.5 3.5 0 0 1 7 0Zm.899 3.302a.5.5 0 1 1-.8-.601 4.5 4.5 0 1 0-7.196.004.5.5 0 0 1-.798.602 5.5 5.5 0 1 1 8.794-.005Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDoubleTap);
const Memo = memo(ForwardRef);
export default Memo;
