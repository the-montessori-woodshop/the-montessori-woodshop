import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImageCircle = (
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
    <path d="M3.32 14.385a9.004 9.004 0 0 0 16.475 2.117L16.5 13.207l-2.646 2.647a.5.5 0 0 1-.708 0L7.5 10.207l-4.146 4.147a.506.506 0 0 1-.035.03Zm-.24-1.173 4.066-4.066a.5.5 0 0 1 .708 0l5.646 5.647 2.646-2.647a.5.5 0 0 1 .708 0l3.414 3.415a9 9 0 1 0-17.187-2.349ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm3-16h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1v2h2V7h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgImageCircle);
const Memo = memo(ForwardRef);
export default Memo;
