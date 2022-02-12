import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMyLocation = (
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
    <path d="M21.987 13A9.5 9.5 0 0 1 13 21.987V23.5a.5.5 0 1 1-1 0v-1.513A9.5 9.5 0 0 1 3.013 13H1.5a.5.5 0 1 1 0-1h1.513A9.5 9.5 0 0 1 12 3.013V1.5a.5.5 0 1 1 1 0v1.513A9.5 9.5 0 0 1 21.987 12H23.5a.5.5 0 1 1 0 1h-1.513ZM12.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-4a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMyLocation);
const Memo = memo(ForwardRef);
export default Memo;
