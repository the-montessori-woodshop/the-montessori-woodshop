import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPreviousAlt = (
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
    <path d="M10 13.503V9a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0v-1.497Zm1-4.07 2.228-1.857A2.3 2.3 0 0 1 17 9.343v5.314a2.3 2.3 0 0 1-3.772 1.767L11 14.568V15a2 2 0 1 1-4 0V9a2 2 0 1 1 4 0v.432Zm0 1.301v2.532l2.868 2.39a1.3 1.3 0 0 0 2.132-1V9.344a1.3 1.3 0 0 0-2.132-.999L11 10.734ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPreviousAlt);
const Memo = memo(ForwardRef);
export default Memo;
