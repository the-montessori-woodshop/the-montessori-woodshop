import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUsers = (
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
    <path d="m7.869 11.299-4.056 2.087A1.5 1.5 0 0 0 3 14.72v.78A1.5 1.5 0 0 0 4.5 17a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 2 15.5v-.78a2.5 2.5 0 0 1 1.356-2.223l3.358-1.728a5 5 0 1 1 7.424-6.576.5.5 0 1 1-.827.562 4 4 0 1 0-5.39 5.663.5.5 0 0 1-.052.88Zm4.092 4.268L7.88 17.422A1.5 1.5 0 0 0 7 18.788v.712A1.5 1.5 0 0 0 8.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-.712a1.5 1.5 0 0 0-.88-1.366l-4.081-1.855A4.982 4.982 0 0 1 14 16a4.982 4.982 0 0 1-2.039-.433Zm-1.039-.626a5 5 0 1 1 6.156 0l3.457 1.57A2.5 2.5 0 0 1 22 18.789v.712a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 19.5v-.712a2.5 2.5 0 0 1 1.465-2.276l3.457-1.571ZM14 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUsers);
const Memo = memo(ForwardRef);
export default Memo;
