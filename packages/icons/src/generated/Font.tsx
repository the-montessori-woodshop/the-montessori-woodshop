import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFont = (
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
    <path d="M12 17V6H6v1.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0V6h-6v11h2.5a.5.5 0 1 1 0 1h-6a.5.5 0 1 1 0-1H12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFont);
const Memo = memo(ForwardRef);
export default Memo;
