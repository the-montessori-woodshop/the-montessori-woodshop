import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSelectCursor = (
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
    <path d="m18.285 17.578 2.569 2.568a.5.5 0 0 1-.708.708l-2.568-2.57-1.662 2.493a.5.5 0 0 1-.884-.101l-3-8a.5.5 0 0 1 .644-.644l8 3a.5.5 0 0 1 .101.884l-2.492 1.662Zm-1.054-.5 2.18-1.453-6.057-2.27 2.271 6.055 1.453-2.179a.502.502 0 0 1 .153-.153ZM5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3Zm3 1a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm5 0a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm-5 17a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2ZM3 8.5a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm0 5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 5.5 20a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 18.5Zm18-8a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0v2Zm0-5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 18.5 4a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 21 5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSelectCursor);
const Memo = memo(ForwardRef);
export default Memo;
