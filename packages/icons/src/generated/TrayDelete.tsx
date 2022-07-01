import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTrayDelete = (
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
    <path d="M4 15h5.5a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 1 .5-.5H20v-4.5a.5.5 0 1 1 1 0v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h8a.5.5 0 1 1 0 1h-8A1.5 1.5 0 0 0 4 5.5V15Zm0 1v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16h-5.05a2.5 2.5 0 0 1-2.45 2h-1a2.5 2.5 0 0 1-2.45-2H4ZM19.207 5.5l1.647 1.646a.5.5 0 0 1-.708.708L18.5 6.207l-1.646 1.647a.5.5 0 0 1-.708-.708L17.793 5.5l-1.647-1.646a.5.5 0 0 1 .708-.708L18.5 4.793l1.646-1.647a.5.5 0 0 1 .708.708L19.207 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTrayDelete);
const Memo = memo(ForwardRef);
export default Memo;
