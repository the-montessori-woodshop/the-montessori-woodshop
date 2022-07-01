import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVideo = (
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
    <path d="M14 13.503V9.5A1.5 1.5 0 0 0 12.5 8h-7A1.5 1.5 0 0 0 4 9.5v5A1.5 1.5 0 0 0 5.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-.997Zm1-4.07 2.228-1.857A2.3 2.3 0 0 1 21 9.343v5.314a2.3 2.3 0 0 1-3.772 1.767l-2.229-1.857A2.5 2.5 0 0 1 12.5 17h-7A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7h7A2.5 2.5 0 0 1 15 9.433Zm0 1.301v2.532l2.868 2.39a1.3 1.3 0 0 0 2.132-1V9.344a1.3 1.3 0 0 0-2.132-.999L15 10.734Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVideo);
const Memo = memo(ForwardRef);
export default Memo;
