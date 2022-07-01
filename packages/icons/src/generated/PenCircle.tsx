import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPenCircle = (
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
    <path d="M14.998 12.211a2.5 2.5 0 0 1 1.397 1.602l1.44 5.04a9 9 0 1 0-11.67 0l1.44-5.04a2.5 2.5 0 0 1 1.397-1.602c.022-1.272.19-2.538.498-3.773l.151-.604a2.421 2.421 0 0 1 4.698 0l.151.604c.309 1.235.476 2.501.498 3.773ZM13.992 12a15.746 15.746 0 0 0-.462-3.319l-.151-.605a1.421 1.421 0 0 0-2.758 0l-.15.605A15.746 15.746 0 0 0 10.007 12h3.984Zm-6.971 7.498A8.958 8.958 0 0 0 12 21a8.958 8.958 0 0 0 4.98-1.502l-1.546-5.41A1.5 1.5 0 0 0 13.99 13H10.01a1.5 1.5 0 0 0-1.443 1.088l-1.545 5.41ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPenCircle);
const Memo = memo(ForwardRef);
export default Memo;
