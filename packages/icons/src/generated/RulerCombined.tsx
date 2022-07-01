import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRulerCombined = (
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
    <path d="M10 14h9.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h3A2.5 2.5 0 0 1 10 4.5V14Zm-1.085 6H5.5a.5.5 0 1 1 0-1H9v-2H6.5a.5.5 0 1 1 0-1H9v-2H5.5a.5.5 0 1 1 0-1H9v-2H6.5a.5.5 0 1 1 0-1H9V8H5.5a.5.5 0 0 1 0-1H9V5H6.5a.5.5 0 0 1 0-1h2.415A1.5 1.5 0 0 0 7.5 3h-3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h3a1.5 1.5 0 0 0 1.415-1ZM10 15v4.5c0 .563-.186 1.082-.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H10Zm7 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm0 1v2h2v-2h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRulerCombined);
const Memo = memo(ForwardRef);
export default Memo;
