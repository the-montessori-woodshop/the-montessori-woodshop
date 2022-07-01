import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNotebook = (
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
    <path d="M4 16V8h-.5a.5.5 0 0 1 0-1H4V5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5V17h-.5a.5.5 0 1 1 0-1H4Zm1 0h.5a.5.5 0 1 1 0 1H5v1.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 17.5 4h-11A1.5 1.5 0 0 0 5 5.5V7h.5a.5.5 0 0 1 0 1H5v8ZM8.5 6h7A1.5 1.5 0 0 1 17 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 9.5v-2A1.5 1.5 0 0 1 8.5 6Zm0 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgNotebook);
const Memo = memo(ForwardRef);
export default Memo;
