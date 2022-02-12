import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserCircle = (
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
    <path d="m18.535 16.512-3.457-1.571a5 5 0 1 0-6.155 0l-3.457 1.57c-.33.15-.618.368-.85.635a9 9 0 1 1 14.769 0 2.498 2.498 0 0 0-.85-.634M8 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 10a8.98 8.98 0 0 1-6.748-3.044c.154-.231.37-.417.628-.533l4.082-1.856A4.983 4.983 0 0 0 12 16c.726 0 1.416-.155 2.039-.433l4.082 1.856c.257.116.473.302.627.533A8.978 8.978 0 0 1 12 21m0-19C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserCircle);
const Memo = memo(ForwardRef);
export default Memo;
