import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableMagsafe = (
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
    <path d="M8 4V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H15v1.5a.5.5 0 0 1-.5.5H14v7.5a.5.5 0 1 1-1 0V14h-2v7.5a.5.5 0 1 1-1 0V14h-.5a.5.5 0 0 1-.5-.5V12H6.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H8Zm1 0h6V3H9v1Zm5 8h-4v1h4v-1Zm-7-1h10V5H7v6Zm4.5-4h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableMagsafe);
const Memo = memo(ForwardRef);
export default Memo;
