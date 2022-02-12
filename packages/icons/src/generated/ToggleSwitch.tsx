import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgToggleSwitch = (
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
    <path d="M14 6.516a3.5 3.5 0 0 0 7 0 3.496 3.496 0 0 0-3.492-3.508A3.51 3.51 0 0 0 14 6.516Zm.684-3.514L6.5 3.008A3.508 3.508 0 0 0 3 6.516a3.5 3.5 0 0 0 3.5 3.5h8.171A4.491 4.491 0 0 1 13 6.516a4.5 4.5 0 0 1 1.684-3.514Zm2.91-.993A4.494 4.494 0 0 1 22 6.5c0 2.5-2.015 4.516-4.5 4.516h-11a4.5 4.5 0 0 1-4.5-4.5 4.508 4.508 0 0 1 4.5-4.508L17.5 2c.032 0 .063.003.094.009Zm-11.188 11A.503.503 0 0 1 6.5 13l11 .008a4.508 4.508 0 0 1 4.5 4.508 4.5 4.5 0 0 1-4.5 4.5h-11A4.503 4.503 0 0 1 2 17.5c0-2.45 1.96-4.441 4.406-4.491ZM10 17.516a3.51 3.51 0 0 0-3.508-3.508A3.496 3.496 0 0 0 3 17.516a3.5 3.5 0 0 0 7 0Zm-.684-3.514A4.5 4.5 0 0 1 11 17.516a4.491 4.491 0 0 1-1.671 3.5H17.5a3.5 3.5 0 0 0 3.5-3.5 3.508 3.508 0 0 0-3.501-3.508l-8.183-.006Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgToggleSwitch);
const Memo = memo(ForwardRef);
export default Memo;
