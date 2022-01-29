import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTransformRight = (
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
    <path d="M3.094 17.792A.499.499 0 0 1 3 17.473V15.5a.5.5 0 1 1 1 0v.04l5.061-9.28A.5.5 0 0 1 9.5 6h11a.5.5 0 0 1 .439.74l-5.995 10.99a.5.5 0 0 1-.444.27h-11a.494.494 0 0 1-.406-.208ZM15 15.54 19.658 7H15v.5a.5.5 0 1 1-1 0V7H9.797L4.342 17H14v-1.5a.5.5 0 1 1 1 0v.04ZM4.5 7a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0A1.5 1.5 0 0 1 4.5 6a.5.5 0 0 1 0 1ZM4 9.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 1 0Zm0 3v1a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0ZM6.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1ZM15 9.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0Zm0 3v1a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTransformRight);
const Memo = memo(ForwardRef);
export default Memo;
