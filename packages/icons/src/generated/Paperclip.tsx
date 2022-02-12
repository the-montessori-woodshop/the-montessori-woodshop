import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPaperclip = (
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
    <path d="M17.146 11.147a.5.5 0 1 1 .708.706l-5.944 5.963a4.045 4.045 0 1 1-5.728-5.714l6.258-6.225a2.982 2.982 0 0 1 4.21.006 2.976 2.976 0 0 1 .001 4.207l-6.356 6.36a1.925 1.925 0 0 1-2.723 0 1.93 1.93 0 0 1-.005-2.725l4.562-4.593a.5.5 0 1 1 .71.704L8.277 14.43a.93.93 0 0 0 .002 1.314.925.925 0 0 0 1.309 0l6.356-6.36a1.976 1.976 0 0 0 0-2.793 1.982 1.982 0 0 0-2.8-.004l-6.25 6.216a3.045 3.045 0 1 0 4.307 4.308l5.945-5.963Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPaperclip);
const Memo = memo(ForwardRef);
export default Memo;
