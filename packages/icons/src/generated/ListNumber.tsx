import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgListNumber = (
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
    <path d="M5 8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V5h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5V8Zm-1 3v.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.146.354L4.707 13H5.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.354-.854L5 11.293V11H4Zm-.5 5a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.146.354L5.707 17l.147.146A.5.5 0 0 1 6 17.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 1 1 0-1H5v-.293l-.354-.353a.5.5 0 0 1 0-.708L5 16.293V16H3.5Zm5 1a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1h-12Zm0-5a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1h-12Zm0-5a.5.5 0 0 1 0-1h12a.5.5 0 1 1 0 1h-12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgListNumber);
const Memo = memo(ForwardRef);
export default Memo;
