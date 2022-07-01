import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVideoCamera = (
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
    <path d="M15 14.567A2.5 2.5 0 0 1 12.5 17h-7A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7h5.191l-.5-1H6.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .447.276L11.81 7h.691A2.5 2.5 0 0 1 15 9.433l2.228-1.857A2.3 2.3 0 0 1 21 9.343v5.314a2.3 2.3 0 0 1-3.772 1.767l-2.229-1.857Zm0-1.301 2.868 2.39a1.3 1.3 0 0 0 2.132-1V9.344a1.3 1.3 0 0 0-2.132-.999L15 10.734v2.532ZM14 14.5v-5A1.5 1.5 0 0 0 12.5 8h-7A1.5 1.5 0 0 0 4 9.5v5A1.5 1.5 0 0 0 5.5 16h7a1.5 1.5 0 0 0 1.5-1.5ZM5.5 10a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 5a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVideoCamera);
const Memo = memo(ForwardRef);
export default Memo;
