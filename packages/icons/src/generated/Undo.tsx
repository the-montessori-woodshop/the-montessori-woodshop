import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUndo = (
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
    <path d="M3.924 11.765a.5.5 0 0 1-.848-.53A9.01 9.01 0 0 1 10.717 7H11c4.784 0 8.725 3.743 8.986 8.5.007.118.011.763.014 1.999a.5.5 0 0 1-1 .002 115.502 115.502 0 0 0-.012-1.947A8 8 0 0 0 11 8h-.283a8.01 8.01 0 0 0-6.793 3.765ZM8.5 11a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0V11h4.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUndo);
const Memo = memo(ForwardRef);
export default Memo;
