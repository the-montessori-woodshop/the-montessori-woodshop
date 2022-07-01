import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLockAlt = (
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
    <path d="M8 9.255V6a4 4 0 1 1 8 0v3.255a7 7 0 1 1-8 0Zm7-.581V6a3 3 0 0 0-6 0v2.674A6.973 6.973 0 0 1 12 8c1.074 0 2.09.242 3 .674ZM12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-1-7v.382c0 .658.153 1.306.447 1.894l.277.553a.309.309 0 0 0 .552 0l.277-.553A4.236 4.236 0 0 0 13 14.382V14a1 1 0 0 0-2 0Zm-1 0a2 2 0 1 1 4 0v.382c0 .813-.19 1.615-.553 2.342l-.276.552a1.309 1.309 0 0 1-2.342 0l-.276-.552A5.236 5.236 0 0 1 10 14.382V14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLockAlt);
const Memo = memo(ForwardRef);
export default Memo;
