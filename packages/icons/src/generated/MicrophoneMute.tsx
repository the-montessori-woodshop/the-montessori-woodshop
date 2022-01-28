import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMicrophoneMute = (
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
    <path d="M11 21h2v-2.07a7.06 7.06 0 0 1-2 0V21Zm-1 0v-2.29a6.952 6.952 0 0 1-.713-.255.5.5 0 1 1 .388-.922A6 6 0 0 0 18 12v-.5a.5.5 0 1 1 1 0v.5a7.003 7.003 0 0 1-5 6.71V21h2.5a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1H10Zm5-9.5a.5.5 0 1 1 1 0v.5a3.991 3.991 0 0 1-4.558 3.964.5.5 0 0 1 .14-.99A2.991 2.991 0 0 0 15 12v-.5Zm-8.542 2.803a.5.5 0 1 1-.923.384A6.98 6.98 0 0 1 5 12v-.5a.5.5 0 1 1 1 0v.5c0 .801.157 1.58.458 2.303ZM9 12.503a.5.5 0 1 1-1 0V6.007a4.008 4.008 0 0 1 7.974-.577.5.5 0 1 1-.99.143A3.008 3.008 0 0 0 9 6.008v6.494Zm-5.146 8.35a.5.5 0 0 1-.708-.707l17-17a.5.5 0 0 1 .708.708l-17 17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMicrophoneMute);
const Memo = memo(ForwardRef);
export default Memo;
