import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSticker = (
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
    <path d="M20 11.5v-4A3.5 3.5 0 0 0 16.5 4h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h5a1.5 1.5 0 0 0 1.5-1.5v-2a3.5 3.5 0 0 1 3.5-3.5h1a1.5 1.5 0 0 0 1.5-1.5Zm-.073 2.053A2.488 2.488 0 0 1 18.5 14h-1a2.5 2.5 0 0 0-2.5 2.5v2c0 .422-.105.82-.29 1.169a7.509 7.509 0 0 0 5.217-6.116ZM7.5 3h9A4.5 4.5 0 0 1 21 7.5v5a8.5 8.5 0 0 1-8.5 8.5h-5A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSticker);
const Memo = memo(ForwardRef);
export default Memo;
