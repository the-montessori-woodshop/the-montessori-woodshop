import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArchive = (
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
    <path d="M3 4.5v2a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5Zm18 3.415V18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7.915A1.5 1.5 0 0 1 2 6.5v-2A1.5 1.5 0 0 1 3.5 3h17A1.5 1.5 0 0 1 22 4.5v2a1.5 1.5 0 0 1-1 1.415ZM20 8H4v10.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V8ZM8 11.5A1.5 1.5 0 0 1 9.5 10h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 1 8 11.5Zm1 0a.5.5 0 0 0 .5.5h5a.5.5 0 1 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArchive);
const Memo = memo(ForwardRef);
export default Memo;
