import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPaste = (
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
    <path d="M16 8.001h-5.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-7.5h-2.5a.5.5 0 0 1-.5-.5v-2.5Zm4 2.528v7.972a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5v-9a2.5 2.5 0 0 1 2.5-2.5h5.972a.49.49 0 0 1 .382.146l3 3a.49.49 0 0 1 .146.382Zm-3-.528h1.293L17 8.708v1.293ZM11.5 13a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Zm2-13a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 16 5.5V7a.5.5 0 1 1-1 0V5.5A1.5 1.5 0 0 0 13.5 4Zm-7-1a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 5 5.5v9A1.5 1.5 0 0 0 6.5 16H8a.5.5 0 1 1 0 1H6.5A2.5 2.5 0 0 1 4 14.5v-9A2.5 2.5 0 0 1 6.5 3Zm2.5.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 1 9.5 2h1A1.5 1.5 0 0 1 12 3.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPaste);
const Memo = memo(ForwardRef);
export default Memo;
