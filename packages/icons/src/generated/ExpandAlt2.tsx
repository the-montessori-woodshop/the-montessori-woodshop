import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExpandAlt2 = (
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
    <path d="m13 21.293 2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L12 21.293V15.5a.5.5 0 1 1 1 0v5.793ZM3.707 13l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 12H9.5a.5.5 0 1 1 0 1H3.707Zm17.586-1-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L21.293 13H15.5a.5.5 0 1 1 0-1h5.793ZM13 3.707V9.5a.5.5 0 1 1-1 0V3.707L9.854 5.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 3.707Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExpandAlt2);
const Memo = memo(ForwardRef);
export default Memo;
