import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDelete = (
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
    <path d="m13.5 11.793 2.646-2.647a.5.5 0 0 1 .708.708L14.207 12.5l2.647 2.646a.5.5 0 0 1-.708.708L13.5 13.207l-2.646 2.647a.5.5 0 0 1-.708-.708l2.647-2.646-2.647-2.646a.5.5 0 0 1 .708-.708l2.646 2.647ZM7.284 17.46a1.5 1.5 0 0 0 1.153.54H19.5a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19.5 7H8.437a1.5 1.5 0 0 0-1.153.54L3.151 12.5l4.133 4.96Zm-5.168-5.28 4.4-5.28a2.5 2.5 0 0 1 1.92-.9H19.5A2.5 2.5 0 0 1 22 8.5v8a2.5 2.5 0 0 1-2.5 2.5H8.437a2.5 2.5 0 0 1-1.92-.9l-4.401-5.28a.5.5 0 0 1 0-.64Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDelete);
const Memo = memo(ForwardRef);
export default Memo;
