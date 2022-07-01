import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHome = (
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
    <path d="M20 10.736V18.5a2.5 2.5 0 0 1-2.5 2.5h-3a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v6a.5.5 0 0 1-.5.5h-3A2.5 2.5 0 0 1 4 18.5v-7.764l-.182.15a.5.5 0 1 1-.636-.772l8.5-7a.5.5 0 0 1 .636 0l8.5 7a.5.5 0 1 1-.636.772l-.182-.15Zm-.993-.818L12 4.148l-7.007 5.77A.503.503 0 0 1 5 10v8.5A1.5 1.5 0 0 0 6.5 20H9v-5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V20h2.5a1.5 1.5 0 0 0 1.5-1.5V10c0-.028.002-.055.007-.082Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHome);
const Memo = memo(ForwardRef);
export default Memo;
