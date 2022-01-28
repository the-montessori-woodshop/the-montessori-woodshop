import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMicrophone = (
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
    <path d="M9 6.008v6.023a3.008 3.008 0 1 0 6.015 0V6.008a3.008 3.008 0 1 0-6.015 0ZM11 21h2v-2.07a7.06 7.06 0 0 1-2 0V21Zm-1 0v-2.29c-2.891-.86-5-3.539-5-6.71v-.5a.5.5 0 1 1 1 0v.5a6 6 0 1 0 12 0v-.5a.5.5 0 1 1 1 0v.5a7.003 7.003 0 0 1-5 6.71V21h2.5a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1H10ZM8 6.008a4.008 4.008 0 0 1 8.015 0v6.023a4.008 4.008 0 1 1-8.015 0V6.008Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMicrophone);
const Memo = memo(ForwardRef);
export default Memo;
