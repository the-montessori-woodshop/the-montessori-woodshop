import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStickyNotescopy = (
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
    <path d="M7 10V7.5a.5.5 0 0 1 .5-.5H10V3.5A1.5 1.5 0 0 0 8.5 2h-5A1.5 1.5 0 0 0 2 3.5v5A1.5 1.5 0 0 0 3.5 10H7Zm4-2.528a.49.49 0 0 1-.146.382l-3 3a.49.49 0 0 1-.382.146H3.5A2.5 2.5 0 0 1 1 8.5v-5A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v3.972ZM8 8v1.293L9.293 8H8Zm7.497-7H20.5A2.5 2.5 0 0 1 23 3.5v5a2.5 2.5 0 0 1-2.5 2.5h-5.01a2.5 2.5 0 0 1-2.5-2.5l.007-5.004A2.5 2.5 0 0 1 15.497 1Zm0 1a1.5 1.5 0 0 0-1.5 1.498l-.008 5A1.5 1.5 0 0 0 15.49 10H20.5A1.5 1.5 0 0 0 22 8.5v-5A1.5 1.5 0 0 0 20.5 2h-5.003Zm0 11H20.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5.01a2.5 2.5 0 0 1-2.5-2.5l.007-5.004a2.5 2.5 0 0 1 2.5-2.496Zm0 1a1.5 1.5 0 0 0-1.5 1.498l-.008 5A1.5 1.5 0 0 0 15.49 22H20.5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5.003Zm-12-1H8.5a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 8.5 23H3.49a2.5 2.5 0 0 1-2.5-2.5l.007-5.004A2.5 2.5 0 0 1 3.497 13Zm0 1a1.5 1.5 0 0 0-1.5 1.498l-.008 5A1.5 1.5 0 0 0 3.49 22H8.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 14H3.497ZM3.5 5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5Zm0 2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm12-2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm0 10a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm-12 0a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgStickyNotescopy);
const Memo = memo(ForwardRef);
export default Memo;
