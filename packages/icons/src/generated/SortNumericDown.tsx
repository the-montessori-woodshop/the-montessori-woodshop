import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortNumericDown = (
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
    <path d="M19.513 15.982a.508.508 0 0 1-.013.02l-2.587 3.78a.5.5 0 0 1-.826-.564l1.52-2.22a2.5 2.5 0 1 1 1.906-1.016ZM18 10h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h.5V5.707l-.146.147a.5.5 0 0 1-.708-.708l1-1A.5.5 0 0 1 18 4.5V10ZM7.904 19.803a.5.5 0 0 1-.808 0l-2.95-2.95a.5.5 0 0 1 .708-.707L7 18.293V4.5a.5.5 0 0 1 1 0v13.793l2.146-2.147a.5.5 0 0 1 .708.708l-2.95 2.95ZM17.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortNumericDown);
const Memo = memo(ForwardRef);
export default Memo;
