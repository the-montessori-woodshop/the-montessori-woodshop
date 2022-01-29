import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlay = (
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
    <path d="M6 4.67v14.66a.65.65 0 0 0 1.015.538l10.656-7.23a.77.77 0 0 0 0-1.275L7.015 4.133A.65.65 0 0 0 6 4.67Zm-1 0a1.65 1.65 0 0 1 2.576-1.365l10.656 7.23a1.77 1.77 0 0 1 0 2.93l-10.656 7.23A1.65 1.65 0 0 1 5 19.33V4.67Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPlay);
const Memo = memo(ForwardRef);
export default Memo;
