import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlag = (
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
    <path d="M13 5h5.5a.5.5 0 0 1 .4.8l-2.775 3.7 2.775 3.7a.5.5 0 0 1-.4.8h-5a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 0-.5-.5H6v8.5a.5.5 0 1 1-1 0V4.493a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V5Zm0 1v1.5a.5.5 0 0 1-1 0V5.502a.505.505 0 0 1 0-.004V4.493a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V11h5.5a1.5 1.5 0 0 1 1.5 1.5.5.5 0 0 0 .5.5h4l-2.4-3.2a.5.5 0 0 1 0-.6L17.5 6H13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlag);
const Memo = memo(ForwardRef);
export default Memo;
