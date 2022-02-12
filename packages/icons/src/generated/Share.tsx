import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShare = (
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
    <path d="M6.589 18.075A3.5 3.5 0 0 1 10.041 14H12.5a.5.5 0 0 1 .5.5v3.227a.32.32 0 0 0 .527.244l7.036-5.98a1.3 1.3 0 0 0 0-1.982l-7.036-5.98a.32.32 0 0 0-.527.244V7.5a.5.5 0 0 1-.5.5h-3A6.5 6.5 0 0 0 3 14.5c0 2.85 1.266 4.597 3.883 5.339l-.294-1.764ZM10.041 15a2.5 2.5 0 0 0-2.466 2.911l.418 2.507a.5.5 0 0 1-.59.572C3.837 20.282 2 18.078 2 14.5A7.5 7.5 0 0 1 9.5 7H12V4.273a1.32 1.32 0 0 1 2.175-1.006l7.035 5.98a2.3 2.3 0 0 1 0 3.505l-7.035 5.98A1.32 1.32 0 0 1 12 17.728V15h-1.959Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShare);
const Memo = memo(ForwardRef);
export default Memo;
