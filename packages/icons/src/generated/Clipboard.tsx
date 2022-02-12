import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClipboard = (
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
    <g fill="#000" fillRule="nonzero">
      <path d="M10 4.5a.5.5 0 0 1-1 0A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM7.5 4a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 6 6.5v12A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 16.5 5a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 19 6.5v12a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5v-12A2.5 2.5 0 0 1 7.5 4Z" />
      <path d="M8.5 10a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgClipboard);
const Memo = memo(ForwardRef);
export default Memo;
