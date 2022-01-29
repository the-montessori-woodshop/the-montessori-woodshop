import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortNumericUp = (
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
    <path d="M19.513 15.982a.508.508 0 0 1-.013.02l-2.587 3.78a.5.5 0 0 1-.826-.564l1.52-2.22a2.5 2.5 0 1 1 1.906-1.016ZM18 10h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h.5V5.707l-.146.147a.5.5 0 0 1-.708-.708l1-1A.5.5 0 0 1 18 4.5V10ZM8 5.707v13.801a.5.5 0 1 1-1 0v-13.8L4.854 7.853a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707ZM17.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortNumericUp);
const Memo = memo(ForwardRef);
export default Memo;
