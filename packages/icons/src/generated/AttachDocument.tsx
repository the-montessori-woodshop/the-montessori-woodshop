import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAttachDocument = (
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
    <path d="M11.5 10a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm-2 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm2-11a.5.5 0 1 1 0-1h7A2.5 2.5 0 0 1 21 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 5 19.5v-5a.5.5 0 1 1 1 0v5A1.5 1.5 0 0 0 7.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 5h-7ZM6 8.5a.5.5 0 0 1-1 0V5a2 2 0 1 1 4 0v3.5a3.5 3.5 0 0 1-7 0v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 0 5 0V5a1 1 0 1 0-2 0v3.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAttachDocument);
const Memo = memo(ForwardRef);
export default Memo;
