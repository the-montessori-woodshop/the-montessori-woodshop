import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateLeft = (
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
    <path d="M17 5.754V8.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-2.842A9 9 0 1 1 3 12c0-4.775 3.73-8.712 8.475-8.985a.5.5 0 1 1 .058.998A8 8 0 1 0 17 5.754Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateLeft);
const Memo = memo(ForwardRef);
export default Memo;
