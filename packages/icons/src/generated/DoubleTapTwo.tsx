import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDoubleTapTwo = (
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
    <path d="M10.815 2.888a.497.497 0 0 1-.255.11C8.52 3.428 7 5.334 7 7.5c0 .99.32 1.931.903 2.705a.5.5 0 0 1-.798.602A5.477 5.477 0 0 1 6 7.5c0-2.613 1.816-4.914 4.29-5.467a5.5 5.5 0 0 1 7.609 7.768.5.5 0 1 1-.8-.6 4.5 4.5 0 0 0-6.284-6.313ZM11 11.5v2.547a1.415 1.415 0 0 1-2.32 1.087l-.924-.77A1.572 1.572 0 0 0 6.75 14a.693.693 0 0 0-.625.393l-.035.074a.797.797 0 0 0 .104.854l4.414 5.32A3.758 3.758 0 0 0 13.5 22a4.5 4.5 0 0 0 4.5-4.5v-4a.5.5 0 1 0-1 0v1a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-8a.5.5 0 1 0-1 0v8a.5.5 0 1 1-1 0v-7a.5.5 0 1 0-1 0v4Zm-1 0v-4a1.5 1.5 0 0 1 2.053-1.395A1.5 1.5 0 0 1 15 6.5v4.585a1.5 1.5 0 0 1 1.947 1.02A1.5 1.5 0 0 1 19 13.5v4a5.5 5.5 0 0 1-5.5 5.5 4.758 4.758 0 0 1-3.662-1.72l-4.413-5.32a1.797 1.797 0 0 1-.236-1.927l.035-.074A1.693 1.693 0 0 1 6.75 13c.602 0 1.184.21 1.646.596l.924.77a.415.415 0 0 0 .68-.319V11.5Zm1.76-6.795a.5.5 0 0 1-.427.3A2.5 2.5 0 0 0 9 7.5a.5.5 0 0 1-1 0 3.5 3.5 0 0 1 3.017-3.467A3.5 3.5 0 0 1 17 6.5a.5.5 0 1 1-1 0 2.5 2.5 0 0 0-4.24-1.795Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDoubleTapTwo);
const Memo = memo(ForwardRef);
export default Memo;