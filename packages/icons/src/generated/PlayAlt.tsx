import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlayAlt = (
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
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8 8.818a1.8 1.8 0 0 1 2.739-1.536l5.486 3.353a1.6 1.6 0 0 1 0 2.73l-5.486 3.353A1.8 1.8 0 0 1 8 15.182V8.818Zm1 0v6.364a.8.8 0 0 0 1.217.683l5.486-3.353a.6.6 0 0 0 0-1.024l-5.486-3.353A.8.8 0 0 0 9 8.818Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPlayAlt);
const Memo = memo(ForwardRef);
export default Memo;
