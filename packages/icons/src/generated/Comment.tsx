import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComment = (
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
    <path d="M8.288 19.195a.5.5 0 0 1 .296.041 8 8 0 1 0-3.07-2.551.5.5 0 0 1 .05.5l-1.218 2.667 3.942-.657Zm-4.706 1.798a.5.5 0 0 1-.537-.7l1.49-3.263A9 9 0 1 1 8.3 20.207l-4.718.786Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgComment);
const Memo = memo(ForwardRef);
export default Memo;
