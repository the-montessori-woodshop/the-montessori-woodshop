import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRulerV = (
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
    <path d="M14.915 20H11.5a.5.5 0 1 1 0-1H15v-2h-2.5a.5.5 0 1 1 0-1H15v-2h-3.5a.5.5 0 1 1 0-1H15v-2h-2.5a.5.5 0 1 1 0-1H15V8h-3.5a.5.5 0 1 1 0-1H15V5h-2.5a.5.5 0 1 1 0-1h2.415A1.5 1.5 0 0 0 13.5 3h-3A1.5 1.5 0 0 0 9 4.5v15a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.415-1ZM13.5 2A2.5 2.5 0 0 1 16 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 19.5v-15A2.5 2.5 0 0 1 10.5 2h3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRulerV);
const Memo = memo(ForwardRef);
export default Memo;
