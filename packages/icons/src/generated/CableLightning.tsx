import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableLightning = (
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
    <path d="M16 9h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H14v3.5a.5.5 0 1 1-1 0V18h-2v3.5a.5.5 0 1 1-1 0V18H7.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H8V3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5V9Zm-1 0V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V9h6Zm1 8v-7H8v7h8ZM10.5 5a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableLightning);
const Memo = memo(ForwardRef);
export default Memo;
