import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIndentRightAlt = (
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
    <path d="M20.293 13H16.5a.5.5 0 1 1 0-1h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L20.293 13ZM2.5 7a.5.5 0 0 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 4a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 4a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 4a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5ZM13 3.5a.5.5 0 1 1 1 0v17a.5.5 0 1 1-1 0v-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIndentRightAlt);
const Memo = memo(ForwardRef);
export default Memo;
