import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindowDelete = (
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
    <path d="M13.5 21.008h-8a2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 5.5 3h13.007a2.5 2.5 0 0 1 2.5 2.5v8a.5.5 0 0 1-1 0V8H4v10.508a1.5 1.5 0 0 0 1.5 1.5h8a.5.5 0 1 1 0 1ZM20.007 7V5.5a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 0 4 5.5V7h16.007ZM5 5h1v1H5V5Zm2 0h1v1H7V5Zm2 0h1v1H9V5Zm9.5 12.793 1.646-1.647a.5.5 0 0 1 .708.708L19.207 18.5l1.647 1.646a.5.5 0 0 1-.708.708L18.5 19.207l-1.646 1.647a.5.5 0 0 1-.708-.708l1.647-1.646-1.647-1.646a.5.5 0 0 1 .708-.708l1.646 1.647Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindowDelete);
const Memo = memo(ForwardRef);
export default Memo;
