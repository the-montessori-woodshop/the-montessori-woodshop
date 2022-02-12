import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloudyNight = (
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
    <path d="M14.744 11h.756a4.5 4.5 0 1 1 0 9h-10a3.5 3.5 0 0 1-.5-6.965C5 10.24 7.239 8 10 8h.5a4.502 4.502 0 0 1 4.244 3Zm.229 1c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 10.5 9H10a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5h10a3.5 3.5 0 0 0 0-7h-.527Zm-.863-4.373a.5.5 0 1 1-.969-.249 4.501 4.501 0 0 1 4.897-3.346.5.5 0 0 1 .345.791 2 2 0 0 0 2.794 2.794.5.5 0 0 1 .791.345 4.484 4.484 0 0 1-1.11 3.534.5.5 0 1 1-.746-.666c.495-.555.801-1.25.872-1.995a3 3 0 0 1-3.819-3.819 3.502 3.502 0 0 0-3.055 2.61Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCloudyNight);
const Memo = memo(ForwardRef);
export default Memo;
