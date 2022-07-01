import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCrop = (
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
    <path d="M5 2.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM16.5 18a.5.5 0 1 1 0 1h-9A2.5 2.5 0 0 1 5 16.5v-9a.5.5 0 0 1 1 0v9A1.5 1.5 0 0 0 7.5 18h9Zm4 1a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1ZM2.5 6a.5.5 0 0 1 0-1h14A2.5 2.5 0 0 1 19 7.5v14a.5.5 0 1 1-1 0v-14A1.5 1.5 0 0 0 16.5 6h-14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCrop);
const Memo = memo(ForwardRef);
export default Memo;
