import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandAlt = (
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
    <path d="M20 19.293V16.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1h2.793l-5.147-5.146a.5.5 0 0 1 .708-.708L20 19.293ZM4 4.707V7.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H4.707l5.147 5.146a.5.5 0 0 1-.708.708L4 4.707ZM4.707 20H7.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.793l5.146-5.147a.5.5 0 0 1 .708.708L4.707 20ZM19.293 4H16.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5v4.031a.5.5 0 1 1-1 0V4.707l-5.146 5.147a.5.5 0 0 1-.708-.708L19.293 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpandAlt);
const Memo = memo(ForwardRef);
export default Memo;
