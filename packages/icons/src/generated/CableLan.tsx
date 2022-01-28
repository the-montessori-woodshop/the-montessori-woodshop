import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableLan = (
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
    <path d="M13 16h-2v1h2v-1Zm1 0v5.5a.5.5 0 1 1-1 0V18h-2v3.5a.5.5 0 1 1-1 0V16h-.5a.5.5 0 0 1-.447-.276l-2-4A.5.5 0 0 1 7 11.5v-4a.5.5 0 0 1 .5-.5H8V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.053.224l-2 4A.5.5 0 0 1 14.5 16H14ZM11 3v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3h-2Zm3 0v.5A1.5 1.5 0 0 1 12.5 5h-1A1.5 1.5 0 0 1 10 3.5V3H9v4.5a.498.498 0 0 1-.5.5H8v3.382L9.809 15h4.382L16 11.382V8h-.5a.5.5 0 0 1-.5-.5V3h-1Zm-3.5 4h3a.5.5 0 0 1 .5.5V10a2 2 0 1 1-4 0V7.5a.5.5 0 0 1 .5-.5Zm.5 3a1 1 0 0 0 2 0V8h-2v2Zm-.5 4a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableLan);
const Memo = memo(ForwardRef);
export default Memo;
