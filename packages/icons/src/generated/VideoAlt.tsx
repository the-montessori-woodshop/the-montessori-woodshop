import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVideoAlt = (
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
    <path d="M7.648 16H5.5A2.5 2.5 0 0 1 3 13.5v-5A2.5 2.5 0 0 1 5.5 6h7A2.5 2.5 0 0 1 15 8.433l2.228-1.857A2.3 2.3 0 0 1 21 8.343v5.314a2.3 2.3 0 0 1-3.772 1.767l-2.229-1.857A2.5 2.5 0 0 1 12.5 16h-2.148l2.473 2.12a.5.5 0 0 1-.65.76L9 16.159l-3.175 2.72a.5.5 0 1 1-.65-.759L7.648 16ZM14 12.503V8.5A1.5 1.5 0 0 0 12.5 7h-7A1.5 1.5 0 0 0 4 8.5v5A1.5 1.5 0 0 0 5.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-.997Zm1-2.769v2.532l2.868 2.39a1.3 1.3 0 0 0 2.132-1V8.344a1.3 1.3 0 0 0-2.132-.999L15 9.734Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVideoAlt);
const Memo = memo(ForwardRef);
export default Memo;
