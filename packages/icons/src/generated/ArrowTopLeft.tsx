import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrowTopLeft = (
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
    <path d="M7 7.707V12.5a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1H7.707l10.147 10.146a.5.5 0 0 1-.708.708L7 7.707Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowTopLeft);
const Memo = memo(ForwardRef);
export default Memo;
