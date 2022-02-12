import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWindows = (
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
    <path d="m13 18.129 6 .8V13h-6v5.129ZM12.5 12h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.566.496l-7-.934a.5.5 0 0 1-.434-.495V12.5a.5.5 0 0 1 .5-.5Zm-1.5.5v5.8a.5.5 0 0 1-.566.496l-6-.8A.5.5 0 0 1 4 17.5v-5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5Zm-1 .5H5v4.062l5 .667V13Zm2.434-9.062 7-.934A.5.5 0 0 1 20 3.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4.433a.5.5 0 0 1 .434-.495ZM13 4.87V10h6V4.071l-6 .8ZM11 4.7v5.8a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .434-.496l6-.8A.5.5 0 0 1 11 4.7Zm-1 .571-5 .667V10h5V5.271Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWindows);
const Memo = memo(ForwardRef);
export default Memo;
